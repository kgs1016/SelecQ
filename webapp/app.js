/* SelecQ — 필터 → 리스트 → 풀이 → 기록 (정적 SPA, 기록은 localStorage) */
(function () {
  const D = window.APP_DATA;
  const Q = D.questions;
  const TAX = D.taxonomy;
  const $ = sel => document.querySelector(sel);

  // key로 문항을 O(1) 조회. 데이터 갱신으로 사라진 key는 undefined를 반환하므로
  // 기존 Q.find(...)의 null 가드 의미(사라진 문항은 건너뜀)가 그대로 유지된다.
  const qByKey = new Map(Q.map(q => [q.key, q]));
  const getQ = k => qByKey.get(k);

  // ---------- 저장소 ----------
  // 저장소가 손상되거나 구버전 구조여도 첫 화면이 죽지 않도록, 모든 로드는 safeParse + 형태 검증을 거친다
  const safeParse = (raw, fallback) => { try { const v = raw ? JSON.parse(raw) : null; return v == null ? fallback : v; } catch (e) { return fallback; } };
  const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
  // innerHTML에 넣는 신뢰 불가 문자열(저장소·백업에서 온 label·답안 등)은 반드시 escape
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const LS_REC = "ks_records", LS_FIL = "ks_filter";
  let records = safeParse(localStorage.getItem(LS_REC), {});
  if (!isObj(records)) records = {};
  for (const k in records) if (!isObj(records[k])) delete records[k];   // 항목 단위 손상은 해당 기록만 버림
  const saveRec = () => { localStorage.setItem(LS_REC, JSON.stringify(records)); schedulePush(); };

  // 필기 좌표 포맷 v2(0~1 비율) 전환 — 구버전(절대 픽셀) 필기는 새 렌더러와 호환되지 않아 일회성 정리.
  // (필기는 로컬 전용 풀이용 낙서라 서버·타 데이터에 영향 없음)
  if (localStorage.getItem("ks_draw_fmt") !== "2") {
    const rm = [];
    for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith("ksw_")) rm.push(k); }
    rm.forEach(k => localStorage.removeItem(k));
    try { localStorage.setItem("ks_draw_fmt", "2"); } catch (e) { }
  }

  const defaultFilter = () => ({
    subject: "common", units: [], types: [],
    years: [], exams: [], points: [], levels: [], status: "all", collapsed: false
  });
  const computeTouched = f => !!(f.subject !== "common" || f.units.length || f.types.length
    || f.years.length || f.exams.length || f.points.length || f.levels.length || f.status !== "all");
  // 문제 찾기/홈 필터와 나만의 모의고사 필터를 독립적으로 유지 (서로 동기화되지 않음)
  const FIL_KEY = { browse: LS_FIL, custom: "ks_cfilter" };
  const loadFil = k => {
    const raw = safeParse(localStorage.getItem(k), {});
    const f = Object.assign(defaultFilter(), isObj(raw) ? raw : {});
    for (const a of ["units", "types", "years", "exams", "points", "levels"]) if (!Array.isArray(f[a])) f[a] = [];
    if (typeof f.subject !== "string") f.subject = "common";
    if (typeof f.status !== "string") f.status = "all";
    return f;
  };
  const CTX = { browse: { fil: loadFil(FIL_KEY.browse) }, custom: { fil: loadFil(FIL_KEY.custom) } };
  CTX.browse.touched = computeTouched(CTX.browse.fil);
  CTX.custom.touched = computeTouched(CTX.custom.fil);
  let ctxName = "browse";
  let filter = CTX.browse.fil;
  const saveFil = () => { localStorage.setItem(FIL_KEY[ctxName], JSON.stringify(filter)); schedulePush(); };
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
  function loadExam() {
    const s = safeParse(localStorage.getItem("ks_exam"), null);
    if (!isObj(s) || !Array.isArray(s.list) || !s.list.length) return null;   // 형태가 다르면 세션 없음으로 처리
    if (!isObj(s.answers)) s.answers = {};
    if (!isObj(s.times)) s.times = {};
    return s;
  }
  function saveExam() { try { localStorage.setItem("ks_exam", JSON.stringify(examSession)); schedulePush(); } catch (e) { } }
  function clearExam() { examSession = null; localStorage.removeItem("ks_exam"); if (examInterval) { clearInterval(examInterval); examInterval = null; } schedulePush(); }
  let examSession = loadExam();     // {list:[key], endTime, answers:{key:val}, times:{key:ms}, label} 또는 null
  let examInterval = null;
  let examPick = { year: null, exam: null, elective: null };
  let examQEnter = null;            // 현재 문항 진입 시각 {key, t}

  // ---------- 나만의 모의고사(문제 조합) 상태 ----------
  const QKEYS = new Set(Q.map(q => q.key));
  let rawBasket = safeParse(localStorage.getItem("ks_basket"), []);
  let basket = (Array.isArray(rawBasket) ? rawBasket : []).filter(k => QKEYS.has(k));
  const saveBasket = () => { localStorage.setItem("ks_basket", JSON.stringify(basket)); schedulePush(); };
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
  let customTab = "manual";            // 나만의 모의고사 탭: manual(직접 선택) | random(조건 랜덤)

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
      return `<div class="chips">${LEVELS.map(l => `<span class="chip lvchip lv-${l} ${filter.levels.includes(l) ? "on" : ""}" data-multi="levels" data-val="${l}">${l}</span>`).join("")}</div><div class="phint">상(어려움)·중·하(쉬움) · 선택 없음 = 전체</div>`;
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

  // 진행 중(미제출) 모의고사가 있으면 사용자 확인 후에만 버린다
  function confirmDropExam() {
    if (!examSession || examSession.submittedAt) return true;   // 제출 완료 세션은 확인 없이 정리 가능
    return confirm(`진행 중인 모의고사가 있어요.\n(${examSession.label})\n버리고 새로 시작할까요? 지금까지 입력한 답안이 사라져요.`);
  }

  // 홈·문제 찾기·모의고사 화면 상단: 진행 중/제출된 세션 이어가기 배너
  let pendingShowResult = false;   // 배너의 "결과 보기" → 풀이 화면 진입 시 결과 자동 표시
  function examBannerHTML() {
    if (!examSession) return "";
    const sub = !!examSession.submittedAt;
    let t = "타이머 없음";
    if (sub) t = "제출 완료";
    else if (examSession.endTime) {
      const remain = examSession.endTime - Date.now();
      t = remain > 0 ? `${fmtClock(remain)} 남음` : "시간 종료";
    }
    const answered = examSession.list.filter(k => examSession.answers[k] != null).length;
    return `<div class="exambanner">
      <div class="eb-info">${sub ? "📊" : "⏱"} <b>${sub ? "제출한 모의고사가 있어요" : "진행 중인 모의고사가 있어요"}</b>
        <span class="eb-meta">${esc(examSession.label)} · ${answered}/${examSession.list.length}문항 제출 · ${t}</span></div>
      <div class="eb-actions">
        <button class="big small" id="ebResume">${sub ? "결과 보기" : "계속 풀기"}</button>
        <button class="ghost small" id="ebDrop">${sub ? "지우기" : "시험 포기"}</button>
      </div></div>`;
  }
  function wireExamBanner() {
    const r = $("#ebResume"), d = $("#ebDrop");
    if (r) r.onclick = () => {
      if (examSession.submittedAt) pendingShowResult = true;
      const k = examSession.list.find(k => examSession.answers[k] == null) || examSession.list[0];
      navigate("/q/" + encodeURIComponent(k));
    };
    if (d) d.onclick = () => {
      if (examSession.submittedAt || confirm("진행 중인 모의고사를 포기할까요? 지금까지 입력한 답안이 사라져요.")) { clearExam(); route(); }
    };
  }

  function startSolve() {
    currentList = applyFilter();
    if (!currentList.length) return;
    if (!confirmDropExam()) return;   // 진행 중 모의고사를 경고 없이 지우지 않는다
    clearExam();  // 유형별 풀기 시작 시 진행 중이던 모의고사 종료
    navigate("/q/" + encodeURIComponent(currentList[0].key));
  }

  // ---------- 실전 모의고사 ----------
  function examQuestions(year, exam, elective) {
    const common = Q.filter(q => q.year === year && q.exam === exam && q.subject === "common").sort((a, b) => a.qno - b.qno);
    const elec = Q.filter(q => q.year === year && q.exam === exam && q.subject === elective).sort((a, b) => a.qno - b.qno);
    return [...common, ...elec];
  }

  // 실전 시험 구성 검증 — 데이터 오류(문항 수 불일치·중복·정답 누락·배점 오류)로 잘못된 세트가 시작되지 않도록.
  // 정상 회차는 전부 공통 22 + 선택 8 = 30문항, 배점 합계 100점을 만족한다(전 48개 회차 확인).
  function validateExamSet(list, elective) {
    const commonN = list.filter(q => q.subject === "common").length;
    const elecN = list.filter(q => q.subject === elective).length;
    if (commonN !== 22) return { ok: false, reason: `공통 문항이 22개가 아니에요 (${commonN}개)` };
    if (elecN !== 8) return { ok: false, reason: `선택과목 문항이 8개가 아니에요 (${elecN}개)` };
    if (list.length !== 30) return { ok: false, reason: `전체 문항이 30개가 아니에요 (${list.length}개)` };
    const keys = list.map(q => q.key);
    if (new Set(keys).size !== keys.length) return { ok: false, reason: "중복된 문항이 있어요" };
    const qnos = list.map(q => q.qno);
    if (new Set(qnos).size !== qnos.length) return { ok: false, reason: "문항 번호가 중복돼요" };
    if (list.some(q => q.answer == null)) return { ok: false, reason: "정답이 없는 문항이 있어요" };
    const pts = list.reduce((s, q) => s + (q.points || 0), 0);
    if (pts !== 100) return { ok: false, reason: `배점 합계가 100점이 아니에요 (${pts}점)` };
    return { ok: true, reason: "" };
  }

  function startExam() {
    const { year, exam, elective } = examPick;
    const list = examQuestions(year, exam, elective);
    const v = validateExamSet(list, elective);
    if (!v.ok) { alert(`이 회차는 시험을 시작할 수 없어요.\n(${v.reason})`); return; }
    if (!confirmDropExam()) return;
    currentList = list;
    examSession = {
      list: list.map(q => q.key), endTime: Date.now() + EXAM_MIN * 60 * 1000,
      answers: {}, times: {}, label: `${list[0].examLabel} · ${SUBJECTS[elective]}`,
    };
    saveExam();
    navigate("/q/" + encodeURIComponent(list[0].key));
  }

  function viewExam() {
    setNav("exam");
    const years = [2027, 2026, 2025, 2024, 2023, 2022];
    const exams = [["csat", "수능"], ["mock06", "6월 모평"], ["mock09", "9월 모평"]];
    const elecs = [["prob_stat", "확률과 통계"], ["calculus", "미적분"], ["geometry", "기하"]];
    const p = examPick;
    const chipsOf = (arr, sel, dk) => arr.map(([k, v]) => `<span class="chip ${sel === k ? "on" : ""}" data-${dk}="${k}">${v}</span>`).join("");
    $("#view").innerHTML = `
      ${examBannerHTML()}
      <div class="card examsetup">
        <h2>회차별 실전</h2>
        <p class="examdesc">학년도·시행 회차를 골라, 공통 22문항 + 선택과목 8문항 = <b>30문항</b>을 실제 시험처럼 순서대로 <b>${EXAM_MIN}분</b> 타이머와 함께 풉니다.</p>
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
      const list = examQuestions(year, exam, elective);
      if (!list.length) { btn.disabled = true; msg.textContent = "이 조합은 아직 데이터가 없어요. 다른 조합을 골라주세요."; }
      else {
        const v = validateExamSet(list, elective);
        if (v.ok) { btn.disabled = false; msg.textContent = "준비 완료 · 30문항"; }
        else { btn.disabled = true; msg.textContent = `이 조합은 시작할 수 없어요 (${v.reason}). 다른 조합을 골라주세요.`; }
      }
    } else { btn.disabled = true; msg.textContent = "학년도·시험·선택과목을 모두 고르세요."; }
    wireExamBanner();
  }

  function fmtClock(ms) {
    if (ms < 0) ms = 0;
    const s = Math.floor(ms / 1000), m = Math.floor(s / 60);
    return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  }
  function examScore() {
    let score = 0, correct = 0, answered = 0;
    for (const k of examSession.list) {
      const qq = getQ(k); if (!qq) continue;
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
        const q = getQ(k); if (!q) return "";
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
    const list = basket.map(k => getQ(k)).filter(Boolean);
    if (!list.length) return;
    if (!confirmDropExam()) return;
    const now = Date.now();
    examSession = {
      custom: true, list: basket.slice(), startAt: now, dur: customMin,
      endTime: customMin > 0 ? now + customMin * 60 * 1000 : null,
      answers: {}, times: {}, label: `나만의 모의고사 · ${list.length}문항${customMin > 0 ? ` · ${customMin}분` : ""}`,
    };
    currentList = list; saveExam();
    navigate("/q/" + encodeURIComponent(list[0].key));
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
    if (!confirmDropExam()) return;
    const now = Date.now();
    examSession = {
      custom: true, random: true, list: list.map(q => q.key), startAt: now, dur: min,
      endTime: min > 0 ? now + min * 60 * 1000 : null,
      answers: {}, times: {}, label: `랜덤 출제 · ${name} · ${list.length}문항${min > 0 ? ` · ${min}분` : ""}`,
    };
    currentList = list; saveExam();
    navigate("/q/" + encodeURIComponent(list[0].key));
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
    $("#view").innerHTML = `
      ${examBannerHTML()}
      <div class="card">
        <h2>나만의 모의고사</h2>
        <p class="examdesc">직접 골라 담거나(직접 선택), 난이도별 무작위 출제(조건 랜덤)로 <b>나만의 세트</b>를 만들어 실전처럼 푸세요.</p>
        <div class="tabbar" id="customTabs">
          <button class="tabbtn ${customTab === "manual" ? "on" : ""}" data-tab="manual">직접 선택</button>
          <button class="tabbtn ${customTab === "random" ? "on" : ""}" data-tab="random">조건 랜덤</button>
        </div>
      </div>
      <div id="customBody"></div>`;
    $("#customTabs").onclick = e => {
      const b = e.target.closest("[data-tab]"); if (!b) return;
      customTab = b.dataset.tab;
      document.querySelectorAll("#customTabs .tabbtn").forEach(x => x.classList.toggle("on", x === b));
      renderCustomBody();
    };
    renderCustomBody();
    wireExamBanner();
  }

  function renderCustomBody() {
    if (customTab === "random") renderRandomTab();
    else renderManualTab();
  }

  function renderManualTab() {
    useFilterCtx("custom");
    activeFilterRefresh = updateCandidates;
    const presets = [[0, "타이머 없음"], [20, "20분"], [50, "50분"], [100, "100분"]];
    $("#customBody").innerHTML = `
      <div class="card">
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
    $("#btnExportPdf").onclick = () => exportPDF(basket.map(k => getQ(k)).filter(Boolean), "나만의 문제지");
  }

  function renderRandomTab() {
    const SUBJ4 = Object.entries(SUBJECTS);
    $("#customBody").innerHTML = `
      <div class="card randombox">
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
      ${examBannerHTML()}
      <section class="hero">
        <h1>원하는 단원·유형·난이도만 골라<br>나만의 평가원 기출 세트를 만들어 보세요</h1>
        <ul class="benefits">
          <li><span class="bi">✓</span> 단원·유형·난이도별 문제 선택</li>
          <li><span class="bi">✓</span> 원하는 문항만 모의고사 구성</li>
          <li><span class="bi">✓</span> 오답·풀이 기록 자동 관리</li>
        </ul>
        <div class="herocta">
          <a class="big pill" href="/custom">나만의 모의고사 만들기 →</a>
          <a class="big pill outline" href="/exam">회차별 실전 →</a>
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
    wireExamBanner();
  }

  function viewFind() {
    setNav("filter");
    useFilterCtx("browse");
    $("#view").innerHTML = `
      ${examBannerHTML()}
      <div class="findintro">
        <h2>문제 찾기</h2>
        <p>과목·단원·유형·난이도로 조건을 좁혀, 조건에 맞는 기출을 순서대로 풀어보세요.</p>
      </div>
      ${browseToolHTML()}`;
    wireBrowseTool();
    wireExamBanner();
  }

  // 바깥 클릭 시 열린 드롭다운 닫기
  document.addEventListener("click", e => {
    if (openCat && !e.target.closest(".filterwrap")) { openCat = null; renderFilterUI(); }
  });

  // ---------- 풀이 화면 ----------
  function viewSolve(key) {
    setNav("filter");
    const q = getQ(key);
    if (!q) { $("#view").innerHTML = `<div class="empty">문항을 찾을 수 없습니다.</div>`; return; }
    const inExam = !!(examSession && examSession.list.includes(key));
    if (inExam) currentList = examSession.list.map(k => getQ(k)).filter(Boolean);
    else if (!currentList.length) currentList = applyFilter();
    const pos = currentList.findIndex(x => x.key === key);
    const r = recOf(q);
    const mc = isMC(q);
    let picked = inExam && examSession.answers[key] != null ? examSession.answers[key] : null;
    const mailto = "mailto:1212ntnt@naver.com?subject=" + encodeURIComponent("[SelecQ] 유형 오류 신고: " + q.key);
    $("#view").innerHTML = `
    <div class="solveview${inExam ? " in-exam" : ""}">
      ${inExam ? `<div class="examtimer" id="examTimer">
        <span class="etlabel">${esc(examSession.label)}</span>
        <span class="etq" id="etQ" title="이 문항 경과 시간">이 문항 00:00</span>
        <span class="etclock" id="etClock">--:--</span>
        ${examSession.custom && !examSession.submittedAt ? `<button class="ghost small" id="btnExamPause">⏸ 일시정지</button>` : ""}
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

      <div class="probpane" id="probPane">
        ${q.img ? `<img class="qimg" id="qimg" src="${q.img}" alt="${q.qno}번 문제" draggable="false">`
                : `<div class="noimg">이 문항은 이미지가 없습니다. 아래 원본 PDF로 확인하세요.</div>`}
      </div>
      <div class="splitbar" id="splitBar" title="드래그로 문제·필기 비율 조절"></div>
      <div class="wsscroll" id="wsScroll">
        <div class="worksheet" id="ws">
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
               ${examSession.custom ? `<button class="ghost small peekbtn" id="btnPeek">채점하기</button>
               <span class="peekans" id="peekResult"></span>` : ""}
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
            ${inExam ? "" : `<a class="phome" href="/">필터 수정</a>`}
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
      if (el) { $("#picker").hidden = true; navigate("/q/" + encodeURIComponent(el.dataset.k)); }
    };

    setupDrawer(q.key);

    // 모의고사: 답 선택/입력 시 즉시 저장 (별도 제출 버튼 없음)
    // 제출 완료 후에는 모든 모의고사에서, 회차별 실전은 시간 종료 후에도 답 변경 잠금
    const examLocked = () => inExam && (!!examSession.submittedAt
      || (!examSession.custom && examSession.endTime && Date.now() >= examSession.endTime));
    const setExamAns = my => {
      examSession.answers[q.key] = my; saveExam();
      const el = $("#result"); if (el) { el.className = "result"; el.textContent = "✓ 답 저장됨"; }
    };
    if (mc) {
      $("#mcRow").onclick = e => {
        const n = e.target.dataset?.n; if (!n) return;
        if (examLocked()) return;
        picked = Number(n);
        document.querySelectorAll("#mcRow button").forEach(b => b.classList.toggle("sel", b.dataset.n === n));
        if (inExam) setExamAns(picked);
      };
    } else if (inExam) {
      const si = $("#shortIn");
      if (si) si.oninput = () => {
        if (examLocked()) { si.value = examSession.answers[q.key] != null ? examSession.answers[q.key] : ""; return; }
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
      if (np >= 0 && np < currentList.length) navigate("/q/" + encodeURIComponent(currentList[np].key));
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
        el.innerHTML = ok ? `⭕ 정답 ${fmtAns(q)}` : `❌ 정답 ${fmtAns(q)} <span class="ans">내 답 ${esc(isMC(q) ? CIRCLED[my] : my)}</span>`;
      }
      bp.style.display = "none";
    };

    // 모의고사 타이머 & 종료
    if (inExam) {
      examSession.times = examSession.times || {};
      examQEnter = { key: q.key, t: Date.now() };  // 이 문항 진입 시각 기록
      const tick = () => {
        const clk = $("#etClock");
        // 일시정지 중이면 pausedAt 시점으로 시계를 얼린다 (재개 시 기준 시각을 밀어 보정)
        const nowRef = examSession.pausedAt || Date.now();
        if (clk) {
          if (!examSession.endTime) {   // 타이머 없음(나만의 모의고사) → 경과 시간 카운트업
            clk.textContent = "경과 " + fmtClock(nowRef - (examSession.startAt || nowRef));
          } else {
            const remain = examSession.endTime - nowRef;
            clk.textContent = remain <= 0 ? "00:00 시간종료" : fmtClock(remain);
            clk.classList.toggle("over", remain <= 0);
            // 회차별 실전: 시간 종료 시 1회 자동 제출 (나만의 모의고사는 계속 진행 가능)
            // setTimeout: 최초 tick()은 showResult 정의 전에 실행되므로 직접 호출하지 않는다
            if (remain <= 0 && !examSession.custom && !examSession.autoSubmitted && !examSession.submittedAt) {
              examSession.autoSubmitted = true; saveExam();
              if (examInterval) { clearInterval(examInterval); examInterval = null; }
              setTimeout(() => showResult(), 0);
            }
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
        // 최초 제출에만 기록/오답노트 반영 — 결과 재조회로 tries가 중복 증가하는 것 방지
        if (!examSession.submittedAt) {
          const durMs = (examSession.dur ? examSession.dur : EXAM_MIN) * 60000;
          examSession.usedMs = examSession.endTime
            ? Math.min(durMs, durMs - (examSession.endTime - Date.now()))   // 시간 종료 후 제출해도 시험시간을 넘겨 표시하지 않음
            : Date.now() - (examSession.startAt || Date.now());
          examSession.submittedAt = Date.now();
          saveExam();
          for (const k of examSession.list) {
            const qq2 = getQ(k); if (!qq2) continue;
            const my = examSession.answers[k]; if (my == null) continue;
            const prev = records[k];
            records[k] = { r: my === qq2.answer ? "ok" : "bad", my, ts: Date.now(), tries: (prev?.tries || 0) + 1 };
          }
          saveRec();
        }
        const { score, correct, answered, total } = examScore();
        const used = examSession.usedMs || 0;   // 제출 시점에 확정된 값 (재조회해도 변하지 않음)
        const times = examSession.times || {};
        const timedKeys = examSession.list.filter(k => times[k]);
        const avg = timedKeys.length ? timedKeys.reduce((s, k) => s + times[k], 0) / timedKeys.length : 0;
        const slowest = timedKeys.slice().sort((a, b) => times[b] - times[a])[0];
        const slowestQ = slowest && getQ(slowest);   // 데이터 갱신으로 사라진 문항일 수 있어 null 가드
        $("#erBody").innerHTML = `
          ${examSession.custom
            ? `<div class="bigscore">${correct}<span>/${total}문제 정답</span></div>`
            : `<div class="bigscore">${score}<span>/100점</span></div>`}
          <div class="resultmeta">정답 ${correct} · 제출 ${answered}/${total} · 사용 시간 ${fmtClock(Math.max(0, used))}
            · 문항 평균 ${fmtClock(avg)}${slowestQ ? ` · 최장 ${slowestQ.qno}번(${fmtClock(times[slowest])})` : ""}</div>
          <div class="resultrows">${examSession.list.map(k => {
            const qq = getQ(k); if (!qq) return "";   // 사라진 문항은 결과 행에서 건너뜀 (examScore와 동일 처리)
            const my = examSession.answers[k];
            const okk = my === qq.answer;
            return `<div class="prow">
              <span class="pno">${qq.qno}번</span>
              <span class="pmeta">${my == null ? "미제출" : "내 답 " + esc(isMC(qq) ? CIRCLED[my] : my)}</span>
              <span class="ptime">${times[k] ? fmtClock(times[k]) : "-"}</span>
              <span class="status ${my == null ? "none" : okk ? "ok" : "bad"}">${my == null ? "—" : okk ? "정답" : "오답 (" + fmtAns(qq) + ")"}</span></div>`;
          }).join("")}</div>
          <button class="big" id="erHome">홈으로</button>`;
        $("#examResult").hidden = false;
        $("#erHome").onclick = () => { clearExam(); navigate("/"); };
      };
      const finish = () => {
        if (examSession.submittedAt) { showResult(); return; }   // 이미 제출됨 → 확정된 결과만 다시 표시
        const un = examSession.list.filter(k => examSession.answers[k] == null).length;
        if (un && !confirm(`아직 안 푼 문항이 ${un}개 있어요.\n제출하고 채점할까요?`)) return;
        showResult();
      };
      $("#btnExamEnd").onclick = () => {
        if (examSession.submittedAt) { showResult(); return; }
        if (confirm("시험을 종료하고 채점할까요?")) showResult();
      };
      // 일시정지 (나만의·랜덤 모의고사 전용 — 실전은 연속 응시 유지)
      const renderPause = () => {
        if (document.getElementById("pauseOverlay")) return;
        const ov = document.createElement("div");
        ov.id = "pauseOverlay"; ov.className = "pause-overlay";
        ov.innerHTML = `<div class="pause-card">
          <div class="pause-emoji">⏸</div>
          <p class="pause-title">일시정지 중</p>
          <p class="pause-sub">타이머가 멈춰 있어요. 문제는 재개하면 다시 보여요.</p>
          <button class="big" id="btnResume">▶ 이어서 풀기</button>
        </div>`;
        $("#view").appendChild(ov);   // #view 안에 두면 화면 전환 시 자동 정리됨
        ov.querySelector("#btnResume").onclick = () => {
          const shift = Date.now() - (examSession.pausedAt || Date.now());
          if (examSession.endTime) examSession.endTime += shift;         // 남은 시간 보존
          else examSession.startAt = (examSession.startAt || Date.now()) + shift;   // 경과 시간 보존
          examSession.pausedAt = null;
          examQEnter = { key: q.key, t: Date.now() };   // 이 문항 시간 다시 측정 시작
          saveExam(); ov.remove(); tick();
        };
      };
      const bp = $("#btnExamPause");
      if (bp) bp.onclick = () => {
        if (examSession.pausedAt) return;
        flushQTime();                          // 현재 문항 체류 시간 확정 (examQEnter=null)
        examSession.pausedAt = Date.now(); saveExam();
        renderPause(); tick();
      };
      if (examSession.custom && examSession.pausedAt) renderPause();   // 일시정지 상태로 재진입(새로고침·기기 전환)
      const bf = $("#btnFinishAB"); if (bf) bf.onclick = finish;   // 마지막 문항의 제출·채점
      $("#erClose").onclick = () => { $("#examResult").hidden = true; };
      if (pendingShowResult) { pendingShowResult = false; setTimeout(() => showResult(), 0); }   // 배너 "결과 보기" 경유 진입
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
      return y * this.cssW;   // 비율 → 픽셀 (addSpace가 픽셀 단위로 사용)
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
    // 좌표는 캔버스 너비 기준 0~1 비율로 저장 → 회전/리사이즈 시 이미지와 함께 균일하게 스케일되어 어긋나지 않음.
    // (x·y 모두 너비로 나눔: 종횡비 보존 + 높이 변경(넓히기)에 영향 없음. y 비율은 세로로 긴 캔버스에서 1을 넘을 수 있음)
    pt(e) { const r = this.canvas.getBoundingClientRect(); const S = this.cssW || 1; return { x: (e.clientX - r.left) / S, y: (e.clientY - r.top) / S, p: e.pressure || 0.5 }; }
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
      this.strokes = this.strokes.filter(s => !strokeHit(s, pt, (14 + s.width) / this.cssW));   // 지우개 반경도 비율로
      if (this.strokes.length !== before) this.render();
    }
    seg(a, b, color, width, pressure) {
      const c = this.ctx, S = this.cssW;   // 비율 → 픽셀
      c.strokeStyle = color; c.lineCap = "round"; c.lineJoin = "round";
      c.lineWidth = width * (0.6 + (pressure || 0.5));
      c.beginPath(); c.moveTo(a.x * S, a.y * S); c.lineTo(b.x * S, b.y * S); c.stroke();
    }
    render() {
      const c = this.ctx;
      c.clearRect(0, 0, this.cssW, this.cssH);
      for (const s of this.strokes) {
        const p = s.points;
        if (p.length === 1) { c.fillStyle = s.color; c.beginPath(); c.arc(p[0].x * this.cssW, p[0].y * this.cssW, s.width * 0.6, 0, 7); c.fill(); continue; }
        for (let i = 1; i < p.length; i++) this.seg(p[i - 1], p[i], s.color, s.width, p[i].p);
      }
    }
  }

  let currentDrawer = null;
  let currentLayoutFocus = null;   // 현재 풀이 화면의 집중모드 레이아웃 함수 (문항 이동 시 갱신)
  // resize 리스너는 여기 한 번만 등록 — setupDrawer마다 새로 붙이면 리스너가 누적됨
  window.addEventListener("resize", () => { if (currentDrawer) currentDrawer.resize(); if (currentLayoutFocus) currentLayoutFocus(); });

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
    // 필기 영역(#ws)은 문제 이미지와 분리됨(문제는 위 고정 pane). 여백은 넉넉한 고정값(.workspace CSS)
    // + ＋넓히기/－줄이기로 조절. 이미지는 별도 pane이라 여기 높이에 영향 없음.
    d.resize();
    const tools = $("#tools");
    const setToolBtn = name => tools.querySelectorAll("[data-tool]").forEach(x => x.classList.toggle("on", x.dataset.tool === name));
    tools.querySelectorAll("[data-tool]").forEach(b => b.onclick = () => { d.tool = b.dataset.tool; setToolBtn(b.dataset.tool); });
    tools.querySelectorAll(".sw").forEach(s => s.onclick = () => {
      tools.querySelectorAll(".sw").forEach(x => x.classList.remove("on"));
      s.classList.add("on"); d.color = s.dataset.color; d.tool = "pen"; setToolBtn("pen");
    });
    $("#tUndo").onclick = () => d.undo();
    $("#tClear").onclick = () => { if (confirm("이 문제의 풀이를 모두 지울까요?")) d.clear(); };
    // 손가락 필기 ON 또는 집중 모드면 네이티브 스크롤 차단(none), 아니면 세로 스크롤 허용(pan-y)
    const syncTouchAction = () => {
      canvas.style.touchAction = (d.fingerMode || document.body.classList.contains("focusmode")) ? "none" : "pan-y";
    };
    const fb = $("#tFinger");
    fb.onclick = () => { d.fingerMode = !d.fingerMode; fb.textContent = d.fingerMode ? "✋ 손가락 ON" : "✋ 손가락 OFF"; fb.classList.toggle("on", d.fingerMode); syncTouchAction(); };
    const markUserSet = () => { const wsp = $("#workspace"); if (wsp) wsp.dataset.userSet = "1"; };
    $("#tMore").onclick = () => { markUserSet(); d.addSpace(500); };
    $("#tLess").onclick = () => { markUserSet(); d.addSpace(-500); };

    // 집중 모드: 페이지 스크롤 잠금 + 내부 스크롤(두 손가락) — 필기 시 화면 흔들림 방지
    const focusBtn = $("#tFocus");
    // 집중모드 위–아래 분할: 위=문제 pane(고정, 항상 보임) / 아래=필기 pane(독립 스크롤).
    // 분할 비율(문제 pane이 차지하는 몫)은 localStorage에 저장, 분할바 드래그로 조절.
    const SPLIT_KEY = "ks_split", SPLIT_BAR = 14;
    const getSplit = () => { const v = parseFloat(localStorage.getItem(SPLIT_KEY)); return (v >= 0.2 && v <= 0.75) ? v : 0.44; };
    const layoutFocus = () => {
      if (!document.body.classList.contains("focusmode")) return;
      const sc = $("#wsScroll"), tb = $("#tools"), ab = document.querySelector(".answer-bar");
      const pp = $("#probPane"), bar = $("#splitBar");
      const tbH = tb ? tb.offsetHeight : 52, abH = ab ? ab.offsetHeight : 66;
      const avail = window.innerHeight - tbH - abH - SPLIT_BAR;
      let probH = Math.round(avail * getSplit());
      probH = Math.max(120, Math.min(avail - 160, probH));   // 문제/필기 각각 최소 확보
      if (pp) { pp.style.top = tbH + "px"; pp.style.height = probH + "px"; }
      if (bar) { bar.style.top = (tbH + probH) + "px"; bar.style.height = SPLIT_BAR + "px"; }
      if (sc) { sc.style.top = (tbH + probH + SPLIT_BAR) + "px"; sc.style.bottom = abH + "px"; }
    };
    const setFocus = on => {
      document.body.classList.toggle("focusmode", on);
      const sc = $("#wsScroll");
      d.scrollEl = on ? sc : null;
      syncTouchAction();
      focusBtn.textContent = on ? "⛶ 집중 해제" : "⛶ 집중";
      focusBtn.classList.toggle("on", on);
      try { localStorage.setItem("ks_focus", on ? "1" : "0"); } catch (err) { }
      if (on) {
        layoutFocus(); sc.scrollTop = 0; d.resize();
        setTimeout(() => { layoutFocus(); d.resize(); }, 60);  // 레이아웃 안정화 후 재보정
      } else {
        if (sc) { sc.style.top = ""; sc.style.bottom = ""; }
        const pp = $("#probPane"), bar = $("#splitBar");
        if (pp) { pp.style.top = ""; pp.style.height = ""; }
        if (bar) { bar.style.top = ""; bar.style.height = ""; }
        d.resize();
      }
    };
    currentLayoutFocus = layoutFocus;   // 전역 resize 리스너가 참조 (리스너 재등록 없이 최신 함수만 교체)

    // 분할바 드래그 → 문제/필기 비율 조절 (포인터: 마우스·터치·펜 공통)
    const splitBar = $("#splitBar");
    if (splitBar) {
      let dragging = false;
      const onMove = e => {
        if (!dragging) return;
        const tb = $("#tools"), ab = document.querySelector(".answer-bar");
        const tbH = tb ? tb.offsetHeight : 52, abH = ab ? ab.offsetHeight : 66;
        const avail = window.innerHeight - tbH - abH - SPLIT_BAR;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        let frac = (y - tbH) / avail;
        frac = Math.max(0.2, Math.min(0.75, frac));
        try { localStorage.setItem(SPLIT_KEY, frac.toFixed(3)); } catch (err) { }
        layoutFocus(); d.resize();
        e.preventDefault();
      };
      const stop = () => { dragging = false; document.removeEventListener("pointermove", onMove); document.removeEventListener("pointerup", stop); };
      splitBar.addEventListener("pointerdown", e => {
        dragging = true;
        document.addEventListener("pointermove", onMove, { passive: false });
        document.addEventListener("pointerup", stop);
        e.preventDefault();
      });
    }

    focusBtn.onclick = () => setFocus(!document.body.classList.contains("focusmode"));
    if (localStorage.getItem("ks_focus") === "1") setFocus(true);
  }

  // 필기 저장 (문항별, localStorage LRU 한도 — 용량 초과 시 saveWork에서 추가로 자동 정리)
  const WORK_LIMIT = 200;
  function loadWork(key) { const v = safeParse(localStorage.getItem("ksw_" + key), null); return Array.isArray(v) ? v : null; }
  function getIdx() { const v = safeParse(localStorage.getItem("ksw_idx"), []); return Array.isArray(v) ? v : []; }
  function setIdx(a) { try { localStorage.setItem("ksw_idx", JSON.stringify(a)); } catch (e) { } }
  function touchIdx(key) {
    let a = getIdx().filter(x => x !== key); a.push(key);
    if (a.length > WORK_LIMIT) a.splice(0, a.length - WORK_LIMIT).forEach(k => localStorage.removeItem("ksw_" + k));
    setIdx(a);
  }
  function saveWork(key, strokes) {
    const k = "ksw_" + key;
    try {
      if (!strokes || !strokes.length) { localStorage.removeItem(k); setIdx(getIdx().filter(x => x !== key)); markDrawDirty(key); return; }
      localStorage.setItem(k, JSON.stringify(strokes)); touchIdx(key);
    } catch (e) {
      const a = getIdx(); a.splice(0, 6).forEach(x => localStorage.removeItem("ksw_" + x)); setIdx(a);
      try { localStorage.setItem(k, JSON.stringify(strokes)); touchIdx(key); } catch (e2) { }
    }
    markDrawDirty(key);
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
      // 문자열이 아닌 값은 저장 시 "[object Object]" 등으로 변질돼 로드 오류를 만들므로 걸러낸다
      for (const k in data) if (isAppKey(k) && typeof data[k] === "string") localStorage.setItem(k, data[k]);
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
        else navigate("/q/" + encodeURIComponent(k));
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
      // 데이터 갱신으로 사라진 문항 key가 기록에 남아도 통계가 왜곡되지 않게, 현재 존재하는 문항만 집계
      const keys = Object.keys(records).filter(k => QKEYS.has(k));
      const solved = keys.length;
      const ok = keys.filter(k => records[k].r === "ok").length;
      const byType = {};
      for (const k of keys) {
        const q = getQ(k); if (!q) continue;
        byType[q.type] = byType[q.type] || { ok: 0, bad: 0 };
        byType[q.type][records[k].r === "ok" ? "ok" : "bad"]++;
      }
      const weak = Object.entries(byType)
        .filter(([, v]) => v.bad > 0)
        .sort((a, b) => b[1].bad - a[1].bad).slice(0, 8);
      const solvedList = keys.map(k => getQ(k)).filter(Boolean)
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
        ${session ? `<div class="card">
          <h2>클라우드 동기화</h2>
          <p style="font-size:13px;color:var(--sub);margin:0 0 10px">로그인 중 — 기록·오답·모의고사·필기가 계정에 자동 저장되고, 다른 기기에서 로그인하면 이어집니다.</p>
          <p style="font-size:12px;color:var(--sub);margin:0">파일로도 보관하고 싶다면: <button class="linklike" id="btnExport">백업 내보내기</button> · <label class="linklike">복원 가져오기<input type="file" id="fileImport" accept="application/json,.json" hidden></label></p>
        </div>` : `<div class="card">
          <h2>백업 · 복원</h2>
          <p style="font-size:13px;color:var(--sub);margin:0 0 10px">필기·오답·기록을 파일로 저장해 두면 브라우저 데이터를 지우거나 기기를 바꿔도 복원할 수 있어요.<br>더 편한 방법: <a href="/account">로그인</a>하면 자동으로 계정에 저장돼요.</p>
          <div class="backuprow">
            <button class="ghost" id="btnExport">⬇ 백업 내보내기</button>
            <label class="ghost btnfile">⬆ 복원 가져오기<input type="file" id="fileImport" accept="application/json,.json" hidden></label>
          </div>
        </div>`}
        <div class="card"><button class="ghost" id="btnClear">풀이 기록 전체 삭제</button></div>`;

      const ssel = $("#sSelect");
      if (ssel) ssel.onclick = () => { selectMode = !selectMode; selected.clear(); render(); };
      const list = $("#recList");
      if (list) list.onclick = e => {
        const el = e.target.closest(".qitem"); if (!el) return;
        const k = el.dataset.k;
        if (selectMode) { selected.has(k) ? selected.delete(k) : selected.add(k); render(); }
        else navigate("/q/" + encodeURIComponent(k));
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

  // ---------- 라우터 (History API · 클린 URL) ----------
  function navigate(path) {
    if (path === location.pathname) { window.scrollTo(0, 0); route(); return; }
    history.pushState(null, "", path);
    route();
  }

  function route() {
    const p = location.pathname || "/";
    const isSolve = p.startsWith("/q/");
    if (heroTimer) { clearInterval(heroTimer); heroTimer = null; }
    if (!isSolve) document.body.classList.remove("focusmode");  // 풀이 밖에선 집중 모드 해제
    flushQTime();  // 이전 문항 체류 시간 확정 (문항 이동/화면 전환 시)
    if (examInterval && !isSolve) { clearInterval(examInterval); examInterval = null; }  // 풀이 화면 벗어나면 타이머 정지
    if (isSolve) viewSolve(decodeURIComponent(p.slice(3)));
    else if (p === "/find") viewFind();
    else if (p === "/exam") viewExam();
    else if (p === "/custom") viewCustom();
    else if (p === "/random") { customTab = "random"; viewCustom(); }   // 구 링크 호환: 조건 랜덤 탭으로
    else if (p === "/wrong") viewWrong();
    else if (p === "/stats") viewStats();
    else if (p === "/account") viewAccount();
    else if (p === "/privacy") viewPrivacy();
    else viewHome();  // '/' 및 미매칭 경로는 홈으로
    window.scrollTo(0, 0);
  }

  // 문제찾기 풀이(모의고사 세션에 속하지 않은 /q/ 화면) 진행 중인지 — 이땐 나갈 때 확인
  function isBrowseSolving() {
    const p = location.pathname;
    if (!p.startsWith("/q/")) return false;
    const key = decodeURIComponent(p.slice(3));
    return !(examSession && examSession.list.includes(key));   // 모의고사면 자동저장돼서 확인 불필요
  }

  // 내부 링크(/로 시작) 클릭 → 새로고침 없이 SPA 이동
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="/"]');
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("//")) return;                 // 프로토콜상대(외부)
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    // 문제찾기 풀이 중 다른 섹션으로 나가면 확인 (채점 안 한 진행분은 저장 안 됨)
    if (isBrowseSolving() && !href.startsWith("/q/") && href !== location.pathname
        && !confirm("지금 풀던 문제에서 나갈까요?\n채점하지 않은 답안은 저장되지 않아요.")) return;
    navigate(href);
  });
  window.addEventListener("popstate", route);

  // 옛 해시 링크 호환: #/find 등으로 들어오면 클린 URL로 1회 정규화
  if (location.hash.startsWith("#/")) history.replaceState(null, "", location.hash.slice(1));
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

  // ---------- 로그인 / 클라우드 동기화 (Supabase) ----------
  // config.js가 placeholder(미설정)면 전부 no-op → 앱은 비로그인으로 지금과 똑같이 동작한다.
  // 이 단계에선 인증(로그인/로그아웃·세션·UI)만. 실제 데이터 동기화 훅은 다음 단계에서 붙인다.
  const SB_ESM = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
  // var 필수: /account 딥링크 직접 진입 시 route()(위쪽)가 이 선언들보다 먼저 실행되는데,
  // let이면 TDZ ReferenceError로 IIFE 전체가 죽는다. var는 hoisting되어 undefined로 안전.
  var sb = null;         // supabase 클라이언트 (설정+로드 성공 시)
  var session = null;    // 현재 세션 (비로그인이면 null)

  function userName(u) { return (u && ((u.user_metadata && (u.user_metadata.name || u.user_metadata.full_name)) || u.email)) || "내 계정"; }
  function shorten(s) { s = String(s || ""); return s.length > 12 ? s.slice(0, 11) + "…" : s; }

  function renderAuthUI() {
    const el = document.getElementById("authslot");
    if (!el) return;
    if (!window.SB_CONFIGURED) { el.innerHTML = ""; return; }   // 미설정: 헤더에 아무것도 안 띄움
    const onAcc = location.pathname === "/account";
    if (session && session.user) {
      const nm = userName(session.user);
      el.innerHTML = `<a class="authbtn in ${onAcc ? "active" : ""}" href="/account" title="${esc(nm)}"><span class="syncdot" id="syncDot"></span>${esc(shorten(nm))}</a>`;
    } else {
      el.innerHTML = `<a class="authbtn ${onAcc ? "active" : ""}" href="/account">로그인</a>`;
    }
  }

  async function initAuth() {
    if (!window.SB_CONFIGURED) { renderAuthUI(); return; }
    try {
      const mod = await import(SB_ESM);
      sb = mod.createClient(window.SB_CONFIG.url, window.SB_CONFIG.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" }
      });
      const { data } = await sb.auth.getSession();
      session = (data && data.session) || null;
      renderAuthUI();
      if (location.pathname === "/account") viewAccount();
      if (session) startSync();
      sb.auth.onAuthStateChange((evt, s) => {
        session = s || null;
        renderAuthUI();
        if (location.pathname === "/account") viewAccount();
        if (evt === "SIGNED_OUT") stopSync();
        else if (session) startSync();   // SIGNED_IN / INITIAL_SESSION / TOKEN_REFRESHED
      });
    } catch (e) {
      console.warn("[SelecQ] Supabase 초기화 실패(네트워크/설정 확인)", e);
      renderAuthUI();
    }
  }

  async function signIn(provider) {
    if (!sb) return;
    // 주의: Supabase가 카카오에 account_email을 항상 요청함 → 카카오 콘솔에서
    // 이메일 동의항목이 켜져 있어야 함(비즈 앱 전용). 꺼지면 KOE205.
    const { error } = await sb.auth.signInWithOAuth({ provider, options: { redirectTo: location.origin + "/account" } });
    if (error) alert("로그인을 시작할 수 없어요: " + error.message);
  }
  async function signOut() {
    if (!sb) return;
    await sb.auth.signOut();
    session = null;
    renderAuthUI();
    if (location.pathname === "/account") viewAccount();
  }

  function viewAccount() {
    setNav("account");
    const el = $("#view");
    if (!window.SB_CONFIGURED) {
      el.innerHTML = `<section class="account"><h2>로그인</h2><p class="muted">클라우드 동기화 기능을 준비 중이에요. 곧 로그인으로 어느 기기에서든 기록·필기를 이어서 쓸 수 있게 됩니다.</p></section>`;
      return;
    }
    if (session && session.user) {
      const u = session.user;
      const last = getSyncMeta().lastSyncAt;
      el.innerHTML = `<section class="account">
        <h2>내 계정</h2>
        <p class="acc-email">${esc(u.email || userName(u))}</p>
        <p class="muted">로그인된 기기끼리 기록·오답·모의고사가 자동으로 동기화됩니다.</p>
        ${last ? `<p class="muted">마지막 동기화: ${esc(new Date(last).toLocaleString("ko-KR"))}</p>` : ""}
        <div class="acc-actions"><button class="ghost" id="btnSignout">로그아웃</button></div>
      </section>`;
      $("#btnSignout").onclick = signOut;
    } else {
      el.innerHTML = `<section class="account">
        <h2>로그인</h2>
        <p class="muted">로그인하면 기록·오답·필기가 <b>모든 기기에서 이어집니다.</b> 로그인하지 않아도 이 기기에서는 지금처럼 그대로 사용할 수 있어요.</p>
        <div class="acc-actions">
          <button class="loginbtn kakao" id="btnKakao">카카오로 로그인</button>
          <button class="loginbtn google" id="btnGoogle">구글로 로그인</button>
        </div>
        <p class="muted consent">로그인하면 <a href="/privacy">개인정보처리방침</a>에 동의하고, 만 14세 이상임을 확인한 것으로 봅니다.</p>
      </section>`;
      $("#btnKakao").onclick = () => signIn("kakao");
      $("#btnGoogle").onclick = () => signIn("google");
    }
  }

  function viewPrivacy() {
    setNav("");
    $("#view").innerHTML = `<section class="account privacy">
      <h2>개인정보처리방침</h2>
      <p class="muted">시행일 2026-07-24 · SelecQ (운영: 개인)</p>

      <h3>1. 수집하는 개인정보와 목적</h3>
      <p class="muted">SelecQ는 <b>로그인하지 않으면 개인정보를 수집하지 않습니다.</b> 이 경우 풀이 기록·필기는 사용자의 브라우저(localStorage)에만 저장됩니다.</p>
      <p class="muted">소셜 로그인(카카오·구글) 시 아래 정보를 수집합니다.</p>
      <ul class="muted">
        <li><b>계정 정보</b>: 이메일, 닉네임, 프로필 사진(동의 시), 소셜 제공자의 회원 식별자 — 회원 식별·로그인·문의 대응 목적</li>
        <li><b>학습 기록</b>: 문제 풀이·오답·모의고사 기록, 필기 데이터 — 기기 간 학습 기록 동기화 목적</li>
      </ul>

      <h3>2. 보관 기간과 파기</h3>
      <p class="muted">회원 탈퇴(삭제 요청) 시 지체 없이 파기합니다. 계정·데이터 삭제는 아래 문의처로 요청하시면 처리해 드립니다.</p>

      <h3>3. 처리 위탁</h3>
      <p class="muted">데이터 보관을 위해 Supabase(미국 Supabase Inc., 데이터베이스 호스팅)에 처리를 위탁하며, 데이터는 국내(서울) 리전에 저장됩니다.</p>

      <h3>4. 만 14세 미만 아동</h3>
      <p class="muted">만 14세 미만은 법정대리인의 동의 없이 로그인(가입)할 수 없습니다. SelecQ 로그인은 만 14세 이상만 이용해 주세요.</p>

      <h3>5. 이용자의 권리</h3>
      <p class="muted">언제든 개인정보의 열람·정정·삭제를 요청할 수 있고, 로그아웃하면 이후 기록은 계정에 수집되지 않습니다.</p>

      <h3>6. 문의처</h3>
      <p class="muted">이메일: <a href="mailto:1212ntnt@naver.com?subject=[SelecQ] 개인정보 문의">1212ntnt@naver.com</a></p>
    </section>`;
  }

  // ---------- 클라우드 동기화: 상태(ks_*, 필기 제외) ----------
  // 오프라인 우선: localStorage가 항상 소스, 클라우드는 복제본. 로컬 저장 훅(saveRec 등)이
  // schedulePush()로 디바운스 push하고, 로그인/앱로드 시 pullAndMerge()가 한 번 병합한다.
  // var 필수(호이스팅): 저장 훅은 이 선언들보다 위에서 정의된 함수 안에서 호출된다.
  var SYNC_META = "ks_sync";
  var pushTimer = null;
  var syncUserId = null;   // startSync 중복 실행 방지 (세션 갱신 이벤트마다 재-pull 하지 않도록)

  function getSyncMeta() { const m = safeParse(localStorage.getItem(SYNC_META), {}); return isObj(m) ? m : {}; }
  function setSyncMeta(patch) { const m = Object.assign(getSyncMeta(), patch); localStorage.setItem(SYNC_META, JSON.stringify(m)); return m; }

  function setSyncStatus(state, title) {
    const dot = document.getElementById("syncDot");
    if (!dot) return;
    dot.className = "syncdot" + (state === "ok" ? "" : " " + state);
    dot.title = title || (state === "ok" ? "동기화됨" : state === "sync" ? "동기화 중…" : "오프라인 — 다시 연결되면 저장돼요");
  }

  // 동기화 대상 상태 수집: ks_* 전부(동기화 메타 제외). 필기(ksw_*)는 문항별 테이블로 별도 동기화.
  function collectState() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("ks_") && k !== SYNC_META) data[k] = localStorage.getItem(k);
    }
    return data;
  }

  function schedulePush() {
    if (!sb || !session) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushState, 2500);
  }

  async function pushState() {
    if (!sb || !session) return;
    clearTimeout(pushTimer); pushTimer = null;
    setSyncStatus("sync");
    const now = new Date().toISOString();
    const { error } = await sb.from("user_state")
      .upsert({ user_id: session.user.id, data: collectState(), updated_at: now });
    if (error) { setSyncMeta({ pendingState: true }); setSyncStatus("err"); return; }
    setSyncMeta({ userId: session.user.id, stateUpdatedAt: now, pendingState: false, lastSyncAt: now });
    setSyncStatus("ok");
  }

  // 클라우드 → 로컬 반영 (LWW 키 일괄 교체). records는 applyCloud 밖에서 항상 union 병합.
  function applyCloudState(cloud) {
    for (const k in cloud) {
      if (!k.startsWith("ks_") || k === SYNC_META || k === LS_REC) continue;
      if (typeof cloud[k] === "string") try { localStorage.setItem(k, cloud[k]); } catch (e) { }
    }
    // 메모리 상태 리로드 (localStorage 재독)
    examSession = loadExam();
    const rb = safeParse(localStorage.getItem("ks_basket"), []);
    basket = (Array.isArray(rb) ? rb : []).filter(k => QKEYS.has(k));
    CTX.browse.fil = loadFil(FIL_KEY.browse); CTX.custom.fil = loadFil(FIL_KEY.custom);
    CTX.browse.touched = computeTouched(CTX.browse.fil); CTX.custom.touched = computeTouched(CTX.custom.fil);
    filter = CTX[ctxName].fil; filterTouched = CTX[ctxName].touched;
  }

  // 풀이 기록 병합: 문항별로 ts 큰 쪽 채택 (양쪽 기기의 진도를 모두 보존)
  function mergeRecords(cloudRecRaw) {
    const cloudRec = safeParse(cloudRecRaw, {});
    if (!isObj(cloudRec)) return false;
    let changed = false;
    for (const k in cloudRec) {
      const c = cloudRec[k];
      if (!isObj(c)) continue;
      if (!records[k] || (c.ts || 0) > (records[k].ts || 0)) { records[k] = c; changed = true; }
    }
    return changed;
  }

  async function pullAndMerge() {
    if (!sb || !session) return;
    const uid = session.user.id;
    setSyncStatus("sync");
    const { data: row, error } = await sb.from("user_state")
      .select("data,updated_at").eq("user_id", uid).maybeSingle();
    if (error) { setSyncStatus("err"); return; }

    const meta = getSyncMeta();
    const localHasData = Object.keys(records).length > 0 || basket.length > 0 || !!examSession;

    if (!row) {
      // 계정에 아직 데이터 없음 → 이 기기 데이터를 계정으로 (익명 데이터 입양)
      if (localHasData && !confirm("이 기기의 풀이 기록을 방금 로그인한 계정에 올릴까요?")) return;
      pushState();
      return;
    }

    const cloud = row.data || {};
    // 다른 계정이 쓰던 기기: 섞임 방지를 위해 명시적으로 선택받는다
    if (meta.userId && meta.userId !== uid && localHasData) {
      if (confirm("이 기기의 기존 기록은 다른 계정에서 쓰던 것이에요.\n\n확인 = 이 계정의 클라우드 기록으로 교체 (기기의 기존 기록은 지워짐)\n취소 = 기기의 기록을 이 계정에 합치기")) {
        for (const k in records) delete records[k];
        localStorage.removeItem("ks_exam"); localStorage.removeItem("ks_basket");
        getIdx().forEach(k => localStorage.removeItem("ksw_" + k)); setIdx([]);   // 필기도 전 계정 것이므로 정리
        setSyncMeta({ drawTs: {}, pendingDraws: {} });
        mergeRecords(cloud[LS_REC]); applyCloudState(cloud);
        localStorage.setItem(LS_REC, JSON.stringify(records));
        setSyncMeta({ userId: uid, stateUpdatedAt: row.updated_at, pendingState: false, lastSyncAt: new Date().toISOString() });
        setSyncStatus("ok"); route();
        return;
      }
      // 취소: 아래 일반 병합 경로로 (records union + 로컬 유지 push)
    }

    const recChanged = mergeRecords(cloud[LS_REC]);
    if (recChanged) localStorage.setItem(LS_REC, JSON.stringify(records));   // saveRec 대신 직접 (push는 아래서 결정)

    // 주의: Postgres는 "+00:00", JS toISOString은 "Z" 포맷이라 문자열 비교 불가 → 숫자 비교
    const cloudNewer = !meta.stateUpdatedAt || (row.updated_at && Date.parse(row.updated_at) > Date.parse(meta.stateUpdatedAt));
    const localChanged = meta.pendingState === true || (!meta.stateUpdatedAt && localHasData);

    if (cloudNewer && localChanged) {
      // 진짜 충돌: 양쪽 다 마지막 동기화 이후 변경됨 → 사용자 선택 (기록은 이미 병합됨)
      if (confirm("클라우드에 다른 기기의 최신 상태가 있어요.\n\n확인 = 클라우드 상태 불러오기\n취소 = 이 기기 상태 유지 (클라우드에 덮어씀)")) {
        applyCloudState(cloud);
        setSyncMeta({ userId: uid, stateUpdatedAt: row.updated_at, pendingState: false, lastSyncAt: new Date().toISOString() });
        if (recChanged) schedulePush();   // 병합된 기록은 올려둔다
        setSyncStatus("ok"); route();
      } else {
        pushState();   // 로컬 전체(병합된 기록 포함)로 클라우드 덮어쓰기
        route();
      }
      return;
    }
    if (cloudNewer) {
      applyCloudState(cloud);
      setSyncMeta({ userId: uid, stateUpdatedAt: row.updated_at, pendingState: false, lastSyncAt: new Date().toISOString() });
      if (recChanged) schedulePush();
      setSyncStatus("ok"); route();
      return;
    }
    // 로컬이 같거나 앞섬 → 필요 시 push만
    if (localChanged || recChanged) pushState();
    else { setSyncMeta({ userId: uid, lastSyncAt: new Date().toISOString() }); setSyncStatus("ok"); }
  }

  // ---------- 클라우드 동기화: 필기(ksw_*, 문항별 행) ----------
  // 필기는 용량이 커서(문항당 수~수십 KB) user_drawings에 문항별 행으로 저장하고,
  // 변경된 문항만 upsert한다. 타임스탬프는 ks_sync.drawTs[qkey](ms 숫자)로 관리.
  var drawPushTimer = null;
  var pendingDraws = {};   // { qkey: true } — 아직 클라우드에 안 올라간 변경분

  function markDrawDirty(qkey) {
    if (!sb || !session) return;   // 비로그인: 동기화 없음 (로컬 저장은 이미 끝난 상태)
    const m = getSyncMeta(); const d = isObj(m.drawTs) ? m.drawTs : {};
    d[qkey] = Date.now();
    pendingDraws[qkey] = true;
    setSyncMeta({ drawTs: d, pendingDraws: Object.assign({}, m.pendingDraws, pendingDraws) });
    clearTimeout(drawPushTimer);
    drawPushTimer = setTimeout(pushDrawings, 2000);
  }

  async function pushDrawings() {
    if (!sb || !session) return;
    clearTimeout(drawPushTimer); drawPushTimer = null;
    const keys = Object.keys(pendingDraws);
    if (!keys.length) return;
    setSyncStatus("sync");
    const drawTs = getSyncMeta().drawTs || {};
    const ups = [], dels = [];
    for (const k of keys) {
      const strokes = loadWork(k);
      if (strokes && strokes.length) ups.push({ user_id: session.user.id, qkey: k, strokes, updated_at: new Date(drawTs[k] || Date.now()).toISOString() });
      else dels.push(k);
    }
    let ok = true;
    for (let i = 0; i < ups.length && ok; i += 20) {   // 대량 첫 업로드 대비 20행씩 분할
      const { error } = await sb.from("user_drawings").upsert(ups.slice(i, i + 20));
      if (error) ok = false;
    }
    if (ok && dels.length) {
      const { error } = await sb.from("user_drawings").delete().eq("user_id", session.user.id).in("qkey", dels);
      if (error) ok = false;
    }
    if (!ok) { setSyncMeta({ pendingDraws: Object.assign({}, getSyncMeta().pendingDraws, pendingDraws) }); setSyncStatus("err"); return; }
    keys.forEach(k => delete pendingDraws[k]);
    setSyncMeta({ pendingDraws: {}, lastSyncAt: new Date().toISOString() });
    setSyncStatus("ok");
  }

  async function pullDrawings() {
    if (!sb || !session) return;
    // 1) 목록만 먼저 (strokes 제외 — 전체 다운로드 방지)
    const { data: rows, error } = await sb.from("user_drawings")
      .select("qkey,updated_at").eq("user_id", session.user.id);
    if (error) { setSyncStatus("err"); return; }
    const m = getSyncMeta(); const drawTs = isObj(m.drawTs) ? m.drawTs : {};
    // 첫 동기화 마이그레이션: 기존 로컬 필기에 타임스탬프 부여 (필기 자체엔 ts가 없음)
    for (const k of getIdx()) if (!drawTs[k]) drawTs[k] = Date.now();
    const cloudTs = {};
    const toGet = [];
    for (const r of (rows || [])) {
      cloudTs[r.qkey] = Date.parse(r.updated_at);
      if (!drawTs[r.qkey] || cloudTs[r.qkey] > drawTs[r.qkey]) toGet.push(r.qkey);
    }
    // 2) 클라우드가 최신인 문항만 내려받기 (20개씩)
    for (let i = 0; i < toGet.length; i += 20) {
      const part = toGet.slice(i, i + 20);
      const { data: full, error: e2 } = await sb.from("user_drawings")
        .select("qkey,strokes,updated_at").eq("user_id", session.user.id).in("qkey", part);
      if (e2 || !full) { setSyncStatus("err"); break; }
      for (const r of full) {
        try { localStorage.setItem("ksw_" + r.qkey, JSON.stringify(r.strokes)); touchIdx(r.qkey); } catch (e) { }
        drawTs[r.qkey] = Date.parse(r.updated_at);
      }
    }
    setSyncMeta({ drawTs });
    // 3) 로컬이 최신(또는 클라우드에 없음)인 문항은 업로드 예약
    getIdx().filter(k => !cloudTs[k] || drawTs[k] > cloudTs[k]).forEach(k => { pendingDraws[k] = true; });
    if (Object.keys(pendingDraws).length) { clearTimeout(drawPushTimer); drawPushTimer = setTimeout(pushDrawings, 1500); }
    setSyncStatus("ok");
  }

  function startSync() {
    if (!sb || !session) return;
    if (syncUserId === session.user.id) return;
    syncUserId = session.user.id;
    // 지난 세션에서 못 올라간 필기 변경분 복원
    const pd = getSyncMeta().pendingDraws;
    if (isObj(pd)) Object.assign(pendingDraws, pd);
    pullAndMerge().then(() => pullDrawings());
  }
  function stopSync() {
    syncUserId = null;
    clearTimeout(pushTimer); pushTimer = null;
    clearTimeout(drawPushTimer); drawPushTimer = null;
    // 로컬 데이터는 그대로 둔다 (비로그인으로 계속 사용 가능)
  }

  // 재접속·탭 전환 시 밀린 push 처리
  window.addEventListener("online", () => {
    const m = getSyncMeta();
    if (m.pendingState) schedulePush();
    if (isObj(m.pendingDraws) && Object.keys(m.pendingDraws).length) { Object.assign(pendingDraws, m.pendingDraws); clearTimeout(drawPushTimer); drawPushTimer = setTimeout(pushDrawings, 1000); }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "hidden") return;
    if (pushTimer) pushState();          // 디바운스 대기 중 이탈 → 즉시 flush
    if (drawPushTimer) pushDrawings();
  });

  initAuth();
})();
