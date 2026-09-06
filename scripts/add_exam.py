# -*- coding: utf-8 -*-
r"""회차 하나를 증분으로 추가한다 (기존 회차 산출물은 건드리지 않음).

    python scripts/add_exam.py 2027_mock09 --post 5096542 \
        --qseq 380e084955fddafc34860091b653685f --aseq 4261f4b4b9f510e5468295e6e4db0ec6 \
        --date 2026-09-05

전제: data/raw/kice_<exam>_math_question.pdf, kice_<exam>_math_answer.pdf 가 있어야 한다.

하는 일 (전부 exam_id 항목만 교체·추가):
  1) 정답표 파싱      → data/meta/answers.json
  2) 문항 크롭·인덱스 → data/questions/<exam>/*.png, data/meta/questions_index.json
  3) 문항 텍스트      → data/meta/question_texts.json
  4) 키워드 자동 태깅 → data/meta/tags_auto.json, tags_final.json (기존 키는 덮어쓰지 않음)
  5) 평가원 게시물 메타 → kice_math_downloads.json, kice_math_index.json
  6) 문항→페이지 인덱스 → pdf_page_index.json

이후 수동:  유형 검수(tags_final) → build_webapp_data.py → build_sitemap.py
기존 전량 재생성 스크립트(extract_questions.py 등)는 data/raw 에 16개 PDF 가
모두 있어야 돌아가므로, 새 기기에서 회차 하나만 얹을 때는 이 스크립트를 쓴다.
"""
import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import fitz

sys.path.insert(0, str(Path(__file__).resolve().parent))
import extract_questions as eq          # noqa: E402
import parse_answers as pa              # noqa: E402
import auto_tag as at                   # noqa: E402
import pdf_page_index as ppi            # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
META = ROOT / "data" / "meta"
QDIR = ROOT / "data" / "questions"

BOARD_URL = "https://www.suneung.re.kr/boardCnts/list.do?type=default&page=1&boardID={bid}&m=0403&s=suneung"
FILE_URL = "https://www.suneung.re.kr/boardCnts/fileDown.do?fileSeq={seq}"
BOARD_ID = {"kice_csat": "1500234", "kice_mock": "1500236"}
MONTH = {"mock06": "6월", "mock09": "9월", "csat": ""}
DL_RIGHTS = ("KICE 저작권 표기(ALL RIGHTS RESERVED), 공공누리 미표기, 재배포 불가 전제, "
             "robots 전체 Disallow(저빈도 수동 수집)")


def now():
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def load(name, default):
    p = META / name
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else default


def save(name, obj, indent=1):
    (META / name).write_text(json.dumps(obj, ensure_ascii=False, indent=indent), encoding="utf-8")


def replace_exam(records, exam_id, new):
    """리스트형 메타에서 exam_id 항목을 제거하고 new 를 붙인다."""
    kept = [r for r in records if r.get("exam_id") != exam_id]
    return kept + new


def step_answers(exam_id, year, exam, src_url):
    pdf = RAW / f"kice_{exam_id}_math_answer.pdf"
    records = pa.parse_answer_pdf(pdf)
    problems = pa.validate(exam_id, records)
    if problems:
        sys.exit(f"정답표 검증 실패: {problems}")
    for r in records:
        r.update({"exam_id": exam_id, "academic_year": year, "exam_type": exam,
                  "source_name": "kice_csat" if exam == "csat" else "kice_mock",
                  "source_url": src_url, "fetched_at": now(), "rights_status": pa.RIGHTS})
    answers = replace_exam(load("answers.json", []), exam_id, records)
    save("answers.json", answers)
    print(f"[1] 정답 {len(records)}개 (배점 검산 통과) → answers.json ({len(answers)})")
    return {(r["subject"], r["question_no"]): r for r in records}


def step_questions(exam_id, year, exam, ans_map, src_url):
    pdf = RAW / f"kice_{exam_id}_math_question.pdf"
    doc = fitz.open(pdf)
    items = eq.build_segments(doc, eq.assign_subjects(eq.find_markers(doc)))
    outdir = QDIR / exam_id
    outdir.mkdir(parents=True, exist_ok=True)
    new, mismatch, missing = [], [], 0
    for item in items:
        name = f"{item['subject']}_q{item['qno']:02d}.png"
        text = eq.render_question(doc, item, outdir / name)
        pts = eq.extract_points(text)
        a = ans_map.get((item["subject"], item["qno"]), {})
        if pts is None:
            missing += 1
        elif a.get("points") is not None and pts != a["points"]:
            mismatch.append((item["subject"], item["qno"], pts, a["points"]))
        new.append({
            "exam_id": exam_id, "academic_year": year, "exam_type": exam,
            "subject": item["subject"], "question_no": item["qno"],
            "image": str((outdir / name).relative_to(ROOT)).replace("\\", "/"),
            "segments": item["segments"], "points_marker": pts,
            "answer": a.get("answer"), "points": a.get("points"),
            "source_name": "kice", "source_url": src_url,
            "fetched_at": now(), "rights_status": eq.RIGHTS,
        })
    if len(new) != 46 or mismatch:
        print(f"    !! 문항 수 {len(new)}, 배점 불일치 {mismatch}")
        sys.exit("문항 추출 검증 실패")
    index = replace_exam(load("questions_index.json", []), exam_id, new)
    save("questions_index.json", index)
    print(f"[2] 문항 {len(new)}개 크롭, 배점 마커 대조 일치 (마커 없음 {missing}) → questions_index.json ({len(index)})")

    # 3) 텍스트
    texts = load("question_texts.json", {})
    for rec in new:
        parts = []
        for pi, col, y0, y1 in rec["segments"]:
            page = doc[pi]
            parts.append(page.get_text(clip=eq.seg_rect(page, col, y0, y1)))
        key = f"{exam_id}/{rec['subject']}/q{rec['question_no']:02d}"
        texts[key] = re.sub(r"\s+", " ", "\n".join(parts)).strip()
    save("question_texts.json", texts)
    print(f"[3] 문항 텍스트 → question_texts.json ({len(texts)})")
    return new, texts


