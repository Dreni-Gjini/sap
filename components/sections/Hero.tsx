"use client";

import { motion } from "framer-motion";
import { Lock, Server, ShieldCheck } from "lucide-react";

export function Hero({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="snap-section relative overflow-hidden px-6 pt-24 md:px-16 md:pt-28 lg:px-24"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] backdrop-blur"
        >
          <Lock className="h-3.5 w-3.5" />
          Private AI Appliance for SAP
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-6xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[7.5rem]"
        >
          Private AI for SAP.
          <br />
          <span className="text-[var(--color-accent)]">
            Your data never leaves the building.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--color-fg-muted)] md:text-2xl"
        >
          A self-hosted middleware and on-prem inference appliance — a
          US-first, private alternative to SAP Joule and cloud LLMs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3"
        >
          {[
            { Icon: Server, label: "On-prem inference" },
            { Icon: ShieldCheck, label: "SAP stays read-only" },
            { Icon: Lock, label: "No cloud egress" },
          ].map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
            >
              <Icon className="h-5 w-5 text-[var(--color-accent)]" />
              <span className="text-base font-semibold text-white md:text-lg">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span>Internal Architecture Briefing</span>
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
