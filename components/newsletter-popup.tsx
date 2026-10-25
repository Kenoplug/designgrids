"use client";

import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";

const WEB3FORMS_KEY = "472351c3-8f1e-4513-b35d-e9a6be5edcd8";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Newsletter Subscriber - DesignGrids",
          from_name: "DesignGrids Newsletter",
          email,
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-3xl border border-hairline bg-white p-4">
      <button
        aria-label="Dismiss newsletter"
        className="focus-ring absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-2xl text-mist hover:bg-black/5 hover:text-ink"
        onClick={() => setVisible(false)}
      >
        <X className="h-4 w-4" />
      </button>
      {status === "success" ? (
        <p className="py-4 pr-8 text-sm font-semibold text-ink">You&apos;re in! Check your inbox for the checklist.</p>
      ) : (
        <>
          <p className="pr-8 text-sm font-semibold text-ink">Free SaaS UX teardown checklist</p>
          <p className="mt-2 text-sm leading-5 text-mist">Get the resource we use to audit onboarding, navigation, dashboards, and activation loops.</p>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="min-w-0 flex-1 rounded-2xl border border-hairline bg-white px-3 text-sm outline-none placeholder:text-neutral-400"
              placeholder="Email address"
            />
            <button type="submit" disabled={status === "loading"} className="focus-ring rounded-2xl bg-graphite px-3 text-sm font-semibold text-canvas disabled:opacity-60">
              {status === "loading" ? "..." : "Get it"}
            </button>
          </form>
          {status === "error" && <p className="mt-2 text-xs text-mist">Couldn&apos;t subscribe. Please try again.</p>}
        </>
      )}
    </div>
  );
}
