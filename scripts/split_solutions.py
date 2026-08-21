# -*- coding: utf-8 -*-
r"""solutions.js 를 색인 · 무료 정적파일 · DB 시드로 분리한다.

    python scripts/split_solutions.py

왜 나누나
    지금은 해설 608개(754KB)가 정적 JS 한 덩어리로 **모든 방문자에게** 내려간다.
    검색으로 들어온 사람도 안 볼 해설을 전부 받고, 유료로 팔 해설까지 개발자도구로
    읽힌다. 그래서 셋으로 가른다.

    1) webapp/sol_index.js        key → "free"|"paid".  비밀이 아니고 작다(수 KB).
                                  자물쇠 표시·개수 세기·해설 보유 판정에 쓴다.
    2) webapp/sol/free/<k>.json   무료('하' 난이도) 해설. 어차피 공개라 지킬 게 없고,
                                  정적이라 서비스워커가 캐시해 오프라인에서도 열린다.
    3) supabase/solutions_seed.ndjson
                                  608개 전부(tier 포함). DB가 단일 진실 원본이고,
                                  유료분은 RLS 로 구독자에게만 나간다. 무료분도 넣어
                                  두는 이유는 정적 파일이 없을 때의 대비책.

경계선
    난이도 '하' = 무료. 혼자 풀 수 있는 문제의 해설은 값이 낮고, 무료분이 품질을
    증명하는 견본 역할을 한다. 막히는 '중·상'이 파는 물건이다.

주의
    ndjson 은 webapp/ 밖(supabase/)에 둔다. 배포 대상은 webapp/ 뿐이라
    유료 해설 본문이 실수로 공개되지 않는다.
"""
import io
import json
import os
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "webapp"
sys.stdout.reconfigure(encoding="utf-8")

FREE_LEVELS = {"하"}          # 무료로 여는 난이도
ENTRY = re.compile(
    r'"([^"]+)":\s*\{\s*answer:\s*(-?\d+)\s*,\s*html:\s*String\.raw`(.*?)`\s*\}',
    re.S)


def load_questions():
    t = (WEB / "data.js").read_text(encoding="utf-8")
    d = json.loads(t[t.index("{"): t.rindex("}") + 1])
    return {q["key"]: q for q in d["questions"]}


def safe_name(key):
    """'2022_csat/common/q22' → '2022_csat_common_q22' (문항 이미지와 같은 규칙)."""
    return key.replace("/", "_")


def main():
    qs = load_questions()
    src = (WEB / "solutions.js").read_text(encoding="utf-8")
    entries = ENTRY.findall(src)
    if not entries:
        print("해설을 하나도 못 읽었다 — solutions.js 형식을 확인할 것"); sys.exit(1)

    free_dir = WEB / "sol" / "free"
    if free_dir.exists():
        shutil.rmtree(free_dir)       # 지난 실행의 잔재가 남지 않게 매번 새로 만든다
    free_dir.mkdir(parents=True)

    index, rows, names = {}, [], {}
    n_free = n_paid = 0
    missing_q = []

    for key, answer, html in entries:
        q = qs.get(key)
        if q is None:
            missing_q.append(key)
        level = (q or {}).get("difficulty")
        tier = "free" if level in FREE_LEVELS else "paid"

        name = safe_name(key)
        if name in names:
            print("파일명 충돌: %s ↔ %s" % (key, names[name])); sys.exit(1)
        names[name] = key

        index[key] = tier
        rows.append({"key": key, "tier": tier,
                     "answer": int(answer), "html": html})

        if tier == "free":
            (free_dir / (name + ".json")).write_text(
                json.dumps({"answer": int(answer), "html": html},
                           ensure_ascii=False),
                encoding="utf-8")
            n_free += 1
        else:
            n_paid += 1

    # 1) 색인 — 키 순서를 고정해 재실행 시 diff 가 흔들리지 않게 한다
    idx_path = WEB / "sol_index.js"
    idx_body = json.dumps({k: index[k] for k in sorted(index)},
                          ensure_ascii=False, separators=(",", ":"))
    idx_path.write_text(
        "/* 자동 생성 — scripts/split_solutions.py. 직접 고치지 말 것.\n"
        " * key → \"free\"(정적 sol/free/*.json) | \"paid\"(Supabase, 구독자만)\n"
        " * 비밀이 아니다. 해설 보유 여부·자물쇠 표시·개수 세기에 쓴다. */\n"
        "window.SOL_INDEX = " + idx_body + ";\n",
        encoding="utf-8")

    # 2) DB 시드 (webapp 밖 — 배포되지 않는다)
    seed = ROOT / "supabase" / "solutions_seed.ndjson"
    seed.parent.mkdir(exist_ok=True)
    with io.open(seed, "w", encoding="utf-8", newline="\n") as f:
        for r in sorted(rows, key=lambda r: r["key"]):
            f.write(json.dumps(r, ensure_ascii=False) + "\n")

    src_kb = (WEB / "solutions.js").stat().st_size / 1024
    idx_kb = idx_path.stat().st_size / 1024
    free_kb = sum(p.stat().st_size for p in free_dir.glob("*.json")) / 1024

    print("해설 %d개 분리" % len(rows))
    print("  무료('하')      %3d개 → webapp/sol/free/*.json   (%.0f KB)" % (n_free, free_kb))
    print("  유료('중'·'상') %3d개 → supabase/solutions_seed.ndjson" % n_paid)
    print("  색인            %d항목 → webapp/sol_index.js      (%.1f KB)" % (len(index), idx_kb))
    print()
    print("첫 로드 전송량: %.0f KB → %.1f KB (색인만)" % (src_kb, idx_kb))
    if missing_q:
        print("\n⚠️ data.js 에 없는 key %d개 (난이도 판정 불가 → 유료로 분류):" % len(missing_q))
        for k in missing_q[:5]:
            print("   ", k)


if __name__ == "__main__":
    main()
