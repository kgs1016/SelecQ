# -*- coding: utf-8 -*-
"""
문제지 PDF(16개) -> 문항별 크롭 이미지 + 문항 인덱스 (data/questions/, data/meta/questions_index.json)

용도: 2일차 AI 유형 태깅의 내부 입력 전용 (재배포 아님 — mvp-scope.md 수집 정책 참조)

레이아웃 전제 (2022~2027 평가원 수학, 실측 확인):
- A3 세로(842x1191pt) 2단 조판. 문항번호 "N."이 단 왼쪽 끝(x~88 / x~437)에 위치
- 문항 순서: 공통 1~22 -> 확통 23~30 -> 미적 23~30 -> 기하 23~30 (번호 순서만으로 과목 판정)
- 일부 PDF는 홀수형+짝수형 합본 -> 공통 1번이 다시 나오면 중단

검증: 시험당 46문항, [N점] 마커를 answers.json 배점과 교차검증
"""
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
META = ROOT / "data" / "meta"
QDIR = ROOT / "data" / "questions"

DPI = 150
ZOOM = DPI / 72
ELECTIVES = ["prob_stat", "calculus", "geometry"]
RIGHTS = "KICE 문제지에서 내부 처리(유형 태깅)용으로 분해. 재배포 금지."

# 단(컬럼) 기하: 실측값 기준. 문항번호 x로 단 판정, 크롭은 단 전체 폭
COL_SPLIT_RATIO = 0.5          # 페이지 절반 기준으로 좌/우 단
CONTENT_TOP = 140              # 연속 단 상단(러닝헤드 아래)
CONTENT_BOTTOM_MARGIN = 112   # 페이지 하단 여백 (페이지번호 밴드 y~1085 제외, 실측)
COL_PAD_X = 26                 # 단 좌우 패딩
START_PAD_Y = 28               # 문항번호 위 여백 (분수·지수 스택이 번호보다 위로 솟는 경우 커버)
END_PAD_Y = 8                  # 다음 문항번호 직전 절단 여유 (4는 다음 번호 머리가 걸림, 실측 조정)


def find_markers(doc):
    """(page_idx, col, y, qno) 목록을 읽기 순서로. 짝수형 합본이면 재시작 지점에서 절단."""
    markers = []
    for pi, page in enumerate(doc):
        W = page.rect.width
        page_markers = []
        for w in page.get_text("words"):
            x0, y0, _, _, t = w[0], w[1], w[2], w[3], w[4].strip()
            m = re.fullmatch(r"(\d{1,2})\.", t)
            if not m:
                continue
            qno = int(m.group(1))
            if not 1 <= qno <= 30:
                continue
            # 문항번호는 단 왼쪽 끝에 위치 (본문 내 숫자 오탐 방지)
            col = 0 if x0 < W * COL_SPLIT_RATIO else 1
            col_left = 60 if col == 0 else W * COL_SPLIT_RATIO + 10
            if x0 - col_left > 60:
                continue
            page_markers.append((pi, col, y0, qno))
        page_markers.sort(key=lambda m: (m[1], m[2]))  # 단 -> y 순 (읽기 순서)
        markers.extend(page_markers)
    # 시퀀스 절단: 공통 1번이 두 번째로 나오면 그 앞까지만 (홀수형만 사용)
    seen_any = False
    cut = len(markers)
    for i, (pi, col, y, qno) in enumerate(markers):
        if qno == 1:
            if seen_any:
                cut = i
                break
            seen_any = True
    return markers[:cut]


def assign_subjects(markers):
    """번호 순서로 과목 판정. 반환: [(page, col, y, qno, subject)]"""
    out = []
    elective_idx = -1  # -1 = 공통
    prev_qno = 0
    for pi, col, y, qno in markers:
        if qno == 23 and prev_qno >= 22:
            elective_idx += 1
        subject = "common" if elective_idx < 0 else ELECTIVES[min(elective_idx, 2)]
        out.append((pi, col, y, qno, subject))
        prev_qno = qno
    return out


