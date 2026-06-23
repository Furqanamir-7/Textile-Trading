import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  counts?: string;
  applications?: string[];
  href?: string;
  featured?: boolean;
}

export function ProductCard({
  name,
  description,
  counts,
  applications,
  href,
  featured = false,
}: ProductCardProps) {
  const content = (
    <div
      className={`group relative overflow-hidden rounded-card bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-b-2 hover:border-primary hover:shadow-card-hover ${featured ? "min-h-[280px]" : ""}`}
      data-cursor-view
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,var(--color-primary)_0,var(--color-primary)_1px,transparent_1px,transparent_8px)]" />
      <h3 className="font-display text-2xl font-bold text-heading">{name}</h3>
      <p className="mt-3 text-muted">{description}</p>
      {counts && (
        <p className="mt-4 text-sm font-semibold text-primary">{counts}</p>
      )}
      {applications && (
        <div className="mt-4 flex flex-wrap gap-2">
          {applications.map((app) => (
            <span
              key={app}
              className="rounded-pill bg-white/10 px-3 py-1 text-xs font-medium text-text"
            >
              {app}
            </span>
          ))}
        </div>
      )}
      {href && (
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Learn More <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
