"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">DesignGrids</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-mist transition hover:bg-black/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/client-portal" className="focus-ring rounded-md px-3 py-2 text-sm text-mist hover:text-ink">
            Client Portal
          </Link>
          <Button href="/contact" className="min-h-10 px-4 py-2">Hire Us</Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-black/10 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
        </button>
      </div>
      <div className={cn("border-t border-black/10 px-4 pb-5 pt-3 lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-1">
          {[...navItems, { label: "Client Portal", href: "/client-portal" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-3 text-sm text-mist hover:bg-black/5 hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-2 w-full">Hire Us</Button>
        </nav>
      </div>
    </header>
  );
}
