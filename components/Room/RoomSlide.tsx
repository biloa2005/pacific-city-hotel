'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star, Award } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const ROOM_IMAGES = [
  { src: '/chambre/s2.webp', title: 'Chambres d\'Exception', description: 'Un cadre raffiné pour un séjour inoubliable' },
  { src: '/chambre/b2.webp', title: 'Confort Absolu', description: 'Chaque détail est pensé pour votre bien-être' },
  { src: '/chambre/c1.webp', title: 'Élégance et Sérénité', description: 'Une atmosphère apaisante pour vous ressourcer' },
  { src: '/chambre/c2.webp', title: 'Luxure et Authenticité', description: 'Le charme de l\'Afrique au cœur de la ville' },
  { src: '/chambre/baignoire.webp', title: 'Détente et Bien-Être', description: 'Offrez-vous un moment de relaxation absolue' },
  { src: '/chambre/m2.webp', title: 'Design Contemporain', description: 'Une esthétique moderne pour votre confort' },
  { src: '/chambre/s3.webp', title: 'Hospitalité Légendaire', description: 'Nous mettons tout en œuvre pour votre satisfaction' },
];

const testimonials = [
  { text: '"Un séjour exceptionnel, je reviendrai !"', author: 'Marie D.' },
  { text: '"Le meilleur hôtel de la ville, service impeccable."', author: 'Jean P.' },
  { text: '"Des chambres magnifiques et un personnel aux petits soins."', author: 'Sophie L.' },
];

export default function RoomSlide() {
  return (
    <section className="relative w-full h-[55vh] lg:h-screen overflow-hidden bg-[#111111]">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: '.room-slide-prev',
          nextEl: '.room-slide-next',
        }}
        className="w-full h-full"
      >
        {ROOM_IMAGES.map((image, index) => (
          <SwiperSlide key={image.src}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={`Chambre Pacific Hotel ${index + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Assombrissement pour la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
              <div className="absolute inset-0 bg-black/30" />

              {/* MESSAGE EN BLANC SUR GRAND ÉCRAN */}
              <div className="absolute inset-0 flex items-center justify-center lg:flex hidden">
                <div className="max-w-3xl mx-8 text-center">
                  {/* Ligne décorative dorée */}
                  <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-5" />
                  
                  {/* Étoile décorative */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-wider">
                    {image.title}
                  </h2>
                  
                  <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 font-light tracking-wide drop-shadow-md max-w-2xl mx-auto">
                    {image.description}
                  </p>

                  {/* Ligne décorative dorée */}
                  <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />

                  {/* Témoignage client */}
                  <div className="max-w-md mx-auto">
                    <p className="text-white/80 text-sm italic mb-2 drop-shadow-md">
                      "{testimonials[index % testimonials.length].text}"
                    </p>
                    <p className="text-[#D4AF37] text-xs font-medium tracking-wider">
                      — {testimonials[index % testimonials.length].author}
                    </p>
                  </div>

                
                </div>
              </div>

              {/* Version mobile - message simplifié en bas */}
              <div className="absolute bottom-8 left-0 right-0 px-6 lg:hidden">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <h3 className="text-white text-lg font-bold drop-shadow-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm drop-shadow-lg">{image.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flèches de navigation */}
      <button
        className="room-slide-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#D4AF37] text-white hover:text-[#111111] transition-all duration-300 shadow-lg border border-white/20 hover:border-[#D4AF37]"
        aria-label="Image précédente"
      >
        <ChevronLeft size={24} className="lg:w-6 lg:h-6" />
      </button>
      <button
        className="room-slide-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#D4AF37] text-white hover:text-[#111111] transition-all duration-300 shadow-lg border border-white/20 hover:border-[#D4AF37]"
        aria-label="Image suivante"
      >
        <ChevronRight size={24} className="lg:w-6 lg:h-6" />
      </button>

      {/* Badge de compteur */}
      <div className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
        <span className="text-white text-[10px] font-light tracking-wider">
          {String(1).padStart(2, '0')} / {String(ROOM_IMAGES.length).padStart(2, '0')}
        </span>
      </div>

      {/* Badge de confiance */}
      <div className="absolute top-6 right-6 z-10 hidden lg:flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-[#D4AF37]/30">
        <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="text-white text-[10px] font-light tracking-wider">Hôtel 5 étoiles</span>
      </div>
    </section>
  );
}