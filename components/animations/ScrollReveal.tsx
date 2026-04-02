"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translate(0, 0) scale(1)";
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    if (ref.current) {
      // Set initial state
      ref.current.style.opacity = "0";
      ref.current.style.animationDuration = `${duration}s`;
      ref.current.style.animationDelay = `${delay}s`;
      
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, duration, threshold]);

  const animationMap: Record<string, string> = {
    fadeInUp: "animate-fade-in-up",
    fadeInLeft: "animate-fade-in-left",
    fadeInRight: "animate-fade-in-right",
    scaleIn: "animate-scale-in",
    slideInUp: "animate-slide-in-up",
  };

  return (
    <div
      ref={ref}
      className={`${animationMap[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
