# Source Validation Report — 기출문제 소스 검증 보고서

- **프로젝트**: Korean High School Exam Data Validation (기출문제 웹앱)
- **검증 일시 (fetched_at)**: 2026-07-18
- **검증 범위**: 소스 레지스트리 9개 소스, 소스당 최대 3개 게시물 샘플링
- **검증 방법**: 일반 HTTP 요청(WebFetch) + 실제 브라우저(EBSi WAF 확인, DOM 구조 추출)
- **준수 사항**: 파일 다운로드 0건 / 병렬 부하 요청 없음(호스트당 순차 1~2회) / EBSi AJAX API는 요청 구조만 기록, 호출 안 함 / 재배포 기능 미구현 전제

---

## 1. 상태 분류 요약

| # | source_id | source_name | 상태 | 일반 HTTP | 로그인 | robots/약관 리스크 |
|---|-----------|-------------|------|-----------|--------|--------------------|
| 1 | `kice_csat` | 평가원 수능 기출문제 | `SERVER_RENDERED_HTML` | ✅ | 불필요 | ⚠️ 높음 (전체 Disallow) |
| 2 | `kice_mock` | 평가원 수능 모의평가 | `SERVER_RENDERED_HTML` | ✅ | 불필요 | ⚠️ 높음 (동일) |
| 3 | `kice_static_sample` | 2027 6월 모평 정적 페이지 | `STATIC_HTML` ★파서 테스트 최적 | ✅ | 불필요 | 낮음 (robots 없음) |
| 4 | `kice_2028_sample` | 2028 수능 예시문항 | `SERVER_RENDERED_HTML` (동일 템플릿 추정) | ✅ | 불필요 | ⚠️ 높음 (동일) |
| 5 | `ebsi_grade3` | EBSi 고3·N수 기출 | `API_BACKED` (일반 HTTP는 `BLOCKED`) | ❌ WAF | 목록: 불필요 / 다운로드: **미확인** | ⚠️ 중간 (약관 미검토) |
| 6 | `ebsi_grade2` | EBSi 고2 기출 | `API_BACKED` (추정, targetCd=D200) | ❌ | 동일 | 동일 |
| 7 | `ebsi_grade1` | EBSi 고1 기출 | `API_BACKED` (추정, targetCd=D100) | ❌ | 동일 | 동일 |
| 8 | `seoul_exam_archive` | 서울시교육청 학평자료실 | `SERVER_RENDERED_HTML` | ✅ | 불필요 | ⚠️ 중간 (파일 확장자 Disallow) |
| 9 | `ebsi_english_listening` | 전국 영어듣기능력평가 | `API_BACKED` | ❌ WAF | 미확인 | 동일 (EBSi) |

> 추정 표기(4, 6, 7번): 동일 호스트·동일 템플릿이므로 요청을 최소화하기 위해 대표 페이지 1개만 실측하고 나머지는 추정. 크롤러 구현 시 각 1회 실측으로 확정할 것.

---

## 2. 소스 그룹별 12개 체크 상세

### 2-1. 평가원 게시판 (suneung.re.kr — 소스 1, 2, 4)

| 체크 | 결과 |
|------|------|
| 1. 일반 HTTP 응답 | **예.** JS 없이 목록·상세 모두 완전 노출 |
| 2. Playwright 필요 | **아니오** |
| 3. 로그인/쿠키 | **불필요** |
| 4. robots/약관 | ⚠️ `User-agent: * / Disallow: /` — **전체 크롤링 금지 선언.** 저빈도·수동 트리거 수집으로 제한하고, KICE에 이용 문의 권장 |
| 5. 페이지네이션 | GET — `list.do?type=default&page=N&boardID=...` |
| 6. 검색 필터 | GET — 학년도·영역 코드 파라미터(`C01`류) |
| 7. 상세 URL 추출 | **안정적.** `view.do?boardID=<id>&boardSeq=<게시물번호>` (목록의 JS 링크에서 boardSeq 파싱). 실측 예: boardSeq=5093801 |
| 8. 파일 URL 추출 | **가능.** `/boardCnts/fileDown.do?fileSeq=<32자리 해시>` — PDF(문제지/정답표). 실측 예: `fileDown.do?fileSeq=60defdef6d83db1b756f841089563c5a` |
| 9. URL 영구성 | 해시 기반 → **영구 추정** (세션 토큰 아님). 404 시 재수집 로직 권장 |
| 10. 메타데이터 구조화 | **가능.** 게시판 구분(boardID)과 제목에서 학년도·영역·시행월(모평 게시판은 6월/9월 명시) 추출 |
| 11. 중복 식별 | KICE = **원본(primary)**. 복합키 `(학년도, 시행월, 시험종류, 과목)`으로 EBSi 항목과 dedup |
| 12. 출처·저작권 저장 | 가능. rights_status: `"KICE 저작권 표기(ALL RIGHTS RESERVED), 공공누리 미표기, 재배포 불가 전제"` |

### 2-2. cdn2 정적 페이지 (소스 3) — 파서 테스트 최적

