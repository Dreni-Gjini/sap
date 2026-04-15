"use client";

import { motion } from "framer-motion";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

type Box = {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  isolated?: boolean;
};

// Expanded viewBox with generous padding. All boxes sit well inside the frame.
const W = 1500;
const H = 640;

const boxes: Box[] = [
  { id: "sap", label: "SAP", sub: "ECC / S/4HANA", x: 60, y: 260, w: 200, h: 120, isolated: true },
  { id: "cdc", label: "CDC Layer", sub: "SLT · ODP · Event Mesh", x: 360, y: 260, w: 220, h: 120 },
  { id: "etl", label: "ETL + Embeddings", sub: "Python worker", x: 680, y: 260, w: 220, h: 120 },
  { id: "vec", label: "Vector DB", sub: "Qdrant · Weaviate · pgvector", x: 1000, y: 100, w: 230, h: 110 },
  { id: "llm", label: "LLM Runtime", sub: "Ollama · vLLM (on-prem)", x: 1000, y: 265, w: 230, h: 110 },
  { id: "api", label: "Middleware API", sub: "FastAPI · RBAC · Audit", x: 1000, y: 430, w: 230, h: 110 },
  { id: "ui", label: "Internal Web UI", sub: "Office network only", x: 1290, y: 265, w: 190, h: 110 },
];

const arrows: [string, string][] = [
  ["sap", "cdc"],
  ["cdc", "etl"],
  ["etl", "vec"],
  ["vec", "llm"],
  ["llm", "api"],
  ["api", "ui"],
  ["llm", "ui"],
];

function center(b: Box) {
  return { x: b.x + b.w / 2, y: b.y + b.h / 2 };
}

// Returns the point on the rectangle edge along the line from center(from) to center(to).
function rectEdge(box: Box, towards: { x: number; y: number }) {
  const c = center(box);
  const dx = towards.x - c.x;
  const dy = towards.y - c.y;
  if (dx === 0 && dy === 0) return c;
  const hw = box.w / 2;
  const hh = box.h / 2;
  const scale = Math.min(
    hw / Math.abs(dx || 1e-6),
    hh / Math.abs(dy || 1e-6),
  );
  return { x: c.x + dx * scale, y: c.y + dy * scale };
}

function edgePoint(from: Box, to: Box) {
  // Leave a small gap so the arrowhead is clearly outside the box border.
  const GAP = 6;
  const c1 = center(from);
  const c2 = center(to);
  const p1 = rectEdge(from, c2);
  const p2 = rectEdge(to, c1);

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  return {
    fx: p1.x + ux * GAP,
    fy: p1.y + uy * GAP,
    tx: p2.x - ux * GAP,
    ty: p2.y - uy * GAP,
  };
}

export function Architecture({ id }: { id: string }) {
  const byId = Object.fromEntries(boxes.map((b) => [b.id, b]));

  return (
    <SectionShell id={id} eyebrow="The Architecture">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          One direction. SAP feeds the AI.
          <br />
          <span className="text-[var(--color-accent)]">
            The AI never feeds back.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
            className="mx-auto block h-auto w-full min-w-[900px]"
            role="img"
            aria-label="System architecture diagram"
          >
            {/* isolation box around SAP */}
            <g>
              <rect
                x={40}
                y={220}
                width={240}
                height={200}
                rx={18}
                fill="rgba(255,93,93,0.06)"
                stroke="rgba(255,93,93,0.6)"
                strokeWidth={2}
                strokeDasharray="8 8"
              />
              <text
                x={160}
                y={210}
                textAnchor="middle"
                className="fill-[#ff8a8a]"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2 }}
              >
                ISOLATION BOUNDARY
              </text>
              <text
                x={160}
                y={440}
                textAnchor="middle"
                className="fill-[#ff8a8a]/80"
                style={{ fontSize: 11, fontWeight: 500 }}
              >
                AI never reads or writes here directly
              </text>
            </g>

            <defs>
              <marker
                id="arrowhead"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <path d="M0,0 L12,6 L0,12 z" fill="#00e0d3" />
              </marker>
            </defs>

            {/* arrows (render under boxes so arrowheads still show because of GAP) */}
            {arrows.map(([from, to], idx) => {
              const a = byId[from];
              const b = byId[to];
              if (!a || !b) return null;
              const { fx, fy, tx, ty } = edgePoint(a, b);
              return (
                <g key={`${from}-${to}`}>
                  <line
                    x1={fx}
                    y1={fy}
                    x2={tx}
                    y2={ty}
                    stroke="#00e0d3"
                    strokeWidth={2}
                    markerEnd="url(#arrowhead)"
                    opacity={0.85}
                  />
                  <motion.circle
                    r={5}
                    fill="#00e0d3"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [fx, tx],
                      cy: [fy, ty],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      delay: idx * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}

            {/* boxes */}
            {boxes.map((b) => (
              <g key={b.id}>
                <rect
                  x={b.x}
                  y={b.y}
                  width={b.w}
                  height={b.h}
                  rx={14}
                  fill={b.isolated ? "#1a0f10" : "#121214"}
                  stroke={b.isolated ? "#ff5d5d" : "#27272a"}
                  strokeWidth={1.5}
                />
                <text
                  x={b.x + b.w / 2}
                  y={b.y + b.h / 2 - 6}
                  textAnchor="middle"
                  className="fill-white"
                  style={{ fontSize: 17, fontWeight: 800 }}
                >
                  {b.label}
                </text>
                {b.sub ? (
                  <text
                    x={b.x + b.w / 2}
                    y={b.y + b.h / 2 + 16}
                    textAnchor="middle"
                    className="fill-white/60"
                    style={{ fontSize: 11, fontWeight: 500 }}
                  >
                    {b.sub}
                  </text>
                ) : null}
              </g>
            ))}
          </svg>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 grid grid-cols-1 gap-4 text-base text-[var(--color-fg-muted)] md:grid-cols-3 md:text-lg">
          <p>
            <span className="font-bold text-white">CDC streams changes only</span>
            {" "}— no full-table dumps, no overnight batches.
          </p>
          <p>
            <span className="font-bold text-white">Vector DB is read-optimized</span>
            {" "}and disposable. Rebuild any time from the source of truth.
          </p>
          <p>
            <span className="font-bold text-white">LLM is air-gapped</span>{" "}
            from SAP. It only ever sees retrieved chunks and skill responses.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
