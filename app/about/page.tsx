import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, vision, values, story, timeline, team, achievements, and awards for DesignGrids Studio."
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title="A product design studio for teams building useful software." copy="DesignGrids Studio blends research, strategy, interface craft, and reusable systems so founders and software teams can ship with confidence.">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Mission", "Create exceptional digital products that are clear, usable, and commercially strong."],
            ["Vision", "Become a global studio, marketplace, education platform, community, and SaaS product ecosystem."],
            ["Values", "Clarity, craft, evidence, momentum, accessibility, and practical partnership."]
          ].map(([title, copy]) => (
            <article key={title} className="glass rounded-3xl p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-mist/66">{copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Story and timeline">
        <div className="grid gap-4">
          {[
            ["2018", "Started as a focused UI/UX studio for early-stage founders."],
            ["2021", "Expanded into SaaS platforms, research programs, and design systems."],
            ["2024", "Launched digital templates and productized design assets."],
            ["2026", "Evolving into an agency, marketplace, resource hub, client portal, and design ecosystem."]
          ].map(([year, copy]) => (
            <div key={year} className="grid gap-4 rounded-3xl border border-hairline bg-card p-5 sm:grid-cols-[8rem_1fr]">
              <strong className="text-electric">{year}</strong>
              <p className="text-mist/68">{copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Team and achievements">
        <div className="grid gap-5 lg:grid-cols-4">
          {["Product strategists", "UX researchers", "Visual designers", "Design engineers"].map((role) => (
            <article key={role} className="rounded-3xl border border-hairline bg-card p-6">
              <div className="h-24 rounded-3xl bg-neutral-200" />
              <h2 className="mt-5 font-semibold">{role}</h2>
              <p className="mt-2 text-sm text-mist/60">Senior specialists working across strategy, systems, prototyping, and launch QA.</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
