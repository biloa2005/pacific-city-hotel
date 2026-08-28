'use client';

import { useRouter } from 'next/navigation';

export default function AboutRooms() {
  const router = useRouter();

  return (
    <section className="w-full bg-[#FDFBF7] py-16 px-6 sm:px-12 text-stone-900 selection:bg-[#D4AF37] selection:text-white">
      <div className="max-w-3xl mx-auto text-center">

        {/* SUR-TITRE */}
        <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold block mb-3">
          Bienvenue chez nous
        </span>

        {/* TITRE PRINCIPAL */}
        <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-[#D4AF37] mb-6">
          À propos de nos chambres
        </h2>

        {/* LIGNE DE SÉPARATION */}
        <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8" />

        {/* PARAGRAPHE */}
        <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-2xl mx-auto">
          Pour un séjour d’exception au cœur d’Obala, l’Hôtel Pacific City vous invite
          à découvrir ses chambres d’une élégance rare, parfaites pour un moment
          d’évasion en couple, en famille ou lors de vos déplacements professionnels.
          Alliant confort moderne et charme chaleureux, elles offrent un cadre idéal
          pour vivre une expérience mémorable et paisible.
        </p>

        {/* BOUTON */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push('/contact')}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-medium tracking-widest uppercase text-sm border-2 border-[#D4AF37] text-[#D4AF37] transition-colors duration-300 ease-in-out hover:text-white overflow-hidden shadow-sm hover:shadow-md"
          >
            {/* Arrière-plan animé */}
            <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-0" />

            {/* Texte */}
            <span className="relative z-10">
              Réserver
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}