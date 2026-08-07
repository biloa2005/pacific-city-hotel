"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      // Classes Tailwind v4 + DaisyUI combinées pour le positionnement et la couleur dorée
      className="btn btn-circle fixed bottom-10 right-10 z-50 border-none text-white text-xl shadow-lg bg-gradient-to-br from-[#d4af37] to-[#aa7c11] hover:from-[#f3e5ab] hover:to-[#d4af37] transition-all duration-300"
      aria-label="Retour en haut de la page"
    >
      ↑
    </button>
  );
}
