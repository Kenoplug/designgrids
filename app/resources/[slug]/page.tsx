import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, type ArticleSection } from "@/lib/articles";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return {
    title: article?.title ?? "Article",
    description: article?.summary
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
      <p className="text-sm font-medium text-faint">{article.category} · {article.tag} · {article.minutes} min read</p>
      <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">{article.title}</h1>
      <p className="mt-5 text-lg leading-8 text-pencil">{article.summary}</p>
      <div className="mt-10 space-y-5">
        {article.sections.map((section, index) => (
          <SectionBlock key={index} section={section} />
        ))}
      </div>
    </article>
  );
}

function SectionBlock({ section }: { section: ArticleSection }) {
  if (section.type === "h2") {
    return <h2 className="pt-8 text-2xl font-semibold tracking-tight text-ink">{section.text}</h2>;
  }
  if (section.type === "h3") {
    return <h3 className="pt-2 text-xl font-semibold text-ink">{section.text}</h3>;
  }
  if (section.type === "p") {
    return <p className="text-base leading-7 text-pencil">{section.text}</p>;
  }
  return (
    <ul className="space-y-2 pl-6 text-base leading-7 text-pencil">
      {section.items.map((item) => (
        <li key={item} className="list-disc">{item}</li>
      ))}
    </ul>
  );
}