def build_segments(doc, assigned):
    """각 문항의 크롭 세그먼트 [(page, col, y0, y1), ...] 계산."""
    results = []
    for i, (pi, col, y, qno, subject) in enumerate(assigned):
        nxt = assigned[i + 1] if i + 1 < len(assigned) else None
        segs = []
        H = doc[pi].rect.height
        bottom = H - CONTENT_BOTTOM_MARGIN
        y0 = max(0, y - START_PAD_Y)
        if nxt and nxt[0] == pi and nxt[1] == col:
            segs.append((pi, col, y0, nxt[2] - END_PAD_Y))
        else:
            segs.append((pi, col, y0, bottom))
            if nxt:
                # 다음 마커까지의 중간 단들(같은 페이지 다음 단, 사이 페이지 전체 단)
                cur = (pi, col)
                npi, ncol = nxt[0], nxt[1]
                while cur != (npi, ncol):
                    p, c = cur
                    cur = (p, 1) if c == 0 else (p + 1, 0)
                    if cur == (npi, ncol):
                        break
                    if cur[0] >= len(doc):
                        break
                    ph = doc[cur[0]].rect.height
                    segs.append((cur[0], cur[1], CONTENT_TOP, ph - CONTENT_BOTTOM_MARGIN))
        results.append({"qno": qno, "subject": subject, "segments": segs})
    return results


def seg_rect(page, col, y0, y1):
    W = page.rect.width
    half = W * COL_SPLIT_RATIO
    if col == 0:
        return fitz.Rect(COL_PAD_X + 30, y0, half - 4, y1)
    return fitz.Rect(half + 4, y0, W - COL_PAD_X - 30, y1)


STOP_PHRASES = ["확인 사항", "저작권", "문제지에 관한"]


def clamp_segment(page, rect, y_start):
    """세그먼트 하단을 '확인 사항' 박스/저작권 푸터 위에서 절단."""
    y1 = rect.y1
    for phrase in STOP_PHRASES:
        for hit in page.search_for(phrase, clip=rect):
            if hit.y0 > y_start + 30:
                y1 = min(y1, hit.y0 - 10)
    return fitz.Rect(rect.x0, rect.y0, rect.x1, y1)


def trim_top(img: Image.Image, search_px: int = 90, min_band: int = 5) -> Image.Image:
    """상단에 이전 문항 꼬리가 걸쳐 들어온 경우 제거.
    첫 search_px 행 안에서 흰 띠(연속 min_band행 이상)를 찾아, 그 위에 잉크가 있으면 띠부터 시작하도록 자름."""
    gray = img.convert("L")
    w = gray.width
    rows_ink = []
    region = gray.crop((0, 0, w, min(search_px + 10, gray.height)))
    px = list(region.getdata())
    for r in range(region.height):
        row = px[r * w:(r + 1) * w]
        rows_ink.append(any(p < 220 for p in row))
    # 잉크가 있는 행이 상단에 없으면 그대로
    first_rows = rows_ink[:min(8, len(rows_ink))]
    if not any(first_rows):
        return img
    # 흰 띠 탐색
    band_start, run = None, 0
    for r in range(len(rows_ink)):
        if not rows_ink[r]:
            run += 1
            if run >= min_band:
                band_start = r - run + 1
                break
        else:
            run = 0
    if band_start is None or band_start == 0:
        return img
    return img.crop((0, band_start, img.width, img.height))


def trim_bottom_fragment(img: Image.Image, min_gap: int = 60, max_frag: int = 55) -> Image.Image:
    """하단 고아 조각 제거: 큰 흰 띠(min_gap 이상) 아래에 작은 잉크 조각(max_frag 이하)만 있으면
    다음 문항 수식 머리가 침입한 것으로 보고 흰 띠에서 절단."""
    gray = img.convert("L")
    w, h = gray.size
    px = list(gray.getdata())
    rows_ink = [any(p < 220 for p in px[r * w:(r + 1) * w]) for r in range(h)]
    # 아래에서 위로: 조각 크기와 그 위의 흰 띠 크기 측정
    r = h - 1
    while r >= 0 and not rows_ink[r]:
        r -= 1
    frag_end = r
    while r >= 0 and rows_ink[r]:
        r -= 1
    frag_size = frag_end - r
    gap_end = r
    while r >= 0 and not rows_ink[r]:
        r -= 1
    gap_size = gap_end - r
    if 0 < frag_size <= max_frag and gap_size >= min_gap and r > 0:
        return img.crop((0, 0, w, gap_end + 1))
    return img


