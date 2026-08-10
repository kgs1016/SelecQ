# -*- coding: utf-8 -*-
r"""solutions.js 검증 게이트 (해설_생성_규칙.md §6 구현).

사용법:
    python scripts/check_solutions.py                # 전체
    python scripts/check_solutions.py 2023_mock06    # 특정 회차만
    python scripts/check_solutions.py --quiet        # 요약만

검사 항목
    1) 정답 대조   : solutions.js의 answer == data.js의 answer
    2) 금지기법    : subject/unit별 커리큘럼 화이트리스트(§2) 위반
    3) 문체        : AI 티(§3) — gcd(, "우리는", "살펴보면", 근사 등
    4) 포맷        : $$ 짝, 수식 안 raw < >, 그림 파일 존재, sol-final 유무

종료 코드: ERROR가 하나라도 있으면 1
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "webapp"

# ── §2 커리큘럼 화이트리스트 ────────────────────────────────────
# (정규식, 설명, 심각도)  E=위반 확정, W=사람 확인
CALC_ONLY = [
    (r"\\ln\b|\\log_?\{?e", "자연로그 ln", "E"),
    (r"e\^\{|\be\^[a-z0-9]", "지수함수 e^x", "E"),
    (r"치환적분|부분적분", "치환·부분적분", "E"),
    (r"로피탈", "로피탈 정리", "E"),
    (r"몫의\s*미분", "몫의 미분법", "E"),
    (r"합성함수의\s*미분|연쇄\s*법칙", "합성함수 미분법", "E"),
    (r"매개변수.{0,4}미분|음함수.{0,4}미분|역함수.{0,4}미분", "매개·음·역함수 미분", "E"),
    (r"\\lim_\{n\\to\\infty\}|\\sum_\{n=1\}\^\{\\infty\}", "수열의 극한·급수", "E"),
    (r"치환하", "'치환' 표현", "W"),
]
TRIG_CALC = [
    (r"\(\\sin[^)]*\)'|\\sin\s*\)\s*'", "삼각함수의 미분", "E"),
    (r"\\int[^$]{0,40}\\(?:sin|cos|tan)", "삼각함수의 적분", "E"),
    (r"삼각함수의\s*(미분|적분)", "삼각함수 미분·적분", "E"),
]

RULES = {
    "su2": CALC_ONLY,
    "su1": CALC_ONLY + TRIG_CALC,
    "ps": CALC_ONLY,
    "geo": CALC_ONLY,
}

# ── §3 문체 ────────────────────────────────────────────────────
STYLE = [
    (r"\bgcd\s*\(|\blcm\s*\(", "gcd/lcm 표기 → '서로소' 등 한국식으로", "E"),
    (r"우리는|살펴보면|주목하자|임에 주목", "AI 말투", "E"),
    (r"\bNote that\b|\bLet\s+[A-Za-z]|\bWe\s+(?:have|get|can)\b", "영어 말투", "E"),
    (r"약\s*\d+\.\d|≈|근삿값으로|대입해\s*보면\s*대략", "근사·노가다", "W"),
    (r"해설(지)?(의|에)\s*(그림|방법|풀이)|공식\s*해설", "참조 해설 언급", "E"),
]


def load_data():
    t = (WEB / "data.js").read_text(encoding="utf-8")
    d = json.loads(t[t.index("{"): t.rindex("}") + 1])
    return {q["key"]: q for q in d["questions"]}


def load_solutions():
    """solutions.js를 파싱해 {key: (answer, html)}."""
    t = (WEB / "solutions.js").read_text(encoding="utf-8")
    out = {}
    for m in re.finditer(
            r'"([^"]+)":\s*\{\s*answer:\s*(-?\d+)\s*,\s*html:\s*String\.raw`(.*?)`\s*\}',
            t, re.S):
        out[m.group(1)] = (int(m.group(2)), m.group(3))
    return out


def strip_math(html):
    """수식 밖 본문만 (문체 검사는 서술문 대상)."""
    s = re.sub(r"\$\$.*?\$\$", " ", html, flags=re.S)
    s = re.sub(r"\\\(.*?\\\)", " ", s, flags=re.S)
    return re.sub(r"<[^>]+>", " ", s)


def check(key, answer, html, meta):
    """한 문항 → [(심각도, 항목, 설명)]"""
    out = []
    unit_pre = (meta.get("unit") or "").split("_")[0]
    prose = strip_math(html)

    # 1) 정답 대조
    if answer != meta["answer"]:
        out.append(("E", "정답", f"solutions={answer} / data.js={meta['answer']}"))

    # 2) 금지기법
    for pat, why, sev in RULES.get(unit_pre, []):
        m = re.search(pat, html)
        if m:
            out.append((sev, "범위", f"{why}  «{m.group(0)[:24]}»"))

    # 3) 문체
    for pat, why, sev in STYLE:
        m = re.search(pat, prose)
        if m:
            out.append((sev, "문체", f"{why}  «{m.group(0)[:24]}»"))

    # 4) 포맷
    if html.count("$$") % 2:
        out.append(("E", "포맷", f"$$ 짝이 안 맞음 ({html.count('$$')}개)"))
    # 수식 안 raw 부등호: '<' 뒤가 글자/슬래시면 HTML 파서가 태그로 먹어 실제 파손(E),
    # 그 밖(숫자·백슬래시 등)은 우연히 안전하지만 표기 통일 대상(W)
    for m in re.finditer(r"\\\((.*?)\\\)", html, re.S):
        if re.search(r"<[A-Za-z/]", m.group(1)):
            out.append(("E", "포맷", f"수식 안 raw 부등호(파손)  «{m.group(0)[:30]}»"))
            break
        if re.search(r"[<>]", m.group(1)):
            out.append(("W", "포맷", f"수식 안 raw 부등호  «{m.group(0)[:30]}»"))
            break
    if '<div class="sol-final">' not in html:
        out.append(("E", "포맷", "sol-final 없음"))
    for src in re.findall(r'<img[^>]+src="([^"]+)"', html):
        if not (WEB / src).exists():
            out.append(("E", "포맷", f"그림 파일 없음: {src}"))
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    quiet = "--quiet" in sys.argv
    data, sols = load_data(), load_solutions()

    keys = sorted(sols)
    if args:
        keys = [k for k in keys if k.startswith(args[0])]

    nE = nW = 0
    for k in keys:
        if k not in data:
            print(f"  [E] {k}  data.js에 없는 key"); nE += 1; continue
        issues = check(k, *sols[k], data[k])
        for sev, cat, msg in issues:
            nE += sev == "E"
            nW += sev == "W"
            if not quiet or sev == "E":
                print(f"  [{sev}] {k}  {cat}: {msg}")

    print(f"\n검사 {len(keys)}개 / ERROR {nE} / WARN {nW}")
    sys.exit(1 if nE else 0)


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
