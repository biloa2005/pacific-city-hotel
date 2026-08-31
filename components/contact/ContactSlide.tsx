'use client';
//composant room slide que j ai adapter pour gallerie 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const ROOM_IMAGES = [
  'hero.webp',
  'about.webp',
];

export default function Slide() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full h-[55vh] lg:h-screen overflow-hidden bg-[#111111]">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: '.room-slide-prev',
          nextEl: '.room-slide-next',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-full"
      >
        {ROOM_IMAGES.map((src, index) => (
          <SwiperSlide key={src}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Pacific City Hotel ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
              
              {/* Texte "Pacific City Hotel" en bas */}
              <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                 
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg tracking-wide">
                    Pacific City Hotel
                  </h2>
                  
                  <p className="text-white/80 text-sm sm:text-base mt-1 drop-shadow-md font-light tracking-wider">
                    Obala, Cameroun
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flèches de navigation */}
      <button
        className="room-slide-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-[#D4AF37] text-[#111111] hover:text-white transition-all duration-300 shadow-lg"
        aria-label="Image précédente"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        className="room-slide-next absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-[#D4AF37] text-[#111111] hover:text-white transition-all duration-300 shadow-lg"
        aria-label="Image suivante"
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicateurs de pagination personnalisés - 2 points */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {ROOM_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === 0 ? 'w-6 bg-[#D4AF37]' : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}