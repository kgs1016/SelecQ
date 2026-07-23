"""data/meta/solutions/<exam_id>.json 들을 모아 webapp/solutions.js 번들 생성.
   window.APP_SOLUTIONS = { "<key>": {"s": 해설, "c": [개념들]} }
   (개별 배치 파일 *_A/_B/_prob_stat 등이 아니라, 병합본 <exam_id>.json 만 읽는다.)
"""
import json, sys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOLDIR = ROOT / "data" / "meta" / "solutions"

# 병합본만: 파일명이 exam_id 형태(연도_시험).json — 배치파일(_A,_B,_prob_stat 등)은 제외
MERGED = re.compile(r"^\d{4}_(csat|mock06|mock09)\.json$")

def main():
    out = {}
    n_files = 0
    for p in sorted(SOLDIR.glob("*.json")):
        if not MERGED.match(p.name):
            continue
        n_files += 1
        for q in json.loads(p.read_text(encoding="utf-8")):
            if not q.get("solution"):
                continue
            out[q["key"]] = {"s": q["solution"], "c": q.get("concepts", [])}
    dst = ROOT / "webapp" / "solutions.js"
    dst.write_text("window.APP_SOLUTIONS = " + json.dumps(out, ensure_ascii=False) + ";\n",
                   encoding="utf-8")
    print(f"{n_files}개 시험 · {len(out)}개 해설 -> {dst}")

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
