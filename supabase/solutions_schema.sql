-- SelecQ 해설 저장소 + 구독
-- Supabase 대시보드 → SQL Editor 에서 실행. 재실행해도 안전(if not exists / drop policy).
--
-- 왜 DB 인가
--   해설은 파는 물건이다. 지금처럼 solutions.js 로 내려가면 로그인 여부와 무관하게
--   개발자도구로 전부 읽힌다. 유료분을 DB 로 옮기고 RLS 로 막으면, 구독이 없는 사람에게는
--   데이터베이스가 행 자체를 주지 않는다.
--
-- 무료분도 함께 넣는 이유
--   정적 파일(webapp/sol/free/*.json)이 빠른 경로이자 오프라인 대비책이고,
--   DB 는 단일 진실 원본이다. 정적 파일이 없거나 어긋나도 DB 에서 받을 수 있다.

-- 1) 해설 본문
create table if not exists public.solutions (
  key        text primary key,                                   -- data.js 문항 key
  tier       text not null check (tier in ('free', 'paid')),
  answer     integer not null,
  html       text not null,
  updated_at timestamptz not null default now()
);

create index if not exists solutions_tier_idx on public.solutions(tier);

-- 2) 구독 상태
--    ⚠️ 이 표에 클라이언트 쓰기 정책을 만들지 말 것. 만들면 누구나 자기를 구독자로 바꾼다.
--       결제 웹훅이 service_role 키로만 쓴다.
create table if not exists public.subscriptions (
  user_id    uuid primary key references auth.users on delete cascade,
  status     text not null default 'inactive',                   -- active | inactive | canceled
  expires_at timestamptz,                                        -- null = 무기한(베타)
  source     text,                                               -- web | ios | android | beta
  updated_at timestamptz not null default now()
);

alter table public.solutions     enable row level security;
alter table public.subscriptions enable row level security;

-- 3) 정책
--    무료 해설: 로그인 없이도 읽힌다(정적 파일과 같은 내용이라 숨길 이유가 없다).
drop policy if exists "sol_free" on public.solutions;
create policy "sol_free" on public.solutions
  for select
  using (tier = 'free');

--    유료 해설: 활성 구독자만. 아래 subquery 는 호출자 권한으로 돌고,
--    subscriptions 의 정책이 "본인 행만"이라 남의 구독으로는 통과할 수 없다.
drop policy if exists "sol_paid" on public.solutions;
create policy "sol_paid" on public.solutions
  for select
  using (
    tier = 'paid'
    and exists (
      select 1 from public.subscriptions s
      where s.user_id = auth.uid()
        and s.status = 'active'
        and (s.expires_at is null or s.expires_at > now())
    )
  );

--    구독 상태는 본인 것만 읽는다. 쓰기 정책은 일부러 두지 않는다.
drop policy if exists "sub_self" on public.subscriptions;
create policy "sub_self" on public.subscriptions
  for select
  using (auth.uid() = user_id);


-- ─────────────────────────────────────────────────────────────
-- 베타 기간 (결제 붙이기 전) — 로그인한 사람 모두에게 유료 해설을 연다.
-- 결제를 붙일 때 아래 두 블록을 지우고, 만료된 beta 행을 정리하면 된다.
-- ─────────────────────────────────────────────────────────────

-- 기존 가입자에게 베타 부여
insert into public.subscriptions (user_id, status, expires_at, source)
select id, 'active', null, 'beta' from auth.users
on conflict (user_id) do nothing;

-- 신규 가입자에게도 자동 부여
create or replace function public.grant_beta_sub()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.subscriptions (user_id, status, expires_at, source)
  values (new.id, 'active', null, 'beta')
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_beta on auth.users;
create trigger on_auth_user_created_beta
  after insert on auth.users
  for each row execute function public.grant_beta_sub();
