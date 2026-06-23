import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Textile",
  description: "Bedsheets, towels, curtains, and comforters for hospitality and retail.",
};

const products = [
  { name: "Bedsheets", desc: "Cotton and blended bedsheets in percale and sateen weaves." },
  { name: "Towels", desc: "Terry and velour towels for hospitality and retail." },
  { name: "Curtains", desc: "Sheer, blackout, and decorative curtain fabrics." },
  { name: "Comforters", desc: "Quilted comforters and duvet covers in multiple fills." },
];

export default function HomeTextilePage() {
  return (
    <div className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="Home Textile" />
        <h1 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
          Home textiles for global markets
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Premium home textile products for hospitality, retail, and export — consistent quality
          across every shipment.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <div key={product.name} className="rounded-card bg-surface p-6 shadow-card">
              <h3 className="font-display text-xl font-bold text-heading">{product.name}</h3>
              <p className="mt-3 text-muted">{product.desc}</p>
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
