'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import {
  Waves,
  Palette,
  Music2,
  TreePine,
  MapPin,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';

// Styles Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
   {
    id: '6',
    name: 'Pimenterie (grillades)',
    tag: 'Patrimoine Gastronomique',
    description:"Découvrez l'authenticité d'Obala à travers nos viandes sélectionnées, saisies à la perfection sur nos braises ardentes.",
      
    image: '/decouverte/grillade.webp',
    icon: MapPin,
    distance: 'Obala',
  },
];

export default function Entertainment() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  // Observer pour l'apparition de la section avec animation plus marquée
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Démarrer l'autoplay uniquement quand la section est visible
  useEffect(() => {
    if (isVisible && swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="divertissement"
      className="relative w-full bg-[#FDFBF7] text-stone-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-[#D4AF37] selection:text-white"
    >
      {/* Halo lumineux subtil de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D4AF37]/10 blur-[140px] pointer-events-none" />
      
      {/* Décoration géométrique inspirée d'Andou Anfa */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-[#D4AF37]/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#D4AF37]/10 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4AF37]/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EN-TÊTE DE SECTION AVEC EFFET D'APPARITION RENFORCÉ */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="h-[1px] w-12 bg-[#D4AF37] transition-all duration-1000 delay-300" />
            <span className="text-[#D4AF37] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light">
              Découvrez les alentours
            </span>
            <span className="h-[1px] w-12 bg-[#D4AF37] hidden sm:block transition-all duration-1000 delay-300" />
          </div>

          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide text-stone-900 leading-[1.1] mb-5 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Autour de l'hôtel
            <br />
            <span className=" font-light text-[#D4AF37]">à Obala</span>
          </h2>

          <p
            className={`text-stone-500 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl transition-all duration-1000 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Entre nature luxuriante, savoir-faire ancestral et moments d'évasion, 
            découvrez les joyaux de notre région sélectionnés pour sublimer votre séjour.
          </p>
        </div>

        {/* SLIDER SWIPER AVEC EFFET D'APPARITION */}
        <div
          className={`relative transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Démarrer l'autoplay seulement si la section est déjà visible
              if (isVisible) {
                swiper.autoplay.start();
              }
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="rounded-2xl overflow-hidden shadow-2xl"
            loop={false}
          >
            {ACTIVITIES.map((activity) => {
              const Icon = activity.icon;
              
              return (
               <SwiperSlide key={activity.id}>
  {/* Hauteur réduite sur tous les écrans */}
  <div className="relative h-[280px] sm:h-[380px] lg:h-[450px] xl:h-[480px]">
    {/* Image de fond */}
    <Image
      src={activity.image}
      alt={activity.name}
      fill
      sizes="80vw"
      className="object-cover"
      priority
    />

    {/* Overlay gradient - plus subtil */}
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
    
    {/* Overlay latéral pour un effet plus sophistiqué */}
    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/10 to-transparent" />

    {/* Contenu du slide - aligné à gauche */}
    <div className="absolute inset-0 flex items-end lg:items-center z-10">
      {/* Padding réduit pour les petits écrans */}
      <div className="w-full px-4 sm:px-8 lg:px-14 xl:px-16 pb-6 sm:pb-12 lg:pb-16">
        <div className="max-w-2xl">
          {/* Tag - plus petit sur mobile */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[8px] sm:text-xs uppercase tracking-[0.2em] font-light mb-2 sm:mb-4">
            <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
            {activity.tag}
          </div>

          {/* Titre - plus petit sur mobile */}
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-light tracking-wide leading-[1.1] mb-2 sm:mb-4">
            {activity.name}
          </h3>

          {/* Description - masquée sur très petit écran */}
          <p className="sm:block text-white/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
            {activity.description}
          </p>

          {/* Distance et lien */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {activity.distance && (
              <div className="inline-flex items-center gap-1.5 sm:gap-2 text-white/60 text-[8px] sm:text-xs uppercase tracking-widest font-light">
                <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                {activity.distance}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation personnalisée - Style épuré Andou Anfa */}
          <button
            className="hidden lg:block swiper-button-prev-custom absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 group"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className=" swiper-button-next-custom absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 group hidden lg:block"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination personnalisée - Style Andou Anfa */}
          <div className="swiper-pagination-custom absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" />

          {/* Compteur de slides - Épuré */}
          <div className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/60 text-[10px] sm:text-xs font-light tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(ACTIVITIES.length).padStart(2, '0')}
          </div>
        </div>

        {/* Mini-indicateurs en bas - Style minimaliste */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-3">
          {ACTIVITIES.map((activity, index) => {
            const isActive = index === activeIndex;
            const Icon = activity.icon;

            return (
              <button
                key={activity.id}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideTo(index);
                  }
                }}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                    : 'border-stone-200/60 bg-white/50 text-stone-400 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <Icon className={`w-3 h-3 transition-colors duration-300 ${
                  isActive ? 'text-[#D4AF37]' : 'text-stone-400 group-hover:text-stone-600'
                }`} />
                <span className="text-[10px] sm:text-xs font-light tracking-wider hidden sm:inline">
                  {activity.name.length > 15 ? activity.name.slice(0, 15) + '...' : activity.name}
                </span>
              </button>
            );
          })}
        </div>

            </div>
    </section>
  );
}