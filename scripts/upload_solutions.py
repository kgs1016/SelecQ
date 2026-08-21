# -*- coding: utf-8 -*-
r"""solutions_seed.ndjson 을 Supabase public.solutions 로 올린다.

준비
    1) Supabase 대시보드 → SQL Editor 에서 supabase/solutions_schema.sql 실행
    2) service_role 키를 환경변수로 준다 (대시보드 → Project Settings → API)

사용법
    # PowerShell
    $env:SUPABASE_SERVICE_KEY = "eyJ..."
    python scripts/upload_solutions.py

    python scripts/upload_solutions.py --verify   # 올리지 않고 RLS 만 점검

⚠️ service_role 키는 RLS 를 통째로 무시하는 키다. 커밋하거나 화면에 남기지 말 것.
   그래서 명령줄 인자가 아니라 환경변수로 받는다(명령줄은 셸 기록에 남는다).

--verify 가 하는 일
    공개용 anon 키로 실제 요청을 보내 RLS 가 작동하는지 본다. 이게 통과해야
    "유료 해설이 서버에서 막힌다"고 말할 수 있다.
      · 무료 행은 비로그인으로도 읽혀야 한다
      · 유료 행은 비로그인에게 0건이어야 한다
"""
import io
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SEED = ROOT / "supabase" / "solutions_seed.ndjson"
BATCH = 50            # html 이 커서(평균 ~1.3KB) 한 번에 50행이면 요청당 ~65KB
sys.stdout.reconfigure(encoding="utf-8")


def read_config():
    """webapp/config.js 에서 url·anonKey 를 읽는다 (공개값이라 커밋되어 있다)."""
    t = (ROOT / "webapp" / "config.js").read_text(encoding="utf-8")
    url = re.search(r'url:\s*"([^"]+)"', t).group(1)
    anon = re.search(r'anonKey:\s*"([^"]+)"', t).group(1)
    return url.rstrip("/"), anon


def call(url, key, method="GET", body=None, extra=None, bearer=None):
    req = urllib.request.Request(url, method=method)
    req.add_header("apikey", key)
    req.add_header("Authorization", "Bearer " + (bearer or key))
    req.add_header("Content-Type", "application/json")
    for k, v in (extra or {}).items():
        req.add_header(k, v)
    data = json.dumps(body, ensure_ascii=False).encode("utf-8") if body is not None else None
    try:
        with urllib.request.urlopen(req, data, timeout=60) as r:
            raw = r.read().decode("utf-8")
            return r.status, r.headers, (json.loads(raw) if raw.strip() else None)
    except urllib.error.HTTPError as e:
        return e.code, e.headers, e.read().decode("utf-8", "replace")


def verify(base, anon):
    """공개 키로 RLS 를 실증한다."""
    print("RLS 점검 (공개 anon 키, 비로그인 상태)")
    ok = True

    st, _, body = call("%s/rest/v1/solutions?tier=eq.free&select=key&limit=3" % base, anon)
    n = len(body) if isinstance(body, list) else 0
    print("  무료 행 조회 : %s  %d건  %s" % (st, n, "OK" if st == 200 and n > 0 else "← 이상"))
    ok &= (st == 200 and n > 0)

    # 404(표 없음)를 "막혔다"로 읽으면 안 된다 — 확인이 안 된 것이지 통과가 아니다.
    # 진짜 통과는 "요청은 성공했는데(200) 행이 0건"이다.
    st, _, body = call("%s/rest/v1/solutions?tier=eq.paid&select=key&limit=3" % base, anon)
    n = len(body) if isinstance(body, list) else 0
    good = (st == 200 and n == 0)
    print("  유료 행 조회 : %s  %d건  %s" % (
        st, n, "OK — RLS가 막음" if good else ("← 샌다!" if n else "← 표 없음/확인 불가")))
    ok &= good

    st, _, body = call("%s/rest/v1/subscriptions?select=user_id" % base, anon)
    n = len(body) if isinstance(body, list) else 0
    good = (st == 200 and n == 0)
    print("  구독표 조회  : %s  %d건  %s" % (
        st, n, "OK" if good else ("← 샌다!" if n else "← 표 없음/확인 불가")))
    ok &= good

    # 구독표에 스스로 쓰기가 되면 누구나 구독자가 된다 — 정책이 없어 거절(401/403)되어야 한다.
    # 404 는 표가 없다는 뜻이라 여기서도 통과로 치지 않는다.
    st, _, _ = call("%s/rest/v1/subscriptions" % base, anon, "POST",
                    [{"user_id": "00000000-0000-0000-0000-000000000000",
                      "status": "active", "source": "hack"}])
    good = st in (401, 403)
    print("  구독 위조 시도: %s  %s" % (
        st, "OK — 거절됨" if good else ("← 뚫린다!" if st < 400 else "← 표 없음/확인 불가")))
    ok &= good

    print("\n%s" % ("✅ RLS 정상" if ok else "❌ 정책을 다시 볼 것"))
    return ok


def main():
    base, anon = read_config()
    print("대상: %s\n" % base)

    if "--verify" in sys.argv:
        sys.exit(0 if verify(base, anon) else 1)

    svc = os.environ.get("SUPABASE_SERVICE_KEY", "").strip()
    if not svc:
        print("SUPABASE_SERVICE_KEY 환경변수가 없다.")
        print('  PowerShell:  $env:SUPABASE_SERVICE_KEY = "eyJ..."')
        sys.exit(1)
    if not SEED.exists():
        print("시드가 없다: %s\n  먼저: python scripts/split_solutions.py" % SEED)
        sys.exit(1)

    rows = [json.loads(l) for l in io.open(SEED, encoding="utf-8") if l.strip()]
    print("시드 %d행 (free %d / paid %d)" % (
        len(rows),
        sum(1 for r in rows if r["tier"] == "free"),
        sum(1 for r in rows if r["tier"] == "paid")))

    sent = 0
    for i in range(0, len(rows), BATCH):
        chunk = rows[i:i + BATCH]
        st, _, body = call(
            "%s/rest/v1/solutions" % base, svc, "POST", chunk,
            # 같은 key 가 이미 있으면 덮어쓴다 — 해설을 고친 뒤 다시 돌릴 수 있어야 한다
            {"Prefer": "resolution=merge-duplicates,return=minimal"})
        if st not in (200, 201, 204):
            print("\n실패 (%d행째): %s\n%s" % (i, st, str(body)[:400]))
            sys.exit(1)
        sent += len(chunk)
        print("\r  올림 %d/%d" % (sent, len(rows)), end="")
    print("\n")

    st, hdr, _ = call("%s/rest/v1/solutions?select=key" % base, svc,
                      extra={"Prefer": "count=exact", "Range": "0-0"})
    print("DB 행 수: %s" % (hdr.get("Content-Range") or "?"))
    print()
    verify(base, anon)


if __name__ == "__main__":
    main()
