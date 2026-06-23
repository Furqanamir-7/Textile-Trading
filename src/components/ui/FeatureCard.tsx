import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-card bg-surface p-5 shadow-card transition-all duration-300 hover:shadow-card-hover">
      <Icon className="h-6 w-6 text-primary" />
      <h4 className="mt-3 font-display text-lg font-semibold text-heading">{title}</h4>
      {description && <p className="mt-1 text-sm text-muted">{description}</p>}
    </div>
  );
}
