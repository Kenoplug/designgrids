import {
  BarChart3,
  Blocks,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  ChartNoAxesCombined,
  ClipboardCheck,
  Code2,
  Compass,
  DatabaseZap,
  Figma,
  Gauge,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  MonitorSmartphone,
  Palette,
  PanelTop,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Store,
  UsersRound,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    slug: "mobile-app-design",
    title: "Mobile App Design",
    icon: Smartphone,
    summary: "Native-feeling iOS and Android experiences from flows to handoff-ready UI.",
    deliverables: ["UX flows", "High-fidelity screens", "Prototype", "Developer specs"],
    price: "$4k - $18k",
    process: ["Audit", "Journey mapping", "Interface design", "Prototype testing"]
  },
  {
    slug: "web-app-design",
    title: "Web App Design",
    icon: MonitorSmartphone,
    summary: "Conversion-aware web products with clear navigation, polished states, and responsive systems.",
    deliverables: ["Information architecture", "Responsive UI", "Component states", "QA checklist"],
    price: "$5k - $24k",
    process: ["Discovery", "Wireframes", "Design system", "Launch support"]
  },
  {
    slug: "saas-design",
    title: "SaaS Design",
    icon: LayoutDashboard,
    summary: "Data-rich SaaS platforms, dashboards, onboarding flows, and account workspaces.",
    deliverables: ["Dashboard UX", "Role flows", "Empty states", "Design tokens"],
    price: "$8k - $40k",
    process: ["Product strategy", "User research", "Core workflows", "Validation"]
  },
  {
    slug: "ux-research",
    title: "UX Research",
    icon: Search,
    summary: "Evidence-led research that turns customer behavior into product direction.",
    deliverables: ["Interview plan", "Competitive analysis", "Personas", "Insight report"],
    price: "$3k - $14k",
    process: ["Recruit", "Interview", "Synthesize", "Prioritize"]
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    icon: Blocks,
    summary: "Reusable component libraries, tokens, documentation, and governance for scaling teams.",
    deliverables: ["Tokens", "Component library", "Usage docs", "Figma variables"],
    price: "$7k - $32k",
    process: ["Inventory", "Tokenization", "Components", "Documentation"]
  },
  {
    slug: "product-strategy",
    title: "Product Strategy",
    icon: Compass,
    summary: "Sharper positioning, feature prioritization, and launch roadmaps for digital products.",
    deliverables: ["Opportunity map", "MVP scope", "Roadmap", "Experiment plan"],
    price: "$4k - $20k",
    process: ["Market scan", "Workshops", "Roadmap", "Metrics"]
  }
];

export const projects = [
  {
    slug: "orbitpay-fintech-dashboard",
    title: "OrbitPay Fintech Dashboard",
    industry: "Fintech",
    category: "SaaS Products",
    year: "2026",
    featured: true,
    views: 18400,
    summary: "A treasury command center for startup finance teams managing cards, invoices, and cash runway.",
    metrics: ["38% faster reconciliation", "21% higher activation", "$2.4M tracked monthly"],
    testimonial: "DesignGrids gave us a product language our customers understood immediately.",
    challenge:
      "The existing dashboard buried cash-flow tasks behind dense tables and unclear approvals.",
    research: ["12 finance lead interviews", "Competitor audit across 9 fintech tools", "Task timing on reconciliation flows"],
    personas: ["Finance lead", "Founder-operator", "External accountant"]
  },
  {
    slug: "mednora-care-mobile",
    title: "Mednora Care Mobile",
    industry: "Healthtech",
    category: "Mobile Apps",
    year: "2025",
    featured: true,
    views: 14320,
    summary: "A calmer patient companion app for appointments, medication plans, and remote check-ins.",
    metrics: ["44% more check-ins", "31% fewer missed visits", "4.8 app rating"],
    testimonial: "The research artifacts were as valuable as the final interface.",
    challenge: "Patients needed clinical clarity without the stress of a hospital-style interface.",
    research: ["Patient diary study", "Accessibility audit", "Clinician workflow mapping"],
    personas: ["Chronic care patient", "Care coordinator", "Family caregiver"]
  },
  {
    slug: "nimbus-analytics-system",
    title: "Nimbus Analytics System",
    industry: "AI Analytics",
    category: "Dashboards",
    year: "2026",
    featured: true,
    views: 22100,
    summary: "A design system and analytics suite for teams shipping AI-powered business intelligence.",
    metrics: ["62 components shipped", "2.1x query completion", "28% support reduction"],
    testimonial: "The system helped engineering move faster without losing product quality.",
    challenge: "The product mixed generative AI, charts, and admin controls without a coherent hierarchy.",
    research: ["Analytics workflow audit", "Prompt usability testing", "Component inventory"],
    personas: ["Operations manager", "Data analyst", "Workspace admin"]
  },
  {
    slug: "launchgrid-web-platform",
    title: "LaunchGrid Web Platform",
    industry: "Startup Ops",
    category: "Web Apps",
    year: "2025",
    featured: false,
    views: 9800,
    summary: "A founder workspace for validating ideas, building launch plans, and coordinating go-to-market work.",
    metrics: ["19% trial lift", "36% more completed plans", "11 days to MVP"],
    testimonial: "DesignGrids turned a messy workflow into a product our users wanted to return to.",
    challenge: "Founders had too many disconnected planning tools and no single launch workflow.",
    research: ["Founder interviews", "Funnel review", "Content model testing"],
    personas: ["Solo founder", "Product marketer", "Studio partner"]
  }
];

