"use client";

import { Check, X } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const rows: {
  label: string;
  ours: string;
  joule: string;
}[] = [
  {
    label: "Data residency",
    ours: "Stays on your hardware, your network.",
    joule: "Routed to SAP BTP cloud regions.",
  },
  {
    label: "Model choice",
    ours: "Any proven open-weight model from US-based labs, plus your fine-tunes.",
    joule: "SAP-curated models only. No swap.",
  },
  {
    label: "Cost model",
    ours: "One-time hardware. No per-seat, no per-token.",
    joule: "Subscription per user, indefinitely.",
  },
  {
    label: "SAP version support",
    ours: "ECC, S/4HANA on-prem, S/4HANA private cloud — all supported.",
    joule: "S/4HANA Cloud (public edition) first-class only.",
  },
  {
    label: "Roadmap control",
    ours: "You ship the skills you need, when you need them.",
    joule: "Walldorf decides what ships and when.",
  },
  {
    label: "Training-data leakage risk",
    ours: "Zero — model weights are local, prompts never leave.",
    joule: "Governed by SAP's processor agreement, not yours.",
  },
];

export function VsJoule({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="vs SAP Joule">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Six rows. Six wins.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-[var(--color-bg-elev)]">
          <table className="w-full min-w-[820px] text-left">
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                <th className="px-6 py-5 md:text-sm">Dimension</th>
                <th className="px-6 py-5 text-[var(--color-accent)] md:text-sm">
                  Self-hosted (ours)
                </th>
                <th className="px-6 py-5 md:text-sm">SAP Joule</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.label}
                  className="border-b border-white/5 last:border-b-0"
                >
                  <td className="px-6 py-6 align-top text-base font-bold text-white md:text-lg">
                    {r.label}
                  </td>
                  <td className="px-6 py-6 align-top">
                    <div className="flex items-start gap-2 text-base text-white md:text-lg">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                      <span>{r.ours}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 align-top">
                    <div className="flex items-start gap-2 text-base text-white/60 md:text-lg">
                      <X className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-danger)]" />
                      <span>{r.joule}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionShell>
  );
}
