"use client";

import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";
import { ArrowRight, ShieldCheck, ScrollText } from "lucide-react";

const skills = [
  {
    name: "get_open_invoices",
    args: "(customer_id: str, since: date) -> Invoice[]",
    desc: "Read-only. Returns only invoices the caller is authorized to see.",
  },
  {
    name: "check_stock",
    args: "(material: str, plant: str) -> StockLevel",
    desc: "Live MM lookup via SAP RFC. Result cached for 30s.",
  },
  {
    name: "create_purchase_req_draft",
    args: "(items: LineItem[]) -> DraftId",
    desc: "Writes a draft only. Human approval required to release.",
  },
  {
    name: "find_similar_contracts",
    args: "(text: str, top_k: int) -> Contract[]",
    desc: "Vector search over indexed contract corpus. Never hits SAP live.",
  },
  {
    name: "lookup_employee",
    args: "(query: str) -> Employee",
    desc: "HR data with PII redaction applied per caller role.",
  },
  {
    name: "summarize_order_history",
    args: "(customer_id: str, window: str) -> Summary",
    desc: "Aggregated read. Refuses if caller lacks SD authorization object.",
  },
];

export function Skills({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="The Skills Layer">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          The LLM doesn&apos;t query SAP.
          <br />
          <span className="text-[var(--color-accent)]">
            It calls typed skills.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-base text-[var(--color-fg-muted)] md:text-lg">
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-white">
            LLM request
          </span>
          <ArrowRight className="h-5 w-5 text-[var(--color-accent)]" />
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-white">
            RBAC check
          </span>
          <ArrowRight className="h-5 w-5 text-[var(--color-accent)]" />
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-white">
            SAP API call
          </span>
          <ArrowRight className="h-5 w-5 text-[var(--color-accent)]" />
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-white">
            Typed result
          </span>
          <ArrowRight className="h-5 w-5 text-[var(--color-accent)]" />
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-white">
            Audit log
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-white/10 bg-[var(--color-bg-elev)] p-6 transition-colors hover:border-[var(--color-accent)]/50">
              <div className="mb-3 flex items-center gap-2 text-[var(--color-accent)]">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Skill
                </span>
              </div>
              <code className="block font-mono text-lg font-bold text-white md:text-xl">
                {s.name}
              </code>
              <code className="mt-1 block font-mono text-xs text-[var(--color-accent)] md:text-sm">
                {s.args}
              </code>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)]">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-base text-[var(--color-fg-muted)] md:text-lg">
          <ScrollText className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
          <span>
            Every skill invocation is logged with caller, arguments, result hash, and
            timestamp. The model has no I/O outside this registry.
          </span>
        </div>
      </Reveal>
    </SectionShell>
  );
}
