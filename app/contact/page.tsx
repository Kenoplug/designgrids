import type { Metadata } from "next";
import { CalendarDays, Mail } from "lucide-react";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DesignGrids Studio, book a consultation, or submit a project inquiry."
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Tell us what you are building." copy="Use the project inquiry form to share scope, budget, timeline, and goals.">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
        <ContactForm />
        <aside className="grid gap-4">
          <div className="rounded-3xl border border-hairline bg-white p-6">
            <CalendarDays className="h-6 w-6 text-ink" />
            <h2 className="mt-5 text-xl font-semibold text-ink">Book a consultation</h2>
            <p className="mt-3 text-sm leading-6 text-mist">Embed Calendly here for qualification calls, UX audits, and project scoping sessions.</p>
          </div>
          <div className="rounded-3xl border border-hairline bg-white p-6">
            <Mail className="h-6 w-6 text-ink" />
            <h2 className="mt-5 text-xl font-semibold text-ink">hello@designgrids.studio</h2>
            <p className="mt-3 text-sm leading-6 text-mist">Follow on X, LinkedIn, Dribbble, Behance, and Figma Community.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
