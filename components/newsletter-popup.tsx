"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-lg border border-black/10 bg-white p-4">
      <button
        aria-label="Dismiss newsletter"
        className="focus-ring absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-md text-mist hover:bg-black/5 hover:text-ink"
        onClick={() => setVisible(false)}
      >
        <X className="h-4 w-4" />
      </button>
      <p className="pr-8 text-sm font-semibold text-ink">Free SaaS UX teardown checklist</p>
      <p className="mt-2 text-sm leading-5 text-mist">Get the resource we use to audit onboarding, navigation, dashboards, and activation loops.</p>
      <form className="mt-4 flex gap-2">
        <input className="min-w-0 flex-1 rounded-md border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-neutral-400" placeholder="Email address" />
        <button className="focus-ring rounded-md bg-ink px-3 text-sm font-semibold text-white">Get it</button>
      </form>
    </div>
  );
}
