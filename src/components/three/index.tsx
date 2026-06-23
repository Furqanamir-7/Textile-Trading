"use client";

import dynamic from "next/dynamic";

export const DynamicYarnSpool = dynamic(
  () => import("./YarnSpool").then((m) => m.YarnSpool),
  { ssr: false, loading: () => <div className="aspect-square w-full animate-pulse rounded-card bg-white/20" /> },
);

export const DynamicFiberParticles = dynamic(
  () => import("./FiberParticles").then((m) => m.FiberParticles),
  { ssr: false },
);

export const DynamicTradeGlobe = dynamic(
  () => import("./TradeGlobe").then((m) => m.TradeGlobe),
  { ssr: false, loading: () => <div className="aspect-square w-full animate-pulse rounded-full bg-white/10" /> },
);
