# -*- coding: utf-8 -*-
"""
평가원(suneung.re.kr) 수능·모의평가 게시판에서 수학 영역 문제지/정답표 메타데이터 수집.

정책 (source-validation-report.md 준수):
- 저빈도 수동 트리거 전용. 요청 간 딜레이 >= 2.5초, 병렬 금지.
- User-Agent에 연락처 명시.
- 모든 레코드에 source_url, source_name, fetched_at, rights_status 포함.

사용:
  python scrape_kice.py            # 목록 스크랩 -> data/meta/kice_math_index.json
  python scrape_kice.py --download # 인덱스 기반 수학 PDF 다운로드 -> data/raw/
"""
import argparse
import json
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import requests
from bs4 import BeautifulSoup

BASE = "https://www.suneung.re.kr"
UA = "ProblemSelectBot/0.1 (personal research; contact: 1212ntnt@naver.com)"
DELAY_SEC = 2.5
MAX_PAGES_PER_BOARD = 12
MIN_ACADEMIC_YEAR = 2022  # 현행 체제 시작 학년도

BOARDS = {
    "kice_csat": {"boardID": "1500234", "label": "수능"},
    "kice_mock": {"boardID": "1500236", "label": "모의평가"},
}

RIGHTS = "KICE 저작권 표기(ALL RIGHTS RESERVED), 공공누리 미표기, 재배포 불가 전제, robots 전체 Disallow(저빈도 수동 수집)"

ROOT = Path(__file__).resolve().parent.parent
META_DIR = ROOT / "data" / "meta"
RAW_DIR = ROOT / "data" / "raw"

session = requests.Session()
session.headers.update({"User-Agent": UA})


def now_iso() -> str:
    return datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")


def fetch(url: str) -> requests.Response:
    time.sleep(DELAY_SEC)
    r = session.get(url, timeout=30)
    r.raise_for_status()
    return r


def decode_html(r: requests.Response) -> str:
    for enc in ("utf-8", "euc-kr", "cp949"):
        try:
            text = r.content.decode(enc)
            if "정답" in text or "수능" in text:
                return text
        except UnicodeDecodeError:
            continue
    r.encoding = r.apparent_encoding
    return r.text


def parse_list_page(html: str, board_key: str, page: int):
    """목록 페이지의 tbody 행들을 레코드로 변환."""
    soup = BeautifulSoup(html, "html.parser")
    tbody = soup.find("tbody")
    records = []
    if not tbody:
        return records
    for tr in tbody.find_all("tr"):
        tds = tr.find_all("td")
        if len(tds) < 4:
            continue
        cols = [td.get_text(" ", strip=True) for td in tds]
        # goView('boardID','boardSeq', ...) 에서 boardSeq 추출
        post_id = None
        a = tr.find("a", onclick=re.compile(r"goView"))
        if a:
            m = re.search(r"goView\('(\d+)','(\d+)'", a.get("onclick", ""))
            if m:
                post_id = m.group(2)
        # 첨부파일: fn_fileDown('<fileSeq>') + title='<filename>'
        files = []
        for fa in tr.find_all("a", onclick=re.compile(r"fn_fileDown")):
            m = re.search(r"fn_fileDown\('([0-9a-f]+)'\)", fa.get("onclick", ""))
            if not m:
                continue
            files.append({
                "file_name": fa.get("title", ""),
                "file_seq": m.group(1),
                "file_url": f"{BASE}/boardCnts/fileDown.do?fileSeq={m.group(1)}",
            })
        records.append({
            "source_name": board_key,
            "board_label": BOARDS[board_key]["label"],
            "post_id": post_id,
            "columns": cols,
            "files": files,
            "page": page,
            "source_url": list_url(board_key, page),
            "fetched_at": now_iso(),
            "rights_status": RIGHTS,
        })
    return records


def list_url(board_key: str, page: int) -> str:
    bid = BOARDS[board_key]["boardID"]
    return f"{BASE}/boardCnts/list.do?type=default&page={page}&boardID={bid}&m=0403&s=suneung"


