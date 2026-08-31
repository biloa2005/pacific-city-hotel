'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import Link from 'next/link';

const welcomeTexts = [
  'Bienvenue au Pacific City Hotel',
  'Votre confort, notre priorité',
  "Vivez une expérience d'exception",
  "Le luxe au cœur d'Obala",
];

const heroTitles = [
  {
    line1: "L'art de recevoir,",
    line2: 'réinventé pour vous',
  },
  {
    line1: "Un séjour d'exception,",
    line2: 'à votre image',
  },
  {
    line1: 'Le confort absolu,',
    line2: "au cœur d'Obala",
  },
  {
    line1: 'Chaque détail compte,',
    line2: 'pour votre bien-être',
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [phase, setPhase] = useState('typing');

  // Animation d'apparition
  useEffect(() => {
    setMounted(true);
  }, []);

  // Changement du texte de bienvenue
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % welcomeTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Animation du titre lettre par lettre
  useEffect(() => {
    const current = heroTitles[currentTitle];
    let timeout: NodeJS.Timeout | undefined;

    // ÉCRITURE DE LA PREMIÈRE LIGNE
    if (phase === 'typing-line1') {
      if (displayedLine1.length < current.line1.length) {
        timeout = setTimeout(() => {
          setDisplayedLine1(
            current.line1.slice(0, displayedLine1.length + 1)
          );
        }, 70);
      } else {
        setPhase('typing-line2');
      }
    }

    // ÉCRITURE DE LA DEUXIÈME LIGNE
    if (phase === 'typing-line2') {
      if (displayedLine2.length < current.line2.length) {
        timeout = setTimeout(() => {
          setDisplayedLine2(
            current.line2.slice(0, displayedLine2.length + 1)
          );
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setPhase('waiting');
        }, 3000);
      }
    }

    // PHASE D'ATTENTE
    if (phase === 'waiting') {
      timeout = setTimeout(() => {
        setPhase('deleting-line2');
      }, 3000);
    }

    // EFFACEMENT DE LA DEUXIÈME LIGNE
    if (phase === 'deleting-line2') {
      if (displayedLine2.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedLine2((prev) => prev.slice(0, -1));
        }, 40);
      } else {
        setPhase('deleting-line1');
      }
    }

    // EFFACEMENT DE LA PREMIÈRE LIGNE
    if (phase === 'deleting-line1') {
      if (displayedLine1.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedLine1((prev) => prev.slice(0, -1));
        }, 40);
      } else {
        setCurrentTitle((prev) => (prev + 1) % heroTitles.length);
        setPhase('typing-line1');
      }
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [
    phase,
    displayedLine1,
    displayedLine2,
    currentTitle,
  ]);

  // Démarrage de l'animation après le montage
  useEffect(() => {
    if (mounted) {
      setPhase('typing-line1');
    }
  }, [mounted]);

  return (
    <section className="relative h-[60vh] lg:h-screen w-full overflow-hidden bg-black">

      {/* IMAGE DE FOND */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      />

      {/* VOILES */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

      {/* CONTENU */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* ÉTOILES + TEXTE */}
        <div
          className={`mb-6 flex flex-col items-center gap-2 transition-all duration-1000 delay-100 ease-out sm:flex-row ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
         

          <div className="relative flex h-6 items-center justify-center overflow-hidden">
            <span
              key={currentText}
              className="animate-[welcome_0.6s_ease-out] text-center text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]"
            >
              {welcomeTexts[currentText]}
            </span>
          </div>
        </div>

        {/* TITRE PRINCIPAL */}
        <h1
          className={`font-serif font-bold leading-[1.05] text-white transition-all duration-1000 delay-500 ease-out ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="block min-h-[1.2em] text-4xl sm:text-6xl lg:text-7xl">
            {displayedLine1}
          </span>

          <span className="mt-1 block min-h-[1.2em] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-4xl text-transparent sm:mt-2 sm:text-6xl lg:text-7xl">
            {displayedLine2}

            {/* Curseur */}
            <span className="ml-1 inline-block h-[0.8em] w-[2px] animate-pulse bg-[#D4AF37]" />
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`mt-3 max-w-xl text-base leading-relaxed text-white/80 transition-all duration-1000 delay-[900ms] ease-out sm:text-lg ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          Chambres raffinées, gastronomie locale sublimée et service
          attentionné, au cœur d&apos;Obala. Le Pacific City Hotel vous accueille
          comme chez vous.
        </p>

        {/* BOUTON*/}
        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all duration-1000 delay-[1200ms] ease-out sm:flex-row ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <Link
            href="contact"
            className=" bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105 hover:bg-[#F3E5AB]"
          >
            Réserver mon séjour
          </Link>

          <Link
            href="#a-propos"
            className="border border-white/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/10"
          >
            Découvrir l&apos;hôtel
          </Link>
        </div>
      </div>

      {/* INDICATEUR DE SCROLL */}
      <div
        className={`absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-1000 delay-[1500ms] hidden lg:block ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
          Découvrir
        </span>

        <ChevronDown className=" vh-4 w-4 animate-bounce text-[#D4AF37]" />
      </div>

     
    </section>
  );
}