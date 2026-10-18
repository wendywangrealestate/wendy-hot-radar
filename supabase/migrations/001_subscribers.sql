-- 订阅表：在 Supabase SQL Editor 里执行一次即可
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  created_at timestamptz not null default now()
);

-- 允许匿名写入（仅 insert；读取/删除走 service role 或 dashboard）
alter table public.subscribers enable row level security;

drop policy if exists "allow anonymous insert" on public.subscribers;
create policy "allow anonymous insert"
  on public.subscribers for insert
  to anon
  with check (true);
