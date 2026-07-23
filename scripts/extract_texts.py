# -*- coding: utf-8 -*-
"""questions_index.json의 세그먼트 좌표로 문항별 PDF 텍스트 추출 -> question_texts.json
(수식 기호는 일부 깨지지만 한글 키워드는 온전 — 유형 자동분류의 입력)"""
import json
import re
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
META = ROOT / "data" / "meta"

COL_SPLIT_RATIO = 0.5
COL_PAD_X = 26


def seg_rect(page, col, y0, y1):
    W = page.rect.width
    half = W * COL_SPLIT_RATIO
    if col == 0:
        return fitz.Rect(COL_PAD_X + 30, y0, half - 4, y1)
    return fitz.Rect(half + 4, y0, W - COL_PAD_X - 30, y1)


def main():
    index = json.loads((META / "questions_index.json").read_text(encoding="utf-8"))
    docs = {}
    out = {}
    for rec in index:
        exam_id = rec["exam_id"]
        pdf_name = f"kice_{rec['academic_year']}_{rec['exam_type']}_math_question.pdf"
        if pdf_name not in docs:
            docs[pdf_name] = fitz.open(RAW / pdf_name)
        doc = docs[pdf_name]
        texts = []
        for pi, col, y0, y1 in rec["segments"]:
            page = doc[pi]
            texts.append(page.get_text(clip=seg_rect(page, col, y0, y1)))
        text = re.sub(r"\s+", " ", "\n".join(texts)).strip()
        key = f"{exam_id}/{rec['subject']}/q{rec['question_no']:02d}"
        out[key] = text
    dest = META / "question_texts.json"
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(out)} question texts -> {dest}")
    # 샘플 출력
    for k in list(out)[:3]:
        print(f"--- {k}: {out[k][:150]}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
