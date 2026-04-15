"use client";

import { Landmark, Cpu, Workflow } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const points = [
  {
    Icon: Landmark,
    title: "Data sovereignty, US-first.",
    body: "Defense, pharma, banking, federal agencies, state governments, and regulated US enterprises — every RFP now demands data residency and zero third-party processing.",
  },
  {
    Icon: Cpu,
    title: "Open models reached the bar.",
    body: "Proven open-weight models from US-based labs, enterprise-grade — quantized, they match frontier-class quality on enterprise tasks.",
  },
  {
    Icon: Workflow,
    title: "CDC tooling is mature.",
    body: "SLT, ODP, Event Mesh and Debezium-style pipelines are production-proven for SAP. No more nightly batches.",
  },
];

export function WhyNow({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="Why Now">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          The three forces that make this
          <br />
          <span className="text-[var(--color-accent)]">a 2026 product, not a 2030 one.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {points.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-[var(--color-bg-elev)] p-8">
              <Icon className="h-10 w-10 text-[var(--color-accent)]" />
              <h3 className="mt-6 text-2xl font-bold md:text-3xl">{title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
                {body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
