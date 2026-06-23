import type { Metadata } from "next";
import ExportMarketsClient from "./ExportMarketsClient";

export const metadata: Metadata = {
  title: "Export Markets",
  description: "Explore PremiumYarn Co. export markets across 68+ countries worldwide.",
};

export default function ExportMarketsPage() {
  return <ExportMarketsClient />;
}
