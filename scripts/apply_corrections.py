# -*- coding: utf-8 -*-
"""검수 UI에서 내보낸 review_corrections.json을 tags_final.json에 반영.

사용: python apply_corrections.py <다운로드된 review_corrections.json 경로>
반영 후 build_review_ui.py를 다시 실행하면 검수 UI에도 반영된다.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "data" / "meta"

UNIT_OF = {}
tax = json.loads((META / "taxonomy.json").read_text(encoding="utf-8"))
for subj, sdata in tax["subjects"].items():
    for unit in sdata["units"]:
        for t in unit["types"]:
            UNIT_OF[t["code"]] = unit["code"]


def main():
    if len(sys.argv) < 2:
        # 기본: 다운로드 폴더의 review_corrections*.json 중 최신 파일
        # (검수 기록은 브라우저에 누적 저장되므로 최신 내보내기가 전체본)
        cands = sorted((Path.home() / "Downloads").glob("review_corrections*.json"),
                       key=lambda p: p.stat().st_mtime)
        if not cands:
            print("사용법: python apply_corrections.py <review_corrections.json>")
            sys.exit(1)
        path = cands[-1]
        print(f"최신 검수 파일 사용: {path.name}")
    else:
        path = Path(sys.argv[1])
    corrections = json.loads(path.read_text(encoding="utf-8"))
    tags = json.loads((META / "tags_final.json").read_text(encoding="utf-8"))
    n_changed = n_confirmed = 0
    for t in tags:
        c = corrections.get(t["key"])
        if not c:
            continue
        if c["type"] != t["type"]:
            t["type"] = c["type"]
            t["unit"] = UNIT_OF.get(c["type"])
            n_changed += 1
        t["review_status"] = "human_confirmed"
        t["reviewed_at"] = c.get("reviewed_at")
        n_confirmed += 1
    (META / "tags_final.json").write_text(json.dumps(tags, ensure_ascii=False, indent=1), encoding="utf-8")
    remaining = sum(1 for t in tags if t["review_status"] not in ("human_confirmed",))
    print(f"검수 반영: {n_confirmed}건 (유형 수정 {n_changed}건) / 미검수 잔여: {remaining}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
