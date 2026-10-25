"use client";

import { Search } from "lucide-react";

type FilterBarProps = {
  categories: string[];
  sort?: boolean;
  query: string;
  onQuery: (value: string) => void;
  category: string;
  onCategory: (value: string) => void;
  sortBy: string;
  onSortBy: (value: string) => void;
};

export function FilterBar({ categories, sort = true, query, onQuery, category, onCategory, sortBy, onSortBy }: FilterBarProps) {
  return (
    <div className="mb-8 grid gap-3 rounded-lg border border-black/10 bg-white p-3 md:grid-cols-[1fr_auto_auto]">
      <label className="flex min-h-11 items-center gap-2 rounded-md border border-black/10 bg-white px-3">
        <Search className="h-4 w-4 text-mist" />
        <input
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-neutral-400"
          placeholder="Search by title, category, or industry"
        />
      </label>
      <select value={category} onChange={(event) => onCategory(event.target.value)} className="focus-ring min-h-11 rounded-md border border-black/10 bg-white px-3 text-sm text-ink">
        <option>All categories</option>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      {sort ? (
        <select value={sortBy} onChange={(event) => onSortBy(event.target.value)} className="focus-ring min-h-11 rounded-md border border-black/10 bg-white px-3 text-sm text-ink">
          <option>Newest</option>
          <option>Most Viewed</option>
          <option>Featured</option>
        </select>
      ) : null}
    </div>
  );
}
