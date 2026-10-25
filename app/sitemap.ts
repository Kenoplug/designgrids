import type { MetadataRoute } from "next";
import { products, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://designgrids.studio";
  const routes = ["", "/services", "/projects", "/marketplace", "/resources", "/about", "/contact", "/client-portal", "/admin"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const productRoutes = products.map((product) => `/marketplace/${product.slug}`);

  return [...routes, ...projectRoutes, ...productRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));
}
