import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards";
import { Section } from "@/components/section";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Mobile app design, web app design, SaaS design, UX audits, design systems, and product strategy."
};

export default function ServicesPage() {
  return (
    <>
      <Section eyebrow="Services" title="Detailed service breakdowns." copy="Each engagement includes a clear overview, deliverables, process, pricing range, and FAQ-ready scope for sales conversations.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </Section>
      <Section title="Deliverables and pricing">
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-hairline bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-ink">{service.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-mist/66">{service.summary}</p>
                </div>
                <span className="rounded-2xl bg-electric/12 px-3 py-1 text-sm font-semibold text-electric">{service.price}</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-ink">Deliverables</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-mist/62">
                    {service.deliverables.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Process</h3>
                  <ul className="mt-3 grid gap-2 text-sm text-mist/62">
                    {service.process.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
