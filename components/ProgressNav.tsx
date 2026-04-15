"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function ProgressNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActive(s.id);
            }
          });
        },
        { threshold: [0.5] },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center justify-end gap-3"
          >
            <span
              className={`pointer-events-none whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-xs font-medium uppercase tracking-wide text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                isActive ? "opacity-100" : ""
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-[var(--color-accent)]"
                  : "w-2 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
