"use client";

import {
  ClipboardCheck,
  HeartPulse,
  Scale,
  ShieldCheck,
  UserCheck,
  Landmark,
} from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const items = [
  {
    Icon: ClipboardCheck,
    name: "SOC 2 Type II",
    body: "Audit logging, access controls, and change management baked in.",
  },
  {
    Icon: HeartPulse,
    name: "HIPAA",
    body: "PHI stays on-prem; no ePHI leaves the perimeter without BAA-backed controls.",
  },
  {
    Icon: UserCheck,
    name: "CCPA / CPRA",
    body: "Consumer data never sold or shared with AI vendors. Re-identifiable data is treated as personal data end-to-end.",
  },
  {
    Icon: Landmark,
    name: "FedRAMP-aligned",
    tag: "Ready for federal and state deployments",
    body: "Architecture patterns compatible with FedRAMP Moderate boundaries.",
  },
  {
    Icon: ShieldCheck,
    name: "ISO 27001",
    body: "Information security controls mapped to ISMS requirements.",
  },
  {
    Icon: Scale,
    name: "GDPR",
    body: "For US multinationals: data minimization, purpose limitation, and right-to-erasure enforced at the vector layer.",
  },
];

export function Compliance({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="Compliance">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Compliance-Ready
          <br />
          <span className="text-[var(--color-accent)]">by Design.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, name, body, tag }, i) => (
          <Reveal key={name} delay={i * 0.06}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-[var(--color-bg-elev)] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {name}
                  </h3>
                  {tag ? (
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {tag}
                    </div>
                  ) : null}
                </div>
              </div>
              <p className="text-base leading-relaxed text-[var(--color-fg-muted)]">
                {body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-4xl text-2xl font-bold leading-snug text-white md:text-3xl">
          The customer&apos;s existing SAP audit posture extends to the AI
          layer —{" "}
          <span className="text-[var(--color-accent)]">
            not the other way around.
          </span>
        </p>
      </Reveal>
    </SectionShell>
  );
}
