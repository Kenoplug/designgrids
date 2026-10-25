export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Filterable = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  industry?: string;
  year?: string;
  views?: number;
  featured?: boolean;
};

export function filterAndSort<T extends Filterable>(
  items: T[],
  query: string,
  category: string,
  sortBy: string,
  sort: boolean
): T[] {
  const q = query.trim().toLowerCase();
  let list = items.filter((item) => {
    const hay = [item.title, item.summary, item.category, item.industry, item.year]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const okQuery = !q || hay.includes(q);
    const okCategory = category === "All categories" || item.category === category;
    return okQuery && okCategory;
  });

  if (sort) {
    list = [...list].sort((a, b) => {
      if (sortBy === "Most Viewed") return (b.views ?? 0) - (a.views ?? 0);
      if (sortBy === "Featured") return Number(b.featured ?? false) - Number(a.featured ?? false);
      return (b.year ?? "").localeCompare(a.year ?? "");
    });
  }

  return list;
}
