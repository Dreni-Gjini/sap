import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Architecture } from "@/components/sections/Architecture";
import { Skills } from "@/components/sections/Skills";
import { Security } from "@/components/sections/Security";
import { Compliance } from "@/components/sections/Compliance";
import { Hardware } from "@/components/sections/Hardware";
import { VsJoule } from "@/components/sections/VsJoule";
import { Fallback } from "@/components/sections/Fallback";
import { DataFlow } from "@/components/sections/DataFlow";
import { WhyNow } from "@/components/sections/WhyNow";
import { Closing } from "@/components/sections/Closing";
import { ProgressNav } from "@/components/ProgressNav";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "problem", label: "The Problem" },
  { id: "architecture", label: "Architecture" },
  { id: "skills", label: "Skills Layer" },
  { id: "security", label: "Security" },
  { id: "compliance", label: "Compliance" },
  { id: "hardware", label: "Hardware" },
  { id: "vs-joule", label: "vs Joule" },
  { id: "fallback", label: "Fallback" },
  { id: "data-flow", label: "Data Flow" },
  { id: "why-now", label: "Why Now" },
  { id: "closing", label: "Close" },
];

export default function Page() {
  return (
    <main className="relative">
      <ProgressNav sections={sections} />
      <Hero id="hero" />
      <Problem id="problem" />
      <Architecture id="architecture" />
      <Skills id="skills" />
      <Security id="security" />
      <Compliance id="compliance" />
      <Hardware id="hardware" />
      <VsJoule id="vs-joule" />
      <Fallback id="fallback" />
      <DataFlow id="data-flow" />
      <WhyNow id="why-now" />
      <Closing id="closing" />
    </main>
  );
}
