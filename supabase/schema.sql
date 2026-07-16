-- Baysaa Tang LLC — quote submission storage
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query).

create table if not exists public.quote_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  product_name text,
  company_name text,
  full_name text not null,
  email text,
  phone text not null,
  message text,
  status text not null default 'new'
);

create index if not exists quote_submissions_created_at_idx
  on public.quote_submissions (created_at desc);

-- Lock the table down. All access happens server-side through the
-- service-role key (which bypasses RLS), so no public policies are needed.
alter table public.quote_submissions enable row level security;
