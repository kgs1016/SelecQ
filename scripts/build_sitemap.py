# -*- coding: utf-8 -*-
r"""webapp/sitemap.xml 생성 — 정적 라우트 + 전체 문항 + 문항 이미지.

사용법:
    python scripts/build_sitemap.py

문항 URL은 `/q/<exam>/<subject>/q<nn>` 형태를 쓴다. app.js는
`navigate("/q/" + encodeURIComponent(key))`로 `%2F` 인코딩된 형태를 만들지만,
라우터가 `decodeURIComponent(p.slice(3))`로 풀기 때문에 슬래시를 그대로 둔
형태도 똑같이 동작한다(라이브에서 두 형태 모두 200 확인). 사이트맵에는
읽기 쉬운 쪽을 쓴다.

이미지는 구글 이미지 사이트맵 확장(sitemap-image/1.1)으로 각 문항 URL에
붙인다. ⚠️ 문항 이미지 저작권은 KICE에 있고 이용허락은 대기 중이다.
색인 노출을 원치 않게 되면 IMAGES=False 로 두고 다시 생성하면 된다.

개인 상태 화면(/wrong, /stats, /account)은 크롤러에게 빈 껍데기라 제외한다.
"""
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.stdout.reconfigure(encoding="utf-8")

BASE = "https://selecq.com"
IMAGES = True                      # 문항 이미지 포함 여부
TODAY = date.today().isoformat()

# 정적 라우트 — app.js route() 기준. 개인 상태 화면은 뺀다.
STATIC = [
    ("/", "1.0", "weekly"),
    ("/find", "0.9", "weekly"),
    ("/custom", "0.9", "weekly"),
    ("/exam", "0.9", "weekly"),
    ("/privacy", "0.3", "yearly"),
]

SUBJECT_KO = {
    "common": "공통",
    "prob_stat": "확률과 통계",
    "calculus": "미적분",
    "geometry": "기하",
}

FNAME = re.compile(r"^(\d{4})_(csat|mock06|mock09)_([a-z_]+)_q(\d{2})\.png$")
ROUND_KO = {"csat": "수능", "mock06": "6월 모의평가", "mock09": "9월 모의평가"}


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def main():
    imgs = sorted(p.name for p in (ROOT / "webapp/q").glob("*.png"))
    rows = []
    for name in imgs:
        m = FNAME.match(name)
        if not m:
            print("건너뜀(형식 불일치):", name)
            continue
        year, rnd, subj, qno = m.groups()
        exam = "%s_%s" % (year, rnd)
        title = "%s학년도 %s 수학 %s %d번" % (
            year, ROUND_KO[rnd], SUBJECT_KO.get(subj, subj), int(qno))
        rows.append((exam, subj, qno, name, title))

    out = ['<?xml version="1.0" encoding="UTF-8"?>']
    out.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
    out.append('        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">')

    for loc, pri, freq in STATIC:
        out.append("  <url>")
        out.append("    <loc>%s%s</loc>" % (BASE, loc))
        out.append("    <lastmod>%s</lastmod>" % TODAY)
        out.append("    <changefreq>%s</changefreq>" % freq)
        out.append("    <priority>%s</priority>" % pri)
        out.append("  </url>")

    for exam, subj, qno, fname, title in rows:
        out.append("  <url>")
        out.append("    <loc>%s/q/%s/%s/q%s</loc>" % (BASE, exam, subj, qno))
        out.append("    <lastmod>%s</lastmod>" % TODAY)
        out.append("    <priority>0.7</priority>")
        if IMAGES:
            out.append("    <image:image>")
            out.append("      <image:loc>%s/q/%s</image:loc>" % (BASE, fname))
            out.append("      <image:title>%s</image:title>" % esc(title))
            out.append("    </image:image>")
        out.append("  </url>")

    out.append("</urlset>")
    text = "\n".join(out) + "\n"
    dest = ROOT / "webapp/sitemap.xml"
    dest.write_text(text, encoding="utf-8")

    print("정적 라우트 %d개 + 문항 %d개 (이미지 %s)"
          % (len(STATIC), len(rows), "포함" if IMAGES else "제외"))
    print("→ %s  (%.1f KB)" % (dest, len(text.encode("utf-8")) / 1024))


if __name__ == "__main__":
    main()
