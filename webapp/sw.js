/* SelecQ 서비스워커
 *
 * 목표: 아이패드에서 홈 화면에 추가해 앱처럼 쓰고(오프라인 포함), 안드로이드 크롬에서
 *       설치 배너가 뜨게 한다(설치 가능 조건 = manifest + fetch 핸들러를 가진 서비스워커).
 *
 * 캐싱 전략을 자산 종류별로 나눈 이유:
 *
 *  1) 내비게이션(=index.html) → 네트워크 우선
 *     index.html 은 app.js?v=… 처럼 "어느 버전을 쓸지" 가리키는 파일이다. 이걸 캐시 우선으로
 *     두면 배포해도 사용자에게 영원히 옛 버전이 나가는 사고가 난다(PWA 최다 사고 유형).
 *     그래서 온라인이면 항상 새로 받고, 오프라인일 때만 캐시본으로 떨어진다.
 *
 *  2) ?v= 가 붙은 정적 자산(app.js·styles.css·data.js·solutions.js) → 캐시 우선
 *     버전이 바뀌면 URL 자체가 바뀌므로 캐시 우선이 안전하고 가장 빠르다.
 *
 *  3) 문제·해설 이미지(/q/, /sol/) → 캐시 우선 + 개수 제한
 *     전체가 37MB라 프리캐시가 불가능하다. 사용자가 실제로 본 문제만 담고 상한을 둔다.
 *
 *  4) Supabase → 절대 캐시하지 않음
 *     인증 토큰과 동기화 응답을 캐시하면 계정이 섞이거나 옛 기록이 되살아난다.
 *
 * 문제가 생겼을 때: index.html 이 네트워크 우선이므로, 서비스워커를 unregister 하는
 * index.html 을 배포하면 사용자를 되돌릴 수 있다. sw.js 자체도 max-age=0 으로 나간다.
 */

const VERSION = "20260820a";
const SHELL = "selecq-shell-" + VERSION;     // 오프라인 진입점(index.html)
const STATIC = "selecq-static-" + VERSION;   // ?v= 버전 고정 자산 + CDN
const IMAGES = "selecq-img-" + VERSION;      // 문제·해설 이미지
const IMAGE_MAX = 400;                       // 이미지 캐시 상한(장)

const OFFLINE_KEY = "/";   // 모든 클린 URL 이 같은 index.html 을 받으므로 하나로 갈음

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    await cache.addAll([OFFLINE_KEY, "/manifest.json", "/icon-192.png", "/icon-512.png"]);
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keep = [SHELL, STATIC, IMAGES];
    for (const name of await caches.keys()) {
      if (name.startsWith("selecq-") && !keep.includes(name)) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  // index.html 이 즉시 갱신을 요청할 때만 대기 중인 워커를 활성화한다.
  if (event.data === "skip-waiting") self.skipWaiting();
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  if (url.origin !== self.location.origin) {
    // Supabase(인증·동기화)는 건드리지 않는다. CDN(Pretendard·KaTeX)은 URL에 버전이 박혀 있어 캐시 가능.
    if (url.hostname === "cdn.jsdelivr.net") event.respondWith(cacheFirst(req, STATIC, false, true));
    return;
  }

  if (req.mode === "navigate") { event.respondWith(networkFirstDoc(req)); return; }

  if (url.pathname.startsWith("/q/") || url.pathname.startsWith("/sol/")) {
    event.respondWith(cacheFirst(req, IMAGES, true, false));
    return;
  }

  event.respondWith(cacheFirst(req, STATIC, false, false));
});

async function networkFirstDoc(req) {
  try {
    const res = await fetch(req);
    if (res && res.ok) {
      const cache = await caches.open(SHELL);
      await cache.put(OFFLINE_KEY, res.clone());   // 오프라인 폴백을 항상 최신으로
    }
    return res;
  } catch (e) {
    const cached = await caches.match(OFFLINE_KEY, { cacheName: SHELL });
    if (cached) return cached;
    return new Response("오프라인이라 페이지를 불러올 수 없습니다.", {
      status: 503, headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }
}

async function cacheFirst(req, cacheName, trim, allowOpaque) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;

  let res;
  try { res = await fetch(req); } catch (e) { return Response.error(); }

  // 404 는 캐시하지 않는다. 없는 이미지를 캐시하면 나중에 파일을 올려도 계속 안 보인다.
  // opaque(status 0)는 CDN 스타일시트처럼 no-cors 로 받은 응답 — 오프라인 수식 렌더링을 위해 CDN만 허용.
  const cacheable = res && (res.ok || (allowOpaque && res.type === "opaque"));
  if (cacheable) {
    await cache.put(req, res.clone());
    if (trim) trimCache(cacheName, IMAGE_MAX);
  }
  return res;
}

async function trimCache(cacheName, max) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length <= max) return;
    for (const k of keys.slice(0, keys.length - max)) await cache.delete(k);   // 오래된 것부터
  } catch (e) { /* 정리 실패는 무시 — 동작에 영향 없음 */ }
}
