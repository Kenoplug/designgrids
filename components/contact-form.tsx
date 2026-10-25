"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { services } from "@/lib/content";

const WEB3FORMS_KEY = "472351c3-8f1e-4513-b35d-e9a6be5edcd8";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Project Inquiry - DesignGrids",
          from_name: "DesignGrids Website",
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };
      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass grid gap-4 rounded-lg p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" label="Name" placeholder="Your name" required />
        <Input name="email" label="Email" placeholder="you@company.com" type="email" required />
      </div>
      <Input name="company" label="Company" placeholder="Company or product name" />
      <div className="grid gap-4 sm:grid-cols-3">
        <Select name="service" label="Service" options={services.map((service) => service.title)} />
        <Select name="budget" label="Budget" options={["$3k - $8k", "$8k - $20k", "$20k - $50k", "$50k+"]} />
        <Select name="timeline" label="Timeline" options={["ASAP", "2-4 weeks", "1-3 months", "Flexible"]} />
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Project details
        <textarea
          name="message"
          required
          minLength={20}
          className="min-h-36 rounded-md border border-black/10 bg-white px-3 py-3 text-sm text-ink outline-none placeholder:text-neutral-400"
          placeholder="What are you trying to design, improve, or launch?"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        <Send className="h-4 w-4" /> {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status === "success" && (
        <p className="rounded-md border border-black/10 bg-black/5 px-4 py-3 text-sm text-ink">
          Thanks! Your inquiry has been sent. We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-md border border-black/10 bg-black/5 px-4 py-3 text-sm text-ink">
          {error || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}

function Input({ name, label, placeholder, type = "text", required = false }: { name: string; label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <input name={name} type={type} required={required} className="min-h-11 rounded-md border border-black/10 bg-white px-3 text-sm text-ink outline-none placeholder:text-neutral-400" placeholder={placeholder} />
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <select name={name} className="min-h-11 rounded-md border border-black/10 bg-white px-3 text-sm text-ink outline-none">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
