# -*- coding: utf-8 -*-
"""
태깅 결과 병합 -> data/meta/tags_final.json

우선순위 (높은 것이 덮어씀):
1. 키워드 자동분류 (tags_auto.json)
2. AI 이미지 판독 결과 (scratchpad/tagresult_*.json — low confidence 문항)
3. med 샘플 검증 정답 (scratchpad/medsample_result.json — 30건 확정값)

review_status:
- confirmed: 이미지 판독 high / 샘플 검증 완료
- auto_high: 키워드 high (오태깅 가능성 낮음, 빠른 훑기 대상)
- needs_review: 그 외 전부 (정밀 검수 대상)
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "data" / "meta"
SCRATCH = Path(r"C:\Users\1212n\AppData\Local\Temp\claude\C--Users-1212n-Desktop-Project-Business-Problem-Select\8175b793-d69f-44ef-ac38-36392486f990\scratchpad")

UNIT_OF = {}


def load_units():
    tax = json.loads((META / "taxonomy.json").read_text(encoding="utf-8"))
    for subj, sdata in tax["subjects"].items():
        for unit in sdata["units"]:
            for t in unit["types"]:
                UNIT_OF[t["code"]] = unit["code"]


def main():
    load_units()
    auto = {t["key"]: t for t in json.loads((META / "tags_auto.json").read_text(encoding="utf-8"))}

    # 1) 기본: 자동분류
    final = {}
    for key, t in auto.items():
        final[key] = {
            "key": key,
            "exam_id": t["exam_id"],
            "subject": t["subject"],
            "question_no": t["question_no"],
            "type": t["type"],
            "unit": t["unit"],
            "method": "keyword_rules",
            "review_status": "auto_high" if t["confidence"] == "high" else "needs_review",
        }

    # 2) 이미지 판독 (low 배치) 덮어쓰기
    n_img = 0
    for f in sorted(SCRATCH.glob("tagresult_*.json")):
        for r in json.loads(f.read_text(encoding="utf-8")):
            key = r["key"]
            if key not in final:
                print(f"WARN unknown key in {f.name}: {key}")
                continue
            final[key].update({
                "type": r["type"],
                "unit": UNIT_OF.get(r["type"]),
                "method": "ai_image",
                "review_status": "confirmed" if r["confidence"] == "high" else "needs_review",
                "ai_note": r.get("note", ""),
            })
            n_img += 1

    # 3) med 샘플 검증 정답 반영 (확정값)
    n_sample = 0
    ms = SCRATCH / "medsample_result.json"
    if ms.exists():
        for r in json.loads(ms.read_text(encoding="utf-8")):
            key = r["key"]
            if key not in final:
                continue
            final[key].update({
                "type": r["correct_type"],
                "unit": UNIT_OF.get(r["correct_type"]),
                "method": "ai_verified",
                "review_status": "confirmed",
            })
            n_sample += 1

    # 4) 사용자 검수 결과 (최우선 — Downloads의 최신 review_corrections*.json)
    n_human = 0
    cands = sorted((Path.home() / "Downloads").glob("review_corrections*.json"),
                   key=lambda p: p.stat().st_mtime)
    if cands:
        corr = json.loads(cands[-1].read_text(encoding="utf-8"))
        for key, c in corr.items():
            if key not in final:
                continue
            final[key].update({
                "type": c["type"],
                "unit": UNIT_OF.get(c["type"]),
                "method": "human",
                "review_status": "human_confirmed",
                "reviewed_at": c.get("reviewed_at"),
            })
            n_human += 1
        print(f"사용자 검수 반영: {n_human}건 ({cands[-1].name})")

    out = list(final.values())
    dest = META / "tags_final.json"
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")

    # 통계
    from collections import Counter
    st = Counter(r["review_status"] for r in out)
    ty = Counter(r["type"] for r in out if r["type"])
    untyped = sum(1 for r in out if not r["type"])
    print(f"{len(out)} records -> {dest}")
    print(f"이미지 판독 반영: {n_img} / 샘플 검증 반영: {n_sample}")
    print(f"\nreview_status: confirmed={st.get('confirmed',0)}, auto_high={st.get('auto_high',0)}, needs_review={st.get('needs_review',0)}")
    if untyped:
        print(f"WARN 유형 미지정: {untyped}")
    print("\n유형별 문항 수 (상위 정렬):")
    for code, n in ty.most_common():
        print(f"  {code:22s} {n}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
