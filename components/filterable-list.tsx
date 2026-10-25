"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/components/filters";
import { ProjectCard, ProductCard, ResourceCard } from "@/components/cards";
import { filterAndSort } from "@/lib/utils";

type Variant = "projects" | "products" | "resources";

export function FilterableList({ variant, items }: { variant: Variant; items: any[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [sortBy, setSortBy] = useState("Newest");

  const categories = useMemo(() => Array.from(new Set(items.map((item) => item.category))), [items]);

  const filtered = useMemo(
    () => filterAndSort(items, query, category, sortBy, variant !== "resources"),
    [items, query, category, sortBy, variant]
  );

  const grid = variant === "projects" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";

  return (
    <>
      <FilterBar
        categories={categories}
        sort={variant !== "resources"}
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={setCategory}
        sortBy={sortBy}
        onSortBy={setSortBy}
      />
      <div className={`grid gap-5 ${grid}`}>
        {filtered.map((item) => {
          if (variant === "projects") return <ProjectCard key={item.slug} project={item} />;
          if (variant === "products") return <ProductCard key={item.slug} product={item} />;
          return <ResourceCard key={item.slug} resource={item} />;
        })}
        {filtered.length === 0 && <p className="col-span-full py-10 text-center text-mist">No results match your filters.</p>}
      </div>
    </>
  );
}
