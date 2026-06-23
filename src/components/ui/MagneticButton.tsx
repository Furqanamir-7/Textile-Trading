"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "white" | "outline";
}

export function MagneticButton({
  href,
  onClick,
  children,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagneticEffect(0.3);

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-card hover:shadow-card-hover",
    white: "bg-surface text-heading border border-white/10 hover:bg-primary hover:text-white",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const classes = `inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={classes}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
