"use client";

import { ShieldCheck, CloudCog, Ban, ArrowRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

export function Fallback({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="Fallback Strategy">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          When Local Can&apos;t Handle It —
          <br />
          <span className="text-[var(--color-accent)]">A Ranked Fallback</span>
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-6">
        {/* Tier 1 */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/50 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-transparent p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Tier 1 · Preferred
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white md:text-3xl">
                  Tiered Local Models
                </h3>
                <p className="mt-2 text-lg font-semibold text-white/90 md:text-xl">
                  Stay local. Always first choice.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
                  A small fast model handles roughly 90% of queries. A larger
                  on-prem model handles the hard ones. Both run on the same
                  appliance. Nothing leaves the building.
                </p>
                <p className="mt-3 text-sm text-white/60 md:text-base">
                  Proven open-weight models from US-based labs, enterprise-grade.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tier 2 */}
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[var(--color-bg-elev)] p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white/80">
                  <CloudCog className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                  Tier 2 · Acceptable
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white md:text-3xl">
                  Private US-Region Cloud Burst with Pseudonymization
                </h3>
                <p className="mt-2 text-lg font-semibold text-white/90 md:text-xl">
                  Controlled overflow. Contractually bounded.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
                  When local capacity is exceeded, burst to a private cloud
                  endpoint (Azure OpenAI in a US region with a
                  zero-retention addendum, AWS Bedrock with customer-managed
                  KMS) under a{" "}
                  <span className="font-semibold text-white">
                    zero-retention addendum
                  </span>
                  . Before any payload leaves, the middleware pseudonymizes.
                </p>

                {/* Pseudonymization flow */}
                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-4">
                  <FlowCard
                    tag="SAP record"
                    body={
                      <>
                        <div className="font-semibold text-white">John Doe</div>
                        <div>DOB 1984-03-12</div>
                        <div>salary $72,000</div>
                        <div>Austin office · region US-South</div>
                      </>
                    }
                  />
                  <FlowArrow label="Strip + generalize" />
                  <FlowCard
                    tag="Sent to cloud"
                    body={
                      <>
                        <div className="font-semibold text-white">
                          Subject_A17F
                        </div>
                        <div>age band 40–45</div>
                        <div>salary band $70–75k</div>
                        <div>region US-South</div>
                      </>
                    }
                    accent
                  />
                  <FlowCard
                    tag="Local re-map"
                    body={
                      <>
                        <div className="font-semibold text-white">
                          John Doe
                        </div>
                        <div>tax_owed: $18,400</div>
                      </>
                    }
                  />
                </div>
                <div className="mt-4 text-sm text-white/50 md:text-[15px]">
                  Raw record in SAP &rarr; middleware strips direct identifiers
                  and generalizes quasi-identifiers (age band, salary band)
                  &rarr; replaces names with deterministic tokens &rarr; only
                  the minimum numeric context is sent &rarr; cloud returns
                  result &rarr; middleware re-attaches identifiers locally.
                </div>
                <p className="mt-4 text-xs text-white/40 md:text-sm">
                  US equivalents (CCPA/CPRA) treat re-identifiable data
                  similarly, and pseudonymized data remains regulated under
                  GDPR Art. 4(5) for multinationals. Deterministic tokens do
                  not exempt you from either regime. User opt-in per query.
                  Full audit log.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tier 3 */}
        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-danger)]/60 bg-[var(--color-danger)]/5 p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #ff5d5d 0 2px, transparent 2px 14px)",
              }}
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-danger)]/15 text-[var(--color-danger)]">
                  <Ban className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-danger)]">
                  Tier 3 · Never
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white line-through decoration-[var(--color-danger)]/70 decoration-2 md:text-3xl">
                  Raw Data to Public AI APIs
                </h3>
                <p className="mt-2 text-lg font-semibold text-[var(--color-danger)] md:text-xl">
                  Off the table.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                  Direct customer data never goes to public consumer AI
                  endpoints. No exceptions. This is what the rest of the
                  architecture exists to prevent.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function FlowCard({
  tag,
  body,
  accent = false,
}: {
  tag: string;
  body: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-sm leading-relaxed ${
        accent
          ? "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/5 text-white/90"
          : "border-white/10 bg-black/30 text-white/80"
      }`}
    >
      <div
        className={`mb-2 text-[10px] font-bold uppercase tracking-[0.2em] ${
          accent ? "text-[var(--color-accent)]" : "text-white/50"
        }`}
      >
        {tag}
      </div>
      {body}
    </div>
  );
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center text-xs text-white/50 md:h-full">
      <ArrowRight className="h-5 w-5 text-[var(--color-accent)]" />
      <span className="uppercase tracking-[0.15em]">{label}</span>
    </div>
  );
}
