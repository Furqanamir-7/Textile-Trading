"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { DynamicFiberParticles, DynamicYarnSpool } from "@/components/three";

const words = ["Premium", "Yarn.", "Delivered", "Worldwide."];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1008_0%,#0a0a0a_70%)]" />
      <div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"
        style={{ animation: "float 10s ease-in-out infinite reverse" }}
      />
      <DynamicFiberParticles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
        <div>
          <SectionLabel label="Global Textile Trading" />
          <h1 className="font-display text-[clamp(56px,7vw,96px)] font-extrabold leading-[1.05] text-heading">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Supplying mills, manufacturers, and exporters with consistent-quality yarn across
            every major market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="/yarn">
              Explore Yarn <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/contact" variant="outline">
              Contact Us
            </MagneticButton>
          </div>
        </div>

        <div className="relative">
          <DynamicYarnSpool />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4 md:px-8">
        {[
          { to: 24, suffix: "+", label: "Years" },
          { to: 68, suffix: "", label: "Countries" },
          { to: 15, suffix: "+", label: "Product Lines" },
          { to: 100, suffix: "%", label: "On-time Rate" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold text-heading">
              <AnimatedCounter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
