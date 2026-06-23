import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PremiumYarn Co. for yarn and textile sourcing inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
