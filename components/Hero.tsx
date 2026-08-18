'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Léger délai pour laisser le layout se poser avant de lancer l'animation
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />
      {/* Voile dégradé pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

      {/* CONTENU */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        
        {/* Eyebrow : étoiles + mention */}
        <div
          className={`mb-6 flex items-center gap-2 transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">
            Hôtellerie d&apos;exception à Obala
          </span>
        </div>

        {/* TITRE PRINCIPAL — apparition ligne par ligne */}
        <h1 className="font-serif font-bold leading-[1.05] text-white">
          <span
            className={`block text-4xl sm:text-6xl lg:text-7xl transition-all duration-700 delay-150 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            L&apos;art de recevoir,
          </span>
          <span
            className={`block text-4xl sm:text-6xl lg:text-7xl mt-1 sm:mt-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent transition-all duration-700 delay-300 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            réinventé pour vous
          </span>
        </h1>

        {/* SOUS-TITRE */}
        <p
          className={`mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed transition-all duration-700 delay-500 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Chambres raffinées, gastronomie locale sublimée et service attentionné,
          au cœur d&apos;Obala. Le Pacific Hotel vous accueille comme chez vous —
          en mieux.
        </p>

        {/* CTA */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#chambres"
            className="px-8 py-3.5 bg-[#D4AF37] text-black font-semibold text-sm tracking-wide rounded-full hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Réserver mon séjour
          </a>
          
          <a
            href="#a-propos"
            className="px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 hover:border-white/50 transition-colors"
          >
            Découvrir l&apos;hôtel
          </a>
        </div>
      </div>

      {/* INDICATEUR DE SCROLL */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700 delay-[1000ms] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white/50 text-[10px] tracking-[0.25em] uppercase">
          Découvrir
        </span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
}
