import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { resources, services } from "@/lib/content";
import type { Project, Product } from "@/lib/data";

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <article className="rounded-3xl bg-card p-6 transition duration-200 hover:-translate-y-1">
      <Icon className="h-6 w-6 text-ink" />
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-pencil">{service.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.deliverables.slice(0, 3).map((item) => (
          <span key={item} className="rounded-full border border-hairline px-3 py-1 text-xs text-pencil">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="focus-ring group block rounded-3xl">
      <article className="overflow-hidden rounded-3xl bg-card transition duration-200 group-hover:-translate-y-1">
        <div className="relative h-56 border-b border-hairline bg-white/50">
          {project.images[0] ? (
            <img src={project.images[0]} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-5 rounded-2xl border border-hairline bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-ink">{project.category}</span>
                <ArrowUpRight className="h-5 w-5 text-ink" />
              </div>
              <div className="mt-14 grid gap-2">
                <div className="h-3 w-2/3 rounded bg-black/15" />
                <div className="h-3 w-1/2 rounded bg-black/10" />
                <div className="mt-3 h-16 rounded-2xl bg-black/5" />
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-faint">{project.industry} / {project.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-pencil">{project.summary}</p>
        </div>
      </article>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/marketplace/${product.slug}`} className="focus-ring group block rounded-3xl">
      <article className="overflow-hidden rounded-3xl bg-card transition duration-200 group-hover:-translate-y-1">
        <div className="h-48 border-b border-hairline bg-white/50">
          {product.images[0] ? (
            <img src={product.images[0]} alt={product.title} className="h-48 w-full object-cover" />
          ) : (
            <div className="h-full p-5">
              <div className="h-full rounded-2xl border border-hairline bg-white p-4">
                <div className="grid h-full grid-cols-3 gap-2">
                  <div className="col-span-2 rounded bg-black/10" />
                  <div className="grid gap-2">
                    <span className="rounded bg-black/15" />
                    <span className="rounded bg-black/5" />
                    <span className="rounded bg-black/10" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.16em] text-faint">{product.category}</p>
            <span className="font-semibold text-ink">{product.price}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-ink">{product.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-pencil">{product.summary}</p>
          <p className="mt-4 flex items-center gap-1 text-sm text-pencil">
            <Star className="h-4 w-4 fill-ink text-ink" /> {product.rating} ({product.reviews})
          </p>
        </div>
      </article>
    </Link>
  );
}

export function ResourceCard({ resource }: { resource: (typeof resources)[number] }) {
  return (
    <article className="rounded-3xl bg-card p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-black/5 px-3 py-1 font-medium text-ink">{resource.category}</span>
        <span className="text-faint">{resource.minutes} min read</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{resource.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-pencil">{resource.summary}</p>
      <Link href="/resources" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-pencil">
        Read guide <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
