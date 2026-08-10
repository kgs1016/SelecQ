# -*- coding: utf-8 -*-
r"""평가원 문제지 PDF의 문항 → 페이지 인덱스 구축.

PDF 텍스트는 수식이 소실되지만 **문항 번호와 과목 구분 한글은 살아 있어서**
"몇 번 문항이 몇 페이지에 있는가"는 정확히 뽑을 수 있다.
(해설 작성 시 필요한 페이지만 렌더해 읽기 위한 것)

사용법:
    python scripts/pdf_page_index.py              # 전 회차 인덱스 생성
    python scripts/pdf_page_index.py 2023_mock06  # 한 회차만 출력

출력: data/meta/pdf_page_index.json
      {exam: {subject: {qno: page(0-based)}}}
"""
import json
import re
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw"
OUT = ROOT / "data" / "meta" / "pdf_page_index.json"

SECTION = [(r"확률과\s*통계", "prob_stat"), (r"미적분", "calculus"), (r"기하", "geometry")]


def index_one(pdf):
    doc = fitz.open(pdf)
    res, cur, last = {}, "common", 0
    for pno in range(doc.page_count):
        text = doc[pno].get_text()
        # 과목 구분 페이지 감지 (선택과목 표지/머리글)
        for pat, name in SECTION:
            if re.search(pat, text):
                cur = name
                break
        # 줄 첫머리의 '12.' 형태를 문항 번호로
        for m in re.finditer(r"^\s*(\d{1,2})\.\s", text, re.M):
            n = int(m.group(1))
            # 1~22는 언제나 공통, 23~30은 현재 선택과목 구역
            # (선택과목 표지가 공통 21·22와 같은 페이지에 오는 회차가 있어 번호로 판정)
            if 1 <= n <= 22:
                res.setdefault("common", {})[n] = pno
            elif 23 <= n <= 30:
                res.setdefault(cur, {})[n] = pno
        last = pno
    doc.close()
    return res


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    idx = {}
    for pdf in sorted(RAW.glob("kice_*_math_question.pdf")):
        exam = re.match(r"kice_(.+)_math_question", pdf.stem).group(1)
        if only and exam != only:
            continue
        idx[exam] = index_one(pdf)

    if only:
        for subj, mp in idx[only].items():
            pages = sorted({p for p in mp.values()})
            print(f"{subj:<10} 문항 {min(mp)}~{max(mp)} ({len(mp)}개) "
                  f"→ 페이지(0-based) {pages}")
            print("   ", {k: mp[k] for k in sorted(mp)})
        return

    OUT.parent.mkdir(parents=True, exist_ok=True)
    full = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
    full.update(idx)
    OUT.write_text(json.dumps(full, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"✅ {len(idx)}개 회차 → {OUT}")
    for e, v in idx.items():
        print(f"   {e}: " + ", ".join(f"{s} {len(m)}문항" for s, m in v.items()))


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
