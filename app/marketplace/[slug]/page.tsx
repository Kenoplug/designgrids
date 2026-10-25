import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { ProductCard } from "@/components/cards";
import { Section } from "@/components/section";
import { getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  return {
    title: product?.title ?? "Product",
    description: product?.summary
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="min-h-[30rem] rounded-xl bg-neutral-100 p-6">
          <div className="grid h-full gap-4 rounded-xl border border-black/20 bg-neutral-50/26 p-5 backdrop-blur-md">
            <div className="rounded-lg bg-black/18 p-5">
              <div className="grid h-64 grid-cols-3 gap-3">
                <span className="col-span-2 rounded bg-black/35" />
                <span className="rounded bg-black/20" />
                <span className="rounded bg-black/20" />
                <span className="col-span-2 rounded bg-black/30" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">{product.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-6xl">{product.title}</h1>
          <p className="mt-5 text-lg leading-8 text-mist/72">{product.summary}</p>
          <p className="mt-6 text-3xl font-semibold">{product.price}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={product.checkoutUrl || "/contact"}>Buy Now</Button>
            <Button href="/contact" variant="secondary">Ask a Question</Button>
          </div>
          <div className="mt-8 grid gap-3 rounded-lg border border-black/10 bg-black/[0.045] p-5 text-sm text-mist/68">
            <span>Rating: {product.rating} from {product.reviews} reviews</span>
            <span>Version: {product.version}</span>
            <span>Instant download, email delivery, dashboard access, license key, and invoice support.</span>
          </div>
        </div>
      </section>
      <Section title="Product details">
        <div className="grid gap-5 lg:grid-cols-3">
          <DetailList title="Included files" items={product.files} />
          <DetailList title="Compatibility" items={product.compatibility} />
          <DetailList title="FAQ" items={["Commercial use included", "Free lifetime fixes", "Works with Figma variables"]} />
        </div>
      </Section>
      <Section title="Reviews and related products">
        <div className="grid gap-5 lg:grid-cols-3">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </Section>
    </>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-black/10 bg-black/[0.045] p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-mist/68">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
