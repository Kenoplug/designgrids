"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-2xl">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-graphite text-canvas">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">DesignGrids</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-2xl px-3 py-2 text-sm transition hover:bg-black/5 hover:text-ink",
                isActive(item.href) ? "bg-black/5 text-ink" : "text-mist"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/client-portal"
            className={cn(
              "focus-ring rounded-2xl px-3 py-2 text-sm hover:text-ink",
              isActive("/client-portal") ? "text-ink" : "text-mist"
            )}
          >
            Client Portal
          </Link>
          <Button href="/contact" className="min-h-10 px-4 py-2">Hire Us</Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="focus-ring grid h-10 w-10 place-items-center rounded-2xl border border-hairline bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
        </button>
      </div>
      <div className={cn("border-t border-hairline px-4 pb-5 pt-3 lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-1">
          {[...navItems, { label: "Client Portal", href: "/client-portal" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-2xl px-3 py-3 text-sm hover:bg-black/5 hover:text-ink",
                isActive(item.href) ? "bg-black/5 text-ink" : "text-mist"
              )}
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
