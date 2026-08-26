'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Waves,
  Palette,
  Music2,
  TreePine,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

interface Activity {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  icon: typeof Waves;
  distance?: string;
}

const ACTIVITIES: Activity[] = [
  {
    id: '1',
    name: 'Chutes de Nachtigal',
    tag: 'Nature & aventure',
    description:
      "De puissants rapides sur le fleuve Sanaga, à quelques kilomètres d'Obala. Une excursion en pirogue s'impose pour admirer ce spectacle naturel au cœur de la forêt.",
    image: '/decouverte/natchigal.webp',
    icon: Waves,
    distance: "À proximité d'Obala",
  },
  {
    id: '2',
    name: 'Artisanat local',
    tag: 'Culture & savoir-faire',
    description:
      "Marchés et ateliers d'artisans où poteries, sculptures sur bois et tissages traditionnels racontent le patrimoine de la région du Centre.",
    image: '/decouverte/artisanat.webp',
    icon: Palette,
    distance: "Centre-ville d'Obala",
  },
  {
    id: '3',
    name: 'Complexe Lafleur',
    tag: 'Loisirs & spectacle',
    description:
      "Piscine, glacier, grillades, cave et snack-bar réunis en un seul lieu, avec des spectacles de cabaret chaque week-end pour une soirée animée.",
    image: '/decouverte/lafleur.webp',
    icon: Music2,
    distance: 'Obala',
  },
  {
    id: '4',
    name: 'Le BayaMa',
    tag: 'Détente au vert',
    description:
      "Un cadre idyllique et convivial, très prisé pour se ressourcer au vert et déguster des produits locaux dans une ambiance paisible.",
    image: '/decouverte/bayama.webp',
    icon: TreePine,
    distance: 'Obala',
  },
  {
    id: '5',
    name: 'La Tradition du Vin de Palme',
    tag: 'vin de palme',
    description:
      "Assistez au savoir-faire ancestral de la récolte du vin blanc (vin de palme). Au cœur de la nature, rencontrez nos passionnés locaux qui perpétuent cette tradition unique et dégustez une boisson fraîche et authentique au lever du jour.",
    image: '/decouverte/vin.webp',
    icon: MapPin,
    distance: 'Obala',
  },
];

export default function Entertainment() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.19}
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="divertissement"
      className="relative w-full bg-[#FAF8F3] py-20 sm:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
          >
            Autour de l&apos;hôtel
          </span>

          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
              }`}
          >
            À découvrir{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] bg-clip-text text-transparent">
              à Obala
            </span>
          </h2>

          <p
            className={`text-gray-600 leading-relaxed transition-all duration-700 delay-200 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
              }`}
          >
            Entre nature, culture et vie locale, Obala offre bien plus
            qu&apos;une étape : une véritable expérience à vivre pendant votre
            séjour.
          </p>
        </div>

        {/* GRILLE DES ACTIVITÉS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* CARTE PRINCIPALE */}
          <div
            className={`lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[420px] transition-all duration-700 delay-200 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
          >
            <img
              src={ACTIVITIES[0].image}
              alt={ACTIVITIES[0].name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 bg-[#D4AF37]/90 rounded-full text-[11px] font-semibold text-black mb-3">
                <Waves className="w-3 h-3" />
                {ACTIVITIES[0].tag}
              </span>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
                {ACTIVITIES[0].name}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                {ACTIVITIES[0].description}
              </p>

              <span className="flex items-center gap-1 text-xs text-[#D4AF37] mt-4">
                <MapPin className="w-3.5 h-3.5" />
                {ACTIVITIES[0].distance}
              </span>
            </div>
          </div>

          {/* AUTRES CARTES */}
          {ACTIVITIES.slice(1).map((activity, index) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.id}
                className={`group relative rounded-2xl overflow-hidden min-h-[200px] transition-all duration-700 ease-out ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: `${300 + index * 120}ms`,
                }}
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-5">
                  <span className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 bg-[#D4AF37]/90 rounded-full text-[10px] font-semibold text-black mb-2">
                    <Icon className="w-3 h-3" />
                    {activity.tag}
                  </span>

                  <h3 className="font-serif font-bold text-lg text-white mb-1.5 flex items-center gap-1.5">
                    {activity.name}

                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>

                  <p className="text-white/65 text-xs leading-relaxed line-clamp-2">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}