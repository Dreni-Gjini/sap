"use client";

import Image from "next/image";
import { Server, Cpu } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const bullets = [
  "Compact Apple Silicon appliances with large unified memory",
  "Workstation-class x86 with modern accelerators",
  "Compact 1U/2U servers for branch or HQ deployments",
  "Stackable across offices via a simple inference load balancer",
];

export function Hardware({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="The Hardware">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Runs on hardware
          <br />
          <span className="text-[var(--color-accent)]">
            your IT team already knows.
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl text-lg text-[var(--color-fg-muted)] md:text-xl">
          Desktop-class AI. No datacenter required. The architecture is hardware
          agnostic — it runs on the same categories of machines your
          infrastructure team already sources through existing vendor channels.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
        <Reveal>
          <div className="grid grid-cols-3 items-center gap-4">
            {/* Apple Silicon appliance */}
            <div className="col-span-3 md:col-span-3">
              <div className="relative mx-auto w-full max-w-sm">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(0,224,211,0.14), transparent 70%)",
                  }}
                />
                <Image
                  src="/mac_studio.png"
                  alt="Compact desktop AI appliance"
                  width={900}
                  height={675}
                  priority
                  className="relative h-auto w-full select-none object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                />
                <div className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Compact desktop appliance
                </div>
              </div>
            </div>

            {/* Category icons row */}
            <div className="col-span-3 mt-8 grid grid-cols-2 gap-4">
              <CategoryCard
                Icon={Cpu}
                title="Workstation tower"
                sub="x86 + modern accelerators"
              />
              <CategoryCard
                Icon={Server}
                title="1U / 2U server"
                sub="Branch or HQ rack-mount"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Hardware categories we support
            </div>
            <ul className="mt-5 space-y-5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 text-lg text-white md:text-xl"
                >
                  <span className="mt-[0.7em] h-[6px] w-6 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-white/50 md:text-base">
              We are not tied to a single vendor or SKU. Any machine in these
              categories, from the procurement list your IT team already has,
              can host the appliance.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function CategoryCard({
  Icon,
  title,
  sub,
}: {
  Icon: typeof Server;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[var(--color-bg-elev)] p-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-[var(--color-accent)]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-sm font-bold text-white md:text-base">{title}</div>
        <div className="text-xs text-white/55 md:text-sm">{sub}</div>
      </div>
    </div>
  );
}
