import Link from "next/link";
import { Mail, MapPin, Sparkles } from "lucide-react";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-graphite text-canvas">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">DesignGrids Studio</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-mist">
            A product design studio, portfolio showcase, digital marketplace, and design education platform built for ambitious teams.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">Navigate</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-mist hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-mist">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-ink" /> hello@designgrids.studio</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-ink" /> Lagos, London, Remote</span>
          </div>
        </div>
      </div>
      <div className="border-t border-hairline px-4 py-5 text-center text-xs text-mist">
        &copy; {new Date().getFullYear()} DesignGrids Studio. Built for product teams who care about the details.
      </div>
    </footer>
  );
}
