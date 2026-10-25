import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FilterableList } from "@/components/filterable-list";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Advanced portfolio showcase of mobile apps, SaaS products, dashboards, web apps, and design systems."
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Section eyebrow="Portfolio" title="Advanced portfolio showcase." copy="Search, filter, and sort product design work by category, industry, recency, popularity, and featured status.">
      <FilterableList variant="projects" items={projects} />
    </Section>
  );
}