def extract_year(cols) -> int | None:
    """행 컬럼에서 학년도(4자리) 추출."""
    for c in cols:
        m = re.fullmatch(r"(20\d\d)", c.strip())
        if m:
            return int(m.group(1))
    for c in cols:
        m = re.search(r"(20\d\d)", c)
        if m:
            return int(m.group(1))
    return None


def scrape_index():
    all_records = []
    for board_key in BOARDS:
        stop = False
        for page in range(1, MAX_PAGES_PER_BOARD + 1):
            url = list_url(board_key, page)
            print(f"[{board_key}] page {page} ...")
            html = decode_html(fetch(url))
            recs = parse_list_page(html, board_key, page)
            if not recs:
                print(f"[{board_key}] no rows on page {page}, stop.")
                break
            all_records.extend(recs)
            years = [y for y in (extract_year(r["columns"]) for r in recs) if y]
            if years and min(years) < MIN_ACADEMIC_YEAR:
                print(f"[{board_key}] reached year {min(years)} < {MIN_ACADEMIC_YEAR}, stop.")
                stop = True
            if stop:
                break
    out = META_DIR / "kice_board_index.json"
    out.write_text(json.dumps(all_records, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"saved {len(all_records)} rows -> {out}")

    # 수학 필터 (영역 컬럼 또는 파일명에 '수학')
    math = []
    for r in all_records:
        year = extract_year(r["columns"])
        if year is None or year < MIN_ACADEMIC_YEAR:
            continue
        joined = " ".join(r["columns"]) + " " + " ".join(f["file_name"] for f in r["files"])
        if "수학" in joined:
            r2 = dict(r)
            r2["academic_year"] = year
            math.append(r2)
    out2 = META_DIR / "kice_math_index.json"
    out2.write_text(json.dumps(math, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"saved {len(math)} math rows -> {out2}")


def canonical_name(rec, file_info) -> str:
    year = rec.get("academic_year", "unknown")
    if rec["source_name"] == "kice_csat":
        exam = "csat"
    else:
        joined = " ".join(rec["columns"])
        if "6월" in joined:
            exam = "mock06"
        elif "9월" in joined:
            exam = "mock09"
        else:
            exam = f"mock_p{rec['post_id']}"
    fname = file_info["file_name"]
    if "문제" in fname:
        kind = "question"
    elif "정답" in fname:
        kind = "answer"
    else:
        kind = re.sub(r"\W+", "", fname)[:12] or "file"
    return f"kice_{year}_{exam}_math_{kind}.pdf"


def download_math():
    idx_path = META_DIR / "kice_math_index.json"
    records = json.loads(idx_path.read_text(encoding="utf-8"))
    manifest = []
    total = sum(len(r["files"]) for r in records)
    print(f"downloading {total} files (sequential, {DELAY_SEC}s delay) ...")
    for rec in records:
        for f in rec["files"]:
            name = canonical_name(rec, f)
            dest = RAW_DIR / name
            if dest.exists():
                print(f"skip (exists): {name}")
            else:
                r = fetch(f["file_url"])
                ctype = r.headers.get("Content-Type", "")
                if "pdf" not in ctype.lower() and not r.content.startswith(b"%PDF"):
                    print(f"WARN not a PDF ({ctype}): {name} — skipped")
                    continue
                dest.write_bytes(r.content)
                print(f"ok: {name} ({len(r.content)//1024} KB)")
            manifest.append({
                "local_file": name,
                "file_name": f["file_name"],
                "file_url": f["file_url"],
                "post_id": rec["post_id"],
                "academic_year": rec.get("academic_year"),
                "source_name": rec["source_name"],
                "source_url": rec["source_url"],
                "fetched_at": now_iso(),
                "rights_status": RIGHTS,
            })
    out = META_DIR / "kice_math_downloads.json"
    out.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"manifest -> {out}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser()
    ap.add_argument("--download", action="store_true", help="인덱스 기반 수학 PDF 다운로드")
    args = ap.parse_args()
    if args.download:
        download_math()
    else:
        scrape_index()
