"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Circle,
  Zap,
  Layers,
  RotateCw,
  Blend,
  Palette,
  Grid3x3,
  LayoutGrid,
  Shirt,
  Square,
  Droplets,
  Bed,
  Bath,
  PanelTop,
  Cloud,
  User,
  Activity,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { mainNav, productMenu } from "@/data/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";

const iconMap: Record<string, LucideIcon> = {
  Circle,
  Zap,
  Layers,
  RotateCw,
  Blend,
  Palette,
  Grid3x3,
  LayoutGrid,
  Shirt,
  Square,
  Droplets,
  Bed,
  Bath,
  PanelTop,
  Cloud,
  User,
  Activity,
  Briefcase,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-pill px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? "border border-white/10 bg-surface/80 shadow-glass backdrop-blur-xl"
              : "bg-transparent"
          }`}
          aria-label="Main navigation"
        >
          <Link href="/" className="font-display text-lg font-bold text-heading">
            PremiumYarn<span className="text-primary">.</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-text hover:text-primary"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products <ChevronDown className="h-4 w-4" />
              </button>

              {productsOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-4 w-[min(900px,calc(100vw-2rem))] -translate-x-1/2 rounded-card border border-white/10 bg-surface p-6 shadow-card-hover">
                  <div className="grid grid-cols-4 gap-6">
                    {Object.entries(productMenu).map(([key, category]) => (
                      <div
                        key={key}
                        className={key === "yarn" ? "col-span-1 border-r border-bg pr-4" : ""}
                      >
                        <Link
                          href={category.href}
                          className={`mb-3 block font-display font-bold ${key === "yarn" ? "text-xl text-primary" : "text-heading"}`}
                        >
                          {category.title}
                        </Link>
                        <ul className="space-y-2">
                          {category.items.map((item) => {
                            const Icon = iconMap[item.icon] ?? Circle;
                            return (
                              <li key={item.label}>
                                <Link
                                  href={category.href}
                                  className="flex items-start gap-2 rounded-sm p-1 text-sm hover:bg-bg"
                                >
                                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                  <span>
                                    <span className="font-medium text-heading">{item.label}</span>
                                    <span className="block text-xs text-muted">{item.desc}</span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton href="/contact" variant="primary">
              Inquire Now <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>

          <button
            type="button"
            className="rounded-sm p-2 text-heading lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-dark lg:hidden">
          <div className="flex items-center justify-between p-6">
            <span className="font-display text-lg font-bold text-white">PremiumYarn.</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-4 px-6">
            <button
              type="button"
              className="flex items-center justify-between text-left text-lg font-medium text-white"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products <ChevronDown className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProductsOpen && (
              <div className="ml-4 space-y-3 border-l border-white/20 pl-4">
                {Object.values(productMenu).map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block text-white/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <MagneticButton href="/contact" variant="white" className="mt-4 w-fit">
              Inquire Now
            </MagneticButton>
          </div>
        </div>
      )}
    </>
  );
}
