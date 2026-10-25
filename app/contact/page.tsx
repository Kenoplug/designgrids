import type { Metadata } from "next";
import { CalendarDays, Mail, Send } from "lucide-react";
import { Section } from "@/components/section";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DesignGrids Studio, book a consultation, or submit a project inquiry."
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Tell us what you are building." copy="Use the project inquiry form to share scope, budget, timeline, and goals. This route is ready to connect to Supabase leads, Resend notifications, and Calendly booking.">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
        <form className="glass grid gap-4 rounded-lg p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="you@company.com" type="email" />
          </div>
          <Input label="Company" placeholder="Company or product name" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Select label="Service" options={services.map((service) => service.title)} />
            <Select label="Budget" options={["$3k - $8k", "$8k - $20k", "$20k - $50k", "$50k+"]} />
            <Select label="Timeline" options={["ASAP", "2-4 weeks", "1-3 months", "Flexible"]} />
          </div>
          <label className="grid gap-2 text-sm font-medium text-ink">
            Project details
            <textarea className="min-h-36 rounded-md border border-black/10 bg-neutral-50/70 px-3 py-3 text-sm text-ink outline-none placeholder:text-mist/35" placeholder="What are you trying to design, improve, or launch?" />
          </label>
          <button className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
            <Send className="h-4 w-4" /> Send Inquiry
          </button>
        </form>
        <aside className="grid gap-4">
          <div className="rounded-lg border border-black/10 bg-black/[0.045] p-6">
            <CalendarDays className="h-6 w-6 text-electric" />
            <h2 className="mt-5 text-xl font-semibold">Book a consultation</h2>
            <p className="mt-3 text-sm leading-6 text-mist/66">Embed Calendly here for qualification calls, UX audits, and project scoping sessions.</p>
          </div>
          <div className="rounded-lg border border-black/10 bg-black/[0.045] p-6">
            <Mail className="h-6 w-6 text-mint" />
            <h2 className="mt-5 text-xl font-semibold">hello@designgrids.studio</h2>
            <p className="mt-3 text-sm leading-6 text-mist/66">Follow on X, LinkedIn, Dribbble, Behance, and Figma Community.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Input({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <input type={type} className="min-h-11 rounded-md border border-black/10 bg-neutral-50/70 px-3 text-sm text-ink outline-none placeholder:text-mist/35" placeholder={placeholder} />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <select className="min-h-11 rounded-md border border-black/10 bg-neutral-50/70 px-3 text-sm text-ink outline-none">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
