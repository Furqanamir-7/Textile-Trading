import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ContactCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary px-4 py-24 text-center md:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-[clamp(40px,5vw,64px)] font-bold text-white">
          Ready to source premium yarn?
        </h2>
        <p className="mt-6 text-lg text-white/90">
          Tell us your requirements — count, composition, quantity. We&apos;ll respond within 24
          hours.
        </p>
        <div className="mt-8">
          <MagneticButton href="/contact" variant="white">
            Send Inquiry <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
