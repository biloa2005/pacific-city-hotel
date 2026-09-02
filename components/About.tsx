'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Award, Users, BedDouble } from 'lucide-react';

const STATS = [
  { icon: BedDouble, value: '26', label: 'Chambres & suites' },
  { icon: Award, value: '20', label: "Années d'excellence" },
  { icon: Users, value: '8K+', label: 'Voyageurs accueillis' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // se déclenche une seule fois
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      className="relative w-full bg-[#FAF8F3] py-20 sm:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* IMAGE */}
        <div
          className={`relative order-2 lg:order-1 transition-all duration-700 ease-out hidden md:block ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src="/about.webp"
              alt="Hall d'accueil du Pacific Hotel"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            {/* Cadre décoratif en accent or */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[#D4AF37] rounded-2xl -z-10 hidden sm:block" />

            {/* Badge flottant */}
            <div className="absolute -bottom-6 left-6 sm:left-auto sm:-right-6 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">Obala, Cameroun</p>
                <p className="text-xs text-gray-500">Au cœur de la ville</p>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTE */}
        <div className="order-1 lg:order-2">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            À propos de nous
          </span>

          <h2
            className={`font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Une hospitalité pensée{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] bg-clip-text text-transparent">
              dans les moindres détails
            </span>
          </h2>

          <p
            className={`text-gray-600 leading-relaxed mb-4 transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Depuis plus de 15 ans, le Pacific city Hotel accueille voyageurs, touristes
            d&apos;affaires et familles au cœur d&apos;Obala. Chaque chambre,
            chaque plat, chaque échange avec notre équipe est pensé pour vous
            faire sentir attendu, et non simplement logé.
          </p>

          <p
            className={`text-gray-600 leading-relaxed mb-8 transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Un cadre élégant, un service attentif et une cuisine locale
            sublimée : voici ce qui distingue notre établissement dans le
            paysage hôtelier camerounais.
          </p>

          {/* STATISTIQUES */}
          <div
            className={`grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200 transition-all duration-700 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <Icon className="w-5 h-5 text-[#D4AF37] mx-auto sm:mx-0 mb-2" />
                <p className="font-serif font-bold text-2xl sm:text-3xl text-gray-900">
                  {value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}