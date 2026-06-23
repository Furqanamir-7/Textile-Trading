"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function MarqueeStrip({
  items,
  speed = 30,
  direction = "left",
  className = "",
}: MarqueeStripProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const tween = gsap.to(track, {
      xPercent: direction === "left" ? -50 : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    const pause = () => tween.pause();
    const play = () => tween.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, [items, speed, direction]);

  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex w-max gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="text-sm font-medium text-white/80">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
