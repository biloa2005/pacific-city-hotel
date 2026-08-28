'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ROOM_IMAGES = [
  '/chambre/s2.webp',
  '/chambre/b2.webp',
  '/chambre/c1.webp',
  '/chambre/c2.webp',
  '/chambre/baignoire.webp',
  '/chambre/m2.webp',
  '/chambre/s3.webp',
];

export default function RoomSlide() {
  return (
    <section className="relative w-full h-[55vh] lg:h-screen overflow-hidden bg-[#111111]">
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
                alt={`Chambre Pacific Hotel ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay doux pour la lisibilité des contrôles */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
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

     
    </section>
  );
}