- **구조**: 순수 정적 HTML + jQuery(`common/control.js`). 다운로드 셀은 `<div class="pdf file" value="suneung27mo06_1.pdf">` 형태(앵커 아님, JS 클릭 바인딩)
- **파일명 규칙 (완전 예측 가능)**: base `https://cdn2.kice.re.kr/suneung27mo06/`
  - 문제지: `suneung27mo06_<교시번호>.pdf`
  - 정답: `suneung27mo06_<교시번호>a.pdf`
- **커버리지**: 국어·수학·영어·한국사·사탐 9과목·과탐 8과목·직탐 6과목·제2외/한문 9과목이 한 페이지에 정리. 영어듣기 음성/대본 열 존재
- **robots**: 없음(요청 시 400) → 제한 신호 없음
- **의의**: URL 패턴이 규칙적이고 영구적이라 **최초 파서·스키마 검증용으로 최적**. 다른 회차도 `suneung<YY>mo<MM>` 패턴일 가능성 높음(구현 시 확인)

### 2-3. EBSi (소스 5, 6, 7, 9)

| 체크 | 결과 |
|------|------|
| 1. 일반 HTTP 응답 | **차단.** 웹방화벽(WAF)이 비브라우저 요청을 차단 — robots.txt 요청조차 차단됨 |
| 2. Playwright 필요 | **필수.** 실제 브라우저에서는 로그인 없이 정상 로드 확인 |
| 3. 로그인/쿠키 | 목록 열람: 불필요. **다운로드 버튼 클릭 시 로그인 요구 여부 미확인**(다운로드 금지 준수로 클릭 테스트 안 함) → MANUAL_REVIEW |
| 4. robots/약관 | robots 확인 불가(차단). 하단에 이용약관·저작권침해제보 메뉴 존재 → **약관 수동 검토 필요** |
| 5. 페이지네이션 | JS `goPage(N)` → **POST** `pagingForm` → `/ebs/xip/xipc/previousPaperListAjax.ebs` |
| 6. 검색 필터 | **POST** 폼 — 시행연도(2021–2026)·시행월(3~12월)·과목 코드. 목록 자체가 `paperListFrm` POST → `previousPaperListAjax.ebs` |
| 7. 상세 URL 추출 | 별도 상세 페이지 없음 — 목록에서 바로 버튼. 시험 단위 ID 존재: `paperOn('27171684', '고3 7월 학평(인천)언어와 매체', '0', '2026')` |
| 8. 파일 URL 추출 | **가능(DOM에서).** 문제: `goDownLoadP('/20260708/go3/korB_mun_NA5G12DA.pdf', ...)` / 정답: `https://wdown.ebsi.co.kr/W61001/01exam/20260708/mobile/h3_m_korB_ans_84XKE7C9_1.png` (**PNG 이미지**) / 듣기: `https://wdown.ebsi.co.kr/engexam/2026/2026_eng_01_go3/2026_eng_01_go3_mp3_M14N856W.mp3` |
| 9. URL 영구성 | 날짜 기반 경로(`/20260708/go3/`) + **랜덤 토큰 파일명**(`NA5G12DA`) → 추측 불가. **준영구**로 취급, URL은 저장하되 404 시 페이지에서 재추출 |
| 10. 메타데이터 구조화 | **가능.** 제목 패턴 `"고3 7월 학평(인천) 언어와 매체"` → 학년/월/시행기관/과목. 필터 코드(연도·월·과목)도 존재 |
| 11. 중복 식별 | EBSi의 6·9월 모평/수능 항목 = KICE 원본과 동일 시험. **시행기관 필드**(평가원/교육청)로 구분하고, EBSi는 부가자료(해설 PDF·등급컷·오답률·듣기 MP3) 보조 소스로 활용 |
| 12. 출처·저작권 저장 | 가능. rights_status: `"EBS 저작권, 약관 미검토, 재배포 불가 전제"` |

> **경쟁 정보 (사업 분석 반영)**: EBSi에 이미 `응시하기`(온라인 CBT), 모의고사 오답노트, 역대 등급컷, 오답률 TOP15, 해설강의가 존재한다. "온라인에서 바로 풀기" 단독으로는 차별화가 안 되며, **유형별 문항 단위 필터링·개인화**가 차별화 축이 되어야 함.

### 2-4. 서울시교육청 학평자료실 (소스 8)

| 체크 | 결과 |
|------|------|
| 1–3. HTTP/JS/로그인 | 일반 HTTP OK, JS 불필요, 로그인 불필요 |
| 4. robots/약관 | ⚠️ 전반 `Allow: /`이나 **pdf·hwp·zip 등 파일 확장자 Disallow** + 대상 게시판(q_bbsSn=1036)이 명시 허용 목록(1073–1078) 밖. **목록 조회는 무방, 파일 자동 다운로드는 보수적으로** |
| 5. 페이지네이션 | 표준 게시판 번호 링크(GET 추정) |
| 6. 검색 필터 | 게시판 검색 폼 |
| 7. 상세 URL | 상세 페이지 없음 — 목록에 첨부파일 바로 노출 |
| 8. 파일 URL 추출 | **가능.** `/component/file/ND_fileDownload.do?q_fileSn=<n>&q_fileId=<id>` (zip) |
| 9. URL 영구성 | fileSn/fileId 기반 → 영구 추정 |
| 10. 메타데이터 구조화 | **완벽.** 제목 예: `"2026년 7월 고3 전국연합학력평가 정답표 및 정답해설"` → 연도/월/학년 모두 포함 |
| 11. 중복 식별 | 학평 원본 소스. EBSi 학평 항목과 복합키 dedup |
| 12. 출처·저작권 저장 | 가능. **정답표·통계·분석자료 중심**(문제지 본문은 EBSi 쪽에 있음) |

