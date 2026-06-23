import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductCard } from "@/components/ui/ProductCard";
import { showcaseYarn } from "@/data/yarn-products";

export function YarnShowcase() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionLabel label="Flagship Product" light />
        <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-white">
          Yarn for every mill. Count for every need.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {showcaseYarn.map((yarn) => (
            <ProductCard
              key={yarn.id}
              name={yarn.name}
              description={yarn.description}
              counts={yarn.counts}
              applications={yarn.applications}
              featured
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/yarn"
            className="inline-flex items-center gap-2 rounded-pill bg-surface px-8 py-4 font-semibold text-heading shadow-card transition-all hover:bg-primary hover:text-white"
          >
            View All Yarn Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
