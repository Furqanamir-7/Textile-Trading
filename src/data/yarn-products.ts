export interface YarnProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  counts: string;
  composition: string;
  packaging: string;
  moq: string;
  applications: string[];
  tensileStrength: string;
  shrinkage: string;
}

export const yarnProducts: YarnProduct[] = [
  {
    id: "cotton",
    name: "Cotton Yarn",
    tagline: "Ring-spun and combed for softness and consistency.",
    description:
      "Premium ring-spun and combed cotton yarn engineered for mills demanding uniform twist, low neps, and excellent dye uptake. Available in carded and combed grades for knitting, weaving, and hosiery applications.",
    counts: "Ne 6 – Ne 60",
    composition: "100% Cotton / Combed / Carded",
    packaging: "1.5 kg cones / 4 kg cones / Paper cones / Plastic cones",
    moq: "500 kg per count",
    applications: ["Knitted Fabrics", "Woven Fabrics", "Hosiery", "Towels"],
    tensileStrength: "High",
    shrinkage: "< 3%",
  },
  {
    id: "polyester",
    name: "Polyester Yarn",
    tagline: "High-tenacity filament and staple for industrial strength.",
    description:
      "High-tenacity polyester filament and staple yarns built for blended fabrics, industrial textiles, and performance applications. Consistent denier control and excellent abrasion resistance.",
    counts: "Ne 20 – Ne 60",
    composition: "100% Polyester / Filament & Staple",
    packaging: "1.5 kg cones / 4 kg cones / Carton-packed",
    moq: "1,000 kg per count",
    applications: ["Blended Fabrics", "Industrial Textiles", "Sportswear", "Workwear"],
    tensileStrength: "Very High",
    shrinkage: "< 1%",
  },
  {
    id: "compact",
    name: "Compact Yarn",
    tagline: "Low hairiness for premium knit and woven surfaces.",
    description:
      "Compact-spun cotton and blended yarns with significantly reduced hairiness. Ideal for fine gauge knitting, premium shirting, and fabrics requiring a smooth, clean surface.",
    counts: "Ne 20 – Ne 80",
    composition: "100% Cotton / Cotton-Poly Blends",
    packaging: "1.5 kg cones / 4 kg cones",
    moq: "500 kg per count",
    applications: ["Fine Knits", "Premium Shirting", "Suiting", "Luxury Apparel"],
    tensileStrength: "High",
    shrinkage: "< 2.5%",
  },
  {
    id: "open-end",
    name: "Open-End Yarn",
    tagline: "Cost-efficient spinning for high-volume production.",
    description:
      "Open-end rotor spun yarns offering excellent value for denim, towels, and heavy knit applications. Consistent quality with competitive pricing for bulk orders.",
    counts: "Ne 6 – Ne 30",
    composition: "100% Cotton / Cotton Blends",
    packaging: "4 kg cones / Paper cones",
    moq: "2,000 kg per count",
    applications: ["Denim", "Towels", "Heavy Knits", "Industrial Fabrics"],
    tensileStrength: "Medium-High",
    shrinkage: "< 4%",
  },
  {
    id: "blended",
    name: "Blended Yarn",
    tagline: "CVC, PC, and TC blends with customizable ratios.",
    description:
      "Customizable cotton-polyester and polyester-cotton blends tailored to your fabric requirements. Optimized for uniforms, workwear, suiting, and everyday apparel.",
    counts: "Ne 10 – Ne 50",
    composition: "CVC / PC / TC — Custom ratios",
    packaging: "1.5 kg cones / 4 kg cones",
    moq: "1,000 kg per blend",
    applications: ["Uniforms", "Workwear", "Suiting", "Casual Apparel"],
    tensileStrength: "High",
    shrinkage: "< 3%",
  },
  {
    id: "melange",
    name: "Melange Yarn",
    tagline: "Heather and twist effects with custom color matching.",
    description:
      "Melange and heather yarns with precise color matching for knitwear and casualwear. Multi-tone effects achieved through controlled fiber blending and twist variation.",
    counts: "Ne 16 – Ne 40",
    composition: "Cotton / Polyester / Blended Melange",
    packaging: "1.5 kg cones / 4 kg cones",
    moq: "500 kg per shade",
    applications: ["Knitwear", "Casualwear", "Sportswear", "Loungewear"],
    tensileStrength: "Medium-High",
    shrinkage: "< 3%",
  },
];

export const showcaseYarn = [
  {
    id: "cotton",
    name: "Cotton Yarn",
    description: "Ring-spun and combed cotton in counts Ne 6 to Ne 60.",
    counts: "Ne 6 – Ne 60",
    applications: ["Apparel", "Knitting", "Weaving"],
  },
  {
    id: "polyester",
    name: "Polyester Yarn",
    description: "High-tenacity filament and staple. Ne 20 to Ne 60.",
    counts: "Ne 20 – Ne 60",
    applications: ["Blended Fabrics", "Industrial"],
  },
  {
    id: "blended",
    name: "Blended Yarn",
    description: "CVC, PC, and TC blends. Customizable ratios.",
    counts: "Ne 10 – Ne 50",
    applications: ["Uniforms", "Workwear", "Suiting"],
  },
  {
    id: "melange",
    name: "Melange Yarn",
    description: "Heather and twist effects. Custom color matching available.",
    counts: "Ne 16 – Ne 40",
    applications: ["Knitwear", "Casualwear"],
  },
];
