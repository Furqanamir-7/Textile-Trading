export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  country: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Consistent quality across every shipment. They understand what a spinning mill needs.",
    name: "Ahmed Al-Rashidi",
    company: "Al-Rashidi Textiles",
    country: "🇹🇷 Turkey",
  },
  {
    quote:
      "Their response time and logistics coordination have made them our go-to yarn partner for European markets.",
    name: "Sophie Laurent",
    company: "Maison Laurent Fabrics",
    country: "🇫🇷 France",
  },
  {
    quote:
      "We source blended yarns in bulk — counts are always accurate, packaging is export-ready.",
    name: "Rajesh Mehta",
    company: "Mehta Spinning Mills",
    country: "🇮🇳 India",
  },
  {
    quote:
      "Premium melange shades with reliable color matching. Our knitwear line depends on their consistency.",
    name: "James O'Brien",
    company: "Celtic Knit Co.",
    country: "🇬🇧 UK",
  },
  {
    quote:
      "From first inquiry to delivery, the process is transparent. A true B2B partner for global trade.",
    name: "Fatima Hassan",
    company: "Gulf Textile Trading",
    country: "🇦🇪 UAE",
  },
];
