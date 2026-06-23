"use client";

import { useEffect, useRef } from "react";
import {
  Award,
  DollarSign,
  Truck,
  Globe,
  Clock,
  Settings,
} from "lucide-react";
import { gsap, registerGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FeatureCard } from "@/components/ui/FeatureCard";

const stats = [
  { to: 68, suffix: "", label: "Countries Served" },
  { to: 100, suffix: "%", label: "Quality Checked" },
  { to: 24, suffix: "h", label: "Average Response Time" },
];

const features = [
  { icon: Award, title: "Premium Quality" },
  { icon: DollarSign, title: "Competitive Pricing" },
  { icon: Truck, title: "Consistent Supply" },
  { icon: Globe, title: "Global Logistics" },
  { icon: Clock, title: "Fast Turnaround" },
  { icon: Settings, title: "Custom Orders" },
];

export function WhyChooseUs() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = gridRef.current;
    if (!el || prefersReducedMotion()) return;

    const cards = el.querySelectorAll("[data-feature]");
    gsap.from(cards, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <SectionLabel label="Why Choose Us" />
          <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
            Built for global trade
          </h2>
          <div className="mt-12 space-y-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-bold text-primary">
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} data-feature>
              <FeatureCard icon={f.icon} title={f.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
