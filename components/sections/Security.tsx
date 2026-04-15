"use client";

import {
  KeyRound,
  Users,
  ShieldAlert,
  FileLock2,
  EyeOff,
  Network,
} from "lucide-react";
import { SectionShell } from "../SectionShell";
import { Reveal } from "../Reveal";

const items = [
  {
    Icon: KeyRound,
    title: "OIDC / SAML auth",
    body: "Single sign-on against your IdP (Entra, Okta, Keycloak). No local passwords.",
  },
  {
    Icon: Users,
    title: "RBAC mirrors SAP",
    body: "Authorization objects (S_TCODE, S_TABU_DIS, etc.) are mapped 1:1 onto skill access.",
  },
  {
    Icon: ShieldAlert,
    title: "Prompt-injection defense",
    body: "Inputs scrubbed; system prompts signed; tool-call schemas strictly validated.",
  },
  {
    Icon: FileLock2,
    title: "Immutable audit log",
    body: "Every request, retrieval, and skill call is appended to a tamper-evident store.",
  },
  {
    Icon: EyeOff,
    title: "PII redaction",
    body: "Configurable masking before embeddings are stored and before responses leave the API.",
  },
  {
    Icon: Network,
    title: "mTLS + air-gapped",
    body: "Mutual TLS between every component. Appliance has no outbound internet path.",
  },
];

export function Security({ id }: { id: string }) {
  return (
    <SectionShell id={id} eyebrow="Security Model">
      <Reveal>
        <h2 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Built for the audit.
          <br />
          <span className="text-[var(--color-accent)]">
            Not retrofitted onto a chatbot.
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-[var(--color-bg-elev)] p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--color-fg-muted)]">
                  {body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
