import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FilterableList } from "@/components/filterable-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "Advanced portfolio showcase of mobile apps, SaaS products, dashboards, web apps, and design systems."
};

export default function ProjectsPage() {
  return (
    <Section eyebrow="Portfolio" title="Advanced portfolio showcase." copy="Search, filter, and sort product design work by category, industry, recency, popularity, and featured status.">
      <FilterableList variant="projects" />
    </Section>
  );
}
