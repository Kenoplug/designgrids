import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { products, projects, resources, services } from "@/lib/content";

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <article className="rounded-lg border border-black/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-black/30">
      <Icon className="h-6 w-6 text-ink" />
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-mist">{service.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.deliverables.slice(0, 3).map((item) => (
          <span key={item} className="rounded-md border border-black/10 px-2.5 py-1 text-xs text-mist">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href={`/projects/${project.slug}`} className="focus-ring group block rounded-lg">
      <article className="overflow-hidden rounded-lg border border-black/10 bg-white transition duration-200 group-hover:-translate-y-1 group-hover:border-black/30">
        <div className="relative h-56 border-b border-black/10 bg-neutral-100">
          <div className="absolute inset-5 rounded-lg border border-black/10 bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-black/5 px-3 py-1 text-xs font-medium text-ink">{project.category}</span>
              <ArrowUpRight className="h-5 w-5 text-ink" />
            </div>
            <div className="mt-14 grid gap-2">
              <div className="h-3 w-2/3 rounded bg-black/20" />
              <div className="h-3 w-1/2 rounded bg-black/10" />
              <div className="mt-3 h-16 rounded-md bg-black/5" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-mist">{project.industry} / {project.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-mist">{project.summary}</p>
        </div>
      </article>
    </Link>
  );
}

export function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <Link href={`/marketplace/${product.slug}`} className="focus-ring group block rounded-lg">
      <article className="overflow-hidden rounded-lg border border-black/10 bg-white transition duration-200 group-hover:-translate-y-1 group-hover:border-black/30">
        <div className="h-48 border-b border-black/10 bg-neutral-100 p-5">
          <div className="h-full rounded-lg border border-black/10 bg-white p-4">
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
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.16em] text-mist">{product.category}</p>
            <span className="font-semibold text-ink">{product.price}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-ink">{product.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-mist">{product.summary}</p>
          <p className="mt-4 flex items-center gap-1 text-sm text-mist">
            <Star className="h-4 w-4 fill-ink text-ink" /> {product.rating} ({product.reviews})
          </p>
        </div>
      </article>
    </Link>
  );
}

export function ResourceCard({ resource }: { resource: (typeof resources)[number] }) {
  return (
    <article className="rounded-lg border border-black/10 bg-white p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-black/5 px-2.5 py-1 font-medium text-ink">{resource.category}</span>
        <span className="text-mist">{resource.minutes} min read</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{resource.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-mist">{resource.summary}</p>
      <Link href="/resources" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-mist">
        Read guide <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
