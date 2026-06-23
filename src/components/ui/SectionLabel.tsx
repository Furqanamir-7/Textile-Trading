interface SectionLabelProps {
  label: string;
  light?: boolean;
}

export function SectionLabel({ label, light = false }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="h-0.5 w-4 bg-primary" />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${light ? "text-white/90" : "text-primary"}`}
      >
        {label}
      </span>
    </div>
  );
}
