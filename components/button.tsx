import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
};

export function Button({ href, children, variant = "primary", icon, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200",
        variant === "primary" && "bg-ink text-white hover:-translate-y-0.5 hover:bg-neutral-800",
        variant === "secondary" && "border border-black/15 bg-white text-ink hover:-translate-y-0.5 hover:bg-black/5",
        variant === "ghost" && "text-mist hover:text-ink",
        className
      )}
    >
      {icon}
      {children}
      {variant !== "ghost" ? <ArrowRight className="h-4 w-4" /> : null}
    </Link>
  );
}
