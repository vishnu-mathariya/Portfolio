"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedText from "@/components/animations/AnimatedText";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-left" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-right" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <AnimatedText
                  text="Hey, I'm "
                  className="text-white"
                  stagger={false}
                />

                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                  Vishnu Mathariya
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-md animate-fade-in delay-200">
                React Developer with 3+ years of experience building responsive
                and scalable web applications. Specialized in React.js, Next.js,
                and modern frontend technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8 animate-fade-in delay-300 flex-wrap">
              <Link
                href="#projects"
                className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full gradient-primary text-white font-bold text-sm sm:text-base hover:shadow-gradient transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-purple-500/50 text-white font-bold text-sm sm:text-base hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 pt-8 animate-bounce">
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main Card */}
              <div className="absolute inset-0 rounded-3xl glass-glow p-8 animate-float">
                <div className="w-full h-full rounded-2xl gradient-primary opacity-10" />
              </div>

              {/* Floating Cards */}
              {[
                {
                  delay: 0,
                  color: "gradient-secondary",
                  position: "top-1/4 -right-12",
                },
                {
                  delay: 1,
                  color: "gradient-accent",
                  position: "bottom-1/4 -left-12",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`absolute w-32 h-32 rounded-2xl ${card.color} p-4 ${card.position} animate-float`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="w-full h-full rounded-lg bg-black/20 backdrop-blur-sm" />
                </div>
              ))}

              {/* Tech Stack Icons */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl gap-4">
                <span
                  className="animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  ⚛️
                </span>
                <span
                  className="animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  🎨
                </span>
                <span
                  className="animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