def trim_bottom(img: Image.Image, pad: int = 18) -> Image.Image:
    """하단 흰 여백 제거."""
    gray = img.convert("L")
    bbox = gray.point(lambda p: 0 if p > 247 else 255).getbbox()
    if not bbox:
        return img
    bottom = min(img.height, bbox[3] + pad)
    return img.crop((0, 0, img.width, bottom))


def render_question(doc, item, out_path: Path):
    """세그먼트들을 세로로 이어붙여 PNG 저장. 문항 텍스트도 함께 반환."""
    images, texts = [], []
    for pi, col, y0, y1 in item["segments"]:
        if y1 - y0 < 12:
            continue
        page = doc[pi]
        rect = seg_rect(page, col, y0, y1)
        rect = clamp_segment(page, rect, y0)
        if rect.y1 - rect.y0 < 12:
            continue
        pix = page.get_pixmap(matrix=fitz.Matrix(ZOOM, ZOOM), clip=rect)
        img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        images.append(img)
        texts.append(page.get_text(clip=rect))
    if not images:
        return ""
    width = max(im.width for im in images)
    height = sum(im.height for im in images)
    canvas = Image.new("RGB", (width, height), "white")
    yoff = 0
    for im in images:
        canvas.paste(im, (0, yoff))
        yoff += im.height
    canvas = trim_top(canvas)
    canvas = trim_bottom_fragment(canvas)
    canvas = trim_bottom(canvas)
    canvas.save(out_path)
    return "\n".join(texts)


def extract_points(text: str):
    m = re.search(r"\[(\d)\s*점\]", text)
    return int(m.group(1)) if m else None


def main():
    answers = json.loads((META / "answers.json").read_text(encoding="utf-8"))
    ans_map = {(a["exam_id"], a["subject"], a["question_no"]): a for a in answers}
    manifest = json.loads((META / "kice_math_downloads.json").read_text(encoding="utf-8"))
    src_map = {m["local_file"]: m for m in manifest}

    index = []
    grand_ok = True
    for pdf in sorted(RAW.glob("kice_*_math_question.pdf")):
        m = re.match(r"kice_(\d{4})_(csat|mock06|mock09)_math_question\.pdf", pdf.name)
        year, exam = int(m.group(1)), m.group(2)
        exam_id = f"{year}_{exam}"
        doc = fitz.open(pdf)
        markers = find_markers(doc)
        assigned = assign_subjects(markers)
        items = build_segments(doc, assigned)

        outdir = QDIR / exam_id
        outdir.mkdir(parents=True, exist_ok=True)
        point_mismatch, missing_points = [], 0
        for item in items:
            name = f"{item['subject']}_q{item['qno']:02d}.png"
            text = render_question(doc, item, outdir / name)
            pts = extract_points(text)
            key = (exam_id, item["subject"], item["qno"])
            expected = ans_map.get(key, {}).get("points")
            if pts is None:
                missing_points += 1
            elif expected is not None and pts != expected:
                point_mismatch.append((item["subject"], item["qno"], pts, expected))
            index.append({
                "exam_id": exam_id,
                "academic_year": year,
                "exam_type": exam,
                "subject": item["subject"],
                "question_no": item["qno"],
                "image": str((outdir / name).relative_to(ROOT)).replace("\\", "/"),
                "segments": item["segments"],
                "points_marker": pts,
                "answer": ans_map.get(key, {}).get("answer"),
                "points": expected,
                "source_name": src_map.get(pdf.name, {}).get("source_name", "kice"),
                "source_url": src_map.get(pdf.name, {}).get("file_url", ""),
                "fetched_at": datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds"),
                "rights_status": RIGHTS,
            })
        n = len(items)
        seq_ok = n == 46
        pm = len(point_mismatch)
        status = "OK" if seq_ok and pm == 0 else f"CHECK (count={n}, pts_mismatch={pm}, pts_missing={missing_points})"
        if not seq_ok or pm:
            grand_ok = False
            for s, q, got, exp in point_mismatch[:5]:
                print(f"    mismatch {s} #{q}: marker={got} vs answer_table={exp}")
        print(f"{exam_id}: {n} questions -> {status}")
    out = META / "questions_index.json"
    out.write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\ntotal {len(index)} question records -> {out}")
    print("ALL OK" if grand_ok else "SOME EXAMS NEED REVIEW")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
