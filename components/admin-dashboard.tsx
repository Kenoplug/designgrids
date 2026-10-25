"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { getBrowserSupabase } from "@/lib/supabase-client";

const PASSWORD_KEY = "dg_admin_password";

type ProductDraft = {
  id?: string;
  title: string;
  category: string;
  price: string;
  rating: string;
  reviews: string;
  version: string;
  checkoutUrl: string;
  summary: string;
  files: string;
  compatibility: string;
};

type ProjectDraft = {
  id?: string;
  title: string;
  industry: string;
  category: string;
  year: string;
  featured: boolean;
  views: string;
  summary: string;
  testimonial: string;
  challenge: string;
  metrics: string;
  research: string;
  personas: string;
};

const emptyProduct: ProductDraft = { title: "", category: "", price: "", rating: "", reviews: "", version: "", checkoutUrl: "", summary: "", files: "", compatibility: "" };
const emptyProject: ProjectDraft = { title: "", industry: "", category: "", year: "", featured: false, views: "", summary: "", testimonial: "", challenge: "", metrics: "", research: "", personas: "" };

function splitList(text: string): string[] {
  return text.split(",").map((s) => s.trim()).filter(Boolean);
}

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<"products" | "projects">("products");
  const [products, setProducts] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [productDraft, setProductDraft] = useState<ProductDraft | null>(null);
  const [projectDraft, setProjectDraft] = useState<ProjectDraft | null>(null);

  const load = useCallback(async () => {
    const supabase = getBrowserSupabase();
    const [p, j] = await Promise.all([
      supabase.from("products").select("*").order("sort_order"),
      supabase.from("projects").select("*").order("sort_order"),
    ]);
    setProducts(p.data ?? []);
    setProjects(j.data ?? []);
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem(PASSWORD_KEY);
    if (stored) {
      setPassword(stored);
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) load();
  }, [authed, load]);

  function authHeaders() {
    return { "Content-Type": "application/json", "x-admin-password": password };
  }

  async function unlock(event: FormEvent) {
    event.preventDefault();
    const res = await fetch("/api/admin/verify", { headers: { "x-admin-password": password } });
    if (res.ok) {
      sessionStorage.setItem(PASSWORD_KEY, password);
      setAuthed(true);
    } else {
      setMessage("Incorrect password.");
    }
  }

  async function saveProduct(event: FormEvent) {
    event.preventDefault();
    if (!productDraft) return;
    const payload = {
      id: productDraft.id,
      title: productDraft.title,
      category: productDraft.category,
      price: productDraft.price,
      rating: Number(productDraft.rating || 0),
      reviews: Number(productDraft.reviews || 0),
      version: productDraft.version,
      checkout_url: productDraft.checkoutUrl,
      summary: productDraft.summary,
      files: splitList(productDraft.files),
      compatibility: splitList(productDraft.compatibility),
    };
    const res = await fetch("/api/admin/products", {
      method: productDraft.id ? "PUT" : "POST",
      headers: authHeaders(),
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setMessage("Product saved.");
      setProductDraft(null);
      load();
    } else {
      const json = await res.json().catch(() => ({}));
      setMessage(json.error || "Save failed.");
    }
  }

  async function deleteProduct(id: string) {
    if (!confirm("Delete this product?")) return;
    const res = await fetch("/api/admin/products", {
      method: "DELETE",
      headers: authHeaders(),
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage("Product deleted.");
      load();
    } else {
      setMessage("Delete failed.");
    }
  }

  async function saveProject(event: FormEvent) {
    event.preventDefault();
    if (!projectDraft) return;
    const payload = {
      id: projectDraft.id,
      title: projectDraft.title,
      industry: projectDraft.industry,
      category: projectDraft.category,
      year: projectDraft.year,
      featured: projectDraft.featured,
      views: Number(projectDraft.views || 0),
      summary: projectDraft.summary,
      testimonial: projectDraft.testimonial,
      challenge: projectDraft.challenge,
      metrics: splitList(projectDraft.metrics),
      research: splitList(projectDraft.research),
      personas: splitList(projectDraft.personas),
    };
    const res = await fetch("/api/admin/projects", {
      method: projectDraft.id ? "PUT" : "POST",
      headers: authHeaders(),
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setMessage("Project saved.");
      setProjectDraft(null);
      load();
    } else {
      const json = await res.json().catch(() => ({}));
      setMessage(json.error || "Save failed.");
    }
  }

  async function deleteProject(id: string) {
    if (!confirm("Delete this project?")) return;
    const res = await fetch("/api/admin/projects", {
      method: "DELETE",
      headers: authHeaders(),
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage("Project deleted.");
      load();
    } else {
      setMessage("Delete failed.");
    }
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-sm px-4 py-24">
        <h1 className="text-2xl font-semibold text-ink">Admin</h1>
        <form onSubmit={unlock} className="mt-6 grid gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="min-h-11 rounded-2xl border border-hairline bg-white px-3 text-sm text-ink"
          />
          <button className="min-h-11 rounded-2xl bg-graphite px-5 text-sm font-semibold text-canvas">Unlock</button>
          {message && <p className="text-sm text-mist">{message}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-ink">Admin</h1>
        <div className="flex gap-2">
          <button onClick={() => setTab("products")} className={tab === "products" ? "rounded-2xl bg-graphite px-4 py-2 text-sm font-semibold text-canvas" : "rounded-2xl border border-hairline px-4 py-2 text-sm text-ink"}>Products</button>
          <button onClick={() => setTab("projects")} className={tab === "projects" ? "rounded-2xl bg-graphite px-4 py-2 text-sm font-semibold text-canvas" : "rounded-2xl border border-hairline px-4 py-2 text-sm text-ink"}>Projects</button>
        </div>
      </div>

      {message && <p className="mt-4 rounded-2xl border border-hairline bg-black/5 px-4 py-2 text-sm text-ink">{message}</p>}

      {tab === "products" ? (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Products ({products.length})</h2>
            <button onClick={() => setProductDraft({ ...emptyProduct })} className="rounded-2xl bg-graphite px-4 py-2 text-sm font-semibold text-canvas">Add product</button>
          </div>

          {productDraft && <ProductForm draft={productDraft} setDraft={setProductDraft} onSave={saveProduct} onCancel={() => setProductDraft(null)} />}

          <ul className="mt-4 grid gap-2">
            {products.map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded-2xl border border-hairline bg-white px-4 py-3">
                <div>
                  <p className="font-medium text-ink">{p.title}</p>
                  <p className="text-xs text-mist">{p.category} · {p.price}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setProductDraft({ id: p.id, title: p.title, category: p.category, price: p.price, rating: String(p.rating ?? ""), reviews: String(p.reviews ?? ""), version: p.version ?? "", checkoutUrl: p.checkout_url ?? "", summary: p.summary ?? "", files: (p.files ?? []).join(", "), compatibility: (p.compatibility ?? []).join(", ") })} className="rounded-2xl border border-hairline px-3 py-1.5 text-xs text-ink">Edit</button>
                  <button onClick={() => deleteProduct(p.id)} className="rounded-2xl border border-hairline px-3 py-1.5 text-xs text-red-600">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Projects ({projects.length})</h2>
            <button onClick={() => setProjectDraft({ ...emptyProject })} className="rounded-2xl bg-graphite px-4 py-2 text-sm font-semibold text-canvas">Add project</button>
          </div>

          {projectDraft && <ProjectForm draft={projectDraft} setDraft={setProjectDraft} onSave={saveProject} onCancel={() => setProjectDraft(null)} />}

          <ul className="mt-4 grid gap-2">
            {projects.map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded-2xl border border-hairline bg-white px-4 py-3">
                <div>
                  <p className="font-medium text-ink">{p.title} {p.featured ? "★" : ""}</p>
                  <p className="text-xs text-mist">{p.category} · {p.industry} · {p.year}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setProjectDraft({ id: p.id, title: p.title, industry: p.industry, category: p.category, year: p.year, featured: !!p.featured, views: String(p.views ?? ""), summary: p.summary ?? "", testimonial: p.testimonial ?? "", challenge: p.challenge ?? "", metrics: (p.metrics ?? []).join(", "), research: (p.research ?? []).join(", "), personas: (p.personas ?? []).join(", ") })} className="rounded-2xl border border-hairline px-3 py-1.5 text-xs text-ink">Edit</button>
                  <button onClick={() => deleteProject(p.id)} className="rounded-2xl border border-hairline px-3 py-1.5 text-xs text-red-600">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function ProductForm({ draft, setDraft, onSave, onCancel }: { draft: ProductDraft; setDraft: (d: ProductDraft) => void; onSave: (e: FormEvent) => void; onCancel: () => void }) {
  const set = (key: keyof ProductDraft, value: string) => setDraft({ ...draft, [key]: value });
  return (
    <form onSubmit={onSave} className="mt-4 grid gap-3 rounded-2xl border border-hairline bg-white p-4 md:grid-cols-2">
      <Field label="Title" value={draft.title} onChange={(v) => set("title", v)} />
      <Field label="Category" value={draft.category} onChange={(v) => set("category", v)} />
      <Field label="Price" value={draft.price} onChange={(v) => set("price", v)} />
      <Field label="Version" value={draft.version} onChange={(v) => set("version", v)} />
      <Field label="Rating" value={draft.rating} onChange={(v) => set("rating", v)} />
      <Field label="Reviews" value={draft.reviews} onChange={(v) => set("reviews", v)} />
      <Field label="Checkout URL" value={draft.checkoutUrl} onChange={(v) => set("checkoutUrl", v)} />
      <Field label="Summary" value={draft.summary} onChange={(v) => set("summary", v)} />
      <Field label="Files (comma separated)" value={draft.files} onChange={(v) => set("files", v)} />
      <Field label="Compatibility (comma separated)" value={draft.compatibility} onChange={(v) => set("compatibility", v)} />
      <div className="md:col-span-2 flex gap-2">
        <button className="rounded-2xl bg-graphite px-4 py-2 text-sm font-semibold text-canvas">Save</button>
        <button type="button" onClick={onCancel} className="rounded-2xl border border-hairline px-4 py-2 text-sm text-ink">Cancel</button>
      </div>
    </form>
  );
}

function ProjectForm({ draft, setDraft, onSave, onCancel }: { draft: ProjectDraft; setDraft: (d: ProjectDraft) => void; onSave: (e: FormEvent) => void; onCancel: () => void }) {
  const set = (key: keyof ProjectDraft, value: string | boolean) => setDraft({ ...draft, [key]: value });
  return (
    <form onSubmit={onSave} className="mt-4 grid gap-3 rounded-2xl border border-hairline bg-white p-4 md:grid-cols-2">
      <Field label="Title" value={draft.title} onChange={(v) => set("title", v)} />
      <Field label="Category" value={draft.category} onChange={(v) => set("category", v)} />
      <Field label="Industry" value={draft.industry} onChange={(v) => set("industry", v)} />
      <Field label="Year" value={draft.year} onChange={(v) => set("year", v)} />
      <Field label="Views" value={draft.views} onChange={(v) => set("views", v)} />
      <label className="flex items-center gap-2 text-sm font-medium text-ink md:col-span-2">
        <input type="checkbox" checked={draft.featured} onChange={(e) => set("featured", e.target.checked)} />
        Featured (show on homepage)
      </label>
      <Field label="Summary" value={draft.summary} onChange={(v) => set("summary", v)} />
      <Field label="Testimonial" value={draft.testimonial} onChange={(v) => set("testimonial", v)} />
      <Field label="Challenge" value={draft.challenge} onChange={(v) => set("challenge", v)} />
      <Field label="Metrics (comma separated)" value={draft.metrics} onChange={(v) => set("metrics", v)} />
      <Field label="Research (comma separated)" value={draft.research} onChange={(v) => set("research", v)} />
      <Field label="Personas (comma separated)" value={draft.personas} onChange={(v) => set("personas", v)} />
      <div className="md:col-span-2 flex gap-2">
        <button className="rounded-2xl bg-graphite px-4 py-2 text-sm font-semibold text-canvas">Save</button>
        <button type="button" onClick={onCancel} className="rounded-2xl border border-hairline px-4 py-2 text-sm text-ink">Cancel</button>
      </div>
    </form>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="grid gap-1 text-sm font-medium text-ink">
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} className="min-h-10 rounded-2xl border border-hairline bg-white px-3 text-sm text-ink" />
    </label>
  );
}
