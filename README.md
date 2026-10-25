# DesignGrids Studio

A premium, dark-mode-first digital product design platform for agency services, portfolio case studies, a digital product marketplace, resources, a client portal, and an admin dashboard.

## Stack

- Next.js 15, React, TypeScript, Tailwind CSS
- Framer Motion and lucide-react for motion and icons
- Supabase Auth, PostgreSQL, and Storage-ready architecture
- Stripe-ready marketplace and digital download flow
- Resend-ready lead and transactional email flow
- SEO routes for metadata, Open Graph, sitemap, robots, and structured data

## Run locally

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` when connecting Supabase, Stripe, Resend, PostHog, or Google Analytics.

## Core routes

- `/` agency homepage with hero, services, projects, marketplace, process, testimonials, metrics, resources, and CTA
- `/projects` portfolio with search, filters, and sort controls
- `/projects/[slug]` interactive case study route
- `/marketplace` digital asset catalog
- `/marketplace/[slug]` product details with gallery, files, compatibility, version, reviews, FAQ, and related products
- `/resources` educational content hub
- `/services` detailed service breakdowns
- `/about` mission, vision, values, timeline, team, and achievements
- `/contact` inquiry form, booking surface, budget selector, and timeline selector
- `/client-portal` secure client workspace concept
- `/admin` management dashboard architecture

## Production notes

The UI is currently powered by realistic local sample data in `lib/content.ts`. Connect the same models to Supabase tables from `supabase/schema.sql`, then replace local reads with server queries as each product area goes live.
