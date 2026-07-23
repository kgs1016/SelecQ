# -*- coding: utf-8 -*-
"""
정답표 PDF(16개) -> 문항별 정답·배점 DB (data/meta/answers.json)

정답표 구조 (2022~2027 현행 체제 공통):
- 공통과목 1~22번, 선택과목(확률과 통계/미적분/기하) 각 23~30번
- 읽기 순서상 (문항번호, 정답, 배점) 삼중조가 반복됨
- 23~30번은 3회씩 등장하며 등장 순서 = 확통, 미적, 기하 (표 헤더 순서)

검증 규칙: 시험당 46문항 (공통 22 + 8×3), 배점 합계 = 100 × 3 (선택별 100점)
"""
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
META = ROOT / "data" / "meta"

CIRCLED = {"①": "1", "②": "2", "③": "3", "④": "4", "⑤": "5"}
ELECTIVES = ["prob_stat", "calculus", "geometry"]  # 확통, 미적, 기하 (표 순서)
RIGHTS = "KICE 정답표에서 추출한 사실 정보(정답·배점). 원문 재배포 아님."


def parse_answer_pdf(path: Path):
    """좌표 기반 파싱: 단어 위치로 행을 재구성하고, 열 밴드(x구간)로 과목을 판정한다.

    표 구조: 5개 열그룹 [공통 1~11 | 공통 12~22 | 확통 23~30 | 미적 23~30 | 기하 23~30]
    각 열그룹은 (번호, 정답, 배점) 3개 셀. 행은 y좌표로, 열그룹은 삼중조의 시작 x좌표로 클러스터링.
    """
    doc = fitz.open(path)
    triples_xy = []  # (x0, y_mid, question_no, answer, points)
    for page in doc:
        words = []
        for w in page.get_text("words"):
            x0, y0, x1, y1, t = w[0], w[1], w[2], w[3], w[4]
            t = t.strip()
            if t in CIRCLED:
                t = CIRCLED[t]
            # 원문자가 다른 문자와 붙어 나오는 경우 처리
            for c, d in CIRCLED.items():
                if c in t:
                    t = t.replace(c, d)
            if re.fullmatch(r"\d{1,3}", t):
                words.append((x0, (y0 + y1) / 2, int(t)))
        # y로 행 그룹핑 (허용오차 4pt)
        words.sort(key=lambda w: (w[1], w[0]))
        rows = []
        for w in words:
            if rows and abs(rows[-1][0][1] - w[1]) < 4:
                rows[-1].append(w)
            else:
                rows.append([w])
        # 각 행에서 x 순서대로 (번호, 정답, 배점) 삼중조 스캔
        for row in rows:
            row.sort(key=lambda w: w[0])
            i = 0
            while i + 2 < len(row):
                n, a, p = row[i], row[i + 1], row[i + 2]
                if 1 <= n[2] <= 30 and p[2] in (2, 3, 4) and 0 <= a[2] <= 999:
                    triples_xy.append((n[0], n[1], n[2], a[2], p[2]))
                    i += 3
                else:
                    i += 1
    if not triples_xy:
        return []
    # 열그룹 클러스터링: 삼중조 시작 x좌표를 간격 기준으로 5개 밴드로
    xs = sorted(set(round(t[0]) for t in triples_xy))
    bands = [[xs[0]]]
    for x in xs[1:]:
        if x - bands[-1][-1] > 30:  # 30pt 이상 벌어지면 새 열그룹
            bands.append([x])
        else:
            bands[-1].append(x)
    def band_of(x):
        for bi, b in enumerate(bands):
            if b[0] - 15 <= x <= b[-1] + 15:
                return bi
        return -1
    records = []
    for x0, y, ni, a, pi in triples_xy:
        bi = band_of(round(x0))
        if ni <= 22:
            subject = "common"
        else:
            # 열그룹 2,3,4 = 확통, 미적, 기하 (밴드 수가 5가 아니면 순서 기반 보정)
            elective_idx = bi - (len(bands) - 3)
            if not (0 <= elective_idx <= 2):
                continue
            subject = ELECTIVES[elective_idx]
        # 중복 제거
        key = (subject, ni)
        if any((r["subject"], r["question_no"]) == key for r in records):
            continue
        records.append({
            "question_no": ni,
            "subject": subject,
            "answer": a,
            "points": pi,
        })
    return records


