export interface ExportCountry {
  name: string;
  flag: string;
  lat: number;
  lon: number;
  details: string;
}

export const exportCountries: ExportCountry[] = [
  {
    name: "USA",
    flag: "🇺🇸",
    lat: 37.09,
    lon: -95.71,
    details: "Major export market for cotton and blended yarns. FCL shipments via East & West coast ports.",
  },
  {
    name: "UK",
    flag: "🇬🇧",
    lat: 55.37,
    lon: -3.43,
    details: "Premium knitwear and suiting yarn supply. Regular weekly consolidations.",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    lat: 51.16,
    lon: 10.45,
    details: "Technical textiles and industrial yarn. ISO-certified quality documentation.",
  },
  {
    name: "France",
    flag: "🇫🇷",
    lat: 46.22,
    lon: 2.21,
    details: "Fashion-grade melange and compact yarns for European brands.",
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    lat: 38.96,
    lon: 35.24,
    details: "High-volume denim and knit yarn. Cross-border logistics optimized.",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    lat: 23.68,
    lon: 90.35,
    details: "Garment manufacturing hub. Bulk OE and carded cotton supply.",
  },
  {
    name: "China",
    flag: "🇨🇳",
    lat: 35.86,
    lon: 104.19,
    details: "Blended and polyester yarns for woven and knit mills.",
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    lat: 23.42,
    lon: 53.84,
    details: "Regional distribution hub. Re-export to GCC markets.",
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    lat: 41.87,
    lon: 12.56,
    details: "Luxury knitwear and fine gauge compact yarns.",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    lat: 56.13,
    lon: -106.34,
    details: "Seasonal apparel yarns. Vancouver & Montreal port delivery.",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    lat: -25.27,
    lon: 133.77,
    details: "Home textile and casualwear yarn. Sydney & Melbourne routing.",
  },
];

export const originCountry = {
  name: "Pakistan",
  lat: 30.37,
  lon: 69.34,
};
