'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Users, Maximize, Wifi, Bath, Coffee, Star } from 'lucide-react';

type Category = 'toutes' | 'suite' | 'baignoire' | 'standard';

interface Room {
  id: string;
  name: string;
  category: Exclude<Category, 'toutes'>;
  categoryLabel: string;
  image: string;
  price: number;
  capacity: number;
  size: number;
  amenities: string[];
  featured?: boolean;
}

const FILTERS: { key: Category; label: string }[] = [
  { key: 'toutes', label: 'Toutes les chambres' },
  { key: 'suite', label: 'Suites' },
  { key: 'baignoire', label: 'Chambres avec Baignoire' },
  { key: 'standard', label: 'Chambres Standard' },
];

const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Suite Présidentielle',
    category: 'suite',
    categoryLabel: 'Suite',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
    price: 85000,
    capacity: 2,
    size: 55,
    amenities: ['Wifi', 'Baignoire', 'Salon privé'],
    featured: true,
  },
  {
    id: '2',
    name: 'Suite Junior',
    category: 'suite',
    categoryLabel: 'Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    price: 65000,
    capacity: 2,
    size: 40,
    amenities: ['Wifi', 'Baignoire', 'Coin salon'],
  },
  {
    id: '3',
    name: 'Chambre Prestige Baignoire',
    category: 'baignoire',
    categoryLabel: 'Baignoire',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop',
    price: 48000,
    capacity: 2,
    size: 30,
    amenities: ['Wifi', 'Baignoire', 'Vue jardin'],
  },
  {
    id: '4',
    name: 'Chambre Confort Baignoire',
    category: 'baignoire',
    categoryLabel: 'Baignoire',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop',
    price: 42000,
    capacity: 2,
    size: 26,
    amenities: ['Wifi', 'Baignoire'],
  },
  {
    id: '5',
    name: 'Chambre Standard Simple',
    category: 'standard',
    categoryLabel: 'Standard',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1200&auto=format&fit=crop',
    price: 28000,
    capacity: 1,
    size: 20,
    amenities: ['Wifi', 'Douche'],
  },
  {
    id: '6',
    name: 'Chambre Standard Double',
    category: 'standard',
    categoryLabel: 'Standard',
    image: 'https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=1200&auto=format&fit=crop',
    price: 32000,
    capacity: 2,
    size: 22,
    amenities: ['Wifi', 'Douche'],
  },
];

const AMENITY_ICONS: Record<string, typeof Wifi> = {
  Wifi: Wifi,
  Baignoire: Bath,
  Douche: Bath,
  'Salon privé': Coffee,
  'Coin salon': Coffee,
  'Vue jardin': Coffee,
};

export default function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Category>('toutes');

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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredRooms = useMemo(() => {
    if (activeFilter === 'toutes') return ROOMS;
    return ROOMS.filter((room) => room.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="chambres"
      className="relative w-full bg-white py-20 sm:py-28 px-6 overflow-hidden"
    >
      {/* Animation keyframes pour l'apparition des cartes au changement de filtre */}
      <style>{`
        @keyframes roomFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .room-card-animate {
          animation: roomFadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Nos hébergements
          </span>
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Choisissez votre{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] bg-clip-text text-transparent">
              chambre idéale
            </span>
          </h2>
          <p
            className={`text-gray-600 leading-relaxed transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Du confort essentiel à l&apos;expérience suite, chaque chambre du
            Pacific Hotel est pensée pour votre bien-être.
          </p>
        </div>

        {/* FILTRES */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20'
                  : 'bg-transparent border-gray-200 text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* GRILLE DE CHAMBRES */}
        <div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredRooms.map((room, index) => (
            <div
              key={room.id}
              className="room-card-animate group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {/* Badge catégorie */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                  {room.categoryLabel}
                </span>
                {room.featured && (
                  <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-[#D4AF37] rounded-full text-xs font-semibold text-black">
                    <Star className="w-3 h-3 fill-black" />
                    Populaire
                  </span>
                )}
              </div>

              {/* CONTENU */}
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">
                  {room.name}
                </h3>

                {/* Infos rapides */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {room.capacity} pers.
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5" />
                    {room.size} m²
                  </span>
                </div>

                {/* Équipements */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.amenities.map((amenity) => {
                    const Icon = AMENITY_ICONS[amenity] ?? Wifi;
                    return (
                      <span
                        key={amenity}
                        className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 rounded-md text-[11px] text-gray-600"
                      >
                        <Icon className="w-3 h-3 text-[#D4AF37]" />
                        {amenity}
                      </span>
                    );
                  })}
                </div>

                {/* Prix + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                      À partir de
                    </p>
                    <p className="font-serif font-bold text-lg text-gray-900">
                      {room.price.toLocaleString('fr-FR')} FCFA
                      <span className="text-xs font-normal text-gray-500"> /nuit</span>
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ÉTAT VIDE (sécurité si un filtre ne retourne rien) */}
        {filteredRooms.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Aucune chambre disponible dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}