# -*- coding: utf-8 -*-
r"""scripts/_gen_<exam_id>*.js 엔트리들을 webapp/solutions.js 에 병합한다.

    python scripts/merge_gen.py 2027_mock09

- 같은 key 가 이미 solutions.js 에 있으면 새 엔트리로 교체한다.
- 병합 후 check_solutions.py <exam_id> 로 검증 게이트를 통과시킬 것.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOL = ROOT / "webapp" / "solutions.js"
ENTRY = re.compile(r'^"([^"]+)":\s*\{\s*answer:\s*-?\d+\s*,\s*html:\s*String\.raw`.*?^` \},\s*$',
                   re.S | re.M)


def main():
    exam = sys.argv[1]
    files = sorted(ROOT.glob(f"scripts/_gen_{exam}*.js"))
    if not files:
        sys.exit(f"_gen_{exam}*.js 없음")
    new = {}
    for f in files:
        for m in ENTRY.finditer(f.read_text(encoding="utf-8")):
            new[m.group(1)] = m.group(0).rstrip() + "\n"
    src = SOL.read_text(encoding="utf-8")
    # 기존 동일 key 제거
    removed = 0
    for key in new:
        pat = re.compile(r'^"' + re.escape(key) + r'":\s*\{\s*answer:.*?^` \},\n\n?', re.S | re.M)
        src, n = pat.subn("", src)
        removed += n
    tail = src.rstrip()
    assert tail.endswith("};"), "solutions.js 는 `};` 로 끝나야 한다"
    body = tail[:-2].rstrip() + "\n\n" + "\n".join(new[k] for k in sorted(new)) + "};\n"
    SOL.write_text(body, encoding="utf-8")
    print(f"{len(files)}개 파일 · {len(new)}개 엔트리 병합 (교체 {removed}) → {SOL}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
