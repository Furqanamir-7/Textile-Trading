import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fabrics",
  description: "Knit, woven, denim, greige, and dyed fabrics for mills and manufacturers.",
};

const fabrics = [
  { name: "Knit", desc: "Jersey, rib, interlock, and fleece for apparel and activewear." },
  { name: "Woven", desc: "Plain, twill, and satin weaves for shirting and suiting." },
  { name: "Denim", desc: "Indigo and stretch denim in various weights and washes." },
  { name: "Greige", desc: "Undyed base fabrics ready for dyeing and finishing." },
  { name: "Dyed", desc: "Color-ready fabrics with consistent shade matching." },
];

export default function FabricsPage() {
  return (
    <div className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="Fabrics" />
        <h1 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
          Fabrics for every application
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          From knit jersey to woven shirting and denim — we supply greige and finished fabrics
          tailored to your mill requirements.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fabrics.map((fabric) => (
            <div key={fabric.name} className="rounded-card bg-surface p-6 shadow-card">
              <h3 className="font-display text-xl font-bold text-heading">{fabric.name}</h3>
              <p className="mt-3 text-muted">{fabric.desc}</p>
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
