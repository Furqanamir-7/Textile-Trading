"use client";

import { useEffect, useRef } from "react";
import {
  Shirt,
  Home,
  Hotel,
  Factory,
  Store,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";

const industries: { label: string; icon: LucideIcon }[] = [
  { label: "Apparel", icon: Shirt },
  { label: "Home Furnishing", icon: Home },
  { label: "Hospitality", icon: Hotel },
  { label: "Industrial", icon: Factory },
  { label: "Retail", icon: Store },
  { label: "Export Houses", icon: Globe },
];

export function Industries() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = gridRef.current;
    if (!el || prefersReducedMotion()) return;

    const cells = el.querySelectorAll("[data-industry]");
    gsap.from(cells, {
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section className="bg-dark-muted px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="Industries" />
        <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
          Industries we serve
        </h2>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {industries.map(({ label, icon: Icon }) => (
            <GlassCard
              key={label}
              data-industry
              className="flex flex-col items-center text-center transition-colors hover:bg-primary/5"
            >
              <Icon className="h-8 w-8 text-primary transition-transform hover:scale-110" />
              <span className="mt-3 text-sm font-semibold text-heading">{label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
