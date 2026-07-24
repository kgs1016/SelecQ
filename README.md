# SelecQ

**평가원 수학 기출을 단원·유형·난이도로 골라 푸는 무료 학습 웹앱**

🔗 **[https://selecq.com](https://selecq.com)**

평가원(한국교육과정평가원)과 시·도 교육청이 공개한 수학 기출문제를 단원·유형·난이도로 필터링해서, 원하는 문항만 골라 나만의 모의고사를 만들고, 회차별 실전 모의고사를 타이머와 함께 풀며, 오답·풀이 기록을 자동으로 관리하는 도구입니다. 태블릿 필기(애플펜슬)를 지원합니다.

---

## ✨ 주요 기능

- **문제 찾기** — 과목·단원·유형(40개 체계)·학년도·시험·배점·난이도·풀이상태로 조건을 좁혀 순서대로 풀이
- **나만의 모의고사** — 원하는 문항을 골라 담아(바스켓) 세트 구성 → 타이머와 함께 응시 · 조건별 랜덤 출제
- **회차별 실전** — 학년도·시험(수능/6·9월) 선택 → 공통 22 + 선택 8 = 30문항, 100분 타이머 실전 모드
- **오답 노트 · 풀이 기록** — 채점 결과 자동 기록, 통계(푼 문제·정답률), 선택 삭제
- **난이도 필터** — 실제 응시생 정답률(메가스터디) 기반 상/중/하
- **태블릿 필기** — 문제 위 투명 캔버스 + 넓은 필기 공간, 애플펜슬 필기 / 손가락 스크롤(팜리젝션)
- **PWA** — 홈 화면 설치 시 주소창 없는 standalone 실행
- **로그인 & 클라우드 동기화** — 카카오·구글 로그인(선택형), 기기 간 기록·필기 동기화. **비로그인으로도 완전 동작**(localStorage)

---

## 🛠 기술 스택

| 영역 | 사용 기술 |
|------|-----------|
| 프론트엔드 | **바닐라 JS SPA** (프레임워크·빌드 스텝 없음) — `index.html` + `app.js` + `styles.css` + `data.js` |
| 라우팅 | History API 클린 URL (`/find`, `/custom`, `/q/…`) |
| 데이터 | 정적 `data.js`(문항 메타데이터 736건) + `q/` 크롭 이미지 |
| 인증·동기화 | **Supabase**(Postgres + Auth + RLS) — 카카오·구글 OAuth |
| 배포 | **Cloudflare Workers**(정적 자산) + Git 연동 CI 빌드, 도메인 `selecq.com` |
| 폰트 | Pretendard (jsDelivr CDN) |
| 데이터 파이프라인 | Python (수집·크롭·태깅·빌드) |

빌드 도구·번들러·`node_modules` 없이, `webapp/`를 그대로 서빙하는 순수 정적 사이트입니다.

---

## 📁 저장소 구조

```
Problem_Select/
├─ webapp/                  # 배포되는 정적 사이트 (이 폴더만 서빙)
│  ├─ index.html            # 앱 셸 + SEO/OG 메타 + JS를 못 읽는 크롤러용 정적 소개
│  ├─ app.js                # SPA 전체 로직 (라우터·필터·풀이·필기·모의고사·동기화)
│  ├─ styles.css
│  ├─ data.js               # window.APP_DATA — 문항 메타데이터 (생성물)
│  ├─ config.js             # Supabase URL + anon(공개) 키
│  ├─ manifest.json         # PWA
│  ├─ q/                    # 문항 크롭 이미지 736장
│  ├─ robots.txt · sitemap.xml · og-image.png · icon-*.png
├─ scripts/                 # 데이터 파이프라인 (Python)
├─ data/
│  ├─ meta/                 # 중간 산출물 (정답·유형·난이도·정답률 JSON)
│  ├─ raw/                  # 원본 기출 PDF (gitignore — 미포함)
│  └─ questions/            # 원본 크롭 (webapp/q 와 중복, gitignore)
├─ supabase/schema.sql      # 클라우드 동기화 DB 스키마 (RLS 포함)
├─ wrangler.jsonc           # Cloudflare 배포 설정 (SPA 폴백)
├─ review.html              # 유형 검수용 내부 도구
└─ *.md                     # 기획·검증 문서 (mvp-scope, source-validation 등)
```

### 문항 데이터 스키마 (`data.js`)

```js
{
  img: "q/2022_csat_common_q01.png",
  key: "2022_csat/common/q01",
  year: 2022, exam: "csat", examLabel: "2022학년도 수능",
  subject: "common",          // common | prob_stat | calculus | geometry
  qno: 1, points: 2, answer: 2,
  unit: "su1_explog",         // 단원
  type: "su1_explog_calc",    // 유형 (taxonomy.json 40종)
  difficulty: "하",            // 상 | 중 | 하 (메가 정답률 기반)
  correctRate: 90,
  reviewStatus: "human_confirmed",
  postUrl: "https://www.suneung.re.kr/…",  // 평가원 원문 게시글
  pdfUrl:  "https://www.suneung.re.kr/…"   // 원본 PDF 다운로드
}
```

---

## 🔧 데이터 파이프라인

원본 PDF → 웹앱 데이터까지 `scripts/`의 Python 스크립트로 생성합니다.

| 스크립트 | 역할 |
|----------|------|
| `scrape_kice.py` | 평가원 게시판에서 기출·모평 PDF 수집 |
| `parse_answers.py` | 정답표 파싱 → `answers.json` |
| `extract_questions.py` | PDF에서 문항 단위 크롭 → PNG |
| `extract_texts.py` | 문항 텍스트 추출 |
| `auto_tag.py` / `merge_tags.py` | `taxonomy.json`(40유형) 기반 유형 자동 태깅 |
| `build_review_ui.py` → `review.html` | 사람 검수 UI 생성 |
| `apply_corrections.py` | 검수 결과 반영 |
| `build_difficulty.py` | 메가스터디 정답률 → `difficulty.json` (상/중/하) |
| `build_webapp_data.py` | 위 메타를 합쳐 **`webapp/data.js` 생성** |
| `check_crops.py` | 크롭 검증 |

> 문항 태깅은 자동 분류 후 **사람 검수**를 거칩니다(정답률 기반 med 등급 자동정확도가 낮아 필수). 최종 736문항 = human_confirmed + ai_confirmed + auto_high.

---

## 💻 로컬 개발

빌드가 없어서 `webapp/`를 로컬 서버로 서빙하면 됩니다. (`<base href="/">` 때문에 `file://` 직접 열기는 안 되고 **서버가 필요**합니다.)

```bash
cd webapp
python -m http.server 8000
# → http://localhost:8000/
```

> `data.js`를 다시 만들려면 데이터 파이프라인(`scripts/build_webapp_data.py`)을 실행합니다.
> 코드 수정 시 `index.html`의 `app.js?v=`·`styles.css?v=` 캐시버전을 올려야 사용자에게 반영됩니다.

---

## 🚀 배포

**Cloudflare Workers**(정적 자산) + **GitHub 연동 CI 빌드**. `main`에 push하면 자동 배포됩니다.

```bash
git add -A && git commit -m "..." && git push
```

- 배포 설정: `wrangler.jsonc` — `assets.directory: webapp`, `not_found_handling: "single-page-application"`(클린 URL 새로고침·딥링크 시 `index.html` 서빙)
- 도메인 `selecq.com`은 Cloudflare Registrar 등록 + Worker 커스텀 도메인 연결(DNS·SSL 자동)
- ⚠️ Git 웹훅이 드물게 특정 푸시를 건너뛸 수 있음 → 라이브 미반영 시 빈 커밋 재푸시(`git commit --allow-empty`)로 재트리거

---

## 🔐 로그인 & 클라우드 동기화

- **Supabase** 기반. 카카오·구글 OAuth, **선택형**(로그인 안 해도 전 기능 동작).
- 설정은 `webapp/config.js`(Project URL + anon 공개 키 — 커밋 정상). placeholder면 로그인 UI 자동 비활성화.
- DB(`supabase/schema.sql`):
  - `user_state` — 기록·모의고사·바스켓·필터 등 소량 상태(jsonb 통짜)
  - `user_drawings` — 필기(문항별 행, 변경분만 upsert)
  - 모든 접근은 **Row Level Security**(`auth.uid() = user_id`)로 격리
- 동기화: 기록=문항별 타임스탬프 union(양쪽 진도 보존), 나머지=LWW, 로드/재접속 시 pull.

---

## 📄 데이터 출처 및 저작권

- 기출문제의 저작권은 **한국교육과정평가원(KICE)** 및 각 시·도 교육청에 있습니다.
- 문항 원문·정답은 각 출제기관 공식 페이지에서 확인할 수 있으며, 앱은 원본 PDF·게시글로 링크합니다.
- 난이도 참고 정답률 출처: 메가스터디.
- 본 저장소는 개인 학습용 프로젝트이며, 자료 이용 범위는 출제기관과 협의 중입니다.

---

<sub>© SelecQ · 개인 프로젝트</sub>
