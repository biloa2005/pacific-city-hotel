'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Waves,
  Palette,
  Music2,
  TreePine,
  MapPin,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';

interface Activity {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  icon: LucideIcon;
  distance?: string;
}

const ACTIVITIES: Activity[] = [
  {
    id: '1',
    name: 'Chutes de Nachtigal',
    tag: 'Nature & Aventure',
    description:
      "De puissants rapides sur le fleuve Sanaga, à quelques kilomètres d'Obala. Une excursion en pirogue s'impose pour admirer ce spectacle naturel au cœur de la forêt.",
    image: '/decouverte/natchigal.webp',
    icon: Waves,
    distance: "À proximité d'Obala",
  },
  {
    id: '2',
    name: 'Artisanat Local',
    tag: 'Culture & Savoir-faire',
    description:
      "Marchés et ateliers d'artisans où poteries, sculptures sur bois et tissages traditionnels racontent le patrimoine de la région du Centre.",
    image: '/decouverte/artisanat.webp',
    icon: Palette,
    distance: "Centre-ville d'Obala",
  },
  {
    id: '3',
    name: 'Complexe Lafleur',
    tag: 'Loisirs & Spectacle',
    description:
      'Piscine, glacier, grillades, cave et snack-bar réunis en un seul lieu, avec des spectacles de cabaret chaque week-end.',
    image: '/decouverte/lafleur.webp',
    icon: Music2,
    distance: 'Obala',
  },
  {
    id: '4',
    name: 'Le BayaMa',
    tag: 'Détente au Vert',
    description:
      'Un cadre idyllique et convivial, très prisé pour se ressourcer au vert et déguster des produits locaux dans une ambiance paisible.',
    image: '/decouverte/bayama.webp',
    icon: TreePine,
    distance: 'Obala',
  },
  {
    id: '5',
    name: 'Tradition du Vin de Palme',
    tag: 'Patrimoine Gastronomique',
    description:
      'Assistez au savoir-faire ancestral de la récolte du vin de palme au lever du jour et dégustez une boisson authentique.',
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
          observer.disconnect(); // On anime une seule fois
        }
      },
      { 
        // AJUSTEMENT ICI : L'animation se déclenche quand 60% de la section est visible.
        // Cela laisse le temps à l'utilisateur de "rentrer" dans la zone avant le scale.
        threshold: 0.20 
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const primaryActivity = ACTIVITIES[0];
  const secondaryActivities = ACTIVITIES.slice(1);

  return (
    <section
      ref={sectionRef}
      id="divertissement"
      className="relative w-full bg-[#FDFBF7] text-stone-900 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden selection:bg-[#D4AF37] selection:text-white"
    >
      {/* Halo lumineux subtil de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D4AF37]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
              Expériences & Découvertes
            </span>
          </div>

          <h2
            className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide text-stone-900 leading-[1.15] mb-6 transition-all duration-1000 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Autour de l’hôtel <br />
            <span className="italic font-normal text-[#D4AF37]">à Obala</span>
          </h2>

          <p
            className={`text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Entre nature luxuriante, savoir-faire ancestral et moments d’évasion, découvrez les joyaux de notre région sélectionnés pour sublimer votre séjour.
          </p>
        </div>

        {/* GRILLE DES ACTIVITÉS AVEC ANIMATION RALENTIE (SCALE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* CARTE HERO / PRINCIPALE */}
          <div
            className={`lg:col-span-7 group relative h-[480px] sm:h-[600px] rounded-lg overflow-hidden border border-stone-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              // Animation de scale 'petite -> grande' avec opacité
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ 
              // Délai initial généreux pour l'en-tête, augmenté à 600ms
              transitionDelay: isVisible ? '600ms' : '0ms' 
            }}
          >
            <Image
              src={primaryActivity.image}
              alt={primaryActivity.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 z-10">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-xs text-stone-800 tracking-wider font-medium shadow-sm">
                  <primaryActivity.icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {primaryActivity.tag}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/40 flex items-center justify-center text-stone-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-sm">
                  <ArrowUpRight className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>

              <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl sm:text-4xl text-white mb-3 font-normal tracking-wide">
                  {primaryActivity.name}
                </h3>
                
                <p className="text-stone-200 text-sm sm:text-base line-clamp-3 leading-relaxed max-w-xl font-light mb-6">
                  {primaryActivity.description}
                </p>

                {primaryActivity.distance && (
                  <div className="inline-flex items-center gap-2 text-xs text-[#E6C687] uppercase tracking-widest pt-4 border-t border-white/20 w-full font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {primaryActivity.distance}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* GRILLE SECONDAIRE */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
            {secondaryActivities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.id}
                  className={`group relative h-[280px] sm:h-[284px] rounded-lg overflow-hidden border border-stone-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    // Délais progressifs augmentés pour que l'utilisateur voie la cascade
                    // Base 800ms + 250ms par carte supplémentaire
                    transitionDelay: isVisible ? `${800 + index * 250}ms` : '0ms',
                  }}
                >
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    <div className="flex justify-between items-start">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/40 text-[11px] text-stone-800 tracking-wider font-medium shadow-sm">
                        <Icon className="w-3 h-3 text-[#D4AF37]" />
                        {activity.tag}
                      </span>
                      
                      <ArrowUpRight className="w-4 h-4 text-[#E6C687] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl text-white mb-2 font-normal tracking-wide group-hover:text-[#E6C687] transition-colors duration-300">
                        {activity.name}
                      </h3>

                      <p className="text-stone-300 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}