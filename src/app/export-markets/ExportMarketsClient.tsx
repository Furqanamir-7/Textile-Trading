"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DynamicTradeGlobe } from "@/components/three";
import { exportCountries } from "@/data/export-countries";

const certifications = ["OEKO-TEX", "ISO 9001", "GOTS", "BCI", "Fair Trade"];

const shippingSteps = [
  "Order Confirmed",
  "Production / QC",
  "Export Documentation",
  "Shipment",
  "Delivery",
];

export default function ExportMarketsClient() {
  const [selected, setSelected] = useState<string | null>(null);
  const country = exportCountries.find((c) => c.name === selected);

  return (
    <>
      <div className="px-4 py-32 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionLabel label="Export Markets" />
          <h1 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
            Global reach, local expertise
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Click any marker on the globe to explore our export presence in that market.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <DynamicTradeGlobe large onCountrySelect={setSelected} />
          {country && (
            <div className="absolute right-0 top-0 w-80 rounded-card bg-surface p-6 shadow-card-hover">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 text-muted hover:text-heading"
                aria-label="Close panel"
              >
                ✕
              </button>
              <span className="text-3xl">{country.flag}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-heading">{country.name}</h3>
              <p className="mt-3 text-sm text-muted">{country.details}</p>
            </div>
          )}
        </div>
      </div>

      <section className="bg-bg px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel label="Certifications" />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-card bg-surface px-8 py-6 font-display text-lg font-bold text-heading shadow-card"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-2xl">
          <SectionLabel label="Shipping" />
          <h2 className="font-display text-3xl font-bold text-heading">From order to delivery</h2>
          <div className="mt-12 space-y-8">
            {shippingSteps.map((step, i) => (
              <div key={step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < shippingSteps.length - 1 && (
                    <div className="mt-2 h-full w-0.5 flex-1 bg-primary/30" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-semibold text-heading">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
