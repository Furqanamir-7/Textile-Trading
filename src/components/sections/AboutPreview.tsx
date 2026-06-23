"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";

const milestones = [
  { year: "2000", label: "Founded" },
  { year: "2008", label: "First Export" },
  { year: "2015", label: "Expanded to Fabrics" },
  { year: "2020", label: "Digital Ordering" },
  { year: "2024", label: "Present" },
];

export function AboutPreview() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = timelineRef.current;
    if (!el || prefersReducedMotion()) return;

    const items = el.querySelectorAll("[data-milestone]");
    gsap.from(items, {
      opacity: 0,
      x: 40,
      stagger: 0.15,
      duration: 0.6,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <SectionLabel label="About Us" />
          <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold leading-tight text-heading">
            A sourcing partner built for the demands of global trade.
          </h2>
          <p className="mt-6 text-lg text-muted">
            Since 2000, we&apos;ve built supply chains that mills and manufacturers in 68 countries
            rely on — not just for yarn, but for certainty.
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="rotate-[-2deg] overflow-hidden rounded-card bg-gradient-to-br from-primary/20 to-secondary/10 p-8 shadow-card">
            <p className="font-display text-6xl font-bold text-primary">68+</p>
            <p className="mt-2 text-muted">Countries served worldwide</p>
          </div>
          <GlassCard className="absolute -bottom-4 -right-4 w-48 rotate-[3deg]">
            <p className="font-display text-3xl font-bold text-heading">24+</p>
            <p className="text-sm text-muted">Years of excellence</p>
          </GlassCard>
        </div>
      </div>

      <div ref={timelineRef} className="mx-auto mt-20 max-w-6xl overflow-x-auto">
        <div className="flex min-w-max gap-8 px-4">
          {milestones.map((m) => (
            <div key={m.year} data-milestone className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {m.year.slice(2)}
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-heading">{m.year}</p>
              <p className="text-sm text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
