"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const stages = [
  {
    id: "change",
    label: "SAP change event",
    sub: "Invoice posted",
    explanation:
      "A user posts a transaction in SAP — an invoice, an order, a master-data update. This is the only write. Everything downstream is a reaction.",
  },
  {
    id: "cdc",
    label: "CDC capture",
    sub: "SLT streams delta",
    explanation:
      "The Change Data Capture layer detects the delta within seconds and emits it as an event. SAP is untouched by anything that comes next.",
  },
  {
    id: "embed",
    label: "ETL + embedding",
    sub: "Worker vectorizes",
    explanation:
      "A Python worker consumes the event, redacts fields that don't need to travel, chunks the record, and generates a vector embedding.",
  },
  {
    id: "store",
    label: "Vector DB write",
    sub: "Chunk indexed",
    explanation:
      "The embedding lands in the isolated vector store, tagged with RBAC metadata — company code, cost center, plant — so access control travels with the data.",
  },
  {
    id: "ask",
    label: "User query",
    sub: "Authenticated request",
    explanation:
      "Later, an authorized user asks a question through the internal web UI. Authentication happens first; no anonymous access to the assistant.",
  },
  {
    id: "retrieve",
    label: "RBAC-filtered retrieval",
    sub: "Top-k vector search",
    explanation:
      "The middleware applies the user's SAP authorizations as a vector-DB filter before the language model sees anything. Users only retrieve what they could already see in SAP.",
  },
  {
    id: "skill",
    label: "Skill call (optional)",
    sub: "Typed, logged, scoped",
    explanation:
      "If the answer needs live data, the model requests a typed skill. The middleware runs it under the user's identity, logs it, and returns a structured result.",
  },
  {
    id: "answer",
    label: "Grounded answer",
    sub: "Cited, audited, returned",
    explanation:
      "The model composes a response from retrieved context and skill results. Every step of this path is audit-logged and reproducible.",
  },
];

const VB_W = 1600;
const VB_H = 260;
const PAD_X = 80;
const TRACK_Y = 130;
const stepX = (i: number) =>
  PAD_X + (i * (VB_W - 2 * PAD_X)) / (stages.length - 1);

export function DataFlow({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [step, setStep] = useState(0);

  const goPrev = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);
  const goNext = useCallback(() => {
    setStep((s) => Math.min(stages.length - 1, s + 1));
  }, []);

  useEffect(() => {
    if (!inView) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, goPrev, goNext]);

  const current = stages[step];

  return (
    <SectionShell id={id} eyebrow="Data Flow — Step Through">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          From posted invoice to cited answer.
          <br />
          <span className="text-[var(--color-accent)]">
            Every hop visible. Every hop logged.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div ref={ref} className="mt-14 w-full">
          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              preserveAspectRatio="xMidYMid meet"
              className="mx-auto block h-auto w-full min-w-[900px]"
              role="img"
              aria-label="Data flow pipeline"
            >
              {/* track */}
              <line
                x1={stepX(0)}
                x2={stepX(stages.length - 1)}
                y1={TRACK_Y}
                y2={TRACK_Y}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={2}
              />
              {/* progress track */}
              <motion.line
                x1={stepX(0)}
                y1={TRACK_Y}
                y2={TRACK_Y}
                stroke="#00e0d3"
                strokeWidth={2}
                initial={false}
                animate={{ x2: stepX(step) }}
                transition={{ duration: 0.55, ease: [0.45, 0, 0.25, 1] }}
              />

              {stages.map((s, i) => {
                const cx = stepX(i);
                const isPast = i <= step;
                const isCurrent = i === step;
                return (
                  <g key={s.id}>
                    {/* node */}
                    <circle
                      cx={cx}
                      cy={TRACK_Y}
                      r={10}
                      fill={isPast ? "#00e0d3" : "#1a1a1d"}
                      stroke={isPast ? "#00e0d3" : "rgba(255,255,255,0.3)"}
                      strokeWidth={2}
                    />
                    {/* step number above */}
                    <text
                      x={cx}
                      y={TRACK_Y - 28}
                      textAnchor="middle"
                      className="fill-white/40"
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 2,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </text>
                    {/* label below */}
                    <motion.g
                      initial={false}
                      animate={{
                        opacity: isCurrent ? 1 : isPast ? 0.85 : 0.35,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <text
                        x={cx}
                        y={TRACK_Y + 36}
                        textAnchor="middle"
                        className="fill-white"
                        style={{ fontSize: 15, fontWeight: 700 }}
                      >
                        {s.label}
                      </text>
                      <text
                        x={cx}
                        y={TRACK_Y + 58}
                        textAnchor="middle"
                        className="fill-white/60"
                        style={{ fontSize: 12, fontWeight: 500 }}
                      >
                        {s.sub}
                      </text>
                    </motion.g>
                  </g>
                );
              })}

              {/* packet */}
              <motion.circle
                cy={TRACK_Y}
                r={8}
                fill="#00e0d3"
                initial={false}
                animate={{ cx: stepX(step) }}
                transition={{ duration: 0.55, ease: [0.45, 0, 0.25, 1] }}
                style={{
                  filter: "drop-shadow(0 0 10px rgba(0,224,211,0.9))",
                }}
              />
            </svg>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 0}
              aria-label="Previous step"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-[var(--color-accent)]/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-white/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>

            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Step {step + 1} of {stages.length}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={step === stages.length - 1}
              aria-label="Next step"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-[var(--color-accent)]/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-white/80"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-8 min-h-[140px] max-w-3xl md:min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {String(step + 1).padStart(2, "0")} · {current.label}
              </div>
              <p className="mt-3 text-lg leading-relaxed text-[var(--color-fg-muted)] md:text-xl">
                {current.explanation}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </SectionShell>
  );
}
