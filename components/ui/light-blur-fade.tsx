"use client";

import { useRef } from "react";
import { useInView, UseInViewOptions } from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface LightBlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
}

export default function LightBlurFade({
  children,
  className,
  delay = 0,
  inView = false,
  inViewMargin = "-50px",
}: LightBlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
