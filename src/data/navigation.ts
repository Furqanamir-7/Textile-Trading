export const productMenu = {
  yarn: {
    title: "Yarn",
    href: "/yarn",
    items: [
      { label: "Cotton", desc: "Ring-spun & combed", icon: "Circle" },
      { label: "Polyester", desc: "Filament & staple", icon: "Zap" },
      { label: "Compact", desc: "Low hairiness", icon: "Layers" },
      { label: "OE", desc: "Open-end spun", icon: "RotateCw" },
      { label: "Blended", desc: "CVC, PC, TC", icon: "Blend" },
      { label: "Melange", desc: "Heather effects", icon: "Palette" },
    ],
  },
  fabrics: {
    title: "Fabrics",
    href: "/fabrics",
    items: [
      { label: "Knit", desc: "Jersey & rib", icon: "Grid3x3" },
      { label: "Woven", desc: "Plain & twill", icon: "LayoutGrid" },
      { label: "Denim", desc: "Indigo & stretch", icon: "Shirt" },
      { label: "Greige", desc: "Undyed base", icon: "Square" },
      { label: "Dyed", desc: "Color-ready", icon: "Droplets" },
    ],
  },
  homeTextile: {
    title: "Home Textile",
    href: "/home-textile",
    items: [
      { label: "Bedsheets", desc: "Cotton & blends", icon: "Bed" },
      { label: "Towels", desc: "Terry & velour", icon: "Bath" },
      { label: "Curtains", desc: "Sheer & blackout", icon: "PanelTop" },
      { label: "Comforters", desc: "Quilted fills", icon: "Cloud" },
    ],
  },
  garments: {
    title: "Garments",
    href: "/garments",
    items: [
      { label: "T-Shirts", desc: "Knit basics", icon: "Shirt" },
      { label: "Polo", desc: "Collared knit", icon: "User" },
      { label: "Sportswear", desc: "Performance", icon: "Activity" },
      { label: "Uniforms", desc: "Workwear", icon: "Briefcase" },
    ],
  },
} as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Export Markets", href: "/export-markets" },
  { label: "Contact", href: "/contact" },
] as const;
