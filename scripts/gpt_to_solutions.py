# -*- coding: utf-8 -*-
r"""GPT가 뽑아준 해설 텍스트 → webapp/solutions.js 엔트리 자동 생성.

사용법:
    python scripts/gpt_to_solutions.py <exam_id> <gpt출력.txt> [--out out.js]

예:
    python scripts/gpt_to_solutions.py 2024_mock06 gpt.txt

입력 형식(현재 GPT 출력 그대로):
    문항: 공통 21번
    핵심접근:
    ...
    풀이단계:
    1) ...
    2) ...
    사용개념: ...
    그래프: ...
    최종답: \[ \boxed{42} \]

하는 일:
  1) 문항 라벨 → data.js key 매핑
  2) data.js의 정답과 GPT의 최종답을 **자동 대조** (불일치 시 경고)
  3) LaTeX 변환:  \[..\] → $$..$$ ,  부등호 < > → &lt; &gt;
  4) sol-step / sol-final HTML 생성
  5) 그래프가 필요하다고 표시된 문항은 TODO 주석으로 남김
"""
import json, re, sys, html
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUBJ = {"공통": "common", "미적": "calculus", "미적분": "calculus",
        "확통": "prob_stat", "확률과 통계": "prob_stat", "확률과통계": "prob_stat",
        "기하": "geometry"}


def load_answers():
    t = (ROOT / "webapp" / "data.js").read_text(encoding="utf-8")
    d = json.loads(t[t.index("{"): t.rindex("}") + 1])
    return {q["key"]: q for q in d["questions"]}


def split_items(text):
    """GPT 출력을 문항 단위로 쪼갠다."""
    parts = re.split(r"\n(?=문항\s*:)", text)
    return [p for p in parts if p.strip().startswith("문항")]


def field(block, name, nxt):
    """블록에서 name: 다음부터 nxt 중 하나가 나오기 전까지."""
    pat = rf"{name}\s*:\s*(.*?)(?=\n(?:{'|'.join(nxt)})\s*:|\Z)"
    m = re.search(pat, block, re.S)
    return m.group(1).strip() if m else ""


def to_katex(s):
    """LaTeX 블록·부등호를 우리 포맷으로."""
    s = s.replace("\\[", "\n$$").replace("\\]", "$$\n")
    s = re.sub(r"\\boxed\{(.*?)\}", r"\\mathbf{\1}", s, flags=re.S)
    # 수식 밖/안 구분 없이 부등호는 전부 이스케이프 (HTML은 우리가 생성하므로 안전)
    s = s.replace("<", "&lt;").replace(">", "&gt;")
    return s.strip()


def steps_html(body):
    """'1) ...' 형태의 풀이단계를 sol-step 묶음으로."""
    items = re.split(r"\n(?=\d+\)\s)", body)
    out = []
    for i, it in enumerate(items, 1):
        it = re.sub(r"^\d+\)\s*", "", it.strip())
        if not it:
            continue
        conv = to_katex(it)
        # $$ 블록은 그대로, 나머지 줄은 <p>로
        chunks, buf = [], []
        for seg in re.split(r"(\$\$.*?\$\$)", conv, flags=re.S):
            if seg.startswith("$$"):
                if buf:
                    chunks.append("<p>" + " ".join(buf).strip() + "</p>"); buf = []
                chunks.append(seg.strip())
            elif seg.strip():
                buf.append(seg.strip().replace("\n", " "))
        if buf:
            chunks.append("<p>" + " ".join(buf).strip() + "</p>")
        out.append(f'  <div class="sol-step">\n    <div class="sol-h">'
                   f'<span class="sol-num">{i}</span></div>\n    '
                   + "\n    ".join(chunks) + "\n  </div>")
    return "\n".join(out)


def main():
    if len(sys.argv) < 3:
        print(__doc__); sys.exit(1)
    exam, src = sys.argv[1], Path(sys.argv[2])
    answers = load_answers()
    NEXT = ["핵심접근", "풀이단계", "사용개념", "그래프", "최종답", "페이지", "문제"]

    entries, warns, todo = [], [], []
    for block in split_items(src.read_text(encoding="utf-8")):
        label = re.search(r"문항\s*:\s*(.+)", block)
        if not label:
            warns.append(f"문항 라벨 파싱 실패: {block[:40]}"); continue
        raw = label.group(1).strip()
        num = re.search(r"(\d+)\s*번?", raw)
        # 과목명은 긴 것부터 매칭 ('확률과 통계'가 '확통'보다 먼저)
        subj = next((v for k, v in sorted(SUBJ.items(), key=lambda x: -len(x[0]))
                     if raw.startswith(k)), None)
        if not (subj and num):
            warns.append(f"문항 라벨 인식 실패: {raw!r}"); continue
        qno = int(num.group(1))
        key = f"{exam}/{subj}/q{qno:02d}"
        if key not in answers:
            warns.append(f"data.js에 없는 key: {key}"); continue

        want = answers[key]["answer"]
        final = field(block, "최종답", NEXT)
        got = re.search(r"(-?\d+)", re.sub(r"\\text\{.*?\}", "", final))
        if not got or int(got.group(1)) != want:
            # 객관식(①~⑤)은 숫자가 안 잡힐 수 있으므로 원문을 함께 보고
            circ = re.search(r"[①②③④⑤]", final)
            idx = "①②③④⑤".find(circ.group(0)) + 1 if circ else None
            if idx != want:
                warns.append(f"⚠ 정답 불일치 {key}: data.js={want} / GPT={final[:40]!r}")

        approach = to_katex(field(block, "핵심접근", NEXT))
        body = steps_html(field(block, "풀이단계", NEXT))
        graph = field(block, "그래프", NEXT)
        if graph and not graph.startswith("없음"):
            todo.append(f"{key}  ← 그래프: {graph[:60]}")

        head = f'  <div class="sol-box">{approach}</div>\n' if approach else ""
        # 최종답은 인라인으로 (블록 $$ 는 과해서)
        fin = to_katex(final).replace("$$", "").strip()
        fin = f"\\({fin}\\)" if fin and "\\(" not in fin else fin
        entries.append(
            f'"{key}": {{ answer: {want}, html: String.raw`\n'
            f'{head}{body}\n'
            f'  <div class="sol-final">{fin}</div>\n` }},\n')

    out = Path(sys.argv[sys.argv.index("--out") + 1]) if "--out" in sys.argv \
        else ROOT / "scripts" / f"_gen_{exam}.js"
    out.write_text("\n".join(entries), encoding="utf-8")

    print(f"✅ {len(entries)}개 생성 → {out}")
    if todo:
        print("\n■ 그래프 필요 (직접 렌더 후 <figure> 추가):")
        for t in todo: print("   " + t)
    if warns:
        print("\n■ 경고:")
        for w in warns: print("   " + w)
    else:
        print("■ 정답 대조: 전부 일치 ✅")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
