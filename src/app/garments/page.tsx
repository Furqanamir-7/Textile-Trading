import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Garments",
  description: "T-shirts, polo, sportswear, and uniforms for brands and exporters.",
};

const garments = [
  { name: "T-Shirts", desc: "Basic and fashion knit tees in cotton and blends." },
  { name: "Polo", desc: "Collared knit polos for corporate and casual wear." },
  { name: "Sportswear", desc: "Performance activewear with moisture-wicking fabrics." },
  { name: "Uniforms", desc: "Workwear and institutional uniforms in durable blends." },
];

export default function GarmentsPage() {
  return (
    <div className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="Garments" />
        <h1 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
          Garments for brands and exporters
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          From basic tees to performance sportswear — we manufacture and source garments for
          brands, retailers, and export houses worldwide.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {garments.map((garment) => (
            <div key={garment.name} className="rounded-card bg-surface p-6 shadow-card">
              <h3 className="font-display text-xl font-bold text-heading">{garment.name}</h3>
              <p className="mt-3 text-muted">{garment.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <MagneticButton href="/contact">
            Request Quote <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
