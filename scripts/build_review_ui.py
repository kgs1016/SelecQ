# -*- coding: utf-8 -*-
"""검수용 데이터 JS 생성: tags_final.json + taxonomy.json + questions_index.json -> review_data.js
(review.html이 file:// 로 열려도 동작하도록 JSON을 JS 전역변수로 내보냄)"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "data" / "meta"


def main():
    tags = json.loads((META / "tags_final.json").read_text(encoding="utf-8"))
    tax = json.loads((META / "taxonomy.json").read_text(encoding="utf-8"))
    idx = json.loads((META / "questions_index.json").read_text(encoding="utf-8"))
    img = {f"{r['exam_id']}/{r['subject']}/q{r['question_no']:02d}": r["image"] for r in idx}
    ans = {f"{r['exam_id']}/{r['subject']}/q{r['question_no']:02d}": {"answer": r["answer"], "points": r["points"]} for r in idx}
    for t in tags:
        t["image"] = img.get(t["key"], "")
        t.update(ans.get(t["key"], {}))
    js = (
        "window.TAGS = " + json.dumps(tags, ensure_ascii=False) + ";\n"
        "window.TAXONOMY = " + json.dumps(tax["subjects"], ensure_ascii=False) + ";\n"
    )
    dest = ROOT / "review_data.js"
    dest.write_text(js, encoding="utf-8")
    print(f"{len(tags)} records -> {dest}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
