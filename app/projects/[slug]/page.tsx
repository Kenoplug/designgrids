import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/cards";
import { Section } from "@/components/section";
import { getProjects } from "@/lib/data";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "Case Study",
    description: project?.summary
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const nextProject = projects.find((item) => item.slug !== project.slug) ?? projects[0];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">{project.category} / {project.year}</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-6xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-8 text-mist/72">{project.summary}</p>
          <div className="mt-8 flex gap-3">
            <Button href="/contact">Start a Project</Button>
            <Button href="/projects" variant="secondary">All Projects</Button>
          </div>
        </div>
        <div className="min-h-96 rounded-3xl bg-card p-6">
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} className="h-full min-h-[24rem] w-full rounded-2xl border border-hairline object-cover" />
          ) : (
            <div className="grid h-full gap-4 rounded-3xl border border-hairline bg-white p-5 backdrop-blur-md">
              <div className="grid gap-4 md:grid-cols-3">
                {project.metrics.map((metric) => <span key={metric} className="rounded-3xl bg-black/14 p-4 text-sm font-medium">{metric}</span>)}
              </div>
              <div className="rounded-3xl bg-black/16 p-5">
                <div className="mb-4 h-3 w-1/2 rounded bg-black/60" />
                <div className="grid h-52 grid-cols-5 items-end gap-3">
                  {[38, 64, 52, 86, 74].map((height) => <span key={height} className="rounded-t bg-black/60" style={{ height: `${height}%` }} />)}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Section title="Overview" copy={`${project.industry} client engagement focused on research, workflow clarity, and a production-ready interface system.`}>
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoBlock title="Challenge" items={[project.challenge]} />
          <InfoBlock title="Research" items={project.research} />
          <InfoBlock title="User Personas" items={project.personas} />
        </div>
      </Section>
      <Section title="Journey, wireframes, before and after.">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-hairline bg-card p-6">
            <h2 className="text-xl font-semibold">User journey</h2>
            <div className="mt-6 grid gap-3">
              {["Entry point", "Primary task", "Decision moment", "Success state"].map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-2xl bg-electric/14 text-sm text-electric">{index + 1}</span>
                  <span className="text-mist/72">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-hairline bg-card p-6">
            <h2 className="text-xl font-semibold">Before vs after</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-hairline bg-black/6 p-4 text-sm text-mist/62">Before: fragmented actions, hidden approvals, unclear priorities.</div>
              <div className="rounded-3xl border border-mint/25 bg-mint/10 p-4 text-sm text-mist/78">After: task-first hierarchy, guided actions, measurable outcomes.</div>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Design system and results.">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-hairline bg-card p-6">
            <h2 className="text-xl font-semibold">System foundations</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Colors", "Typography", "Components"].map((item) => <span key={item} className="rounded-2xl bg-black/8 p-4 text-sm">{item}</span>)}
            </div>
          </div>
          <blockquote className="glass rounded-3xl p-6">
            <p className="text-xl leading-8">&quot;{project.testimonial}&quot;</p>
            <p className="mt-5 text-sm text-mist/55">{project.industry} client</p>
          </blockquote>
        </div>
      </Section>
      <Section title="Next project">
        <div className="max-w-md">
          <ProjectCard project={nextProject} />
        </div>
      </Section>
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-3xl border border-hairline bg-card p-6">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-mist/68">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