# 2025 수능 정답표는 텍스트가 벡터 외곽선으로 변환되어 있어 추출 불가.
# 렌더링 이미지에서 수동 전사(2026-07-18, 배점 검산 통과). (번호, 정답, 배점)
MANUAL_FALLBACK = {
    "2025_csat": {
        "common": [(1, 5, 2), (2, 4, 2), (3, 5, 3), (4, 2, 3), (5, 4, 3), (6, 5, 3),
                   (7, 3, 3), (8, 1, 3), (9, 4, 4), (10, 3, 4), (11, 2, 4),
                   (12, 1, 4), (13, 5, 4), (14, 4, 4), (15, 2, 4), (16, 7, 3),
                   (17, 33, 3), (18, 96, 3), (19, 41, 3), (20, 36, 4), (21, 16, 4), (22, 64, 4)],
        "prob_stat": [(23, 5, 2), (24, 3, 3), (25, 1, 3), (26, 3, 3), (27, 3, 3),
                      (28, 2, 4), (29, 25, 4), (30, 19, 4)],
        "calculus": [(23, 3, 2), (24, 4, 3), (25, 2, 3), (26, 1, 3), (27, 1, 3),
                     (28, 2, 4), (29, 25, 4), (30, 17, 4)],
        "geometry": [(23, 3, 2), (24, 4, 3), (25, 3, 3), (26, 1, 3), (27, 1, 3),
                     (28, 4, 4), (29, 107, 4), (30, 316, 4)],
    }
}


def manual_records(exam_id: str):
    data = MANUAL_FALLBACK[exam_id]
    records = []
    for subject, rows in data.items():
        for ni, a, pi in rows:
            records.append({"question_no": ni, "subject": subject, "answer": a, "points": pi})
    return records


def validate(exam_id: str, records):
    problems = []
    nums = {}
    for r in records:
        nums[(r["subject"], r["question_no"])] = r
    if len(records) != 46:
        problems.append(f"count={len(records)} (expected 46)")
    for q in range(1, 23):
        if ("common", q) not in nums:
            problems.append(f"missing common #{q}")
    for s in ELECTIVES:
        for q in range(23, 31):
            if (s, q) not in nums:
                problems.append(f"missing {s} #{q}")
    # 배점 검산: 공통 74 + 선택 26 = 100
    common_pts = sum(r["points"] for r in records if r["subject"] == "common")
    for s in ELECTIVES:
        pts = common_pts + sum(r["points"] for r in records if r["subject"] == s)
        if pts != 100:
            problems.append(f"{s} total={pts} (expected 100)")
    return problems


def main():
    manifest = json.loads((META / "kice_math_downloads.json").read_text(encoding="utf-8"))
    by_file = {m["local_file"]: m for m in manifest}
    out = []
    all_ok = True
    for pdf in sorted(RAW.glob("kice_*_math_answer.pdf")):
        m = re.match(r"kice_(\d{4})_(csat|mock06|mock09)_math_answer\.pdf", pdf.name)
        year, exam = int(m.group(1)), m.group(2)
        exam_id = f"{year}_{exam}"
        records = parse_answer_pdf(pdf)
        note = "pdf_text"
        if not records and exam_id in MANUAL_FALLBACK:
            records = manual_records(exam_id)
            note = "manual_transcription"
        problems = validate(exam_id, records)
        status = "OK" if not problems else "FAIL: " + "; ".join(problems[:5])
        if problems:
            all_ok = False
        print(f"{exam_id}: {len(records)} answers ({note}) -> {status}")
        src = by_file.get(pdf.name, {})
        for r in records:
            r.update({
                "exam_id": exam_id,
                "academic_year": year,
                "exam_type": exam,
                "source_name": src.get("source_name", "kice"),
                "source_url": src.get("file_url", ""),
                "fetched_at": datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds"),
                "rights_status": RIGHTS,
            })
        out.extend(records)
    dest = META / "answers.json"
    dest.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\ntotal {len(out)} answer records -> {dest}")
    print("ALL OK" if all_ok else "SOME EXAMS NEED REVIEW")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
