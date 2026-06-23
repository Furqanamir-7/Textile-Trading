import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { YarnShowcase } from "@/components/sections/YarnShowcase";
import { OtherProducts } from "@/components/sections/OtherProducts";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <YarnShowcase />
      <OtherProducts />
      <Industries />
      <WhyChooseUs />
      <GlobalPresence />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
