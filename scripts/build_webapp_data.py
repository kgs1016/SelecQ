# -*- coding: utf-8 -*-
"""웹앱용 데이터 번들 생성: tags_final + questions_index + kice_math_index -> webapp/data.js

문항 이미지도 webapp/q/ 로 복사해 함께 게재한다.
(2026-07-19 사업자 결정: 수익화 보류 상태로 이미지 게재, KICE 이용 문의 병행.
 문항마다 출처(KICE) 표기 유지. KICE가 불허하면 build 시 이미지 제외로 원복 가능.)
"""
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
META = ROOT / "data" / "meta"

EXAM_LABEL = {"csat": "수능", "mock06": "6월 모의평가", "mock09": "9월 모의평가"}
BOARD_ID = {"kice_csat": "1500234", "kice_mock": "1500236"}


def main():
    tags = json.loads((META / "tags_final.json").read_text(encoding="utf-8"))
    idx = {f"{r['exam_id']}/{r['subject']}/q{r['question_no']:02d}": r
           for r in json.loads((META / "questions_index.json").read_text(encoding="utf-8"))}
    board = json.loads((META / "kice_math_index.json").read_text(encoding="utf-8"))
    # 난이도(메가스터디 정답률 기반, build_difficulty.py 생성). 없으면 빈 dict.
    diff_path = META / "difficulty.json"
    difficulty = json.loads(diff_path.read_text(encoding="utf-8")) if diff_path.exists() else {}

    # exam_id -> 원본 게시물/PDF 링크
    exam_links = {}
    for r in board:
        year = r["academic_year"]
        joined = " ".join(r["columns"])
        if r["source_name"] == "kice_csat":
            exam = "csat"
        elif "6월" in joined:
            exam = "mock06"
        elif "9월" in joined:
            exam = "mock09"
        else:
            continue
        post_url = (f"https://www.suneung.re.kr/boardCnts/view.do?boardID={BOARD_ID[r['source_name']]}"
                    f"&boardSeq={r['post_id']}&lev=0&m=0403&s=suneung")
        qpdf = next((f["file_url"] for f in r["files"] if "문제" in f["file_name"]), "")
        apdf = next((f["file_url"] for f in r["files"] if "정답" in f["file_name"]), "")
        exam_links[f"{year}_{exam}"] = {"post": post_url, "qpdf": qpdf, "apdf": apdf}

    qdir = ROOT / "webapp" / "q"
    qdir.mkdir(parents=True, exist_ok=True)

    questions = []
    for t in tags:
        rec = idx.get(t["key"])
        if not rec:
            continue
        # 문항 이미지 복사 (변경된 경우만)
        src_img = ROOT / rec["image"]
        img_name = f"{t['exam_id']}_{t['subject']}_q{t['question_no']:02d}.png"
        dst_img = qdir / img_name
        if src_img.exists() and (not dst_img.exists() or src_img.stat().st_mtime > dst_img.stat().st_mtime):
            shutil.copy2(src_img, dst_img)
        links = exam_links.get(t["exam_id"], {})
        questions.append({
            "img": f"q/{img_name}",
            "key": t["key"],
            "year": rec["academic_year"],
            "exam": rec["exam_type"],
            "examLabel": f"{rec['academic_year']}학년도 {EXAM_LABEL[rec['exam_type']]}",
            "subject": t["subject"],
            "qno": t["question_no"],
            "type": t["type"],
            "unit": t["unit"],
            "points": rec["points"],
            "answer": rec["answer"],
            "difficulty": (difficulty.get(t["key"]) or {}).get("level"),
            "correctRate": (difficulty.get(t["key"]) or {}).get("rate"),
            "reviewStatus": t["review_status"],
            "postUrl": links.get("post", ""),
            "pdfUrl": links.get("qpdf", ""),
        })

    tax = json.loads((META / "taxonomy.json").read_text(encoding="utf-8"))
    out = ROOT / "webapp" / "data.js"
    out.parent.mkdir(exist_ok=True)
    out.write_text(
        "window.APP_DATA = " + json.dumps(
            {"questions": questions, "taxonomy": tax["subjects"]}, ensure_ascii=False) + ";\n",
        encoding="utf-8")
    print(f"{len(questions)} questions -> {out}")
    missing = [q["key"] for q in questions if not q["postUrl"]]
    if missing:
        print(f"WARN 원본 링크 없는 문항: {len(missing)}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
