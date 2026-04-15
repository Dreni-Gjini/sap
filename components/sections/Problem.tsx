"use client";

import { CloudOff, Lock, AlertTriangle } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const cards = [
  {
    Icon: CloudOff,
    title: "Cloud AI = data leaves the perimeter.",
    body: "Every prompt to a hosted LLM is an export of business data — invoices, contracts, employee records — to a third-party processor. For regulated industries this is a non-starter.",
  },
  {
    Icon: Lock,
    title: "Joule = vendor lock-in, forever.",
    body: "Subscription pricing, SAP-curated models, no ECC support, roadmap dictated by Walldorf. You rent capability and lose negotiation leverage on every renewal.",
  },
  {
    Icon: AlertTriangle,
    title: "Direct DB access = hallucinations on truth.",
    body: "Pointing an LLM straight at SAP tables breaks RBAC, leaks columns, and lets the model fabricate joins. Your source of truth becomes a guessing surface.",
  },
];

export function Problem({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="The Problem">
      <Reveal>
        <h2 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Three reasons enterprises stall on SAP + AI.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-bg-elev)] p-8 transition-colors duration-300 hover:border-[var(--color-accent)]/50">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
                {body}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
