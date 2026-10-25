create extension if not exists "uuid-ossp";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'customer',
  company text,
  created_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  industry text not null,
  category text not null,
  year int not null,
  summary text not null,
  featured boolean not null default false,
  views int not null default 0,
  cover_url text,
  created_at timestamptz not null default now()
);

create table public.case_study_sections (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid not null references public.projects(id) on delete cascade,
  section_type text not null,
  title text not null,
  body jsonb not null default '{}'::jsonb,
  sort_order int not null default 0
);

create table public.digital_products (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  category text not null,
  price_cents int not null,
  summary text not null,
  files jsonb not null default '[]'::jsonb,
  compatibility jsonb not null default '[]'::jsonb,
  version text not null default '1.0.0',
  stripe_price_id text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.product_reviews (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references public.digital_products(id) on delete cascade,
  profile_id uuid references public.profiles(id) on delete set null,
  rating int not null check (rating between 1 and 5),
  body text,
  created_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references public.profiles(id) on delete set null,
  stripe_checkout_session_id text unique,
  email text not null,
  status text not null default 'pending',
  total_cents int not null default 0,
  created_at timestamptz not null default now()
);

create table public.download_licenses (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.digital_products(id) on delete cascade,
  license_key text unique not null,
  download_count int not null default 0,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.articles (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  category text not null,
  tags text[] not null default '{}',
  reading_minutes int not null default 5,
  excerpt text not null,
  body_md text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  company text,
  service text not null,
  budget text not null,
  timeline text not null,
  message text not null,
  source text not null default 'website',
  created_at timestamptz not null default now()
);

create table public.client_projects (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  status text not null default 'active',
  progress int not null default 0,
  created_at timestamptz not null default now()
);

create table public.milestones (
  id uuid primary key default uuid_generate_v4(),
  client_project_id uuid not null references public.client_projects(id) on delete cascade,
  name text not null,
  status text not null default 'upcoming',
  progress int not null default 0,
  due_date date,
  sort_order int not null default 0
);

create table public.feedback_threads (
  id uuid primary key default uuid_generate_v4(),
  client_project_id uuid not null references public.client_projects(id) on delete cascade,
  profile_id uuid references public.profiles(id) on delete set null,
  title text not null,
  body text not null,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  author text not null,
  role text not null,
  quote text not null,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.case_study_sections enable row level security;
alter table public.digital_products enable row level security;
alter table public.product_reviews enable row level security;
alter table public.orders enable row level security;
alter table public.download_licenses enable row level security;
alter table public.articles enable row level security;
alter table public.leads enable row level security;
alter table public.client_projects enable row level security;
alter table public.milestones enable row level security;
alter table public.feedback_threads enable row level security;
alter table public.testimonials enable row level security;

create policy "Public can read published projects" on public.projects for select using (true);
create policy "Public can read published products" on public.digital_products for select using (published = true);
create policy "Public can read published articles" on public.articles for select using (published = true);
create policy "Public can create leads" on public.leads for insert with check (true);
create policy "Users can read own orders" on public.orders for select using (auth.uid() = profile_id);
create policy "Users can read own client projects" on public.client_projects for select using (auth.uid() = profile_id);
