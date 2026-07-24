-- SelecQ 클라우드 동기화 스키마
-- Supabase 대시보드 → SQL Editor 에서 실행. 재실행해도 안전(if not exists / drop policy).
--
-- 보안 모델: 모든 접근은 Row Level Security로 auth.uid() = user_id 를 강제한다.
-- 클라이언트엔 anon(public) 키만 나가고, 실제 데이터 격리는 아래 RLS 정책이 담당한다.

-- 1) 소량 상태 (필기 제외): 기록·모의고사·바스켓·필터·prefs 를 key→string 맵으로 통짜 저장 (~50KB)
create table if not exists public.user_state (
  user_id    uuid primary key references auth.users on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2) 필기: 문항별 행 (용량 지배적 — 변경된 문항만 upsert 하기 위해 분리)
create table if not exists public.user_drawings (
  user_id    uuid not null references auth.users on delete cascade,
  qkey       text not null,
  strokes    jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, qkey)
);

create index if not exists user_drawings_user_idx on public.user_drawings(user_id);

-- RLS 활성화
alter table public.user_state    enable row level security;
alter table public.user_drawings enable row level security;

-- 정책: 본인(user_id) 행에 한해 select/insert/update/delete 모두 허용
drop policy if exists "own_state" on public.user_state;
create policy "own_state" on public.user_state
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "own_drawings" on public.user_drawings;
create policy "own_drawings" on public.user_drawings
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
