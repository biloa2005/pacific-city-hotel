'use client';
//composant room slide que j ai adapter pour gallerie 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ROOM_IMAGES = [
  '/chambre/s2.webp',
  'hero.webp',
  '/chambre/c1.webp',
  '/chambre/c2.webp',
  '/chambre/s3.webp',
];

export default function RoomSlide() {
  return (
    <section className="relative w-full h-[55vh] lg:h-screen overflow-hidden bg-[#111111] mt-1">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: '.room-slide-prev',
          nextEl: '.room-slide-next',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'room-slide-bullet',
          bulletActiveClass: 'room-slide-bullet-active',
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
              
              {/* Assombrissement renforcé pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Texte "Pacific City Hotel - Galerie" en bas */}
              <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                
                  
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg tracking-wide">
                    Pacific City Hotel
                  </h2>
                  
                  <p className="text-white/80 text-sm sm:text-base mt-0.5 drop-shadow-md font-light tracking-wider">
                    Galerie
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

      {/* Indicateurs de pagination réduits */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {ROOM_IMAGES.map((_, index) => (
          <div
            key={index}
            className={`room-slide-bullet w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === 0 ? 'w-5 bg-[#D4AF37]' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}