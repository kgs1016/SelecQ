# -*- coding: utf-8 -*-
"""크롭 품질 QA: 이미지 상/하단 가장자리에 잉크(글자·그림)가 닿아 있으면 잘림 의심으로 플래그."""
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
QDIR = ROOT / "data" / "questions"

EDGE_ROWS = 3          # 검사할 가장자리 두께(px)
INK_THRESHOLD = 200    # 이보다 어두우면 잉크로 간주
MIN_INK_PX = 8         # 가장자리 행에 이 이상 잉크 픽셀이 있으면 플래그


def edge_ink(img, rows, top=True):
    gray = img.convert("L")
    w, h = gray.size
    box = (0, 0, w, min(rows, h)) if top else (0, max(0, h - rows), w, h)
    region = gray.crop(box)
    return sum(1 for p in region.getdata() if p < INK_THRESHOLD)


def main():
    flagged = []
    total = 0
    for png in sorted(QDIR.rglob("*.png")):
        total += 1
        img = Image.open(png)
        top = edge_ink(img, EDGE_ROWS, top=True)
        bot = edge_ink(img, EDGE_ROWS, top=False)
        issues = []
        if top >= MIN_INK_PX:
            issues.append(f"top({top}px)")
        if bot >= MIN_INK_PX:
            issues.append(f"bottom({bot}px)")
        if issues:
            flagged.append((str(png.relative_to(QDIR)), ", ".join(issues)))
    print(f"검사 {total}개 중 잘림 의심 {len(flagged)}개")
    for name, why in flagged[:40]:
        print(f"  {name}: {why}")
    if len(flagged) > 40:
        print(f"  ... 외 {len(flagged) - 40}개")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
