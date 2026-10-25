import type { Metadata } from "next";
import { Section } from "@/components/section";
import { adminModules, cmsModels, platformFeatures, techStack } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard architecture for managing projects, templates, orders, customers, testimonials, articles, and analytics."
};

export default function AdminPage() {
  return (
    <>
      <Section eyebrow="Admin dashboard" title="Operational cockpit for the whole platform." copy="Admin can add, edit, and delete projects, templates, orders, customers, testimonials, articles, and analytics records.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {adminModules.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.title} className="rounded-lg border border-black/10 bg-black/[0.045] p-5">
                <Icon className="h-5 w-5 text-electric" />
                <h2 className="mt-5 font-semibold">{module.title}</h2>
                <p className="mt-2 text-sm text-mist/55">{module.count}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section title="Platform modules">
        <div className="grid gap-5 lg:grid-cols-3">
          {platformFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="glass rounded-lg p-6">
                <Icon className="h-6 w-6 text-mint" />
                <h2 className="mt-5 text-lg font-semibold">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-mist/66">{feature.copy}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section title="CMS models and stack">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-black/10 bg-black/[0.045] p-6">
            <h2 className="text-xl font-semibold">CMS models</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {cmsModels.map((model) => <span key={model} className="rounded-md border border-black/10 px-3 py-1 text-sm text-mist/68">{model}</span>)}
            </div>
          </div>
          <div className="rounded-lg border border-black/10 bg-black/[0.045] p-6">
            <h2 className="text-xl font-semibold">Production stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {techStack.map((item) => <span key={item} className="rounded-md border border-black/10 px-3 py-1 text-sm text-mist/68">{item}</span>)}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
