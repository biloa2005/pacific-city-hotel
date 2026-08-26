'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const welcomeTexts = [
    "Bienvenue au Pacific Hotel",
    "Votre confort, notre priorité",
    "Vivez une expérience d'exception",
    "Le luxe au cœur d'Obala",
  ];

  const heroTitles = [
    {
      line1: "L'art de recevoir,",
      line2: "réinventé pour vous",
    },
    {
      line1: "Un séjour d'exception,",
      line2: "à votre image",
    },
    {
      line1: "Le confort absolu,",
      line2: "au cœur d'Obala",
    },
    {
      line1: "Chaque détail compte,",
      line2: "pour votre bien-être",
    },
  ];

  const [currentText, setCurrentText] = useState(0);

  // --- Machine à écrire pour le titre principal ---
  const [currentTitle, setCurrentTitle] = useState(0);
  const [phase, setPhase] = useState<'display' | 'erasing' | 'typing'>('display');

  const activeTitle = heroTitles[currentTitle];
  const maxLen = (title: { line1: string; line2: string }) =>
    Math.max(title.line1.length, title.line2.length);

  const [charCount, setCharCount] = useState(maxLen(heroTitles[0]));

  const displayedLine1 = activeTitle.line1.slice(0, charCount);
  const displayedLine2 = activeTitle.line2.slice(0, charCount);

  // Animation d'apparition initiale
  useEffect(() => {
    setMounted(true);
  }, []);

  // Changement automatique du sous-titre dynamique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % welcomeTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [welcomeTexts.length]);

  //  écriture a grande taille : 
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'display') {
      timeout = setTimeout(() => {
        setPhase('erasing');
      }, 3500);
    } else if (phase === 'erasing') {
      if (charCount > 0) {
        timeout = setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, 30);
      } else {
        setCurrentTitle((prev) => (prev + 1) % heroTitles.length);
        setPhase('typing');
      }
    } else if (phase === 'typing') {
      const target = maxLen(activeTitle);

      if (charCount < target) {
        timeout = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, 55);
      } else {
        setPhase('display');
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charCount, activeTitle, heroTitles.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />

      {/* VOILES POUR LA LISIBILITÉ DU TEXTE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

      {/* CONTENU */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* ÉTOILES + TEXTE DYNAMIQUE */}
        <div
          className={`mb-6 flex flex-col sm:flex-row items-center gap-2 transition-all duration-700 ease-out ${
            mounted
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {/* 5 ÉTOILES */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
              />
            ))}
          </div>

          {/* TEXTE QUI CHANGE */}
          <div className="relative h-6 overflow-hidden flex items-center justify-center">
            <span
              key={currentText}
              className="animate-[welcome_0.6s_ease-out] text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium text-center"
            >
              {welcomeTexts[currentText]}
            </span>
          </div>
        </div>

        {/* TITRE PRINCIPAL — MACHINE À ÉCRIRE */}
        <h1
          className={`font-serif font-bold leading-[1.05] text-white transition-opacity duration-700 ease-out ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* PREMIÈRE LIGNE */}
          <span
            className={`block text-4xl sm:text-6xl lg:text-7xl transition-all duration-700 delay-150 ease-out ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {displayedLine1}
            {phase !== 'display' && charCount <= activeTitle.line1.length && (
              <span className="inline-block w-[2px] h-[0.9em] bg-white/70 ml-1 align-middle animate-pulse" />
            )}
          </span>

          {/* DEUXIÈME LIGNE */}
          <span
            className={`block text-4xl sm:text-6xl lg:text-7xl mt-1 sm:mt-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent transition-all duration-700 delay-300 ease-out ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {displayedLine2}
            {phase !== 'display' && charCount > activeTitle.line1.length && (
              <span className="inline-block w-[2px] h-[0.9em] bg-[#D4AF37] ml-1 align-middle animate-pulse" />
            )}
          </span>
        </h1>

        {/* SOUS-TITRE */}
        <p
          className={`mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed transition-all duration-700 delay-500 ease-out ${
            mounted
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          Chambres raffinées, gastronomie locale sublimée et service
          attentionné, au cœur d&apos;Obala. Le Pacific Hotel vous accueille
          comme chez vous — en mieux.
        </p>

        {/* BOUTONS */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-700 ease-out ${
            mounted
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* CTA PRINCIPAL */}
          <a
            href="#chambres"
            className="px-8 py-3.5 bg-[#D4AF37] text-black font-semibold text-sm tracking-wide rounded-full hover:bg-[#F3E5AB] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
          >
            Réserver mon séjour
          </a>

          {/* CTA SECONDAIRE */}
          <a
            href="#a-propos"
            className="px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
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

      {/* ANIMATION DU TEXTE DYNAMIQUE */}
      <style jsx global>{`
        @keyframes welcome {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}