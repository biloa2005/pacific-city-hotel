'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, } from 'swiper/modules';
import 'swiper/css/effect-fade';
import {
  Users,
  Bath,
  Coffee,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Room {
  id: string;
  plaque: string;
  name: string;
  categoryLabel: string;
  images: [string, string];
  price: number;
 
  amenities: string[];
  featured?: boolean;
}

// ======================================================
// CHAMBRES
// ======================================================

const ROOMS: Room[] = [
  {
    id: '1',
    plaque: '301',
    name: 'Chambre Prestige Baignoire',
    categoryLabel: 'Baignoire',
    images: ['/chambre/b1.webp', '/chambre/b2.webp'],
    price: 85000,
  
    amenities: ['Baignoire/colonne'],
    featured: true,
  },
  {
    id: '3',
    plaque: '205',
    name: 'Suite Présidentielle',
    categoryLabel: 'Suite',
    images: ['/chambre/s3.webp', '/chambre/c2.webp'],
    price: 48000,
  
    amenities: ['Baignoire', 'Salon privé'],
  },
  {
    id: '6',
    plaque: '112',
    name: 'Chambre Standard Double',
    categoryLabel: 'Standard',
    images: [ '/chambre/c1.webp','/chambre/m2.webp'],
    price: 32000,
   
    amenities: ['Douche'],
  },
];

// ======================================================
// ICÔNES DES ÉQUIPEMENTS
// ======================================================

const AMENITY_ICONS: Record<string, typeof Bath> = {
  Baignoire: Bath,
  Douche: Bath,
  'Salon privé': Coffee,
  'Vue jardin': Coffee,
};

// ======================================================
// COMPOSANT
// ======================================================

export default function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // ====================================================
  // ANIMATION À L'APPARITION
  // ====================================================

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
      {
        threshold: 0.18,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chambres"
      className="relative w-full bg-[#FAF9F6] py-20 sm:py-28 px-6 overflow-hidden"
    >
      {/* ==================================================
          TEXTURE DE FOND
      ================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Petites décorations dorées */}

      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />

      {/* ==================================================
          CONTENU PRINCIPAL
      ================================================== */}

      <div className="relative max-w-7xl mx-auto">

        {/* ==================================================
            EN-TÊTE
        ================================================== */}

        <div className="text-center max-w-2xl mx-auto mb-16">

          {/* Petit titre */}

          <span
            className={`inline-block text-[#B08A18] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
          >
            Nos hébergements
          </span>

          {/* Titre */}

          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
              }`}
          >
            Trois univers,{' '}
            <span className="bg-gradient-to-r from-[#B08A18] via-[#D4AF37] to-[#B08A18] bg-clip-text text-transparent">
              une même exigence
            </span>
          </h2>

          {/* Description */}

          <p
            className={`text-[#78716C] leading-relaxed transition-all duration-700 delay-200 ease-out ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
              }`}
          >
            Suite, baignoire ou standard : chaque chambre du Pacific Hotel
            porte sa propre plaque, son propre caractère.
          </p>
        </div>

        {/* ==================================================
            GRILLE DES CHAMBRES
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {ROOMS.map((room, index) => (
            <div
              key={room.id}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-[#E7E2D8] shadow-sm transition-all duration-700 ease-out hover:border-[#D4AF37]/70 hover:shadow-xl hover:-translate-y-1 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >

              {/* ==================================================
                  IMAGE / SWIPER
              ================================================== */}

              <div className="relative aspect-[4/3] overflow-hidden">

                <Swiper
  modules={[
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
  ]}
  effect="fade"
  fadeEffect={{
    crossFade: true,
  }}
  speed={1000}
  navigation={{
    prevEl: `.prev-${room.id}`,
    nextEl: `.next-${room.id}`,
  }}
  pagination={{
    clickable: true,
    el: `.pag-${room.id}`,
  }}
  autoplay={{
    delay: 4500,
    disableOnInteraction: false,
  }}
  loop
  className="h-full w-full room-swiper"
>
                  {room.images.map((img, i) => (
                    <SwiperSlide key={i}>

                      <img
  src={img}
  alt={`${room.name} — vue ${i + 1}`}
  className="w-full h-full object-cover room-image"
/>

                    </SwiperSlide>
                  ))}

                </Swiper>

                {/* ==================================================
                    VOILE SUR L'IMAGE
                ================================================== */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 z-[5]" />

                {/* ==================================================
                    PLAQUE DE CHAMBRE
                ================================================== */}

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg border border-[#D4AF37]/50 shadow-sm">

                  <span className="font-serif text-[#9A7610] text-sm font-bold tracking-wider">
                    N°{room.plaque}
                  </span>

                </div>

                {/* ==================================================
                    BADGE POPULAIRE
                ================================================== */}

                {room.featured && (
                  <span className="absolute top-4 right-14 z-10 flex items-center gap-1 px-3 py-1.5 bg-[#D4AF37] rounded-full text-xs font-semibold text-[#1C1917] shadow-md">

                    <Star className="w-3 h-3 fill-[#1C1917]" />

                    Populaire

                  </span>
                )}

                {/* ==================================================
                    FLÈCHE GAUCHE
                ================================================== */}

                <button
                  aria-label="Image précédente"
                  className={`prev-${room.id} absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#1C1917] shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* ==================================================
                    FLÈCHE DROITE
                ================================================== */}

                <button
                  aria-label="Image suivante"
                  className={`next-${room.id} absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#1C1917] shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* ==================================================
                    PAGINATION
                ================================================== */}

                <div
                  className={`pag-${room.id} absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5`}
                />

              </div>

              {/* ==================================================
                  CONTENU DE LA CARTE
              ================================================== */}

              <div className="p-6">

                {/* ==================================================
                    NOM + CATÉGORIE
                ================================================== */}

                <div className="flex items-start justify-between mb-2 gap-3">

                  <h3 className="font-serif font-bold text-xl text-[#1C1917] leading-tight">
                    {room.name}
                  </h3>

                  <span className="shrink-0 px-2.5 py-1 bg-[#D4AF37]/10 text-[#9A7610] rounded-md text-[10px] font-semibold uppercase tracking-wide">
                    {room.categoryLabel}
                  </span>

                </div>

                {/* ==================================================
                    CAPACITÉ
                ================================================== */}

                <span className="flex items-center gap-1 text-xs text-[#78716C] mb-4">

                

              

                </span>

                {/* ==================================================
                    ÉQUIPEMENTS
                ================================================== */}

                <div className="flex flex-wrap gap-2 mb-5">

                  {room.amenities.map((amenity) => {

                    const Icon =
                      AMENITY_ICONS[amenity] ?? Coffee;

                    return (
                      <span
                        key={amenity}
                        className="flex items-center gap-1 px-2.5 py-1.5 bg-[#F5F2EA] border border-[#E7E2D8] rounded-md text-[11px] text-[#78716C]"
                      >

                        <Icon className="w-3 h-3 text-[#B08A18]" />

                        {amenity}

                      </span>
                    );

                  })}

                </div>

                {/* ==================================================
                    PRIX + BOUTON
                ================================================== */}

                <div className="flex items-center justify-between pt-4 border-t border-[#E7E2D8]">

                  <div>

                    <p className="text-[10px] text-[#A8A29A] uppercase tracking-wide">
                      À partir de
                    </p>

                    <p className="font-serif font-bold text-lg text-[#1C1917]">

                      {room.price.toLocaleString('fr-FR')} FCFA

                      <span className="text-xs font-normal text-[#78716C]">
                        {' '}
                        /nuit
                      </span>

                    </p>

                  </div>

                  <a
                    href="#contact"
                    className="px-4 py-2.5 bg-[#D4AF37] text-[#1C1917] text-xs font-semibold rounded-full shadow-sm hover:bg-[#B08A18] hover:text-white transition-all duration-300 hover:shadow-md"
                  >
                    Réserver
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ==================================================
          STYLE SWIPER
      ================================================== */}

   
    </section>
  );
}