---

## 3. 권장 수집 전략

| 소스 그룹 | 도구 | 빈도/방식 |
|-----------|------|-----------|
| KICE 게시판 (1,2,4) | requests(단일 스레드, 요청 간 딜레이) | **저빈도·수동 트리거만.** robots 전체 Disallow → 자동 정기 크롤링 금지, KICE 문의 후 확정 |
| cdn2 정적 (3) | requests | 파서·스키마 최초 검증용. 회차별 1회 수집이면 충분 |
| EBSi (5,6,7,9) | **Playwright** (WAF 우회 불가피) | 목록 메타데이터 인덱싱 위주. 파일 다운로드는 로그인 요건 수동 확인 후 결정 |
| 서울교육청 (8) | requests | 목록 메타데이터 수집 OK. 파일 다운로드는 robots 해석 확정 후 |

공통 원칙: 요청 간 딜레이(≥2초), 병렬 요청 금지, User-Agent에 연락처 명시, 실패 시 지수 백오프, `previousPaperListAjax.ebs` 반복 호출 금지.

---

## 4. 공통 DB 스키마 제안

```
exams (시험 단위)
  id, academic_year, exam_year, exam_month, grade,
  organizer            -- 'KICE' | 'EDUCATION_OFFICE(지역)' 
  exam_type            -- 'CSAT' | 'KICE_JUNE' | 'KICE_SEPTEMBER' | 'MOCK' | 'LISTENING' | 'CSAT_SAMPLE'
  UNIQUE(academic_year, exam_month, exam_type, grade)   -- dedup 복합키

exam_assets (파일 단위)
  id, exam_id, subject_area, subject,
  asset_type           -- 'question_pdf' | 'answer_pdf' | 'answer_png' | 'explanation_pdf' | 'audio_mp3' | 'transcript' | 'stats_zip'
  file_url,            -- 다운로드 URL (EBSi는 준영구 취급)
  url_stability,       -- 'permanent' | 'semi_permanent'
  -- 필수 4개 필드 (모든 레코드 공통)
  source_url,          -- 수집한 페이지 URL
  source_name,         -- 'kice_csat' 등 registry id
  fetched_at,          -- ISO8601
  rights_status        -- 아래 값 사용
```

**rights_status 값**:
- KICE: `"KICE 저작권 표기, 공공누리 미표기, 재배포 불가 전제, robots 전체 Disallow"`
- EBSi: `"EBS 저작권, 약관 미검토, 재배포 불가 전제"`
- 서울교육청: `"교육청 자료, robots 파일확장자 제한, 재배포 불가 전제"`

**dedup 규칙**: 같은 `(학년도, 시행월, 시험종류, 과목)`이면 KICE를 원본으로 등록하고 EBSi 자산은 동일 exam_id에 부가 asset으로 연결한다. 학평은 교육청(서울)=원본 메타데이터, EBSi=문제지·해설 asset.

---

## 5. 법적·정책 유의사항

1. **suneung.re.kr robots 전체 Disallow** — 가장 큰 리스크. 기출문제 자체는 공공 공개 자료이나 공공누리 표기가 없어 "자유이용" 근거가 명시적이지 않음. → 서비스 공개 전 KICE에 이용 범위 문의 권장. 그 전까지는 저빈도 수동 수집 + **원문 재배포 대신 원본 링크 제공** 방식 우선
2. **재배포 기능 미구현** — 문제 원문을 그대로 재배포하는 기능은 만들지 않는다(레지스트리 방침 확정)
3. **EBSi 약관 미검토** — 이용약관·저작권 페이지 수동 검토 전까지 EBSi 파일 다운로드 자동화 보류
4. **서울교육청 robots** — 파일 확장자 Disallow를 존중해 파일 자동 다운로드는 보수적으로 접근

---

## 6. MANUAL_REVIEW 잔여 항목

- [ ] EBSi `goDownLoadP` 클릭 시 로그인 요구 여부 (브라우저에서 수동 1회 확인)
- [ ] EBSi 이용약관·저작권 정책 페이지 정독
- [ ] 서울교육청 robots의 q_bbsSn=1036 게시판 해석 (필요시 교육청 문의)
- [ ] KICE 기출문제 이용 범위 공식 문의 (재배포/2차 가공 가능 여부)
- [ ] 추정 처리한 소스(kice_2028, ebsi_grade1/2)의 실측 1회 확정
- [ ] cdn2 다른 회차 URL 패턴(`suneung<YY>mo<MM>` 추정) 확인
