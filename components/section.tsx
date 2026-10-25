import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, copy, children, className }: SectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24", className)}>
      {(eyebrow || title || copy) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-mist">{eyebrow}</p> : null}
          {title ? <h2 className="text-3xl font-semibold tracking-normal text-ink sm:text-4xl">{title}</h2> : null}
          {copy ? <p className="mt-4 text-base leading-7 text-mist sm:text-lg">{copy}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
