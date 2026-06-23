"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

interface ScrollTriggerOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
  markers?: boolean;
}

export function useScrollTrigger(
  animation: (ctx: { gsap: typeof gsap; trigger: HTMLElement }) => void,
  deps: unknown[] = [],
  options: ScrollTriggerOptions = { start: "top 80%", once: true },
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerGsap();

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      animation({ gsap, trigger: el });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
