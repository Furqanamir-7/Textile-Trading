import { SectionLabel } from "@/components/ui/SectionLabel";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { DynamicTradeGlobe } from "@/components/three";
import { exportCountries } from "@/data/export-countries";

export function GlobalPresence() {
  const marqueeItems = exportCountries.map((c) => `${c.flag} ${c.name}`);

  return (
    <section className="bg-dark px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <SectionLabel label="Global Presence" light />
        <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-white">
          Trading across continents
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          From our base in Pakistan, we supply mills and manufacturers in over 68 countries with
          reliable yarn and textile products.
        </p>

        <div className="mt-12">
          <DynamicTradeGlobe />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <MarqueeStrip items={marqueeItems} speed={40} />
        </div>
      </div>
    </section>
  );
}
