import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FilterableList } from "@/components/filterable-list";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resource Hub",
  description: "Free UI, UX, product design, SaaS design, Figma tutorial, and case study resources."
};

export default function ResourcesPage() {
  return (
    <Section eyebrow="Resource hub" title="Design education for product teams." copy="Search by category, tag, topic, and reading time. Built to support newsletter growth and lead magnet conversion.">
      <FilterableList variant="resources" items={resources} />
    </Section>
  );
}
