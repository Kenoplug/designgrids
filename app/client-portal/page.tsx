import type { Metadata } from "next";
import { FileUp, MessageSquareText, ShieldCheck } from "lucide-react";
import { Section } from "@/components/section";
import { portalMilestones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Secure client area for project progress, files, feedback, deliverables, and milestones."
};

export default function ClientPortalPage() {
  return (
    <Section eyebrow="Client portal" title="Secure project workspace." copy="A Supabase Auth-ready client area for viewing project progress, uploading files, leaving feedback, reviewing deliverables, and tracking milestones.">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
        <aside className="glass rounded-3xl p-6">
          <ShieldCheck className="h-7 w-7 text-mint" />
          <h2 className="mt-5 text-2xl font-semibold">OrbitPay redesign</h2>
          <p className="mt-3 text-sm leading-6 text-mist/66">Authenticated client workspace with project status, invoices, license keys, and feedback threads.</p>
          <div className="mt-6 grid gap-3">
            {["Purchases", "Downloads", "License Keys", "Invoices"].map((item) => (
              <span key={item} className="rounded-2xl border border-hairline bg-black/6 px-3 py-2 text-sm text-mist/70">{item}</span>
            ))}
          </div>
        </aside>
        <div className="grid gap-5">
          {portalMilestones.map((milestone) => (
            <article key={milestone.name} className="rounded-3xl border border-hairline bg-card p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-semibold">{milestone.name}</h2>
                  <p className="mt-1 text-sm text-mist/54">{milestone.status}</p>
                </div>
                <span className="text-sm font-semibold text-electric">{milestone.progress}%</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-black/8">
                <div className="h-full rounded-full bg-graphite" style={{ width: `${milestone.progress}%` }} />
              </div>
            </article>
          ))}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-hairline bg-card p-5">
              <FileUp className="h-5 w-5 text-electric" />
              <h2 className="mt-4 font-semibold">Upload files</h2>
              <p className="mt-2 text-sm text-mist/62">Connect to Supabase Storage buckets for briefs, assets, and exports.</p>
            </div>
            <div className="rounded-3xl border border-hairline bg-card p-5">
              <MessageSquareText className="h-5 w-5 text-mint" />
              <h2 className="mt-4 font-semibold">Leave feedback</h2>
              <p className="mt-2 text-sm text-mist/62">Threaded comments can map to deliverables and milestone approvals.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
