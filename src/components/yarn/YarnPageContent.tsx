"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DynamicFiberParticles, DynamicYarnSpool } from "@/components/three";
import { ComparisonTable } from "@/components/yarn/ComparisonTable";
import { gsap, registerGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import type { YarnProduct } from "@/data/yarn-products";

const steps = [
  "Requirement",
  "Sourcing",
  "Quality Check",
  "Packaging",
  "Dispatch",
  "Delivery",
];

interface YarnPageContentProps {
  products: YarnProduct[];
}

export function YarnPageContent({ products }: YarnPageContentProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = timelineRef.current;
    if (!el || prefersReducedMotion()) return;

    const line = el.querySelector("[data-line]");
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-28">
        <DynamicFiberParticles />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
          <div>
            <SectionLabel label="Yarn Products" />
            <h1 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
              Every Count. Every Composition. Sourced Right.
            </h1>
            <p className="mt-6 text-lg text-muted">
              From ring-spun cotton to technical polyester blends — we supply mills worldwide with
              yarn that meets exact specifications, every time.
            </p>
            <MagneticButton href="/contact" className="mt-8">
              Request Quote <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
          <DynamicYarnSpool mouseReactive large />
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel label="Product Categories" />
          <Tabs defaultValue={products[0].id} className="mt-8">
            <TabsList className="mb-8 flex flex-wrap gap-2 bg-bg p-2">
              {products.map((p) => (
                <TabsTrigger
                  key={p.id}
                  value={p.id}
                  className="rounded-pill data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {p.name.replace(" Yarn", "")}
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <div className="rounded-card bg-surface p-8 shadow-card">
                  <h2 className="font-display text-3xl font-bold text-heading">{product.name}</h2>
                  <p className="mt-2 text-primary font-medium">{product.tagline}</p>
                  <p className="mt-4 text-muted">{product.description}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: "Counts Available", value: product.counts },
                      { label: "Composition", value: product.composition },
                      { label: "Packaging", value: product.packaging },
                      { label: "MOQ", value: product.moq },
                    ].map((spec) => (
                      <div key={spec.label} className="rounded-sm bg-bg p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                          {spec.label}
                        </p>
                        <p className="mt-2 text-sm text-heading">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-pill bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <MagneticButton href="/contact" className="mt-8">
                    Request Quote
                  </MagneticButton>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="bg-dark-muted px-4 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel label="Comparison" />
          <h2 className="font-display text-3xl font-bold text-heading">Yarn type comparison</h2>
          <ComparisonTable products={products} />
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel label="Our Process" />
          <h2 className="font-display text-3xl font-bold text-heading">How we source</h2>

          <div ref={timelineRef} className="relative mt-12">
            <div
              data-line
              className="absolute left-0 top-6 h-0.5 w-full origin-left bg-primary"
            />
            <div className="relative flex justify-between gap-2 overflow-x-auto">
              {steps.map((step, i) => (
                <div key={step} className="flex min-w-[100px] flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="mt-3 text-center text-xs font-medium text-heading sm:text-sm">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
