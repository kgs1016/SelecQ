/* SelecQ Supabase 설정
 * Supabase 대시보드 → Project Settings → API 에서 아래 두 값을 복사해 넣으세요.
 *   - url     : Project URL (예: https://abcd1234.supabase.co)
 *   - anonKey : anon public 키 (브라우저 공개용, 커밋 정상)
 *
 * ⚠️ service_role 키는 절대 여기에 넣지 마세요(서버 전용, 유출 시 전체 데이터 접근 가능).
 * 설정 전(placeholder 상태)에는 로그인 UI가 비활성화되고, 앱은 지금처럼 비로그인으로 정상 동작합니다.
 */
window.SB_CONFIG = {
  url: "https://kvaeusnnjmucpucskudk.supabase.co",
  anonKey: "sb_publishable_jy6231plFB8Td0k7tdOu8w_QgirvnOA"
};

// placeholder가 남아 있으면 "미설정"으로 간주 → 앱이 로그인 기능을 끄고 비로그인으로 동작
window.SB_CONFIGURED = !/YOUR-/.test(window.SB_CONFIG.url + window.SB_CONFIG.anonKey);
