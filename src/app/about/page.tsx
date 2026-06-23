import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PremiumYarn Co. — a global B2B textile trading partner serving mills in 68+ countries since 2000.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-32 md:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionLabel label="About Us" />
        <h1 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-heading">
          A sourcing partner built for global trade
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted">
          Since 2000, PremiumYarn Co. has built supply chains that mills and manufacturers in 68
          countries rely on — not just for yarn, but for certainty. We combine deep sourcing
          expertise with rigorous quality control and responsive logistics to deliver consistent
          results across every shipment.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          From ring-spun cotton to technical polyester blends, our product range covers every count
          and composition a modern mill needs. Our team responds within 24 hours, and every lot is
          quality-checked before dispatch.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { value: "2000", label: "Founded" },
            { value: "68+", label: "Countries" },
            { value: "15+", label: "Product Lines" },
          ].map((item) => (
            <div key={item.label} className="rounded-card bg-surface p-6 shadow-card text-center">
              <p className="font-display text-4xl font-bold text-primary">{item.value}</p>
              <p className="mt-2 text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