def step_tags(exam_id, new, texts):
    at.load_units()
    auto_new, final_new = [], []
    conf_stat = {}
    for rec in new:
        key = f"{exam_id}/{rec['subject']}/q{rec['question_no']:02d}"
        type_code, unit, conf, ev = at.classify(rec["subject"], rec["question_no"], texts[key])
        conf_stat[conf] = conf_stat.get(conf, 0) + 1
        auto_new.append({
            "key": key, "exam_id": exam_id, "subject": rec["subject"],
            "question_no": rec["question_no"], "type": type_code, "unit": unit,
            "confidence": conf, "evidence": ev, "method": "keyword_rules_v1",
            "needs_review": conf != "high",
        })
        final_new.append({
            "key": key, "exam_id": exam_id, "subject": rec["subject"],
            "question_no": rec["question_no"], "type": type_code, "unit": unit,
            "method": "keyword_rules",
            "review_status": "auto_high" if conf == "high" else "needs_review",
        })
    save("tags_auto.json", replace_exam(load("tags_auto.json", []), exam_id, auto_new))
    final = load("tags_final.json", [])
    have = {t["key"] for t in final}
    added = [t for t in final_new if t["key"] not in have]
    final.extend(added)
    save("tags_final.json", final)
    print(f"[4] 자동 태깅 {conf_stat} → tags_final.json 에 {len(added)}개 추가 (기존 {len(final) - len(added)} 유지)")


def step_board(exam_id, year, exam, post, qseq, aseq, date):
    src = "kice_csat" if exam == "csat" else "kice_mock"
    board_url = BOARD_URL.format(bid=BOARD_ID[src])
    files = [
        {"file_name": "수학영역_문제지.pdf", "file_seq": qseq, "file_url": FILE_URL.format(seq=qseq)},
        {"file_name": "수학영역_정답표.pdf", "file_seq": aseq, "file_url": FILE_URL.format(seq=aseq)},
    ]
    dl = [m for m in load("kice_math_downloads.json", []) if exam_id not in m.get("local_file", "")]
    for kind, f in (("question", files[0]), ("answer", files[1])):
        dl.append({"local_file": f"kice_{exam_id}_math_{kind}.pdf", "file_name": f["file_name"],
                   "file_url": f["file_url"], "post_id": post, "academic_year": year,
                   "source_name": src, "source_url": board_url, "fetched_at": now(),
                   "rights_status": DL_RIGHTS})
    save("kice_math_downloads.json", dl)
    idx = [r for r in load("kice_math_index.json", []) if r.get("post_id") != post]
    cols = [post, str(year), MONTH[exam], "수학", "문제 및 정답", date, "", ""]
    idx.append({"source_name": src, "board_label": "수능" if exam == "csat" else "모의평가", "academic_year": year,
                "post_id": post, "columns": cols, "files": files, "page": 1,
                "source_url": board_url, "fetched_at": now(), "rights_status": DL_RIGHTS})
    save("kice_math_index.json", idx)
    print(f"[5] 게시물 {post} 메타 → kice_math_downloads.json ({len(dl)}), kice_math_index.json ({len(idx)})")
    return board_url


def step_page_index(exam_id):
    full = load("pdf_page_index.json", {})
    full[exam_id] = ppi.index_one(RAW / f"kice_{exam_id}_math_question.pdf")
    save("pdf_page_index.json", full)
    print("[6] 문항→페이지 인덱스 → pdf_page_index.json: "
          + ", ".join(f"{s} {len(m)}" for s, m in full[exam_id].items()))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("exam_id")
    ap.add_argument("--post", required=True, help="suneung.re.kr boardSeq")
    ap.add_argument("--qseq", required=True, help="문제지 fileSeq")
    ap.add_argument("--aseq", required=True, help="정답표 fileSeq")
    ap.add_argument("--date", required=True, help="게시일 YYYY-MM-DD")
    a = ap.parse_args()
    m = re.fullmatch(r"(\d{4})_(csat|mock06|mock09)", a.exam_id)
    if not m:
        sys.exit("exam_id 형식: 2027_mock09")
    year, exam = int(m.group(1)), m.group(2)
    for kind in ("question", "answer"):
        if not (RAW / f"kice_{a.exam_id}_math_{kind}.pdf").exists():
            sys.exit(f"없음: data/raw/kice_{a.exam_id}_math_{kind}.pdf")

    board_url = step_board(a.exam_id, year, exam, a.post, a.qseq, a.aseq, a.date)
    ans_map = step_answers(a.exam_id, year, exam, FILE_URL.format(seq=a.aseq))
    new, texts = step_questions(a.exam_id, year, exam, ans_map, FILE_URL.format(seq=a.qseq))
    step_tags(a.exam_id, new, texts)
    step_page_index(a.exam_id)
    print("\n다음: 유형 검수 → python scripts/build_webapp_data.py → python scripts/build_sitemap.py")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
