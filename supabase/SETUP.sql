-- Shirley CHEN Portfolio V8 - Supabase setup
-- Run this entire file once in Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.cases (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('media','corporate','esg')),
  category_zh text not null,
  category_en text not null,
  date_label text default '',
  title_zh text not null,
  title_en text not null,
  company text default '',
  summary_zh text default '',
  summary_en text default '',
  cover_url text default '',
  gallery jsonb not null default '[]'::jsonb,
  coverage jsonb not null default '[]'::jsonb,
  published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_content (
  key text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.cases enable row level security;
alter table public.site_content enable row level security;

-- Public visitors can only read published cases.
drop policy if exists "public read published cases" on public.cases;
create policy "public read published cases"
on public.cases for select
to anon
using (published = true);

-- Authenticated admin can manage all cases.
drop policy if exists "authenticated manage cases" on public.cases;
create policy "authenticated manage cases"
on public.cases for all
to authenticated
using (lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'))
with check (lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'));

-- Public site may read the website content row.
drop policy if exists "public read site content" on public.site_content;
create policy "public read site content"
on public.site_content for select
to anon
using (true);

-- Authenticated admin may manage website content.
drop policy if exists "authenticated manage site content" on public.site_content;
create policy "authenticated manage site content"
on public.site_content for all
to authenticated
using (lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'))
with check (lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'));

-- Public image bucket. Do not upload confidential or unreleased material here.
insert into storage.buckets (id, name, public)
values ('portfolio-media', 'portfolio-media', true)
on conflict (id) do update set public = true;

-- Only logged-in users can upload/change/delete files.
drop policy if exists "authenticated upload portfolio media" on storage.objects;
create policy "authenticated upload portfolio media"
on storage.objects for insert
to authenticated
with check (bucket_id = 'portfolio-media' and lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'));

drop policy if exists "authenticated update portfolio media" on storage.objects;
create policy "authenticated update portfolio media"
on storage.objects for update
to authenticated
using (bucket_id = 'portfolio-media' and lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'))
with check (bucket_id = 'portfolio-media' and lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'));

drop policy if exists "authenticated delete portfolio media" on storage.objects;
create policy "authenticated delete portfolio media"
on storage.objects for delete
to authenticated
using (bucket_id = 'portfolio-media' and lower(auth.jwt() ->> 'email') = lower('Shirley.chensiqi@gmail.com'));
