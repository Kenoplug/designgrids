import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FilterableList } from "@/components/filterable-list";
import { getProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Digital product marketplace for Figma UI kits, SaaS dashboards, landing pages, wireframes, and design systems."
};

export const dynamic = "force-dynamic";

export default async function MarketplacePage() {
  const products = await getProducts();

  return (
    <Section eyebrow="DesignGrids Marketplace" title="Production-ready design assets." copy="Browse UI kits, templates, dashboards, landing pages, wireframes, design systems, component libraries, ratings, reviews, and related product paths.">
      <FilterableList variant="products" items={products} />
    </Section>
  );
}
