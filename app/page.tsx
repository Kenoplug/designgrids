import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/button";
import { ProjectCard, ServiceCard, ProductCard, ResourceCard } from "@/components/cards";
import { HeroDashboard } from "@/components/hero-dashboard";
import { NewsletterPopup } from "@/components/newsletter-popup";
import { Section } from "@/components/section";
import { clientLogos, metrics, process, products, projects, resources, services, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-md border border-electric/30 bg-electric/10 px-3 py-1 text-sm font-medium text-electric">
              Product design for startups, founders, and software teams
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Designing Digital Products That Users Love.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mist/72">
              We help startups, developers, and businesses create world-class mobile apps, web applications, and SaaS products through research-driven design.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/projects">View Projects</Button>
              <Button href="/contact" variant="secondary">Hire Us</Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-mist/65 sm:grid-cols-3">
              {["UX research", "Design systems", "Launch-ready handoff"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-mint" /> {item}
                </span>
              ))}
            </div>
          </div>
          <HeroDashboard />
        </div>
        <div className="mx-auto -mt-10 max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="overflow-hidden border-y border-black/8 py-5">
            <div className="flex w-max gap-10 text-sm font-semibold tracking-[0.18em] text-mist/42 animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <span key={`${logo}-${index}`}>{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Services" title="From product strategy to polished interfaces." copy="DesignGrids Studio works across the product lifecycle, with reusable systems and evidence-led decisions baked into every engagement.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </Section>

      <Section eyebrow="Featured projects" title="Case studies with measurable product outcomes.">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </Section>

      <Section eyebrow="Process" title="A clear path from unknowns to launch.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-lg border border-black/10 bg-black/[0.045] p-5">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-electric" />
                  <span className="text-xs text-mist/40">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist/62">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Marketplace" title="Premium templates and systems for faster launches." copy="A digital product marketplace ready for Stripe checkout, instant downloads, reviews, wishlists, and license keys.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </Section>

      <Section eyebrow="Results" title="Proof points clients and customers can scan fast.">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-black/10 bg-black/[0.045] p-6">
              <p className="text-4xl font-semibold text-ink">{metric.value}</p>
              <p className="mt-2 text-sm text-mist/55">{metric.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Clients" title="Sharp thinking, clean systems, calm delivery.">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="glass rounded-lg p-6">
              <p className="text-lg leading-8 text-ink">&quot;{testimonial.quote}&quot;</p>
              <footer className="mt-6 text-sm text-mist/62">
                <strong className="block text-ink">{testimonial.author}</strong>
                {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section eyebrow="Resource hub" title="Free design education that feeds the funnel.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-black/10 bg-neutral-50 p-8 lg:p-12">
          <h2 className="max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">Let&apos;s Build Something Great Together</h2>
          <p className="mt-4 max-w-2xl text-mist/68">Book a consultation, review the portfolio, or browse templates built to turn product clarity into momentum.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Book Consultation</Button>
            <Button href="/projects" variant="secondary">View Portfolio</Button>
          </div>
        </div>
      </section>
      <NewsletterPopup />
    </>
  );
}