export const products = [
  {
    slug: "saas-command-ui-kit",
    title: "SaaS Command UI Kit",
    category: "SaaS Dashboards",
    price: "$79",
    rating: 4.9,
    reviews: 128,
    summary: "148 responsive SaaS screens, analytics layouts, admin states, and design tokens.",
    files: ["Figma file", "Token JSON", "Icon set", "Documentation"],
    compatibility: ["Figma", "React", "Tailwind"],
    version: "2.3.0",
  },
  {
    slug: "mobile-fintech-template",
    title: "Mobile Fintech Template",
    category: "Mobile App Templates",
    price: "$59",
    rating: 4.8,
    reviews: 94,
    summary: "Banking, wallet, KYC, card management, and transaction flows for fintech apps.",
    files: ["Figma file", "Prototype", "User flow map", "Components"],
    compatibility: ["Figma", "iOS", "Android"],
    version: "1.8.2",
  },
  {
    slug: "wireframe-starter-system",
    title: "Wireframe Starter System",
    category: "Wireframe Kits",
    price: "$39",
    rating: 4.7,
    reviews: 76,
    summary: "Low-fidelity flows, blocks, annotations, and product discovery templates.",
    files: ["Figma file", "FigJam templates", "Workshop guide"],
    compatibility: ["Figma", "FigJam"],
    version: "3.1.0",
  },
  {
    slug: "landing-page-lab",
    title: "Landing Page Lab",
    category: "Landing Pages",
    price: "$49",
    rating: 4.9,
    reviews: 111,
    summary: "Conversion-focused page sections for SaaS, AI tools, waitlists, and launch campaigns.",
    files: ["Figma file", "Section variants", "Copy prompts", "A/B checklist"],
    compatibility: ["Figma", "Webflow", "Next.js"],
    version: "2.0.4",
  }
];

export const resources = [
  {
    slug: "saas-dashboard-information-architecture",
    title: "How to Structure SaaS Dashboard Information Architecture",
    category: "SaaS Design",
    tag: "Dashboards",
    minutes: 9,
    summary: "A practical framework for navigation, hierarchy, metrics, and action density."
  },
  {
    slug: "figma-token-workflow",
    title: "A Lean Figma Token Workflow for Growing Teams",
    category: "Figma Tutorials",
    tag: "Design Systems",
    minutes: 7,
    summary: "How to make variables, modes, and component decisions that engineers can trust."
  },
  {
    slug: "ux-research-for-pre-seed-startups",
    title: "UX Research for Pre-Seed Startups",
    category: "UX Design",
    tag: "Research",
    minutes: 6,
    summary: "A compact research plan that answers real product questions without slowing the team."
  },
  {
    slug: "mobile-app-onboarding-patterns",
    title: "Mobile App Onboarding Patterns That Earn Trust",
    category: "UI Design",
    tag: "Mobile",
    minutes: 8,
    summary: "When to use progressive disclosure, permissions, personalization, and empty states."
  }
];

