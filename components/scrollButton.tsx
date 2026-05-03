"use client";

import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [show, setShow] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout: any;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const screenHeight = window.innerHeight;

      const totalScrollable = pageHeight - screenHeight;
      const half = totalScrollable / 2;

      //  show after little scroll
      setShow(scrollY > 150);

      //  switch arrow at half page
      setScrollUp(scrollY > half);

      //  scrolling detection (for opacity)
      setIsScrolling(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (scrollUp) {
      //  GO TOP
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      //  GO FOOTER (BOTTOM)
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  if (!show) return null;

  return (
    <div
      onClick={handleClick}
      className={`fixed bottom-8 right-8 z-50 cursor-pointer group transition-all duration-500 ${
        isScrolling ? "opacity-100 scale-100" : "opacity-40 scale-90"
      } hover:opacity-100 hover:scale-110`}
    >
      {/*  Glow */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition" />

      {/*  Button */}
      <div className="relative w-13 h-13 rounded-2xl bg-linear-to-br from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-xl transition-all duration-300">
        {/*  Pulse Ring  */}

        <span className="absolute w-full h-full rounded-2xl border border-cyan-300/60 animate-ping opacity-60 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

        {/*  Icon */}
        <div className="relative text-white flex flex-col items-center">
          {scrollUp ? (
            <>
              <span className="text-[10px] opacity-70">TOP</span>
              <span className="text-lg animate-bounce">↑</span>
            </>
          ) : (
            <>
              <span className="text-[10px] opacity-70">END</span>
              <span className="text-lg animate-bounce">↓</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
