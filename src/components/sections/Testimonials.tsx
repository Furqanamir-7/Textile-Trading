"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";
import { prefersReducedMotion } from "@/lib/motion";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-dark-muted px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionLabel label="Testimonials" />
        <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
          Trusted by mills worldwide
        </h2>

        <div className="relative mt-12 overflow-hidden" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) setActive((active + 1) % testimonials.length);
                if (info.offset.x > 50) setActive((active - 1 + testimonials.length) % testimonials.length);
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-card bg-surface p-8 shadow-card md:p-12"
            >
              <span className="font-display text-6xl text-primary">&ldquo;</span>
              <p className="mt-4 text-lg leading-relaxed text-text">
                {testimonials[active].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="font-semibold text-heading">{testimonials[active].name}</p>
                  <p className="text-sm text-muted">{testimonials[active].company}</p>
                </div>
                <span className="ml-auto text-2xl">{testimonials[active].country}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-pill transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
