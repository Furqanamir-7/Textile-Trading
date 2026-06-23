import { ArrowRight, Grid3x3, Home, Shirt } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

const products = [
  {
    title: "Fabrics",
    desc: "Knit, woven, denim, and greige for every application.",
    href: "/fabrics",
    icon: Grid3x3,
  },
  {
    title: "Home Textile",
    desc: "Bedsheets, towels, curtains, and comforters.",
    href: "/home-textile",
    icon: Home,
  },
  {
    title: "Garments",
    desc: "T-shirts, polo, sportswear, and uniforms.",
    href: "/garments",
    icon: Shirt,
  },
];

export function OtherProducts() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="More Products" />
        <h2 className="font-display text-[clamp(28px,3vw,40px)] font-bold text-heading">
          Beyond yarn
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group rounded-card bg-surface p-6 shadow-card transition-all hover:shadow-card-hover"
              data-cursor-view
            >
              <product.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold text-heading">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{product.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
