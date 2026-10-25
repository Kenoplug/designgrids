"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/components/filters";
import { ProjectCard, ProductCard, ResourceCard } from "@/components/cards";
import { filterAndSort } from "@/lib/utils";
import { projects, products, resources } from "@/lib/content";

type Variant = "projects" | "products" | "resources";

export function FilterableList({ variant }: { variant: Variant }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [sortBy, setSortBy] = useState("Newest");

  const categories = useMemo(() => {
    const list = variant === "projects" ? projects : variant === "products" ? products : resources;
    return Array.from(new Set(list.map((item) => item.category)));
  }, [variant]);

  const filtered = useMemo(() => {
    if (variant === "projects") return filterAndSort(projects, query, category, sortBy, true);
    if (variant === "products") return filterAndSort(products, query, category, sortBy, true);
    return filterAndSort(resources, query, category, sortBy, false);
  }, [variant, query, category, sortBy]);

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
          if (variant === "projects") return <ProjectCard key={item.slug} project={item as (typeof projects)[number]} />;
          if (variant === "products") return <ProductCard key={item.slug} product={item as (typeof products)[number]} />;
          return <ResourceCard key={item.slug} resource={item as (typeof resources)[number]} />;
        })}
        {filtered.length === 0 && <p className="col-span-full py-10 text-center text-mist">No results match your filters.</p>}
      </div>
    </>
  );
}
