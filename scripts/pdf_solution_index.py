# -*- coding: utf-8 -*-
r"""해설지 PDF(EBS·종로·이투스)의 문항 → 페이지 인덱스 구축.

해설지도 문제지와 마찬가지로 수식은 소실되지만 문항 번호와 과목 구분 한글은
살아 있어서 "몇 번 해설이 몇 페이지에 있는가"는 뽑을 수 있다.

사용법:
    python scripts/pdf_solution_index.py "<pdf경로>"        # 인덱스 출력
    python scripts/pdf_solution_index.py "<pdf경로>" 15 20  # 특정 문항 페이지만

출력: {과목: {문항번호: 페이지(0-based)}}
"""
import re
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parent.parent
SECTION = [(r"확률과\s*통계", "prob_stat"), (r"미적분", "calculus"), (r"기하", "geometry")]

# 해설 문항 머리: "8. 출제의도 : …" 처럼 번호 뒤에 해설 표제어가 오는 것만.
# (정답표는 "01. ④  02. ⑤" 꼴이라 표제어가 없어 걸러진다)
HEAD = re.compile(r"^\s*(\d{1,2})\s*[.)]\s*(?=출제|해설|풀이|\[정답\]|【)", re.M)


def index(pdf):
    doc = fitz.open(pdf)
    res, cur = {}, "common"
    for pno in range(doc.page_count):
        text = doc[pno].get_text()
        # 과목 구분: 그 페이지에 선택과목 이름이 나오면 이후 23~30은 그 과목
        for pat, name in SECTION:
            if re.search(pat, text):
                cur = name
                break
        for m in HEAD.finditer(text):
            n = int(m.group(1))
            if 1 <= n <= 22:
                res.setdefault("common", {}).setdefault(n, pno)
            elif 23 <= n <= 30:
                res.setdefault(cur, {}).setdefault(n, pno)
    doc.close()
    return res


def main():
    pdf = Path(sys.argv[1])
    if not pdf.exists():
        pdf = ROOT / sys.argv[1]
    if not pdf.exists():
        sys.exit(f"PDF 없음: {sys.argv[1]}")
    idx = index(pdf)
    want = [int(a) for a in sys.argv[2:] if a.isdigit()]

    print(f"■ {pdf.name}")
    if sum(len(m) for m in idx.values()) < 20:
        print("  ⚠ 문항 번호를 뽑지 못했습니다(폰트 미매핑). "
              "이 해설지는 페이지를 직접 렌더해 눈으로 찾아야 합니다.")
        return
    for subj in ("common", "prob_stat", "calculus", "geometry"):
        mp = idx.get(subj)
        if not mp:
            continue
        sel = {k: v for k, v in sorted(mp.items()) if not want or k in want}
        if not sel:
            continue
        print(f"  {subj:<10} " + ", ".join(f"{k}→p{v}" for k, v in sel.items()))
    pages = sorted({v for mp in idx.values() for k, v in mp.items()
                    if not want or k in want})
    print(f"  필요한 페이지: {','.join(map(str, pages))}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
