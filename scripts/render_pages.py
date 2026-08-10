# -*- coding: utf-8 -*-
r"""문제지/해설지 PDF의 지정 페이지를 PNG로 렌더 (해설 작성 시 읽기용).

사용법:
    python scripts/render_pages.py <pdf경로|회차id> <페이지들> [--dpi 150] [--out 폴더]

예:
    python scripts/render_pages.py 2023_mock06 0-6,8-10,12-14
    python scripts/render_pages.py "평가원해설/여러 학원답지/....pdf" 3,4 --dpi 170

회차id를 주면 data/raw/kice_<id>_math_question.pdf 를 연다.
페이지는 0-based, 콤마·하이픈 범위 지원.
"""
import re
import sys
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = Path(r"C:\Users\1212n\AppData\Local\Temp\claude"
                   r"\C--Users-1212n-Desktop-Project-Business-Problem-Select"
                   r"\8175b793-d69f-44ef-ac38-36392486f990\scratchpad\pages")


def parse_pages(s):
    out = []
    for part in s.split(","):
        if "-" in part:
            a, b = part.split("-")
            out += list(range(int(a), int(b) + 1))
        else:
            out.append(int(part))
    return sorted(set(out))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    target, pages = args[0], parse_pages(args[1])
    dpi = int(sys.argv[sys.argv.index("--dpi") + 1]) if "--dpi" in sys.argv else 150
    out = Path(sys.argv[sys.argv.index("--out") + 1]) if "--out" in sys.argv else DEFAULT_OUT

    p = Path(target)
    if not p.exists():
        p = ROOT / "data" / "raw" / f"kice_{target}_math_question.pdf"
    if not p.exists():
        p = ROOT / target
    if not p.exists():
        sys.exit(f"PDF를 찾을 수 없음: {target}")

    out.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(p)
    tag = re.sub(r"[^0-9A-Za-z_]+", "_", p.stem)[:40]
    made = []
    for n in pages:
        if n >= doc.page_count:
            print(f"  건너뜀: p{n} (총 {doc.page_count}쪽)"); continue
        f = out / f"{tag}_p{n:02d}.png"
        doc[n].get_pixmap(dpi=dpi).save(f)
        made.append(f)
    doc.close()
    print(f"✅ {len(made)}장 (dpi={dpi}) → {out}")
    for f in made:
        print("  ", f.name, f"{f.stat().st_size // 1024}KB")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
