import type { ReactNode } from "react";

export function SectionShell({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`snap-section px-6 py-20 md:px-16 lg:px-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {eyebrow ? (
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            {eyebrow}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
