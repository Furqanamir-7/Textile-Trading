import Link from "next/link";
import { productMenu, mainNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-dark px-4 py-16 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">
            PremiumYarn<span className="text-primary">.</span>
          </p>
          <p className="mt-4 text-sm text-white/60">
            Global B2B supplier of premium yarn, fabrics, home textile, and garments since 2000.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Products
          </h4>
          <ul className="space-y-2">
            {Object.values(productMenu).map((cat) => (
              <li key={cat.href}>
                <Link href={cat.href} className="text-sm text-white/70 hover:text-white">
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Company
          </h4>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>info@premiumyarn.com</li>
            <li>+92 42 123 4567</li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} PremiumYarn Co. All rights reserved.
      </div>
    </footer>
  );
}
