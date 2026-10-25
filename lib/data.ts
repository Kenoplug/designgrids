import { getPublicSupabase } from "./supabase";
import { projects as seedProjects, products as seedProducts } from "./content";

export type Project = {
  slug: string;
  title: string;
  industry: string;
  category: string;
  year: string;
  featured: boolean;
  views: number;
  summary: string;
  metrics: string[];
  testimonial: string;
  challenge: string;
  research: string[];
  personas: string[];
  images: string[];
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  summary: string;
  files: string[];
  compatibility: string[];
  version: string;
  checkoutUrl: string;
  images: string[];
};

type Row = Record<string, any>;

function mapProject(row: Row): Project {
  return {
    slug: row.slug,
    title: row.title,
    industry: row.industry,
    category: row.category,
    year: row.year,
    featured: !!row.featured,
    views: row.views ?? 0,
    summary: row.summary,
    metrics: row.metrics ?? [],
    testimonial: row.testimonial ?? "",
    challenge: row.challenge ?? "",
    research: row.research ?? [],
    personas: row.personas ?? [],
    images: Array.isArray(row.images) ? row.images : [],
  };
}

function mapProduct(row: Row): Product {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    price: row.price,
    rating: Number(row.rating ?? 0),
    reviews: Number(row.reviews ?? 0),
    summary: row.summary,
    files: row.files ?? [],
    compatibility: row.compatibility ?? [],
    version: row.version ?? "1.0.0",
    checkoutUrl: row.checkout_url ?? "",
    images: Array.isArray(row.images) ? row.images : [],
  };
}

async function fetchRows<T>(table: "projects" | "products", map: (row: Row) => T): Promise<T[] | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  try {
    const { data, error } = await getPublicSupabase().from(table).select("*").order("sort_order", { ascending: true });
    if (error || !data) return null;
    return (data as Row[]).map(map);
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const rows = await fetchRows<Project>("projects", mapProject);
  if (rows) return rows;
  return seedProjects.map((project) => ({ ...project, images: [] }));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export async function getProducts(): Promise<Product[]> {
  const rows = await fetchRows<Product>("products", mapProduct);
  if (rows) return rows;
  return seedProducts.map((product) => ({ ...product, images: [] }));
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}
