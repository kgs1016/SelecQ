/* SelecQ 라우팅 Worker
 *
 * 왜 필요한가:
 *   정적 자산만 쓰던 시절에는 not_found_handling: "single-page-application" 로
 *   없는 경로를 전부 index.html(200)로 넘겼다. 클린 URL(/q/…, /find)에는 맞지만,
 *   문제 이미지 같은 자산이 빠져도 200 + text/html 이 돌아와 서버는 "정상"이라
 *   답하고 사용자 화면에서만 이미지가 깨졌다. 상태코드 모니터링으로 잡히지 않는다.
 *
 * 무엇을 하는가:
 *   실제로 존재하는 자산은 이 Worker를 거치지 않고 자산 서버가 바로 응답한다
 *   (run_worker_first 미설정 = 기본값). 여기까지 온 요청은 "매칭되는 자산이 없다"는
 *   뜻이므로 둘로 나눈다.
 *     - 마지막 경로 세그먼트에 확장자가 있음 → 없는 파일 → 진짜 404
 *     - 확장자 없음 → 클린 URL 라우트 → index.html (기존 SPA 동작 유지)
 *
 * 주의: 문항 key(예: 2022_csat/common/q01)에는 점이 없어 자산으로 오인되지 않는다.
 *       key 규칙에 점을 넣게 되면 이 판정을 함께 고쳐야 한다.
 */

const HAS_EXT = /\.[a-z0-9]+$/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const last = url.pathname.split("/").pop() || "";

    if (HAS_EXT.test(last)) {
      return new Response("Not Found\n", {
        status: 404,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", url.origin), { method: "GET" }));
  },
};
