-- ============================================================
-- DesignGrids Studio — Supabase schema + seed data
-- Run this ONCE in the Supabase SQL Editor (Dashboard > SQL Editor > New query > Run)
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- Projects (portfolio case studies) ----------
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  industry text not null,
  category text not null,
  year text not null,
  featured boolean not null default false,
  views integer not null default 0,
  sort_order integer not null default 0,
  summary text not null,
  metrics jsonb not null default '[]'::jsonb,
  testimonial text not null default '',
  challenge text not null default '',
  research jsonb not null default '[]'::jsonb,
  personas jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- ---------- Products (marketplace) ----------
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  price text not null,
  rating numeric not null default 0,
  reviews integer not null default 0,
  sort_order integer not null default 0,
  summary text not null,
  files jsonb not null default '[]'::jsonb,
  compatibility jsonb not null default '[]'::jsonb,
  version text not null default '1.0.0',
  checkout_url text not null default '',
  created_at timestamptz not null default now()
);

-- ---------- Row Level Security ----------
alter table public.projects enable row level security;
alter table public.products enable row level security;

create policy "public_read_projects" on public.projects for select using (true);
create policy "public_read_products" on public.products for select using (true);

-- ---------- Seed: projects ----------
insert into public.projects (slug, title, industry, category, year, featured, views, sort_order, summary, metrics, testimonial, challenge, research, personas) values
('orbitpay-fintech-dashboard', 'OrbitPay Fintech Dashboard', 'Fintech', 'SaaS Products', '2026', true, 18400, 0, 'A treasury command center for startup finance teams managing cards, invoices, and cash runway.', '["38% faster reconciliation", "21% higher activation", "$2.4M tracked monthly"]'::jsonb, 'DesignGrids gave us a product language our customers understood immediately.', 'The existing dashboard buried cash-flow tasks behind dense tables and unclear approvals.', '["12 finance lead interviews", "Competitor audit across 9 fintech tools", "Task timing on reconciliation flows"]'::jsonb, '["Finance lead", "Founder-operator", "External accountant"]'::jsonb),
('mednora-care-mobile', 'Mednora Care Mobile', 'Healthtech', 'Mobile Apps', '2025', true, 14320, 1, 'A calmer patient companion app for appointments, medication plans, and remote check-ins.', '["44% more check-ins", "31% fewer missed visits", "4.8 app rating"]'::jsonb, 'The research artifacts were as valuable as the final interface.', 'Patients needed clinical clarity without the stress of a hospital-style interface.', '["Patient diary study", "Accessibility audit", "Clinician workflow mapping"]'::jsonb, '["Chronic care patient", "Care coordinator", "Family caregiver"]'::jsonb),
('nimbus-analytics-system', 'Nimbus Analytics System', 'AI Analytics', 'Dashboards', '2026', true, 22100, 2, 'A design system and analytics suite for teams shipping AI-powered business intelligence.', '["62 components shipped", "2.1x query completion", "28% support reduction"]'::jsonb, 'The system helped engineering move faster without losing product quality.', 'The product mixed generative AI, charts, and admin controls without a coherent hierarchy.', '["Analytics workflow audit", "Prompt usability testing", "Component inventory"]'::jsonb, '["Operations manager", "Data analyst", "Workspace admin"]'::jsonb),
('launchgrid-web-platform', 'LaunchGrid Web Platform', 'Startup Ops', 'Web Apps', '2025', false, 9800, 3, 'A founder workspace for validating ideas, building launch plans, and coordinating go-to-market work.', '["19% trial lift", "36% more completed plans", "11 days to MVP"]'::jsonb, 'DesignGrids turned a messy workflow into a product our users wanted to return to.', 'Founders had too many disconnected planning tools and no single launch workflow.', '["Founder interviews", "Funnel review", "Content model testing"]'::jsonb, '["Solo founder", "Product marketer", "Studio partner"]'::jsonb);

-- ---------- Seed: products ----------
insert into public.products (slug, title, category, price, rating, reviews, sort_order, summary, files, compatibility, version, checkout_url) values
('saas-command-ui-kit', 'SaaS Command UI Kit', 'SaaS Dashboards', '$79', 4.9, 128, 0, '148 responsive SaaS screens, analytics layouts, admin states, and design tokens.', '["Figma file", "Token JSON", "Icon set", "Documentation"]'::jsonb, '["Figma", "React", "Tailwind"]'::jsonb, '2.3.0', ''),
('mobile-fintech-template', 'Mobile Fintech Template', 'Mobile App Templates', '$59', 4.8, 94, 1, 'Banking, wallet, KYC, card management, and transaction flows for fintech apps.', '["Figma file", "Prototype", "User flow map", "Components"]'::jsonb, '["Figma", "iOS", "Android"]'::jsonb, '1.8.2', ''),
('wireframe-starter-system', 'Wireframe Starter System', 'Wireframe Kits', '$39', 4.7, 76, 2, 'Low-fidelity flows, blocks, annotations, and product discovery templates.', '["Figma file", "FigJam templates", "Workshop guide"]'::jsonb, '["Figma", "FigJam"]'::jsonb, '3.1.0', ''),
('landing-page-lab', 'Landing Page Lab', 'Landing Pages', '$49', 4.9, 111, 3, 'Conversion-focused page sections for SaaS, AI tools, waitlists, and launch campaigns.', '["Figma file", "Section variants", "Copy prompts", "A/B checklist"]'::jsonb, '["Figma", "Webflow", "Next.js"]'::jsonb, '2.0.4', '');
