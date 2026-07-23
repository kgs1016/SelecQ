# SelecQ 웹앱 소스 코드 (리뷰용 번들)

> 수능 수학 기출문제 웹앱. 클라이언트 사이드 렌더링 SPA(해시 라우팅)라 크롤링으로는 내부 화면이 안 보여서, 전체 소스를 직접 제공함.
> 파일 구성: index.html / app.js (전체 로직) / styles.css / manifest.json / data.js·solutions.js (데이터 파일 — 구조 샘플만 포함)

---

## 1. index.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SelecQ — 평가원 수학 기출, 유형별로 골라 풀기</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#2563eb">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="SelecQ">
<link rel="apple-touch-icon" href="icon-192.png">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="stylesheet" href="styles.css?v=20260722h">
</head>
<body>
<header class="topbar">
  <a class="logo" href="#/">Selec<span>Q</span></a>
  <nav>
    <a href="#/find" data-nav="filter">문제 찾기</a>
    <a href="#/custom" data-nav="custom">나만의 모의고사</a>
    <a href="#/random" data-nav="random">랜덤 출제</a>
    <a href="#/exam" data-nav="exam">실전 모의고사</a>
    <a href="#/wrong" data-nav="wrong">오답 목록</a>
    <a href="#/stats" data-nav="stats">기록</a>
  </nav>
</header>

<main id="view"></main>

<footer class="foot">
  <p>기출문제 저작권은 한국교육과정평가원(KICE)에 있으며, 본 서비스는 문항 메타데이터와 원본 링크만 제공합니다.</p>
  <p>풀이 기록은 이 브라우저에만 저장됩니다. · <a href="mailto:1212ntnt@naver.com?subject=[SelecQ] 문의">문의</a></p>
</footer>

