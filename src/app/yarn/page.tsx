import { yarnProducts } from "@/data/yarn-products";
import { YarnPageContent } from "@/components/yarn/YarnPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yarn Products",
  description:
    "Premium cotton, polyester, compact, open-end, blended, and melange yarns. Every count, every composition, sourced right.",
};

export default function YarnPage() {
  return <YarnPageContent products={yarnProducts} />;
}