export const testimonials = [
  {
    quote: "DesignGrids felt like an embedded product team. They clarified the strategy and gave us a beautiful system to build with.",
    author: "Maya Okoro",
    role: "CEO, OrbitPay"
  },
  {
    quote: "The work was polished, but the biggest win was speed. Our engineering team shipped confidently because the specs were complete.",
    author: "Daniel Reeves",
    role: "Head of Product, Nimbus"
  },
  {
    quote: "We came for screens and left with a roadmap, research insights, and a design language that fits our brand.",
    author: "Aisha Bello",
    role: "Founder, LaunchGrid"
  }
];

export const process = [
  { title: "Discovery", icon: Compass, copy: "Align goals, constraints, users, metrics, and business model." },
  { title: "Research", icon: BrainCircuit, copy: "Interview users, audit competitors, and turn findings into priorities." },
  { title: "Wireframing", icon: Workflow, copy: "Shape core flows before visual polish enters the room." },
  { title: "Design", icon: Palette, copy: "Create high-fidelity product screens, components, and design tokens." },
  { title: "Testing", icon: ClipboardCheck, copy: "Validate usability, accessibility, content, and edge cases." },
  { title: "Launch", icon: Rocket, copy: "Support handoff, QA, analytics setup, and post-launch iteration." }
];

export const metrics = [
  { label: "Projects Completed", value: "120+" },
  { label: "Happy Clients", value: "64" },
  { label: "Years Experience", value: "8+" },
  { label: "Design Assets Sold", value: "12k+" }
];

export const clientLogos = ["NOVA", "ORBIT", "MEDNORA", "NIMBUS", "ATLAS", "LUMEN", "QUARTZ", "KIN"];

export const platformFeatures = [
  { title: "Agency pipeline", icon: BriefcaseBusiness, copy: "Inquiry, consultation, proposals, milestones, and deliverables." },
  { title: "Marketplace", icon: Store, copy: "Products, ratings, wishlists, reviews, related assets, and license records." },
  { title: "Client portal", icon: ShieldCheck, copy: "Secure project progress, feedback, uploads, invoices, and approvals." },
  { title: "Resource hub", icon: BookOpen, copy: "Articles, tags, lead magnets, newsletter flows, and reading metadata." },
  { title: "Admin cockpit", icon: Gauge, copy: "Manage projects, products, testimonials, orders, articles, and analytics." },
  { title: "Automation ready", icon: Bot, copy: "Stripe, Resend, Supabase Auth, Storage, PostHog, and GA event hooks." }
];

export const adminModules = [
  { title: "Projects", icon: PenTool, count: "24 active" },
  { title: "Templates", icon: Figma, count: "38 listed" },
  { title: "Orders", icon: ChartNoAxesCombined, count: "$18.6k MRR" },
  { title: "Customers", icon: UsersRound, count: "4,280 accounts" },
  { title: "Articles", icon: Brush, count: "76 drafts/live" },
  { title: "Analytics", icon: BarChart3, count: "92 Lighthouse target" },
  { title: "Storage", icon: DatabaseZap, count: "1.8 TB assets" },
  { title: "Support", icon: LifeBuoy, count: "14 open" }
];

export const portalMilestones = [
  { name: "Discovery Sprint", status: "Approved", progress: 100 },
  { name: "UX Research", status: "In review", progress: 82 },
  { name: "Visual Design", status: "In progress", progress: 58 },
  { name: "Prototype QA", status: "Upcoming", progress: 18 }
];

export const cmsModels = [
  "Project",
  "CaseStudySection",
  "DigitalProduct",
  "ProductReview",
  "Order",
  "DownloadLicense",
  "Article",
  "Lead",
  "Consultation",
  "ClientProject",
  "Milestone",
  "FeedbackThread",
  "Testimonial"
];

export const techStack = [
  "Next.js 15",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Resend",
  "PostHog",
  "Google Analytics",
  "Vercel"
];

export const iconMap = { Sparkles, Code2, LineChart, Layers3, PanelTop };