<script src="data.js?v=20260721b"></script>
<script src="app.js?v=20260722k"></script>
</body>
</html>
```

## 2. app.js (앱 전체 로직)
```js
/* SelecQ — 필터 → 리스트 → 풀이 → 기록 (정적 SPA, 기록은 localStorage) */
(function () {
  const D = window.APP_DATA;
  const Q = D.questions;
  const TAX = D.taxonomy;
  const $ = sel => document.querySelector(sel);

  // ---------- 저장소 ----------
  const LS_REC = "ks_records", LS_FIL = "ks_filter";
  let records = JSON.parse(localStorage.getItem(LS_REC) || "{}");
  const saveRec = () => localStorage.setItem(LS_REC, JSON.stringify(records));

  const defaultFilter = () => ({
    subject: "common", units: [], types: [],
    years: [], exams: [], points: [], levels: [], status: "all", collapsed: false
  });
  const computeTouched = f => !!(f.subject !== "common" || f.units.length || f.types.length
    || f.years.length || f.exams.length || f.points.length || f.levels.length || f.status !== "all");
  // 문제 찾기/홈 필터와 나만의 모의고사 필터를 독립적으로 유지 (서로 동기화되지 않음)
  const FIL_KEY = { browse: LS_FIL, custom: "ks_cfilter" };
  const loadFil = k => Object.assign(defaultFilter(), JSON.parse(localStorage.getItem(k) || "{}"));
  const CTX = { browse: { fil: loadFil(FIL_KEY.browse) }, custom: { fil: loadFil(FIL_KEY.custom) } };
  CTX.browse.touched = computeTouched(CTX.browse.fil);
  CTX.custom.touched = computeTouched(CTX.custom.fil);
  let ctxName = "browse";
  let filter = CTX.browse.fil;
  const saveFil = () => localStorage.setItem(FIL_KEY[ctxName], JSON.stringify(filter));
  function useFilterCtx(name) {
    if (name === ctxName) return;
    CTX[ctxName].fil = filter; CTX[ctxName].touched = filterTouched;   // 현재 작업본을 이전 컨텍스트에 보관
    ctxName = name;
    filter = CTX[name].fil; filterTouched = CTX[name].touched;
  }

  // ---------- 유틸 ----------
  const SUBJECTS = { common: "공통", prob_stat: "확률과 통계", calculus: "미적분", geometry: "기하" };
  const EXAMS = { csat: "수능", mock06: "6월 모평", mock09: "9월 모평" };
  const typeName = {};
  const unitName = {};
  for (const s in TAX) for (const u of TAX[s].units) {
    unitName[u.code] = u.name;
    for (const t of u.types) typeName[t.code] = t.name;
  }
  const isMC = q => (q.subject === "common" ? q.qno <= 15 : q.qno <= 28);
  const CIRCLED = ["", "①", "②", "③", "④", "⑤"];
  const fmtAns = q => isMC(q) ? CIRCLED[q.answer] : String(q.answer);
  const recOf = q => records[q.key];

  function applyFilter() {
    return Q.filter(q => {
      if (q.subject !== filter.subject) return false;
      if (filter.units.length && !filter.units.includes(q.unit)) return false;
      if (filter.types.length && !filter.types.includes(q.type)) return false;
      if (filter.years.length && !filter.years.includes(q.year)) return false;
      if (filter.exams.length && !filter.exams.includes(q.exam)) return false;
      if (filter.points.length && !filter.points.includes(q.points)) return false;
      if (filter.levels.length && !filter.levels.includes(q.difficulty)) return false;
      const r = recOf(q);
      if (filter.status === "todo" && r) return false;
      if (filter.status === "ok" && (!r || r.r !== "ok")) return false;
      if (filter.status === "bad" && (!r || r.r !== "bad")) return false;
      return true;
    }).sort((a, b) => b.year - a.year || a.exam.localeCompare(b.exam) || a.qno - b.qno);
  }

  let currentList = [];
  let filterTouched = CTX.browse.touched;

  // ---------- 실전 모의고사 세션 ----------
  const EXAM_MIN = 100;              // 수학영역 시험시간 100분
  function loadExam() { try { return JSON.parse(localStorage.getItem("ks_exam") || "null"); } catch (e) { return null; } }
  function saveExam() { try { localStorage.setItem("ks_exam", JSON.stringify(examSession)); } catch (e) { } }
  function clearExam() { examSession = null; localStorage.removeItem("ks_exam"); if (examInterval) { clearInterval(examInterval); examInterval = null; } }
  let examSession = loadExam();     // {list:[key], endTime, answers:{key:val}, times:{key:ms}, label} 또는 null
  let examInterval = null;
  let examPick = { year: null, exam: null, elective: null };
  let examQEnter = null;            // 현재 문항 진입 시각 {key, t}

  // ---------- 나만의 모의고사(문제 조합) 상태 ----------
  const QKEYS = new Set(Q.map(q => q.key));
  let basket = (JSON.parse(localStorage.getItem("ks_basket") || "[]")).filter(k => QKEYS.has(k));
  const saveBasket = () => localStorage.setItem("ks_basket", JSON.stringify(basket));
  let customMin = 50;                // 타이머 분 (0 = 타이머 없음)
  let activeFilterRefresh = () => {};   // 현재 화면의 필터 결과 갱신 함수 (홈=updateResults / 나만의모의=updateCandidates)

  // ---------- 랜덤 출제 ----------
  // 문항당 기준시간(분): 하 2 / 중 4 / 상 10 → 합계를 5분 단위 올림(최소 5분)
  const RND_BASE = { "하": 2, "중": 4, "상": 10 };
  const autoMin = spec => Math.max(5, Math.ceil(spec.reduce((s, [lv, n]) => s + RND_BASE[lv] * n, 0) / 5) * 5);
  const RND_PRESETS = [   // spec: [난이도, 개수][] · min: 고정 시간(분)
    { emoji: "🔥", name: "킬러 미니", spec: [["상", 2]], min: 20 },
    { emoji: "🎯", name: "상 집중", spec: [["상", 3]], min: 30 },
    { emoji: "🧩", name: "중 세트", spec: [["중", 5]], min: 20 },
    { emoji: "⚡", name: "워밍업", spec: [["하", 4], ["중", 2]], min: 15 },
    { emoji: "📊", name: "실전 믹스", spec: [["하", 3], ["중", 3], ["상", 1]], min: 25 },
  ];
  const specLabel = spec => spec.map(([lv, n]) => `${lv}${n}`).join("+");
  let rndSubject = "common";
  let rndLevel = "상", rndCount = 3;   // 직접 조합 상태

  // 현재 문항 체류 시간을 누적 저장하고 진입 기록을 비운다
  function flushQTime() {
    if (examSession && examQEnter) {
      examSession.times = examSession.times || {};
      examSession.times[examQEnter.key] = (examSession.times[examQEnter.key] || 0) + (Date.now() - examQEnter.t);
      examQEnter = null;
      saveExam();
    }
  }
  window.addEventListener("beforeunload", flushQTime);

  // ---------- 렌더 공통 ----------
  function chip(label, on, cls, attrs) {
    return `<span class="chip ${cls || ""} ${on ? "on" : ""}" ${attrs}>${label}</span>`;
  }
  function setNav(name) {
    document.querySelectorAll("[data-nav]").forEach(a =>
      a.classList.toggle("active", a.dataset.nav === name));
  }

  // ---------- 문항 카드 ----------
  function qItem(q, opts) {
    const r = recOf(q);
    const st = !r ? ["none", "안 풂"] : r.r === "ok" ? ["ok", "정답"] : ["bad", "오답"];
    const check = opts && opts.check;
    return `
    <div class="qitem ${opts && opts.sel ? "sel" : ""}" data-k="${q.key}">
      ${check ? `<span class="qcheck">${opts.sel ? "☑" : "☐"}</span>` : ""}
      <div class="qno">${q.qno}번</div>
      <div class="qmeta">
        <div class="l1">${q.examLabel} · ${SUBJECTS[q.subject]} <span class="pts">[${q.points}점]</span>${q.difficulty ? ` <span class="lvbadge lv-${q.difficulty}">${q.difficulty}</span>` : ""}</div>
        <div class="l2">${typeName[q.type] || "유형 미정"} · ${unitName[q.unit] || ""}</div>
      </div>
      <span class="status ${st[0]}">${st[1]}</span>
    </div>`;
  }

  function filterSummary() {
    const parts = [SUBJECTS[filter.subject]];
    if (filter.types.length) parts.push(filter.types.map(t => typeName[t]).join(", "));
    else if (filter.units.length) parts.push(filter.units.map(u => unitName[u]).join(", "));
    if (filter.years.length) parts.push(filter.years.slice().sort().join("·"));
    if (filter.exams.length) parts.push(filter.exams.map(e => EXAMS[e]).join("·"));
    if (filter.points.length) parts.push(filter.points.slice().sort().map(p => p + "점").join("·"));
    if (filter.levels.length) parts.push("난이도 " + LEVELS.filter(l => filter.levels.includes(l)).join("·"));
    if (filter.status !== "all") parts.push({ todo: "안 푼 문제", bad: "틀린 문제", ok: "맞힌 문제" }[filter.status]);
    return parts.join(" · ");
  }

  // ---------- 홈: 한 줄 드롭다운 필터바 + 실시간 목록 ----------
  const CATS = [
    { key: "subject", label: "과목" },
    { key: "unit", label: "단원" },
    { key: "type", label: "유형" },
    { key: "years", label: "학년도" },
    { key: "exams", label: "시험" },
    { key: "points", label: "배점" },
    { key: "levels", label: "난이도" },
    { key: "status", label: "풀이상태" },
  ];
  const LEVELS = ["상", "중", "하"];
  const STATUS_LABEL = { all: "전체", todo: "안 푼 문제", bad: "틀린 문제", ok: "맞힌 문제" };
  let openCat = null;

  function catSummary(key) {
    if (key === "subject") return SUBJECTS[filter.subject];
    if (key === "unit") return filter.units.length ? `${filter.units.length}개` : "전체";
    if (key === "type") return filter.types.length ? `${filter.types.length}개` : "전체";
    if (key === "years") return filter.years.length ? (filter.years.length === 1 ? filter.years[0] : `${filter.years.length}개`) : "전체";
    if (key === "exams") return filter.exams.length ? (filter.exams.length === 1 ? EXAMS[filter.exams[0]] : `${filter.exams.length}개`) : "전체";
    if (key === "points") return filter.points.length ? filter.points.slice().sort().map(p => p + "점").join("·") : "전체";
    if (key === "levels") return filter.levels.length ? LEVELS.filter(l => filter.levels.includes(l)).join("·") : "전체";
    if (key === "status") return STATUS_LABEL[filter.status];
    return "";
  }
  function catHasSel(key) {
    if (key === "subject") return false;
    if (key === "unit") return filter.units.length;
    if (key === "type") return filter.types.length;
    if (key === "status") return filter.status !== "all";
    return filter[key] && filter[key].length;
  }

  function updateResults() {
    currentList = applyFilter();
    const sp = $("#searchpane");
    if (!sp) return;
    // 과목만 고른 상태에선 '풀기'를 띄우지 않음 — 단원·유형·난이도 등으로 좁혀야 노출(찾는 흐름 유도)
    const narrowed = filter.units.length || filter.types.length || filter.years.length
      || filter.exams.length || filter.points.length || filter.levels.length || filter.status !== "all";
    if (!narrowed) {
      sp.innerHTML = `<div class="startprompt">원하는 단원·유형·난이도로 조건을 좁히면<br>여기서 바로 풀 수 있어요.</div>`;
      return;
    }
    const n = currentList.length;
    sp.innerHTML = `
      <button class="big searchbtn" id="btnSearch" ${n ? "" : "disabled"}>${n ? `${n}문제 풀기 →` : "조건에 맞는 문제 없음"}</button>
      ${n ? `<button class="ghost small" id="btnExportFind">📄 문제지 PDF로 내보내기</button>` : ""}
      <div class="shint">필터를 고른 뒤 <b>풀기</b>를 누르면 문제가 순서대로 나와요.<br>풀이 화면의 <b>☰ 목록</b>에서 원하는 문제로 건너뛸 수 있어요.</div>`;
    const b = $("#btnSearch");
    if (b) b.onclick = startSolve;
    const ep = $("#btnExportFind");
    if (ep) ep.onclick = () => exportPDF(currentList.slice(), "기출 문제지");
  }

  function panelHTML(key) {
    if (key === "subject")
      return `<div class="chips">${Object.entries(SUBJECTS).map(([k, v]) => `<span class="chip ${filter.subject === k ? "on" : ""}" data-sub="${k}">${v}</span>`).join("")}</div>`;
    if (key === "unit")
      return `<div class="chips">${TAX[filter.subject].units.map(u => `<span class="chip unit ${filter.units.includes(u.code) ? "on" : ""}" data-unit="${u.code}">${u.name}</span>`).join("")}</div><div class="phint">선택 없음 = 전체 단원</div>`;
    if (key === "type") {
      const units = TAX[filter.subject].units;
      const shown = filter.units.length ? units.filter(u => filter.units.includes(u.code)) : units;
      return shown.map(u => `
        <div class="unitrow">
          <div class="ulabel">${u.name}</div>
          <div class="chips">${u.types.map(t => `<span class="chip ${filter.types.includes(t.code) ? "on" : ""}" data-type="${t.code}">${t.name}</span>`).join("")}</div>
        </div>`).join("") + `<div class="phint">${filter.units.length ? "선택한 단원의 유형만 표시됩니다" : "단원을 먼저 고르면 좁혀서 볼 수 있어요 · 선택 없음 = 전체"}</div>`;
    }
    if (key === "years")
      return `<div class="chips">${[2027, 2026, 2025, 2024, 2023, 2022].map(y => `<span class="chip ${filter.years.includes(y) ? "on" : ""}" data-multi="years" data-val="${y}">${y}</span>`).join("")}</div>`;
    if (key === "exams")
      return `<div class="chips">${Object.entries(EXAMS).map(([k, v]) => `<span class="chip ${filter.exams.includes(k) ? "on" : ""}" data-multi="exams" data-val="${k}">${v}</span>`).join("")}</div>`;
    if (key === "points")
      return `<div class="chips">${[2, 3, 4].map(p => `<span class="chip ${filter.points.includes(p) ? "on" : ""}" data-multi="points" data-val="${p}">${p}점</span>`).join("")}</div>`;
    if (key === "levels")
      return `<div class="chips">${LEVELS.map(l => `<span class="chip lvchip lv-${l} ${filter.levels.includes(l) ? "on" : ""}" data-multi="levels" data-val="${l}">${l}</span>`).join("")}</div><div class="phint">실제 응시생 정답률(메가스터디) 기준 · 상(어려움)·중·하(쉬움) · 선택 없음 = 전체</div>`;
    if (key === "status")
      return `<div class="chips">${Object.entries(STATUS_LABEL).map(([k, v]) => `<span class="chip ${filter.status === k ? "on" : ""}" data-status="${k}">${v}</span>`).join("")}</div>`;
    return "";
  }

  function renderFilterUI() {
    const bar = $("#fbar"), panel = $("#fpanel");
    if (!bar) return;
    bar.innerHTML = CATS.map(c => `
      <button class="fbtn ${openCat === c.key ? "active" : ""} ${catHasSel(c.key) ? "sel" : ""}" data-cat="${c.key}">
        ${c.label} <b>${catSummary(c.key)}</b> <span class="caret">▾</span>
      </button>`).join("")
      + `<button class="fbtn resetbtn" data-reset>초기화</button>`;
    panel.innerHTML = openCat ? panelHTML(openCat) : "";
    panel.classList.toggle("open", !!openCat);
  }

  function onFilterClick(e) {
    e.stopPropagation();  // 바깥클릭 닫기 핸들러가 방금 연 패널을 닫지 않도록
    const catBtn = e.target.closest("[data-cat]");
    if (catBtn) { const c = catBtn.dataset.cat; openCat = openCat === c ? null : c; renderFilterUI(); return; }
    if (e.target.closest("[data-reset]")) { openCat = null; filter = defaultFilter(); filterTouched = false; saveFil(); renderFilterUI(); activeFilterRefresh(); return; }
    if (e.target.closest("[data-sub],[data-unit],[data-type],[data-multi],[data-status]")) filterTouched = true;

    const sub = e.target.closest("[data-sub]");
    if (sub) { filter.subject = sub.dataset.sub; filter.units = []; filter.types = []; saveFil(); renderFilterUI(); activeFilterRefresh(); return; }

    const unit = e.target.closest("[data-unit]");
    if (unit) {
      const u = unit.dataset.unit, i = filter.units.indexOf(u);
      if (i >= 0) {
        filter.units.splice(i, 1);
        const ud = TAX[filter.subject].units.find(x => x.code === u);
        filter.types = filter.types.filter(tc => !ud.types.some(x => x.code === tc));
      } else filter.units.push(u);
      saveFil(); renderFilterUI(); activeFilterRefresh(); return;
    }
    const type = e.target.closest("[data-type]");
    if (type) {
      const t = type.dataset.type, i = filter.types.indexOf(t);
      i >= 0 ? filter.types.splice(i, 1) : filter.types.push(t);
      saveFil(); renderFilterUI(); activeFilterRefresh(); return;
    }
    const multi = e.target.closest("[data-multi]");
    if (multi) {
      const key = multi.dataset.multi, cast = (key === "years" || key === "points") ? Number : (x => x);
      const v = cast(multi.dataset.val), arr = filter[key], i = arr.indexOf(v);
      i >= 0 ? arr.splice(i, 1) : arr.push(v);
      saveFil(); renderFilterUI(); activeFilterRefresh(); return;
    }
    const st = e.target.closest("[data-status]");
    if (st) { filter.status = st.dataset.status; saveFil(); renderFilterUI(); activeFilterRefresh(); return; }
  }

  function startSolve() {
    currentList = applyFilter();
    if (!currentList.length) return;
    clearExam();  // 유형별 풀기 시작 시 진행 중이던 모의고사 종료
    location.hash = "#/q/" + encodeURIComponent(currentList[0].key);
  }

  // ---------- 실전 모의고사 ----------
  function examQuestions(year, exam, elective) {
    const common = Q.filter(q => q.year === year && q.exam === exam && q.subject === "common").sort((a, b) => a.qno - b.qno);
    const elec = Q.filter(q => q.year === year && q.exam === exam && q.subject === elective).sort((a, b) => a.qno - b.qno);
    return [...common, ...elec];
  }

  function startExam() {
    const { year, exam, elective } = examPick;
    const list = examQuestions(year, exam, elective);
    if (list.length < 30) return;
    currentList = list;
    examSession = {
      list: list.map(q => q.key), endTime: Date.now() + EXAM_MIN * 60 * 1000,
      answers: {}, times: {}, label: `${list[0].examLabel} · ${SUBJECTS[elective]}`,
    };
    saveExam();
    location.hash = "#/q/" + encodeURIComponent(list[0].key);
  }

  function viewExam() {
    setNav("exam");
    const years = [2027, 2026, 2025, 2024, 2023, 2022];
    const exams = [["csat", "수능"], ["mock06", "6월 모평"], ["mock09", "9월 모평"]];
    const elecs = [["prob_stat", "확률과 통계"], ["calculus", "미적분"], ["geometry", "기하"]];
    const p = examPick;
    const chipsOf = (arr, sel, dk) => arr.map(([k, v]) => `<span class="chip ${sel === k ? "on" : ""}" data-${dk}="${k}">${v}</span>`).join("");
    $("#view").innerHTML = `
      <div class="card examsetup">
        <h2>실전 모의고사</h2>
        <p class="examdesc">공통 22문항 + 선택과목 8문항 = <b>30문항</b>을 실제 시험처럼 순서대로, <b>${EXAM_MIN}분</b> 타이머와 함께 풉니다.</p>
        <div class="flabel">학년도</div>
        <div class="chips">${years.map(y => `<span class="chip ${p.year === y ? "on" : ""}" data-ey="${y}">${y}</span>`).join("")}</div>
        <div class="flabel">시험</div>
        <div class="chips">${chipsOf(exams, p.exam, "ee")}</div>
        <div class="flabel">선택과목</div>
        <div class="chips">${chipsOf(elecs, p.elective, "el")}</div>
        <div class="examstart">
          <button class="big" id="btnExamStart" disabled>시험 시작</button>
          <div class="shint" id="examMsg"></div>
        </div>
      </div>`;
    $("#view").onclick = e => {
      const y = e.target.closest("[data-ey]"), x = e.target.closest("[data-ee]"), l = e.target.closest("[data-el]");
      if (y) examPick.year = Number(y.dataset.ey);
      else if (x) examPick.exam = x.dataset.ee;
      else if (l) examPick.elective = l.dataset.el;
      else if (e.target.id === "btnExamStart") { startExam(); return; }
      else return;
      viewExam();
    };
    const { year, exam, elective } = examPick;
    const btn = $("#btnExamStart"), msg = $("#examMsg");
    if (year && exam && elective) {
      const n = examQuestions(year, exam, elective).length;
      if (n >= 30) { btn.disabled = false; msg.textContent = "준비 완료 · 30문항"; }
      else { btn.disabled = true; msg.textContent = `이 조합은 데이터가 없어요 (문항 ${n}개). 다른 조합을 골라주세요.`; }
    } else { btn.disabled = true; msg.textContent = "학년도·시험·선택과목을 모두 고르세요."; }
  }

  function fmtClock(ms) {
    if (ms < 0) ms = 0;
    const s = Math.floor(ms / 1000), m = Math.floor(s / 60);
    return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  }
  function examScore() {
    let score = 0, correct = 0, answered = 0;
    for (const k of examSession.list) {
      const qq = Q.find(x => x.key === k); if (!qq) continue;
      const my = examSession.answers[k];
      if (my != null) answered++;
      if (my === qq.answer) { correct++; score += qq.points; }
    }
    return { score, correct, answered, total: examSession.list.length };
  }

  // ---------- 나만의 모의고사(문제 조합) 화면 ----------
  const inBasket = key => basket.includes(key);

  function candRow(q) {
    return `<div class="candrow">
      <div class="candmeta"><span class="cno">${q.qno}번</span>
        <span class="cinfo">${q.examLabel} · ${typeName[q.type] || ""}${q.difficulty ? ` <span class="lvbadge lv-${q.difficulty}">${q.difficulty}</span>` : ""}</span></div>
      <button class="addbtn ${inBasket(q.key) ? "added" : ""}" data-add="${q.key}">${inBasket(q.key) ? "담김 ✓" : "＋ 담기"}</button>
    </div>`;
  }

  function updateCandidates() {
    const box = $("#candList"); if (!box) return;
    if (!filterTouched) { box.innerHTML = `<div class="startprompt small">위에서 조건을 골라 후보 문제를 좁혀보세요.</div>`; return; }
    const list = applyFilter();
    box.innerHTML = `
      <div class="candhead"><span>조건에 맞는 <b>${list.length}</b>문제</span>
        <div class="candactions">
          <button class="ghost small" id="clearBasket" ${basket.length ? "" : "disabled"}>세트 비우기</button>
          <button class="ghost small" id="addAll" ${list.length ? "" : "disabled"}>전체 담기</button>
        </div></div>
      <div class="canditems">${list.slice(0, 300).map(candRow).join("") || `<div class="startprompt small">조건에 맞는 문제가 없어요.</div>`}</div>
      ${list.length > 300 ? `<div class="phint">상위 300개만 표시돼요. 조건을 더 좁혀보세요.</div>` : ""}`;
    const aa = $("#addAll");
    if (aa) aa.onclick = () => { list.forEach(q => { if (!inBasket(q.key)) basket.push(q.key); }); saveBasket(); updateCandidates(); renderBasket(); };
    const cb = $("#clearBasket");
    if (cb) cb.onclick = emptyBasket;
  }

  function emptyBasket() {
    if (!basket.length || !confirm("담은 문제를 모두 비울까요?")) return;
    basket = []; saveBasket(); renderBasket(); updateCandidates();
  }

  function renderBasket() {
    const box = $("#basketList"); if (!box) return;
    const cnt = $("#basketCount"); if (cnt) cnt.textContent = basket.length;
    if (!basket.length) {
      box.innerHTML = `<div class="startprompt small">아직 담은 문제가 없어요.<br>위에서 문제를 골라 담아보세요.</div>`;
    } else {
      box.innerHTML = basket.map((k, i) => {
        const q = Q.find(x => x.key === k); if (!q) return "";
        return `<div class="brow">
          <span class="bidx">${i + 1}</span>
          <span class="bmeta">${q.qno}번 · ${q.examLabel}${q.difficulty ? ` <span class="lvbadge lv-${q.difficulty}">${q.difficulty}</span>` : ""}</span>
          <span class="bctrl">
            <button class="ico" data-up="${k}" ${i === 0 ? "disabled" : ""}>▲</button>
            <button class="ico" data-down="${k}" ${i === basket.length - 1 ? "disabled" : ""}>▼</button>
            <button class="ico rm" data-rm="${k}" title="빼기">✕</button>
          </span></div>`;
      }).join("");
    }
    const sb = $("#btnCustomStart"); if (sb) sb.disabled = basket.length === 0;
    const cb = $("#clearBasket"); if (cb) cb.disabled = basket.length === 0;
    const cb2 = $("#clearBasket2"); if (cb2) cb2.disabled = basket.length === 0;
    const pb = $("#btnExportPdf"); if (pb) pb.disabled = basket.length === 0;
  }

  function startCustomMock() {
    const list = basket.map(k => Q.find(x => x.key === k)).filter(Boolean);
    if (!list.length) return;
    const now = Date.now();
    examSession = {
      custom: true, list: basket.slice(), startAt: now, dur: customMin,
      endTime: customMin > 0 ? now + customMin * 60 * 1000 : null,
      answers: {}, times: {}, label: `나만의 모의고사 · ${list.length}문항${customMin > 0 ? ` · ${customMin}분` : ""}`,
    };
    currentList = list; saveExam();
    location.hash = "#/q/" + encodeURIComponent(list[0].key);
  }

  // 난이도 스펙대로 현재 과목에서 무작위 문항 선택 (부족하면 있는 만큼)
  function buildRandom(spec) {
    const picked = [];
    for (const [lv, n] of spec) {
      const pool = Q.filter(q => q.subject === rndSubject && q.difficulty === lv && !picked.includes(q));
      for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
      picked.push(...pool.slice(0, n));
    }
    return picked;
  }
  function startRandom(spec, min, name) {
    const want = spec.reduce((s, [, n]) => s + n, 0);
    const list = buildRandom(spec);
    if (!list.length) { alert("현재 과목에 해당 난이도 문제가 부족해요. 과목을 바꿔보세요."); return; }
    if (list.length < want) { if (!confirm(`조건에 맞는 문제가 ${list.length}개뿐이에요. 이대로 시작할까요?`)) return; }
    const now = Date.now();
    examSession = {
      custom: true, random: true, list: list.map(q => q.key), startAt: now, dur: min,
      endTime: min > 0 ? now + min * 60 * 1000 : null,
      answers: {}, times: {}, label: `랜덤 출제 · ${name} · ${list.length}문항${min > 0 ? ` · ${min}분` : ""}`,
    };
    currentList = list; saveExam();
    location.hash = "#/q/" + encodeURIComponent(list[0].key);
  }

  // 선택한 문항 목록 → 인쇄용 레이아웃 렌더 후 브라우저 인쇄(PDF로 저장). 각 문항·정답에 KICE 출처 표기.
  function exportPDF(list, title = "나만의 문제지") {
    if (!list.length) return;
    if (list.length > 60 && !confirm(`${list.length}문제를 PDF로 내보낼까요?\n문항이 많으면 생성에 시간이 걸릴 수 있어요.`)) return;
    const d = new Date();
    const dateStr = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
    let host = document.getElementById("printArea");
    if (!host) { host = document.createElement("div"); host.id = "printArea"; document.body.appendChild(host); }
    host.innerHTML = `
      <div class="print-head">
        <h1>${title} <span>· ${list.length}문항</span></h1>
        <div class="print-sub">SelecQ · 평가원 수학 기출 · 생성일 ${dateStr}</div>
      </div>
      ${list.map((q, i) => `
        <section class="print-q">
          <div class="print-qhead">${i + 1}. ${q.examLabel} ${SUBJECTS[q.subject]} ${q.qno}번 · [${q.points}점]${q.difficulty ? ` · 난이도 ${q.difficulty}` : ""}</div>
          ${q.img ? `<img class="print-img" src="${q.img}" alt="${q.qno}번 문제">`
                  : `<div class="print-noimg">이미지가 없는 문항입니다. 원본 PDF를 참고하세요.</div>`}
          <div class="print-src">출처: 한국교육과정평가원 ${q.examLabel} 수학영역 ${q.qno}번 · 저작권 KICE</div>
        </section>`).join("")}
      <section class="print-answers">
        <h2>정답</h2>
        <div class="print-anslist">${list.map((q, i) => `<span class="print-ans">${i + 1}. ${fmtAns(q)}</span>`).join("")}</div>
      </section>
      <div class="print-foot">SelecQ에서 생성 · 기출문제 저작권은 한국교육과정평가원(KICE)에 있습니다. 개인 학습 용도로만 사용하세요.</div>`;
    document.body.classList.add("printing");
    const done = () => { document.body.classList.remove("printing"); };
    window.addEventListener("afterprint", done, { once: true });
    // 이미지가 모두 로드된 뒤 인쇄해야 빈 칸으로 안 나옴
    const imgs = [...host.querySelectorAll("img")];
    let pending = imgs.filter(im => !im.complete).length;
    const fire = () => window.print();
    if (!pending) { fire(); return; }
    const tick = () => { if (--pending <= 0) fire(); };
    imgs.forEach(im => { if (!im.complete) { im.addEventListener("load", tick, { once: true }); im.addEventListener("error", tick, { once: true }); } });
    setTimeout(() => { if (pending > 0) { pending = 0; fire(); } }, 4000);  // 로드 지연 대비 안전장치
  }

  function viewCustom() {
    setNav("custom");
    useFilterCtx("custom");
    activeFilterRefresh = updateCandidates;
    const presets = [[0, "타이머 없음"], [20, "20분"], [50, "50분"], [100, "100분"]];
    $("#view").innerHTML = `
      <div class="card">
        <h2>나만의 모의고사</h2>
        <p class="examdesc">원하는 단원·유형·난이도로 문제를 골라 담아 <b>나만의 세트</b>를 만들고, 타이머를 자유롭게 걸어 실전처럼 푸세요.</p>
        <div class="filterwrap" id="filterwrap">
          <div class="filterbar" id="fbar"></div>
          <div class="filterpanel" id="fpanel"></div>
        </div>
        <div class="candpane" id="candList"></div>
      </div>

      <div class="card basketcard">
        <div class="bhead">
          <h3>내 세트 <span class="bcount">(<span id="basketCount">${basket.length}</span>문항)</span></h3>
          <button class="ghost small" id="clearBasket2" ${basket.length ? "" : "disabled"}>세트 비우기</button>
        </div>
        <div class="basketlist" id="basketList"></div>
        <div class="flabel">타이머</div>
        <div class="chips" id="timerChips">
          ${presets.map(([m, lbl]) => `<span class="chip ${customMin === m ? "on" : ""}" data-min="${m}">${lbl}</span>`).join("")}
          <label class="chip minput">직접 <input type="number" id="minCustom" min="1" max="300" placeholder="분"> 분</label>
        </div>
        <div class="examstart">
          <button class="big" id="btnCustomStart" ${basket.length ? "" : "disabled"}>선택한 문제로 시작</button>
          <button class="ghost small" id="btnExportPdf" ${basket.length ? "" : "disabled"}>📄 문제지 PDF로 내보내기</button>
        </div>
      </div>`;
    $("#filterwrap").onclick = onFilterClick;
    renderFilterUI(); updateCandidates(); renderBasket();

    $("#candList").onclick = e => {
      if (e.target.closest("#addAll")) return;   // 전체 담기는 자체 핸들러(updateCandidates)에서 처리
      const a = e.target.closest("[data-add]"); if (!a) return;
      const k = a.dataset.add, i = basket.indexOf(k);
      if (i >= 0) { basket.splice(i, 1); a.classList.remove("added"); a.textContent = "＋ 담기"; }
      else { basket.push(k); a.classList.add("added"); a.textContent = "담김 ✓"; }
      saveBasket(); renderBasket();   // 후보 목록은 다시 안 그림(스크롤 유지) — 클릭한 버튼만 토글
    };
    $("#basketList").onclick = e => {
      const up = e.target.closest("[data-up]"), dn = e.target.closest("[data-down]"), rm = e.target.closest("[data-rm]");
      if (up) { const i = basket.indexOf(up.dataset.up); if (i > 0) [basket[i - 1], basket[i]] = [basket[i], basket[i - 1]]; }
      else if (dn) { const i = basket.indexOf(dn.dataset.down); if (i >= 0 && i < basket.length - 1) [basket[i + 1], basket[i]] = [basket[i], basket[i + 1]]; }
      else if (rm) {
        const k = rm.dataset.rm, i = basket.indexOf(k); if (i >= 0) basket.splice(i, 1);
        const btn = document.querySelector(`#candList [data-add="${CSS.escape(k)}"]`);   // 후보 목록에 보이면 '담기'로 되돌림
        if (btn) { btn.classList.remove("added"); btn.textContent = "＋ 담기"; }
      } else return;
      saveBasket(); renderBasket();
    };
    $("#timerChips").onclick = e => {
      const c = e.target.closest("[data-min]"); if (!c) return;
      customMin = Number(c.dataset.min);
      const mc = $("#minCustom"); if (mc) mc.value = "";
      document.querySelectorAll("#timerChips .chip").forEach(x => x.classList.toggle("on", x === c));
    };
    const mc = $("#minCustom");
    if (mc) mc.oninput = () => {
      const v = parseInt(mc.value, 10);
      if (v > 0) { customMin = v; document.querySelectorAll("#timerChips .chip[data-min]").forEach(x => x.classList.remove("on")); }
    };
    $("#btnCustomStart").onclick = startCustomMock;
    $("#clearBasket2").onclick = emptyBasket;
    $("#btnExportPdf").onclick = () => exportPDF(basket.map(k => Q.find(x => x.key === k)).filter(Boolean), "나만의 문제지");
  }

  function viewRandom() {
    setNav("random");
    const SUBJ4 = Object.entries(SUBJECTS);
    $("#view").innerHTML = `
      <div class="card randombox">
        <h2>🎲 랜덤 출제</h2>
        <p class="examdesc">난이도별로 <b>무작위 출제</b>된 세트를 바로 풀어요. 시간은 난이도·개수에 맞춰 자동 설정됩니다.</p>
        <div class="flabel">과목</div>
        <div class="chips" id="rndSubj">${SUBJ4.map(([k, v]) => `<span class="chip ${rndSubject === k ? "on" : ""}" data-rsub="${k}">${v}</span>`).join("")}</div>
        <div class="flabel">빠른 시작</div>
        <div class="rndpresets" id="rndPresets">
          ${RND_PRESETS.map((p, i) => `<button class="rndpreset" data-preset="${i}">
            <span class="rp-name">${p.emoji} ${p.name}</span>
            <span class="rp-spec">${specLabel(p.spec)} · ${p.min}분</span>
          </button>`).join("")}
        </div>
        <div class="flabel">직접 조합</div>
        <div class="rndcustom">
          <div class="chips" id="rndLevel">${["상", "중", "하"].map(l => `<span class="chip lvchip lv-${l} ${rndLevel === l ? "on" : ""}" data-rlv="${l}">${l}</span>`).join("")}</div>
          <div class="rndcount">개수 <button class="ico" id="rndMinus">−</button><b id="rndN">${rndCount}</b><button class="ico" id="rndPlus">＋</button></div>
          <div class="rndtime">예상 시간 <b id="rndMin">${autoMin([[rndLevel, rndCount]])}</b>분</div>
          <button class="big" id="rndStart">이 조합으로 시작</button>
        </div>
      </div>`;
    $("#rndSubj").onclick = e => {
      const c = e.target.closest("[data-rsub]"); if (!c) return;
      rndSubject = c.dataset.rsub;
      document.querySelectorAll("#rndSubj .chip").forEach(x => x.classList.toggle("on", x === c));
    };
    $("#rndPresets").onclick = e => {
      const b = e.target.closest("[data-preset]"); if (!b) return;
      const p = RND_PRESETS[+b.dataset.preset];
      startRandom(p.spec, p.min, p.name);
    };
    const syncRndTime = () => { const el = $("#rndMin"); if (el) el.textContent = autoMin([[rndLevel, rndCount]]); };
    $("#rndLevel").onclick = e => {
      const c = e.target.closest("[data-rlv]"); if (!c) return;
      rndLevel = c.dataset.rlv;
      document.querySelectorAll("#rndLevel .chip").forEach(x => x.classList.toggle("on", x === c));
      syncRndTime();
    };
    $("#rndMinus").onclick = () => { rndCount = Math.max(1, rndCount - 1); $("#rndN").textContent = rndCount; syncRndTime(); };
    $("#rndPlus").onclick = () => { rndCount = Math.min(20, rndCount + 1); $("#rndN").textContent = rndCount; syncRndTime(); };
    $("#rndStart").onclick = () => startRandom([[rndLevel, rndCount]], autoMin([[rndLevel, rndCount]]), `${rndLevel} 난이도`);
  }

  // 히어로 캐러셀: 과목별 대표 문항 4개
  const HERO_SLIDES = [
    { img: "q/2024_mock09_common_q14.png", title: "2024학년도 9월 모의평가 공통 14번 · 지수함수와 로그함수" },
    { img: "q/2025_csat_prob_stat_q27.png", title: "2025학년도 수능 확률과 통계 27번 · 통계적 추정" },
    { img: "q/2022_csat_calculus_q29.png", title: "2022학년도 수능 미적분 29번 · 도형과 삼각함수의 극한" },
    { img: "q/2026_csat_geometry_q27.png", title: "2026학년도 수능 기하 27번 · 공간도형과 정사영" },
  ];
  let heroTimer = null, heroIdx = 0;

  function showHeroSlide(i, instant) {
    heroIdx = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
    const s = HERO_SLIDES[heroIdx];
    const img = $("#mockImg"), title = $("#mockTitle"), dots = $("#mockDots");
    if (!img) return;
    const swap = () => {
      img.src = s.img; title.textContent = s.title;
      dots.querySelectorAll(".dot").forEach((d, di) => d.classList.toggle("on", di === heroIdx));
      img.onload = () => { img.style.opacity = 1; };
    };
    if (instant) { swap(); img.style.opacity = 1; }
    else { img.style.opacity = 0; setTimeout(swap, 220); }
  }

  // 문제 찾기 도구(과목 카드 + 필터 + 풀기) — 메인/문제찾기 화면이 공유
  function browseToolHTML() {
    const counts = {};
    for (const q of Q) counts[q.subject] = (counts[q.subject] || 0) + 1;
    return `
      <section class="subjectcards" id="subjectCards">
        ${Object.entries(SUBJECTS).map(([k, v]) => `
          <div class="scard ${filter.subject === k ? "on" : ""}" data-scard="${k}">
            <div class="sname">${v}</div>
            <div class="scount">${counts[k] || 0}문항</div>
          </div>`).join("")}
      </section>

      <div class="filterwrap" id="filterwrap">
        <div class="filterbar" id="fbar"></div>
        <div class="filterpanel" id="fpanel"></div>
      </div>
      <div class="searchpane" id="searchpane"></div>`;
  }

  function wireBrowseTool() {
    $("#filterwrap").onclick = onFilterClick;
    $("#subjectCards").onclick = e => {
      const c = e.target.closest("[data-scard]");
      if (!c) return;
      filter.subject = c.dataset.scard; filter.units = []; filter.types = [];
      filterTouched = true; saveFil();
      document.querySelectorAll(".scard").forEach(x => x.classList.toggle("on", x === c));
      renderFilterUI(); activeFilterRefresh();
      $("#filterwrap").scrollIntoView({ behavior: "smooth", block: "start" });
    };
    activeFilterRefresh = updateResults;
    renderFilterUI();
    updateResults();
  }

  function viewHome() {
    setNav("");  // 메인(로고)에는 활성 탭 표시 없음
    useFilterCtx("browse");
    $("#view").innerHTML = `
      <section class="hero">
        <h1>원하는 단원·유형·난이도만 골라<br>나만의 평가원 기출 세트를 만들어 보세요</h1>
        <ul class="benefits">
          <li><span class="bi">✓</span> 단원·유형·난이도별 문제 선택</li>
          <li><span class="bi">✓</span> 원하는 문항만 모의고사 구성</li>
          <li><span class="bi">✓</span> 오답·풀이 기록 자동 관리</li>
        </ul>
        <div class="herocta">
          <a class="big pill" href="#/custom">나만의 모의고사 만들기 →</a>
          <a class="big pill outline" href="#/exam">실전 모의고사 →</a>
        </div>
        <div class="heromock">
          <div class="mockbar">
            <span class="mdot"></span><span class="mdot"></span><span class="mdot"></span>
            <span class="mtitle" id="mockTitle"></span>
          </div>
          <div class="mockbody">
            <img id="mockImg" alt="풀이 화면 미리보기">
          </div>
          <div class="mockdots" id="mockDots"></div>
        </div>
      </section>
      ${browseToolHTML()}
      <section class="usage-notice">
        <h3>자료 이용 안내</h3>
        <p>SelecQ는 한국교육과정평가원 및 교육청이 공개한 기출문제의 시험 정보, 문항 번호, 과목 및 유형 등의 메타데이터를 정리합니다.</p>
        <p>문제 원문과 정답은 한국교육과정평가원 및 시도 교육청 공식 페이지에서 확인할 수 있습니다.</p>
        <p>문제 및 문제지의 저작권은 각 출제기관과 권리자에게 있습니다.</p>
      </section>`;
    // 캐러셀 초기화
    $("#mockDots").innerHTML = HERO_SLIDES.map((_, i) => `<span class="dot" data-i="${i}"></span>`).join("");
    $("#mockDots").onclick = e => {
      const d = e.target.closest(".dot"); if (!d) return;
      showHeroSlide(Number(d.dataset.i), false);
      if (heroTimer) clearInterval(heroTimer);
      heroTimer = setInterval(() => showHeroSlide(heroIdx + 1, false), 3800);
    };
    showHeroSlide(0, true);
    HERO_SLIDES.forEach(s => { const im = new Image(); im.src = s.img; });  // 프리로드
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(heroIdx + 1, false), 3800);

    wireBrowseTool();
  }

  function viewFind() {
    setNav("filter");
    useFilterCtx("browse");
    $("#view").innerHTML = `
      <div class="findintro">
        <h2>문제 찾기</h2>
        <p>과목·단원·유형·난이도로 조건을 좁혀, 조건에 맞는 기출을 순서대로 풀어보세요.</p>
      </div>
      ${browseToolHTML()}`;
    wireBrowseTool();
  }

  // 바깥 클릭 시 열린 드롭다운 닫기
  document.addEventListener("click", e => {
    if (openCat && !e.target.closest(".filterwrap")) { openCat = null; renderFilterUI(); }
  });

  // ---------- 풀이 화면 ----------
  function viewSolve(key) {
    setNav("filter");
    const q = Q.find(x => x.key === key);
    if (!q) { $("#view").innerHTML = `<div class="empty">문항을 찾을 수 없습니다.</div>`; return; }
    const inExam = !!(examSession && examSession.list.includes(key));
    if (inExam) currentList = examSession.list.map(k => Q.find(x => x.key === k)).filter(Boolean);
    else if (!currentList.length) currentList = applyFilter();
    const pos = currentList.findIndex(x => x.key === key);
    const r = recOf(q);
    const mc = isMC(q);
    let picked = inExam && examSession.answers[key] != null ? examSession.answers[key] : null;
    const mailto = "mailto:1212ntnt@naver.com?subject=" + encodeURIComponent("[SelecQ] 유형 오류 신고: " + q.key);
    $("#view").innerHTML = `
    <div class="solveview">
      ${inExam ? `<div class="examtimer" id="examTimer">
        <span class="etlabel">${examSession.label}</span>
        <span class="etq" id="etQ" title="이 문항 경과 시간">이 문항 00:00</span>
        <span class="etclock" id="etClock">--:--</span>
        <button class="ghost small" id="btnExamEnd">종료·채점</button>
      </div>` : ""}
      <div class="solve-head">
        <h2>${q.examLabel} ${SUBJECTS[q.subject]} ${q.qno}번</h2>
        <span class="pts">[${q.points}점]</span>
      </div>
      <div class="typeline">${unitName[q.unit] || ""} › ${typeName[q.type] || "유형 미정"}
        · <a class="report" href="${mailto}">유형이 잘못됐나요?</a></div>

      <div class="draw-toolbar" id="tools">
        <button class="tbtn on" data-tool="pen">✏️ 펜</button>
        <button class="tbtn" data-tool="eraser">🩹 지우개</button>
        <span class="swatches">
          <span class="sw on" data-color="#111827" style="background:#111827"></span>
          <span class="sw" data-color="#2563eb" style="background:#2563eb"></span>
          <span class="sw" data-color="#dc2626" style="background:#dc2626"></span>
        </span>
        <span class="tsep"></span>
        <button class="tbtn" id="tUndo">↩︎ 취소</button>
        <button class="tbtn" id="tClear">🗑 전체</button>
        <button class="tbtn" id="tFinger">✋ 손가락 OFF</button>
        <button class="tbtn" id="tFocus">⛶ 집중</button>
      </div>

      <div class="wsscroll" id="wsScroll">
        <div class="worksheet" id="ws">
          ${q.img ? `<img class="qimg" id="qimg" src="${q.img}" alt="${q.qno}번 문제" draggable="false">`
                  : `<div class="noimg">이 문항은 이미지가 없습니다. 아래 원본 PDF로 확인하세요.</div>`}
          <div class="workspace" id="workspace"></div>
          <canvas class="drawlayer" id="draw"></canvas>
        </div>
        <div class="wsmore">
          <button class="ghost" id="tMore">＋ 넓히기</button>
          <button class="ghost" id="tLess">－ 줄이기</button>
          <a class="pdfmini" href="${q.pdfUrl || q.postUrl}" target="_blank" rel="noopener">원본 PDF</a>
          ${q.postUrl ? `<a class="pdfmini" href="${q.postUrl}" target="_blank" rel="noopener">평가원</a>` : ""}
        </div>
      </div>

      <div class="srcline">출처: 한국교육과정평가원 ${q.examLabel} 수학영역 ${q.qno}번 · 문제 저작권은 KICE에 있습니다.</div>
      ${inExam ? "" : `<a class="big solbtn" id="btnSol" href="https://www.google.com/search?q=${encodeURIComponent(q.examLabel + " 수학 " + q.qno + "번 해설")}" target="_blank" rel="noopener">🔍 이 문제 해설 검색 ↗</a>`}
      ${inExam ? "" : `<div class="navrow">
        <button class="ghost" id="btnPrevQ" ${pos <= 0 ? "disabled" : ""}>← 이전</button>
        <button class="ghost" id="btnPicker">☰ 목록 ${pos >= 0 ? `<b>${pos + 1}/${currentList.length}</b>` : ""}</button>
        <button class="ghost" id="btnNextQ" ${pos < 0 || pos >= currentList.length - 1 ? "disabled" : ""}>다음 →</button>
      </div>`}

      <div class="answer-bar ${inExam ? "examab" : ""}">
        ${inExam
          ? `<div class="ab-answer">
               ${mc
                 ? `<div class="mc" id="mcRow">${[1, 2, 3, 4, 5].map(n => `<button data-n="${n}" class="${picked === n ? "sel" : ""}">${CIRCLED[n]}</button>`).join("")}</div>`
                 : `<input class="short" id="shortIn" type="number" min="0" max="999" placeholder="정답 입력" value="${examSession.answers[key] != null ? examSession.answers[key] : ""}">`}
               <button class="ghost small peekbtn" id="btnPeek">채점하기</button>
               <span class="peekans" id="peekResult"></span>
             </div>
             <div class="ab-nav">
               <button class="ghost" id="btnPrevQ" ${pos <= 0 ? "disabled" : ""}>← 이전</button>
               <button class="ghost" id="btnPicker">☰ 목록 ${pos >= 0 ? `<b>${pos + 1}/${currentList.length}</b>` : ""}</button>
               ${pos === currentList.length - 1
                  ? `<button class="nextbtn finish" id="btnFinishAB">제출 →</button>`
                  : `<button class="nextbtn" id="btnNextAB">다음 →</button>`}
             </div>`
          : `${mc
                ? `<div class="mc" id="mcRow">${[1, 2, 3, 4, 5].map(n => `<button data-n="${n}" class="${picked === n ? "sel" : ""}">${CIRCLED[n]}</button>`).join("")}</div>`
                : `<input class="short" id="shortIn" type="number" min="0" max="999" placeholder="정답 입력">`}
             <button class="big" id="btnSubmit">채점</button><span class="result" id="result">${r ? (r.r === "ok" ? "이전: 정답" : "이전: 오답") : ""}</span>`}
      </div>

      <div class="picker" id="picker" hidden>
        <div class="picker-panel">
          <div class="picker-head">
            <b>${inExam ? `모의고사 문항 ${examSession.list.length}개` : `이 조건의 문제 ${currentList.length}개`}</b>
            ${inExam ? "" : `<a class="phome" href="#/">필터 수정</a>`}
            <button class="ghost small" id="pClose">닫기</button>
          </div>
          <div class="picker-list" id="pList"></div>
        </div>
      </div>

      <div class="picker" id="examResult" hidden>
        <div class="picker-panel resultpanel">
          <div class="picker-head"><b>모의고사 결과</b><button class="ghost small" id="erClose">닫기</button></div>
          <div class="resultbody" id="erBody"></div>
        </div>
      </div>

    </div>`;

    // 현재 조건/모의고사 내 문제 목록(picker) — 원하는 문제로 건너뛰기
    function fillPicker() {
      const box = $("#pList"); if (!box) return;
      box.innerHTML = currentList.map(x => {
        let cls, label;
        if (inExam) {
          const done = examSession.answers[x.key] != null;
          cls = done ? "ok" : "none"; label = done ? "제출" : "안 풂";
        } else {
          const rr = recOf(x);
          [cls, label] = !rr ? ["none", "안 풂"] : rr.r === "ok" ? ["ok", "정답"] : ["bad", "오답"];
        }
        return `<div class="prow ${x.key === q.key ? "cur" : ""}" data-k="${x.key}">
          <span class="pno">${x.qno}번</span>
          <span class="pmeta">${inExam ? SUBJECTS[x.subject] : x.examLabel + " · " + (typeName[x.type] || "")}</span>
          <span class="status ${cls}">${label}</span></div>`;
      }).join("");
      const cur = box.querySelector(".prow.cur");
      if (cur) cur.scrollIntoView({ block: "center" });
    }
    $("#btnPicker").onclick = () => { fillPicker(); $("#picker").hidden = false; };
    $("#pClose").onclick = () => { $("#picker").hidden = true; };
    $("#picker").onclick = e => { if (e.target.id === "picker") $("#picker").hidden = true; };
    $("#pList").onclick = e => {
      const el = e.target.closest("[data-k]");
      if (el) { $("#picker").hidden = true; location.hash = "#/q/" + encodeURIComponent(el.dataset.k); }
    };

    setupDrawer(q.key);

    // 모의고사: 답 선택/입력 시 즉시 저장 (별도 제출 버튼 없음)
    const setExamAns = my => {
      examSession.answers[q.key] = my; saveExam();
      const el = $("#result"); if (el) { el.className = "result"; el.textContent = "✓ 답 저장됨"; }
    };
    if (mc) {
      $("#mcRow").onclick = e => {
        const n = e.target.dataset?.n; if (!n) return;
        picked = Number(n);
        document.querySelectorAll("#mcRow button").forEach(b => b.classList.toggle("sel", b.dataset.n === n));
        if (inExam) setExamAns(picked);
      };
    } else if (inExam) {
      const si = $("#shortIn");
      if (si) si.oninput = () => {
        if (si.value === "") { delete examSession.answers[q.key]; saveExam(); const el = $("#result"); if (el) el.textContent = ""; return; }
        const v = Number(si.value);
        if (!Number.isNaN(v)) setExamAns(v);
      };
    }
    const bs = $("#btnSubmit");   // 문제 찾기(브라우즈) 전용: 즉시 채점
    if (bs) bs.onclick = () => {
      const my = mc ? picked : Number($("#shortIn").value);
      if (my == null || Number.isNaN(my) || ($("#shortIn") && $("#shortIn").value === "")) {
        const el = $("#result"); el.className = "result"; el.textContent = "답을 입력해 주세요."; return;
      }
      const ok = my === q.answer;
      const prev = records[q.key];
      records[q.key] = { r: ok ? "ok" : "bad", my, ts: Date.now(), tries: (prev?.tries || 0) + 1 };
      saveRec();
      const el = $("#result");
      el.className = "result " + (ok ? "ok" : "bad");
      el.innerHTML = ok ? "⭕ 정답!" : `❌ 오답 <span class="ans">정답 ${fmtAns(q)}</span>`;
    };
    const go = d => {
      const np = pos + d;
      if (np >= 0 && np < currentList.length) location.hash = "#/q/" + encodeURIComponent(currentList[np].key);
    };
    $("#btnPrevQ").onclick = () => go(-1);
    const bn = $("#btnNextQ"); if (bn) bn.onclick = () => go(1);
    const bnab = $("#btnNextAB"); if (bnab) bnab.onclick = () => go(1);
    const bp = $("#btnPeek");   // 모의고사: 이 문제 정답만 바로 보기
    if (bp) bp.onclick = () => {
      const el = $("#peekResult"); if (!el) return;
      const my = examSession.answers[q.key];
      if (my == null) { el.className = "peekans"; el.textContent = `정답 ${fmtAns(q)}`; }
      else {
        const ok = my === q.answer;
        el.className = "peekans " + (ok ? "ok" : "bad");
        el.innerHTML = ok ? `⭕ 정답 ${fmtAns(q)}` : `❌ 정답 ${fmtAns(q)} <span class="ans">내 답 ${isMC(q) ? CIRCLED[my] : my}</span>`;
      }
      bp.style.display = "none";
    };

    // 모의고사 타이머 & 종료
    if (inExam) {
      examSession.times = examSession.times || {};
      examQEnter = { key: q.key, t: Date.now() };  // 이 문항 진입 시각 기록
      const tick = () => {
        const clk = $("#etClock");
        if (clk) {
          if (!examSession.endTime) {   // 타이머 없음(나만의 모의고사) → 경과 시간 카운트업
            clk.textContent = "경과 " + fmtClock(Date.now() - (examSession.startAt || Date.now()));
          } else {
            const remain = examSession.endTime - Date.now();
            clk.textContent = remain <= 0 ? "00:00 시간종료" : fmtClock(remain);
            clk.classList.toggle("over", remain <= 0);
          }
        }
        const eq = $("#etQ");
        if (eq && examQEnter) eq.textContent = "이 문항 " + fmtClock((examSession.times[q.key] || 0) + (Date.now() - examQEnter.t));
      };
      tick();
      if (examInterval) clearInterval(examInterval);
      examInterval = setInterval(tick, 1000);

      const showResult = () => {
        flushQTime();  // 현재 문항 체류 시간 확정
        // 제출 답안을 기록/오답노트에 반영
        for (const k of examSession.list) {
          const qq2 = Q.find(x => x.key === k); if (!qq2) continue;
          const my = examSession.answers[k]; if (my == null) continue;
          const prev = records[k];
          records[k] = { r: my === qq2.answer ? "ok" : "bad", my, ts: Date.now(), tries: (prev?.tries || 0) + 1 };
        }
        saveRec();
        const { score, correct, answered, total } = examScore();
        const used = examSession.endTime
          ? (examSession.dur ? examSession.dur * 60000 : EXAM_MIN * 60000) - (examSession.endTime - Date.now())
          : Date.now() - (examSession.startAt || Date.now());
        const times = examSession.times || {};
        const timedKeys = examSession.list.filter(k => times[k]);
        const avg = timedKeys.length ? timedKeys.reduce((s, k) => s + times[k], 0) / timedKeys.length : 0;
        const slowest = timedKeys.slice().sort((a, b) => times[b] - times[a])[0];
        $("#erBody").innerHTML = `
          ${examSession.custom
            ? `<div class="bigscore">${correct}<span>/${total}문제 정답</span></div>`
            : `<div class="bigscore">${score}<span>/100점</span></div>`}
          <div class="resultmeta">정답 ${correct} · 제출 ${answered}/${total} · 사용 시간 ${fmtClock(Math.max(0, used))}
            · 문항 평균 ${fmtClock(avg)}${slowest ? ` · 최장 ${Q.find(x => x.key === slowest).qno}번(${fmtClock(times[slowest])})` : ""}</div>
          <div class="resultrows">${examSession.list.map(k => {
            const qq = Q.find(x => x.key === k); const my = examSession.answers[k];
            const okk = my === qq.answer;
            return `<div class="prow">
              <span class="pno">${qq.qno}번</span>
              <span class="pmeta">${my == null ? "미제출" : "내 답 " + (isMC(qq) ? CIRCLED[my] : my)}</span>
              <span class="ptime">${times[k] ? fmtClock(times[k]) : "-"}</span>
              <span class="status ${my == null ? "none" : okk ? "ok" : "bad"}">${my == null ? "—" : okk ? "정답" : "오답 (" + fmtAns(qq) + ")"}</span></div>`;
          }).join("")}</div>
          <button class="big" id="erHome">홈으로</button>`;
        $("#examResult").hidden = false;
        $("#erHome").onclick = () => { clearExam(); location.hash = "#/"; };
      };
      const finish = () => {
        const un = examSession.list.filter(k => examSession.answers[k] == null).length;
        if (un && !confirm(`아직 안 푼 문항이 ${un}개 있어요.\n제출하고 채점할까요?`)) return;
        showResult();
      };
      $("#btnExamEnd").onclick = () => { if (confirm("시험을 종료하고 채점할까요?")) showResult(); };
      const bf = $("#btnFinishAB"); if (bf) bf.onclick = finish;   // 마지막 문항의 제출·채점
      $("#erClose").onclick = () => { $("#examResult").hidden = true; };
    }
  }

  // ---------- 필기 캔버스 (아이패드 애플펜슬 지원) ----------
  const coalesced = e => { const c = e.getCoalescedEvents ? e.getCoalescedEvents() : null; return c && c.length ? c : [e]; };

  // 점-선분 최단거리 (지우개 판정용)
  function segDist(pt, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const len2 = dx * dx + dy * dy;
    let t = len2 ? ((pt.x - a.x) * dx + (pt.y - a.y) * dy) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(pt.x - (a.x + t * dx), pt.y - (a.y + t * dy));
  }
  function strokeHit(s, pt, r) {
    const p = s.points;
    if (p.length === 1) return Math.hypot(p[0].x - pt.x, p[0].y - pt.y) < r;
    for (let i = 1; i < p.length; i++) if (segDist(pt, p[i - 1], p[i]) < r) return true;
    return false;
  }

  class Drawer {
    constructor(canvas, ws, key) {
      this.canvas = canvas; this.ws = ws; this.key = key;
      this.ctx = canvas.getContext("2d");
      this.strokes = loadWork(key) || [];
      this.undo_ = [];
      this.tool = "pen"; this.color = "#111827"; this.width = 2.2;
      this.fingerMode = false; this.drawing = false; this.erasing = false; this.cur = null;
      this.scrollEl = null;           // 집중 모드: 내부 스크롤 컨테이너 (두 손가락 팬)
      this.touches = new Map();       // 활성 터치 포인터
      this.pan = null;                // {y0, top0}
      this.dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      this.resize();
      const opt = { passive: false };
      canvas.addEventListener("pointerdown", e => this.down(e), opt);
      canvas.addEventListener("pointermove", e => this.move(e), opt);
      canvas.addEventListener("pointerup", e => this.up(e), opt);
      canvas.addEventListener("pointercancel", e => this.up(e), opt);
      canvas.addEventListener("pointerleave", e => this.up(e), opt);
    }
    resize() {
      const w = this.ws.clientWidth, h = this.ws.clientHeight;
      this.cssW = w; this.cssH = h;
      this.canvas.width = Math.round(w * this.dpr);
      this.canvas.height = Math.round(h * this.dpr);
      this.canvas.style.width = w + "px";
      this.canvas.style.height = h + "px";
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.render();
    }
    lowestInk() {
      let y = 0;
      for (const s of this.strokes) for (const p of s.points) if (p.y > y) y = p.y;
      return y;
    }
    addSpace(px) {
      const el = this.ws.querySelector("#workspace");
      const cur = parseInt(el.style.minHeight) || el.clientHeight || 0;
      let next = cur + px;
      if (px < 0) {
        // 줄일 때: 최소 240px, 그리고 필기가 잘리지 않는 선까지만
        const img = this.ws.querySelector("#qimg");
        const imgH = img ? img.clientHeight : 0;
        const inkFloor = this.lowestInk() ? this.lowestInk() - imgH + 40 : 0;
        next = Math.max(240, inkFloor, next);
      }
      el.style.minHeight = next + "px";
      this.resize();
    }
    pt(e) { const r = this.canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, p: e.pressure || 0.5 }; }
    pushUndo() { this.undo_.push(JSON.stringify(this.strokes)); if (this.undo_.length > 25) this.undo_.shift(); }
    undo() { if (!this.undo_.length) return; this.strokes = JSON.parse(this.undo_.pop()); saveWork(this.key, this.strokes); this.render(); }
    clear() { if (!this.strokes.length) return; this.pushUndo(); this.strokes = []; saveWork(this.key, this.strokes); this.render(); }
    avgTouchY() {
      let s = 0; for (const t of this.touches.values()) s += t.y;
      return s / this.touches.size;
    }
    down(e) {
      if (e.pointerType === "touch" && !this.fingerMode) {
        // 손가락: 집중 모드에선 두 손가락 = 스크롤, 한 손가락 = 무시(팜 리젝션)
        this.touches.set(e.pointerId, { y: e.clientY });
        if (this.scrollEl && this.touches.size === 2) {
          this.pan = { y0: this.avgTouchY(), top0: this.scrollEl.scrollTop };
          if (this.drawing) { this.drawing = false; this.cur = null; this.render(); }  // 팬 시작 시 그리던 획 취소
          e.preventDefault();
        }
        return;
      }
      try { this.canvas.setPointerCapture(e.pointerId); } catch (err) { /* 캡처 실패해도 필기는 계속 */ }
      e.preventDefault();
      if (this.tool === "eraser") { this.erasing = true; this.pushUndo(); this.eraseAt(this.pt(e)); return; }
      this.drawing = true;
      this.cur = { color: this.color, width: this.width, points: [this.pt(e)] };
    }
    move(e) {
      if (e.pointerType === "touch" && !this.fingerMode) {
        if (!this.touches.has(e.pointerId)) return;
        this.touches.set(e.pointerId, { y: e.clientY });
        if (this.pan && this.scrollEl && this.touches.size >= 2) {
          this.scrollEl.scrollTop = this.pan.top0 - (this.avgTouchY() - this.pan.y0);
          e.preventDefault();
        }
        return;
      }
      if (this.erasing) { for (const ev of coalesced(e)) this.eraseAt(this.pt(ev)); e.preventDefault(); return; }
      if (!this.drawing) return;
      const pts = this.cur.points;
      for (const ev of coalesced(e)) {
        const np = this.pt(ev), prev = pts[pts.length - 1];
        pts.push(np); this.seg(prev, np, this.cur.color, this.cur.width, np.p);
      }
      e.preventDefault();
    }
    up(e) {
      if (e && e.pointerType === "touch" && !this.fingerMode) {
        this.touches.delete(e.pointerId);
        if (this.touches.size < 2) this.pan = null;
        return;
      }
      if (this.erasing) { this.erasing = false; saveWork(this.key, this.strokes); return; }
      if (!this.drawing) return;
      this.drawing = false;
      if (this.cur && this.cur.points.length) { this.pushUndo(); this.strokes.push(this.cur); saveWork(this.key, this.strokes); }
      this.cur = null; this.render();
    }
    eraseAt(pt) {
      const before = this.strokes.length;
      this.strokes = this.strokes.filter(s => !strokeHit(s, pt, 14 + s.width));
      if (this.strokes.length !== before) this.render();
    }
    seg(a, b, color, width, pressure) {
      const c = this.ctx;
      c.strokeStyle = color; c.lineCap = "round"; c.lineJoin = "round";
      c.lineWidth = width * (0.6 + (pressure || 0.5));
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
    }
    render() {
      const c = this.ctx;
      c.clearRect(0, 0, this.cssW, this.cssH);
      for (const s of this.strokes) {
        const p = s.points;
        if (p.length === 1) { c.fillStyle = s.color; c.beginPath(); c.arc(p[0].x, p[0].y, s.width * 0.6, 0, 7); c.fill(); continue; }
        for (let i = 1; i < p.length; i++) this.seg(p[i - 1], p[i], s.color, s.width, p[i].p);
      }
    }
  }

  let currentDrawer = null;
  window.addEventListener("resize", () => currentDrawer && currentDrawer.resize());

  function setupDrawer(key) {
    const canvas = $("#draw"), ws = $("#ws"), img = $("#qimg");
    if (!canvas || !ws) return;
    const d = new Drawer(canvas, ws, key);
    currentDrawer = d;

    // iOS 사파리: Apple Pencil(스타일러스)은 touch-action:none 만으론 스크롤이 안 막히는 기기가 있음.
    // 필기는 포인터 이벤트로 처리되므로, 스타일러스 터치(또는 집중 모드)일 때 네이티브 스크롤만 직접 차단한다.
    // (집중 모드 스크롤은 두 손가락 JS 팬으로, 일반 모드의 손가락 스크롤은 네이티브 유지)
    const scEl = $("#wsScroll");
    if (scEl) scEl.addEventListener("touchmove", e => {
      let stylus = false;
      for (const t of e.touches) if (t.touchType === "stylus") { stylus = true; break; }
      if (stylus || document.body.classList.contains("focusmode")) e.preventDefault();
    }, { passive: false });
    if (img) { if (img.complete) d.resize(); img.addEventListener("load", () => d.resize()); }
    const tools = $("#tools");
    const setToolBtn = name => tools.querySelectorAll("[data-tool]").forEach(x => x.classList.toggle("on", x.dataset.tool === name));
    tools.querySelectorAll("[data-tool]").forEach(b => b.onclick = () => { d.tool = b.dataset.tool; setToolBtn(b.dataset.tool); });
    tools.querySelectorAll(".sw").forEach(s => s.onclick = () => {
      tools.querySelectorAll(".sw").forEach(x => x.classList.remove("on"));
      s.classList.add("on"); d.color = s.dataset.color; d.tool = "pen"; setToolBtn("pen");
    });
    $("#tUndo").onclick = () => d.undo();
    $("#tClear").onclick = () => { if (confirm("이 문제의 풀이를 모두 지울까요?")) d.clear(); };
    const fb = $("#tFinger");
    fb.onclick = () => { d.fingerMode = !d.fingerMode; fb.textContent = d.fingerMode ? "✋ 손가락 ON" : "✋ 손가락 OFF"; fb.classList.toggle("on", d.fingerMode); };
    $("#tMore").onclick = () => d.addSpace(500);
    $("#tLess").onclick = () => d.addSpace(-500);

    // 집중 모드: 페이지 스크롤 잠금 + 내부 스크롤(두 손가락) — 필기 시 화면 흔들림 방지
    const focusBtn = $("#tFocus");
    const layoutFocus = () => {
      // 좁은 화면에서 툴바/정답바가 여러 줄로 접혀도 필기 영역이 가려지지 않게 실제 높이로 배치
      if (!document.body.classList.contains("focusmode")) return;
      const sc = $("#wsScroll"), tb = $("#tools"), ab = document.querySelector(".answer-bar");
      if (sc && tb) sc.style.top = tb.offsetHeight + "px";
      if (sc && ab) sc.style.bottom = ab.offsetHeight + "px";
    };
    const setFocus = on => {
      document.body.classList.toggle("focusmode", on);
      const sc = $("#wsScroll");
      d.scrollEl = on ? sc : null;
      canvas.style.touchAction = on ? "none" : "pan-y";
      focusBtn.textContent = on ? "⛶ 집중 해제" : "⛶ 집중";
      focusBtn.classList.toggle("on", on);
      try { localStorage.setItem("ks_focus", on ? "1" : "0"); } catch (err) { }
      if (on) {
        layoutFocus(); sc.scrollTop = 0; d.resize();
        setTimeout(() => { layoutFocus(); d.resize(); }, 60);  // 레이아웃 안정화 후 재보정
      } else { if (sc) { sc.style.top = ""; sc.style.bottom = ""; } d.resize(); }
    };
    window.addEventListener("resize", layoutFocus);
    if (img) img.addEventListener("load", layoutFocus);
    focusBtn.onclick = () => setFocus(!document.body.classList.contains("focusmode"));
    if (localStorage.getItem("ks_focus") === "1") setFocus(true);
  }

  // 필기 저장 (문항별, localStorage LRU 한도 — 용량 초과 시 saveWork에서 추가로 자동 정리)
  const WORK_LIMIT = 200;
  function loadWork(key) { try { const s = localStorage.getItem("ksw_" + key); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
  function getIdx() { try { return JSON.parse(localStorage.getItem("ksw_idx") || "[]"); } catch (e) { return []; } }
  function setIdx(a) { try { localStorage.setItem("ksw_idx", JSON.stringify(a)); } catch (e) { } }
  function touchIdx(key) {
    let a = getIdx().filter(x => x !== key); a.push(key);
    if (a.length > WORK_LIMIT) a.splice(0, a.length - WORK_LIMIT).forEach(k => localStorage.removeItem("ksw_" + k));
    setIdx(a);
  }
  function saveWork(key, strokes) {
    const k = "ksw_" + key;
    try {
      if (!strokes || !strokes.length) { localStorage.removeItem(k); setIdx(getIdx().filter(x => x !== key)); return; }
      localStorage.setItem(k, JSON.stringify(strokes)); touchIdx(key);
    } catch (e) {
      const a = getIdx(); a.splice(0, 6).forEach(x => localStorage.removeItem("ksw_" + x)); setIdx(a);
      try { localStorage.setItem(k, JSON.stringify(strokes)); touchIdx(key); } catch (e2) { }
    }
  }

  // ---------- 백업 / 복원 (필기·오답·기록 전체를 파일로) ----------
  const isAppKey = k => k && (k.startsWith("ks_") || k.startsWith("ksw_"));
  function exportBackup() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (isAppKey(k)) data[k] = localStorage.getItem(k); }
    const d = new Date();
    const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
    const payload = { app: "SelecQ", version: 1, exportedAt: d.toISOString(), count: Object.keys(data).length, data };
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `selecq-backup-${stamp}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function importBackup(file) {
    const reader = new FileReader();
    reader.onload = () => {
      let payload;
      try { payload = JSON.parse(reader.result); } catch (e) { alert("백업 파일을 읽을 수 없어요. 올바른 파일인지 확인해 주세요."); return; }
      const data = payload && payload.data;
      if (!data || typeof data !== "object" || payload.app !== "SelecQ") { alert("SelecQ 백업 파일이 아니에요."); return; }
      if (!confirm(`백업(${payload.exportedAt ? payload.exportedAt.slice(0, 10) : "?"})을 불러오면\n이 기기의 현재 필기·기록을 덮어씁니다. 계속할까요?`)) return;
      const toRemove = [];
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (isAppKey(k)) toRemove.push(k); }
      toRemove.forEach(k => localStorage.removeItem(k));
      for (const k in data) if (isAppKey(k)) localStorage.setItem(k, data[k]);
      alert("복원했어요. 새로고침합니다.");
      location.reload();
    };
    reader.readAsText(file);
  }

  // ---------- 오답 목록 ----------
  function viewWrong() {
    setNav("wrong");
    const wrong = Q.filter(q => recOf(q)?.r === "bad" && !recOf(q).dismissed)
      .sort((a, b) => recOf(b).ts - recOf(a).ts);
    currentList = wrong;
    let selectMode = false;
    const selected = new Set();

    const render = () => {
      $("#view").innerHTML = `
        <div class="card">
          <div class="wronghead">
            <h2>오답 목록 (${wrong.length})</h2>
            ${wrong.length ? `<button class="ghost small" id="wSelect">${selectMode ? "취소" : "선택"}</button>` : ""}
          </div>
          <p style="font-size:13px;color:var(--sub);margin:0">${selectMode ? "목록에서 뺄 문제를 고르세요. 풀이 기록·통계는 그대로 유지돼요." : "다시 풀어서 맞히면 정답으로 바뀝니다."}</p>
        </div>
        ${wrong.length
          ? `<div id="wrongList">${wrong.map(q => qItem(q, { check: selectMode, sel: selected.has(q.key) })).join("")}</div>
             ${selectMode ? `<div class="selbar">
                <label class="selall"><input type="checkbox" id="wAll" ${wrong.length && selected.size === wrong.length ? "checked" : ""}> 전체 선택</label>
                <button class="big del" id="wDel" ${selected.size ? "" : "disabled"}>${selected.size}개 목록에서 빼기</button>
              </div>` : ""}`
          : `<div class="empty">틀린 문제가 없습니다. 👍</div>`}`;

      const sb = $("#wSelect");
      if (sb) sb.onclick = () => { selectMode = !selectMode; selected.clear(); render(); };
      const list = $("#wrongList");
      if (list) list.onclick = e => {
        const el = e.target.closest(".qitem"); if (!el) return;
        const k = el.dataset.k;
        if (selectMode) { selected.has(k) ? selected.delete(k) : selected.add(k); render(); }
        else location.hash = "#/q/" + encodeURIComponent(k);
      };
      const wa = $("#wAll");
      if (wa) wa.onclick = () => { selected.clear(); if (wa.checked) wrong.forEach(q => selected.add(q.key)); render(); };
      const wd = $("#wDel");
      if (wd) wd.onclick = () => {
        if (!selected.size) return;
        if (!confirm(`선택한 ${selected.size}개를 오답 목록에서 뺄까요?\n풀이 기록·통계는 그대로 유지됩니다.`)) return;
        selected.forEach(k => { if (records[k]) records[k].dismissed = true; });   // 기록은 두고 목록에서만 숨김
        saveRec();
        viewWrong();   // 목록 재계산 후 다시 렌더
      };
    };
    render();
  }

  // ---------- 기록 ----------
  function viewStats() {
    setNav("stats");
    let selectMode = false;
    const selected = new Set();

    const render = () => {
      const keys = Object.keys(records);
      const solved = keys.length;
      const ok = keys.filter(k => records[k].r === "ok").length;
      const byType = {};
      for (const k of keys) {
        const q = Q.find(x => x.key === k); if (!q) continue;
        byType[q.type] = byType[q.type] || { ok: 0, bad: 0 };
        byType[q.type][records[k].r === "ok" ? "ok" : "bad"]++;
      }
      const weak = Object.entries(byType)
        .filter(([, v]) => v.bad > 0)
        .sort((a, b) => b[1].bad - a[1].bad).slice(0, 8);
      const solvedList = keys.map(k => Q.find(x => x.key === k)).filter(Boolean)
        .sort((a, b) => records[b.key].ts - records[a.key].ts);
      $("#view").innerHTML = `
        <div class="statgrid">
          <div class="stat"><div class="n">${solved}</div><div class="t">푼 문제</div></div>
          <div class="stat"><div class="n">${ok}</div><div class="t">맞힌 문제</div></div>
          <div class="stat"><div class="n">${solved ? Math.round(ok / solved * 100) : 0}%</div><div class="t">정답률</div></div>
          <div class="stat"><div class="n">${Q.length - solved}</div><div class="t">남은 문제</div></div>
        </div>
        <div class="card" style="margin-top:14px">
          <h2>약한 유형 (오답 많은 순)</h2>
          ${weak.length ? weak.map(([t, v]) =>
            `<div style="display:flex;justify-content:space-between;padding:6px 0;font-size:14px;border-bottom:1px solid var(--line)">
              <span>${typeName[t] || t}</span><span style="color:var(--bad)">오답 ${v.bad} / 정답 ${v.ok}</span></div>`).join("")
            : `<div class="empty">아직 데이터가 없습니다.</div>`}
        </div>
        <div class="card">
          <div class="wronghead">
            <h2>푼 문제 기록 (${solved})</h2>
            ${solved ? `<button class="ghost small" id="sSelect">${selectMode ? "취소" : "선택"}</button>` : ""}
          </div>
          ${selectMode ? `<p style="font-size:13px;color:var(--sub);margin:0 0 8px">삭제할 기록을 고르세요. <b>통계에서도 함께 제거</b>됩니다(되돌릴 수 없음).</p>` : ""}
        </div>
        ${solved
          ? `<div id="recList">${solvedList.map(q => qItem(q, { check: selectMode, sel: selected.has(q.key) })).join("")}</div>
             ${selectMode ? `<div class="selbar">
                <label class="selall"><input type="checkbox" id="sAll" ${solved && selected.size === solved ? "checked" : ""}> 전체 선택</label>
                <button class="big del danger" id="sDel" ${selected.size ? "" : "disabled"}>${selected.size}개 삭제</button>
              </div>` : ""}`
          : ""}
        <div class="card">
          <h2>백업 · 복원</h2>
          <p style="font-size:13px;color:var(--sub);margin:0 0 10px">필기·오답·기록을 파일로 저장해 두면 브라우저 데이터를 지우거나 기기를 바꿔도 복원할 수 있어요.</p>
          <div class="backuprow">
            <button class="ghost" id="btnExport">⬇ 백업 내보내기</button>
            <label class="ghost btnfile">⬆ 복원 가져오기<input type="file" id="fileImport" accept="application/json,.json" hidden></label>
          </div>
        </div>
        <div class="card"><button class="ghost" id="btnClear">풀이 기록 전체 삭제</button></div>`;

      const ssel = $("#sSelect");
      if (ssel) ssel.onclick = () => { selectMode = !selectMode; selected.clear(); render(); };
      const list = $("#recList");
      if (list) list.onclick = e => {
        const el = e.target.closest(".qitem"); if (!el) return;
        const k = el.dataset.k;
        if (selectMode) { selected.has(k) ? selected.delete(k) : selected.add(k); render(); }
        else location.hash = "#/q/" + encodeURIComponent(k);
      };
      const sa = $("#sAll");
      if (sa) sa.onclick = () => { selected.clear(); if (sa.checked) solvedList.forEach(q => selected.add(q.key)); render(); };
      const sd = $("#sDel");
      if (sd) sd.onclick = () => {
        if (!selected.size) return;
        if (!confirm(`선택한 ${selected.size}개의 풀이 기록을 삭제할까요?\n통계에서도 제거되며 되돌릴 수 없습니다.`)) return;
        selected.forEach(k => { delete records[k]; });
        saveRec();
        selectMode = false; selected.clear(); render();
      };
      $("#btnExport").onclick = exportBackup;
      const fi = $("#fileImport");
      if (fi) fi.onchange = () => { if (fi.files && fi.files[0]) importBackup(fi.files[0]); };
      $("#btnClear").onclick = () => {
        if (confirm("풀이 기록을 모두 삭제할까요? 되돌릴 수 없습니다.")) {
          records = {}; saveRec(); render();
        }
      };
    };
    render();
  }

  // ---------- 라우터 ----------
  function route() {
    const h = location.hash || "#/";
    if (heroTimer) { clearInterval(heroTimer); heroTimer = null; }
    if (!h.startsWith("#/q/")) document.body.classList.remove("focusmode");  // 풀이 밖에선 집중 모드 해제
    flushQTime();  // 이전 문항 체류 시간 확정 (문항 이동/화면 전환 시)
    if (examInterval && !h.startsWith("#/q/")) { clearInterval(examInterval); examInterval = null; }  // 풀이 화면 벗어나면 타이머 정지
    if (h.startsWith("#/q/")) viewSolve(decodeURIComponent(h.slice(4)));
    else if (h === "#/find") viewFind();
    else if (h === "#/exam") viewExam();
    else if (h === "#/custom") viewCustom();
    else if (h === "#/random") viewRandom();
    else if (h === "#/wrong") viewWrong();
    else if (h === "#/stats") viewStats();
    else viewHome();  // '#/' 및 구 '#/list' 링크 모두 홈으로
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();

  // 모바일 상단바: 가로 스크롤 시 좌/우 페이드로 "더 있음" 표시 (끝에 닿으면 사라짐)
  const topnav = document.querySelector(".topbar nav");
  function updateNavFade() {
    if (!topnav) return;
    const atStart = topnav.scrollLeft <= 1;
    const atEnd = topnav.scrollLeft + topnav.clientWidth >= topnav.scrollWidth - 1;
    topnav.classList.toggle("fade-l", !atStart);
    topnav.classList.toggle("fade-r", !atEnd);
  }
  if (topnav) {
    topnav.addEventListener("scroll", updateNavFade, { passive: true });
    window.addEventListener("resize", updateNavFade);
    window.addEventListener("load", updateNavFade);
    updateNavFade();
  }
})();
```

## 3. styles.css
```css
:root {
  --bg: #f9fafb; --card: #fff; --ink: #222; --sub: #667085;
  --accent: #2563eb; --accent-soft: #eff4ff; --line: #e5e8ee;
  --ok: #16a34a; --bad: #dc2626; --warn: #d97706;
}
* { box-sizing: border-box; }
html, body { overscroll-behavior-y: none; }  /* 당김 튕김(고무줄) 방지 */
body { margin: 0; font-family: 'Pretendard Variable', Pretendard, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; background: var(--bg); color: var(--ink); }
a { color: inherit; text-decoration: none; }

.topbar { display: flex; align-items: center; gap: 20px; padding: 12px 20px; background: var(--card); border-bottom: 1px solid var(--line); position: sticky; top: 0; z-index: 10; }
.logo { font-size: 20px; font-weight: 800; }
.logo span { color: var(--accent); }
.topbar nav { display: flex; gap: 4px; }
.topbar nav a { padding: 6px 12px; border-radius: 8px; font-size: 14px; color: var(--sub); }
.topbar nav a.active { background: var(--accent-soft); color: var(--accent); font-weight: 600; }

main { max-width: 860px; margin: 20px auto; padding: 0 16px; min-height: 60vh; }
.card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 18px; margin-bottom: 14px; }

h2 { font-size: 17px; margin: 0 0 12px; }
.flabel { font-size: 13px; color: var(--sub); margin: 12px 0 6px; font-weight: 600; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip { padding: 6px 12px; border: 1px solid var(--line); border-radius: 99px; font-size: 13px; cursor: pointer; background: #fff; user-select: none; }
.chip.on { background: var(--accent); color: #fff; border-color: var(--accent); }
.chip.unit { font-weight: 600; }
.typechips { margin: 6px 0 4px 10px; }
.typechips .chip { font-size: 12px; padding: 4px 10px; }

/* 난이도 색상 (상=빨강, 중=주황, 하=초록) */
.lvchip { font-weight: 700; }
.lvchip.lv-상 { border-color: #ef4444; color: #ef4444; }
.lvchip.lv-중 { border-color: #f59e0b; color: #d97706; }
.lvchip.lv-하 { border-color: #10b981; color: #059669; }
.lvchip.lv-상.on { background: #ef4444; color: #fff; border-color: #ef4444; }
.lvchip.lv-중.on { background: #f59e0b; color: #fff; border-color: #f59e0b; }
.lvchip.lv-하.on { background: #10b981; color: #fff; border-color: #10b981; }
.lvbadge { display: inline-block; font-size: 11px; font-weight: 700; padding: 1px 7px; border-radius: 99px; vertical-align: 1px; }
.lvbadge.lv-상 { background: #fee2e2; color: #dc2626; }
.lvbadge.lv-중 { background: #fef3c7; color: #d97706; }
.lvbadge.lv-하 { background: #d1fae5; color: #059669; }

.searchbar { display: flex; align-items: center; gap: 10px; margin-top: 16px; }
.count { font-size: 14px; color: var(--sub); }
button.big, a.big { background: var(--accent); color: #fff; border: none; border-radius: 10px; padding: 10px 22px; font-size: 15px; font-weight: 600; cursor: pointer; }
button.ghost { background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 8px 14px; font-size: 13px; cursor: pointer; }

/* 홈: 히어로 */
.hero { text-align: center; padding: 52px 16px 28px; position: relative; }
.hero::before { content: ""; position: absolute; inset: 40% -20% -10% -20%; z-index: -1;
  background: radial-gradient(ellipse at 50% 90%, #dbeafe 0%, rgba(219,234,254,.35) 45%, transparent 75%); }

/* 제품 미리보기 목업 (오르조 스타일) */
.heromock { max-width: 680px; margin: 40px auto 0; border-radius: 18px; overflow: hidden;
  background: #fff; border: 1px solid var(--line);
  box-shadow: 0 24px 60px -18px rgba(37, 99, 235, .25), 0 6px 18px rgba(0,0,0,.06); }
.mockbar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: #f3f4f6; border-bottom: 1px solid var(--line); }
.mdot { width: 10px; height: 10px; border-radius: 50%; background: #d1d5db; }
.mdot:nth-child(1) { background: #fca5a5; } .mdot:nth-child(2) { background: #fcd34d; } .mdot:nth-child(3) { background: #86efac; }
.mtitle { margin-left: 8px; font-size: 12px; color: var(--sub); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mockbody { position: relative; aspect-ratio: 753 / 560; background: #fff; }
.mockbody img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; object-position: center top;
  transition: opacity .22s ease; }
.mockdots { display: flex; gap: 7px; justify-content: center; padding: 10px 0 12px; background: #fff; }
.mockdots .dot { width: 8px; height: 8px; border-radius: 50%; background: #d1d5db; cursor: pointer; transition: all .2s; }
.mockdots .dot.on { background: var(--accent); width: 22px; border-radius: 99px; }
.hero h1 { font-size: 34px; font-weight: 800; line-height: 1.32; letter-spacing: -0.5px; margin: 0 0 14px; }
.herosub { font-size: 15px; color: var(--sub); line-height: 1.75; margin: 0 0 24px; }
.herosub b { color: var(--ink); }
.benefits { list-style: none; margin: 0 auto 22px; padding: 0; width: fit-content; text-align: left;
  display: flex; flex-direction: column; gap: 9px; }
.benefits li { display: flex; align-items: center; gap: 9px; font-size: 15px; font-weight: 600; color: var(--ink); }
.benefits .bi { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; flex: none;
  border-radius: 50%; background: var(--accent-soft); color: var(--accent); font-size: 11px; font-weight: 800; }
.herocta { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.pill { border-radius: 99px; padding: 13px 28px; font-size: 15px; }
a.pill { display: inline-flex; align-items: center; }
.pill.outline { background: #fff; color: var(--ink); border: 1px solid var(--line); font-weight: 600; cursor: pointer; }
.pill.outline:hover { border-color: var(--accent); color: var(--accent); }

/* 과목 바로가기 카드 */
.subjectcards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 8px 0 26px; }
.scard { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 18px 8px; text-align: center; cursor: pointer; transition: all .15s; }
.scard:hover { border-color: var(--accent); transform: translateY(-2px); }
.scard.on { border-color: var(--accent); background: var(--accent-soft); }
.scard .sname { font-weight: 700; font-size: 15px; }
.scard .scount { font-size: 12px; color: var(--sub); margin-top: 4px; }
@media (max-width: 560px) { .subjectcards { grid-template-columns: repeat(2, 1fr); } .hero h1 { font-size: 26px; } }


/* 드롭다운 필터바: 넘치면 잘리지 않고 다음 줄로 감싼다(초기화까지 항상 노출) */
.filterwrap { position: sticky; top: 52px; z-index: 5; background: var(--bg); padding-top: 8px; }
.filterbar { display: flex; flex-wrap: wrap; gap: 8px; row-gap: 8px; justify-content: center; padding-bottom: 4px; }
@media (max-width: 640px) {
  .fbtn { padding: 6px 12px; font-size: 12px; }
}
.fbtn { display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; border: 1px solid var(--line);
  background: #fff; border-radius: 99px; padding: 7px 13px; font-size: 13px; color: var(--sub); cursor: pointer; }
.fbtn b { font-weight: 700; color: var(--ink); }
.fbtn .caret { font-size: 10px; }
.fbtn.sel { border-color: var(--accent); }
.fbtn.sel b { color: var(--accent); }
.fbtn.active { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); }
.fbtn.active b { color: var(--accent); }
.fbtn.resetbtn { color: var(--sub); }
.filterpanel { display: none; }
.filterpanel.open { display: block; border: 1px solid var(--line); border-radius: 12px; background: var(--card);
  padding: 12px; margin-top: 8px; max-height: 48vh; overflow: auto; box-shadow: 0 4px 14px rgba(0,0,0,.06); }
.unitrow { margin-bottom: 8px; }
.ulabel { font-size: 12px; color: var(--sub); font-weight: 700; margin: 6px 0 4px; }
.phint { font-size: 12px; color: var(--sub); margin-top: 8px; }
.listhead { margin: 14px 2px 8px; }
.listhead .count { font-size: 14px; color: var(--sub); font-weight: 600; }

/* 검색 실행 영역 */
.searchpane { text-align: center; padding: 40px 0; }
.searchbtn { min-width: 240px; font-size: 16px; }
.searchbtn:disabled { background: #cbd5e1; cursor: not-allowed; }
.searchpane #btnExportFind { display: block; margin: 14px auto 0; }
.shint { margin-top: 16px; font-size: 13px; color: var(--sub); line-height: 1.7; }
.startprompt { font-size: 15px; color: var(--sub); line-height: 1.7; padding: 20px 0; }

/* 실전 모의고사 */
.examdesc { font-size: 14px; color: var(--sub); line-height: 1.7; margin: 6px 0 14px; }
.examsetup .flabel { margin-top: 14px; }
.examstart { text-align: center; margin-top: 22px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.examstart .big { min-width: 200px; }
.examstart .big:disabled { background: #cbd5e1; cursor: not-allowed; }

/* 나만의 모의고사(문제 조합) */
/* 메인 하단 자료 이용 안내 */
.usage-notice { max-width: 660px; margin: 44px auto 0; padding: 22px 20px 4px; border-top: 1px solid var(--line); text-align: center; }
.usage-notice h3 { font-size: 14px; color: var(--ink); margin-bottom: 12px; }
.usage-notice p { font-size: 13px; color: var(--sub); line-height: 1.8; margin: 0 0 12px; }

/* 문제 찾기 전용 화면 헤더 */
.findintro { text-align: center; margin: 4px 0 20px; }
.findintro h2 { font-size: 22px; margin-bottom: 6px; }
.findintro p { font-size: 14px; color: var(--sub); line-height: 1.6; margin: 0; }

.candpane { margin-top: 12px; }
.candhead { display: flex; align-items: center; justify-content: space-between; font-size: 14px; color: var(--sub); margin-bottom: 8px; }
.candhead b { color: var(--ink); }
.candactions { display: flex; gap: 6px; flex: none; }
.canditems { max-height: 46vh; overflow-y: auto; border: 1px solid var(--line); border-radius: 12px; }
.candrow { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; border-bottom: 1px solid var(--line); }
.candrow:last-child { border-bottom: none; }
.candmeta { display: flex; align-items: center; gap: 8px; min-width: 0; flex-wrap: wrap; }
.cno { font-weight: 700; font-size: 14px; flex: none; }
.cinfo { font-size: 12.5px; color: var(--sub); }
.addbtn { flex: none; border: 1px solid var(--accent); background: #fff; color: var(--accent); border-radius: 99px; padding: 6px 13px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap; }
.addbtn.added { background: var(--accent); color: #fff; }
.basketcard { margin-top: 16px; }
.bhead { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 6px; }
.bhead h3 { margin: 0; }

/* 랜덤 출제 */
.rndpresets { display: flex; flex-wrap: wrap; gap: 8px; }
.rndpreset { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; border: 1px solid var(--line); background: #fff; border-radius: 12px; padding: 9px 14px; cursor: pointer; text-align: left; }
.rndpreset:hover { border-color: var(--accent); background: var(--accent-soft); }
.rp-name { font-size: 14px; font-weight: 700; color: var(--ink); }
.rp-spec { font-size: 12px; color: var(--sub); }
.rndcustom { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; margin-top: 4px; }
.rndcount { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--sub); }
.rndcount b { font-size: 16px; color: var(--ink); min-width: 20px; text-align: center; }
.rndtime { font-size: 14px; color: var(--sub); }
.rndtime b { color: var(--accent); font-size: 16px; }
.rndcustom .big { min-width: 150px; padding: 10px 18px; }
.bcount { color: var(--accent); font-weight: 800; }
.basketlist { display: flex; flex-direction: column; gap: 6px; margin: 6px 0 8px; }
.brow { display: flex; align-items: center; gap: 10px; padding: 9px 10px; background: var(--bg); border: 1px solid var(--line); border-radius: 10px; }
.bidx { flex: none; width: 22px; height: 22px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.bmeta { flex: 1; font-size: 13px; min-width: 0; }
.bctrl { display: flex; gap: 4px; flex: none; }
.ico { width: 30px; height: 30px; border: 1px solid var(--line); background: #fff; border-radius: 8px; cursor: pointer; font-size: 12px; color: var(--sub); }
.ico:disabled { opacity: .35; cursor: default; }
.ico.rm { color: var(--bad); }
.minput { display: inline-flex; align-items: center; gap: 3px; }
.minput input { width: 50px; border: none; background: transparent; text-align: center; font-size: 13px; color: var(--ink); }
.startprompt.small { padding: 22px 12px; font-size: 13px; }
.examtimer { position: sticky; top: 52px; z-index: 7; display: flex; align-items: center; gap: 10px;
  background: #111827; color: #fff; border-radius: 12px; padding: 8px 14px; margin-bottom: 10px; }
.examtimer .etlabel { flex: 1; font-size: 13px; opacity: .9; }
.etq { font-size: 12px; opacity: .85; font-variant-numeric: tabular-nums; white-space: nowrap; }
.etclock { font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; letter-spacing: 1px; }
.etclock.over { color: #fca5a5; }
.examtimer .ghost { background: rgba(255,255,255,.14); color: #fff; border: none; }
.resultpanel { max-width: 520px; }
.resultbody { padding: 16px; overflow: auto; }
.bigscore { text-align: center; font-size: 44px; font-weight: 800; color: var(--accent); }
.bigscore span { font-size: 18px; color: var(--sub); font-weight: 600; margin-left: 4px; }
.resultmeta { text-align: center; font-size: 13px; color: var(--sub); margin: 6px 0 16px; }
.resultrows { max-height: 40vh; overflow: auto; margin-bottom: 16px; }
.resultbody .big { width: 100%; }

/* 조건 내 문제 목록 오버레이 */
.picker { position: fixed; inset: 0; background: rgba(0,0,0,.4); z-index: 20; display: flex; align-items: flex-end; justify-content: center; }
.picker[hidden] { display: none; }
.picker-panel { background: var(--card); width: 100%; max-width: 640px; max-height: 82vh; border-radius: 16px 16px 0 0; display: flex; flex-direction: column; }
.picker-head { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-bottom: 1px solid var(--line); }
.picker-head b { flex: 1; font-size: 15px; }
.phome { color: var(--accent); font-size: 13px; font-weight: 600; }
.picker-list { overflow: auto; padding: 8px; }

/* 해설 검색 링크 */
.solbtn { display: block; text-align: center; text-decoration: none; margin: 10px 0 4px;
  background: #fffbeb; color: #b45309; border: 1px solid #fcd34d; }
.solbtn:hover { background: #fef3c7; }
.prow { display: flex; align-items: center; gap: 10px; padding: 11px 12px; border-radius: 10px; cursor: pointer; }
.prow:hover { background: var(--accent-soft); }
.prow.cur { background: var(--accent-soft); outline: 1px solid var(--accent); }
.pno { font-weight: 800; min-width: 44px; }
.pmeta { flex: 1; font-size: 13px; color: var(--sub); }
.ptime { font-size: 12px; color: var(--sub); min-width: 50px; text-align: right; font-variant-numeric: tabular-nums; }

.qitem { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 12px; margin-bottom: 8px; background: var(--card); cursor: pointer; transition: border-color .15s; }
.qitem:hover { border-color: var(--accent); }
.qitem.sel { border-color: var(--accent); background: var(--accent-soft); }
.qcheck { flex: none; font-size: 20px; line-height: 1; color: var(--accent); }
/* 오답 목록 선택 삭제 */
.wronghead { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 6px; }
.wronghead h2 { margin: 0; }
.selbar { position: sticky; bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 12px; background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 10px 14px; box-shadow: 0 4px 14px rgba(0,0,0,.08); }
.selall { display: flex; align-items: center; gap: 6px; font-size: 14px; color: var(--sub); cursor: pointer; }
.selbar .del { padding: 10px 18px; white-space: nowrap; }
.selbar .del.danger { background: var(--bad); }
.selbar .del:disabled { background: #cbd5e1; cursor: not-allowed; }
.qno { font-weight: 800; font-size: 15px; min-width: 52px; }
.qmeta { flex: 1; }
.qmeta .l1 { font-size: 14px; font-weight: 600; }
.qmeta .l2 { font-size: 12px; color: var(--sub); margin-top: 2px; }
.status { font-size: 12px; padding: 3px 10px; border-radius: 99px; }
.status.none { background: #f1f5f9; color: var(--sub); }
.status.ok { background: #dcfce7; color: var(--ok); }
.status.bad { background: #fee2e2; color: var(--bad); }

.solve-head { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.solve-head h2 { font-size: 20px; }
.pts { color: var(--sub); font-size: 14px; }
.typeline { margin: 6px 0 14px; font-size: 13px; color: var(--sub); }
/* 필기 풀이 화면 */
.draw-toolbar { position: sticky; top: 56px; z-index: 6; display: flex; gap: 6px; align-items: center; flex-wrap: wrap;
  background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 8px; margin-bottom: 10px; }
.tbtn { border: 1px solid var(--line); background: #fff; border-radius: 8px; padding: 6px 10px; font-size: 13px; cursor: pointer; }
.tbtn.on { background: var(--accent); color: #fff; border-color: var(--accent); }
.swatches { display: flex; gap: 5px; align-items: center; margin: 0 2px; }
.sw { width: 22px; height: 22px; border-radius: 50%; cursor: pointer; box-shadow: 0 0 0 1px var(--line); }
.sw.on { box-shadow: 0 0 0 2px var(--accent); }
.tsep { width: 1px; height: 20px; background: var(--line); margin: 0 3px; }

.worksheet { position: relative; border: 1px solid var(--line); border-radius: 12px; overflow: hidden;
  background-color: #fff;
  background-image: linear-gradient(#eef1f6 1px, transparent 1px), linear-gradient(90deg, #eef1f6 1px, transparent 1px);
  background-size: 28px 28px; }
.qimg { display: block; width: 100%; background: #fff; user-select: none; -webkit-user-drag: none; }
.noimg { padding: 24px; font-size: 14px; color: var(--sub); background: #fff; }
.workspace { min-height: 640px; }
.drawlayer { position: absolute; top: 0; left: 0; touch-action: pan-y; cursor: crosshair; }
.wsmore { display: flex; gap: 10px; align-items: center; margin: 10px 0 6px; }

/* 집중 모드 — 페이지 스크롤 잠금, 필기 영역만 내부 스크롤 (굿노트 방식) */
body.focusmode { overflow: hidden; }
body.focusmode .topbar, body.focusmode .solve-head, body.focusmode .typeline,
body.focusmode .srcline, body.focusmode .navrow, body.focusmode .foot,
body.focusmode .solbtn, body.focusmode .examtimer { display: none; }
body.focusmode .draw-toolbar { position: fixed; top: 0; left: 0; right: 0; z-index: 40; border-radius: 0; margin: 0; justify-content: center; }
body.focusmode .wsscroll { position: fixed; top: 52px; bottom: 66px; left: 0; right: 0; z-index: 35;
  overflow-y: auto; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; background: var(--bg); padding: 0 8px; }
body.focusmode .worksheet { max-width: 900px; margin: 0 auto; }
body.focusmode .wsmore { max-width: 900px; margin: 10px auto; }
body.focusmode .answer-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 40; border-radius: 0; margin: 0; justify-content: center; }
body.focusmode .picker, body.focusmode #examResult { z-index: 50; }
@media (max-width: 520px) {
  body.focusmode .tbtn { padding: 5px 8px; font-size: 12px; }
  body.focusmode .sw { width: 18px; height: 18px; }
  body.focusmode .answer-bar .mc button { width: 40px; height: 40px; font-size: 15px; }
}
.pdfmini { font-size: 12px; color: var(--accent); }
.wsmore .pdfmini:first-of-type { margin-left: auto; }

.answer-bar { position: sticky; bottom: 0; z-index: 6; display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
  background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 10px 12px;
  margin-top: 12px; box-shadow: 0 -3px 12px rgba(0,0,0,.06); }
.answer-bar .mc { gap: 6px; }
.answer-bar .mc button { width: 46px; height: 46px; }
.answer-bar .short { width: 120px; }
.answer-bar .big { padding: 10px 18px; }
.answer-bar .result { margin: 0 0 0 auto; }
.anslabel { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
.mc { display: flex; gap: 8px; }
.mc button { width: 52px; height: 52px; border-radius: 12px; border: 1px solid var(--line); background: #fff; font-size: 18px; cursor: pointer; }
.mc button.sel { background: var(--accent); color: #fff; border-color: var(--accent); }
input.short { width: 140px; padding: 10px 12px; font-size: 18px; border: 1px solid var(--line); border-radius: 10px; }
.submitrow { margin-top: 14px; display: flex; gap: 10px; align-items: center; }
.result { font-size: 16px; font-weight: 700; margin-top: 12px; }
.result.ok { color: var(--ok); }
.result.bad { color: var(--bad); }
.result .ans { font-weight: 400; font-size: 14px; color: var(--sub); margin-left: 8px; }
.navrow { display: flex; justify-content: space-between; margin-top: 18px; }
.answer-bar .nextbtn { background: var(--accent); color: #fff; border: none; border-radius: 10px; padding: 10px 16px; font-size: 14px; font-weight: 700; white-space: nowrap; cursor: pointer; margin-left: auto; }
.answer-bar .nextbtn.finish { background: var(--ok); }
/* 모의고사: 하단바 2단 (윗줄=정답+채점, 아랫줄=이전/목록/다음) */
.answer-bar.examab { flex-direction: column; align-items: stretch; gap: 8px; }
.ab-answer { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
.ab-nav { display: flex; align-items: center; gap: 8px; }
.ab-nav .nextbtn { margin-left: auto; }
.answer-bar .peekbtn { white-space: nowrap; }
.peekans { font-size: 14px; font-weight: 700; white-space: nowrap; }
.peekans.ok { color: var(--ok); }
.peekans.bad { color: var(--bad); }
.peekans .ans { font-weight: 500; color: var(--sub); }
.srcline { font-size: 12px; color: var(--sub); margin-top: 16px; }
.report { font-size: 12px; color: var(--sub); }

.statgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.backuprow { display: flex; flex-wrap: wrap; gap: 10px; }
.backuprow .btnfile { cursor: pointer; display: inline-flex; align-items: center; }
.stat { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 14px; text-align: center; }
.stat .n { font-size: 24px; font-weight: 800; }
.stat .t { font-size: 12px; color: var(--sub); margin-top: 2px; }

.empty { text-align: center; color: var(--sub); padding: 40px 0; }
.foot { max-width: 860px; margin: 30px auto 40px; padding: 0 16px; font-size: 12px; color: var(--sub); }
@media (max-width: 600px) {
  /* 모바일: 상단바 한 줄 유지 + 글씨 축소(넘치면 가로 스와이프) */
  .topbar { gap: 8px; padding: 10px 10px; }
  .logo { font-size: 18px; }
  .topbar nav { overflow-x: auto; scrollbar-width: none; flex: 1; min-width: 0; }
  .topbar nav::-webkit-scrollbar { display: none; }
  .topbar nav a { padding: 5px 7px; font-size: 12px; white-space: nowrap; }
  /* 가로 스크롤 여백을 부드럽게 페이드 (스크롤 위치에 따라 좌/우) */
  .topbar nav.fade-r { -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 26px), transparent); mask-image: linear-gradient(to right, #000 calc(100% - 26px), transparent); }
  .topbar nav.fade-l:not(.fade-r) { -webkit-mask-image: linear-gradient(to right, transparent, #000 26px); mask-image: linear-gradient(to right, transparent, #000 26px); }
  .topbar nav.fade-l.fade-r { -webkit-mask-image: linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent); mask-image: linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent); }
  .mc button { width: 44px; height: 44px; }
}

/* 나만의 문제지 — 인쇄(PDF 내보내기) 전용 레이아웃 */
#printArea { display: none; }
@media print {
  body.printing > *:not(#printArea) { display: none !important; }
  body.printing #printArea { display: block; color: #000; }
  .print-head { text-align: center; margin-bottom: 9mm; padding-bottom: 4mm; border-bottom: 2px solid #000; }
  .print-head h1 { font-size: 20pt; margin: 0 0 3mm; }
  .print-head h1 span { font-weight: 400; font-size: 13pt; color: #444; }
  .print-sub { font-size: 10pt; color: #555; }
  .print-q { page-break-inside: avoid; break-inside: avoid; margin-bottom: 9mm; }
  .print-qhead { font-size: 11pt; font-weight: 700; margin-bottom: 3mm; }
  .print-img { display: block; width: 100%; max-width: 170mm; }
  .print-noimg { font-size: 10pt; color: #666; padding: 6mm; border: 1px solid #bbb; }
  .print-src { font-size: 8pt; color: #777; margin-top: 2mm; }
  .print-answers { page-break-before: always; break-before: page; }
  .print-answers h2 { font-size: 15pt; margin: 0 0 4mm; border-bottom: 1px solid #000; padding-bottom: 2mm; }
  .print-anslist { display: flex; flex-wrap: wrap; gap: 3mm 8mm; font-size: 11pt; }
  .print-ans { white-space: nowrap; }
  .print-foot { margin-top: 10mm; padding-top: 3mm; border-top: 1px solid #999; font-size: 8pt; color: #777; text-align: center; }
  @page { margin: 14mm; }
}
```

## 4. manifest.json
```json
{
  "name": "SelecQ — 평가원 수학 기출",
  "short_name": "SelecQ",
  "description": "평가원 수학 기출을 유형별로 골라 풀고, 아이패드로 필기하며 푸는 무료 웹앱",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "any",
  "background_color": "#f9fafb",
  "theme_color": "#2563eb",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

## 5. data.js — 구조 샘플 (실제 파일은 395KB, 문제 메타데이터 배열)
```js
window.APP_DATA = {"questions": [{"img": "q/2022_csat_common_q01.png", "key": "2022_csat/common/q01", "year": 2022, "exam": "csat", "examLabel": "2022학년도 수능", "subject": "common", "qno": 1, "type": "su1_explog_calc", "unit": "su1_explog", "points": 2, "answer": 2, "difficulty": "하", "correctRate": 90, "reviewStatus": "human_confirmed", "postUrl": "https://www.suneung.re.kr/boardCnts/view.do?boardID=1500234&boardSeq=5070165&lev=0&m=0403&s=suneung", "pdfUrl": "https://www.suneung.re.kr/boardCnts/fileDown.do?fileSeq=8d1400b002e2a9ab76bc8a45da9ac67a"}, {"img": "q/2022_csat_common_q02.png", "key": "2022_csat/common/q02", "year": 2022, "exam": "csat", "examLabel": "2022학년도 수능", "subject": "common", "qno": 2, "type": "su2_diff_basic", "unit": "su2_diff", "points": 2, "answer": 5, "difficulty": "하", "correctRate": 94, "reviewStatus": "human_confirmed", "postUrl": "https://www.suneung.re.kr/boardCnts/view.do?boardID=1500234&boardSeq=5070165&lev=0&m=0403&s=suneung", "pdfUrl": "https://www.suneung.re.kr/boardCnts/fileDown.do?fileSeq=8d1400b002e2a9ab76bc8a45da9ac67a"}, {"img": "q/2022_csat_common_q03.png", "key": "2022_csat/common/q03", "year": 2022, "exam": "csat", "examLabel": "2022학년도 수능", "subject": "common", "qno": 3, "type": "su1_seq_arith_geo", "unit": "su1_seq", "points": 3, "answer": 5, "difficulty": "하", "correctRate": 93, "reviewStatus": "auto_high", "postUrl": "https://www.suneung.re.kr/boardCnts/view.do?boardID=1500234&boardSeq=5070165&lev=0&m=0403&s=suneung", "pdfUrl": "https://www.suneung.re.kr/boardCnts/fileDown.do?fileSeq=8d1400b002e2a9ab76bc8a45da9ac67a"}, {"img": "q/2022_csat_common_q04.png", "key": "2022_csat/common/q04", "year": 2022, "exam": "csat", "examLabel": "2022학년도 수능", "subject": "common", "qno": 4, "type": "su2_limit_calc", "unit": "su2_limit", "points": 3, "answer": 4, "difficulty": "하", "correctRate": 91, "reviewStatus": "human_confirmed", "postUrl": "https://www.suneung.re.kr/boardCnts/view.do?boar
// ... (이하 동일 구조의 question 객체가 계속됨)
```

## 6. solutions.js — 구조 샘플 (실제 파일은 44KB)
```js
window.APP_SOLUTIONS = {"2022_mock06/common/q01": {"s": "밑이 같은 두 거듭제곱의 곱은 지수를 더한다는 지수법칙 a^m × a^n = a^(m+n)을 쓴다.\n2^(√3) × 2^(2−√3) = 2^(√3 + 2 − √3) = 2^2 이다. 지수에서 √3 − √3 = 0이 되어 무리수 부분이 사라진다.\n따라서 값은 2^2 = 4. 정답은 ④.", "c": ["지수법칙"]}, "2022_mock06/common/q02": {"s": "도함수 f'(x)를 적분하면 원래 함수 f(x)를 얻을 수 있다(부정적분).\nf'(x) = 3x^2 − 2x 이므로 f(x) = x^3 − x^2 + C (C는 적분상수).\n조건 f(1) = 1을 대입하면 1 − 1 + C = 1, 즉 C = 1.\n따라서 f(x) = x^3 − x^2 + 1 이고, f(2) = 8 − 4 + 1 = 5. 정답은 ⑤.", "c": ["부정적분", "적분상수 결정"]}, "2022_mock06/common/q03": {"s": "조건 π < θ < 3/2 π 는 θ가 제3사분면 각임을 뜻한다. 제3사분면에서는 sinθ < 0, cosθ < 0 이다.\ntanθ = 12/5 이므로 대응하는 직각삼각형의 두 변을 12, 5로 보면 빗변은 √(12^2 + 5^2) = √169 = 13.\n제3사분면에서 부호를 붙이면 sinθ = −12/13, cosθ = −5/13.\n따라서 sinθ + cosθ = −12/13 − 5/13 = −17/13. 정답은 ①.", "c": ["삼각함수", "사분면과 부호", "직각삼각형 비"]}, "2022_mock06/common/q04": {"s": "그래프에서 한쪽 극한값은 그 점에 '다가갈 때' 함숫값이 향하는 높이를 읽으면 된다(점에서의 함숫값 자체가 아니라 이어지는 곡선의 경향).\nx → 0− : 왼쪽�
// ... (이하 동일 구조 계속)
```
