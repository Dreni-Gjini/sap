"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export function Closing({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="snap-section relative overflow-hidden px-6 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[8rem]"
        >
          A{" "}
          <span
            className="bg-gradient-to-r from-[var(--color-accent)] via-[#4df7ec] to-[var(--color-accent)] bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            new SAP era
          </span>
          .
          <br />
          Private by design.
          <br />
          Intelligent by default.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--color-fg-muted)] md:text-2xl"
        >
          AI that works the way your enterprise already works — in-house, under
          your control, on your terms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-base text-[var(--color-fg-muted)] md:text-lg"
        >
          <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
          <span>
            Detailed technical appendix — CDC topology, RBAC mapping tables,
            inference benchmarks, deployment checklist — available as a separate
            PDF.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
