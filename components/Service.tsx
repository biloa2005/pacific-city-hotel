'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Users,
  UtensilsCrossed,
  Wine,
  Car,
  Clock,
  MapPin,
  Phone,
  Star,
  Wifi,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Salle de Réunion',
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'Room Service 24h/24',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: '3',
    title: 'Parking Sécurisé',
    icon: <Car className="w-6 h-6" />,
  },
  {
    id: '4',
    title: 'Bar & Lounge',
    icon: <Wine className="w-6 h-6" />,
  },
  {
    id: '5',
    title: 'Restauration',
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  
];

const quickInfo = [
  {
    icon: <Clock className="w-4 h-4" />,
    label: 'Check-in 14h',
    value: 'Check-out 12h',
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: 'Localisation',
    value: 'Obala, Cameroun',
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: 'Contact',
    value: '+237 651 052 543',
  },
  {
    icon: <Star className="w-4 h-4" />,
    label: 'Notation',
    value: '4.8 / 5',
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24"
    >
      {/* Décoration de fond */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D4AF37] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* EN-TÊTE */}
        <div
          className={`mb-12 text-center transition-all duration-1000 md:mb-16 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Pacific City Hotel
          </h2>

          {/* Soulignement doré */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#D4AF37]" />
            <div className="h-1 w-12 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]" />
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Nos Services
          </p>

          {/* Soulignement doré fin */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <div className="h-0.5 w-8 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* GRILLE DES SERVICES - RECTANGULAIRE SANS ARRONDIS */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {services.map((service, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <div
                key={service.id}
                style={{
                  transitionDelay: `${300 + index * 120}ms`,
                }}
                className={`group relative flex items-center gap-4 overflow-hidden border border-gray-100 bg-white p-4 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:shadow-lg md:p-5 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : fromLeft
                      ? '-translate-x-16 opacity-0'
                      : 'translate-x-16 opacity-0'
                }`}
              >
                {/* Icône */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-white">
                  {service.icon}
                </div>

                {/* Titre */}
                <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#D4AF37] md:text-base">
                  {service.title}
                </h3>

                {/* Ligne décorative au survol */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        {/* INFORMATIONS RAPIDES */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {quickInfo.map((info, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${900 + index * 100}ms`,
              }}
              className={`group flex items-center gap-3 border border-gray-100 bg-white p-3 shadow-sm transition-all duration-700 ease-out hover:border-[#D4AF37]/30 hover:shadow-md md:p-4 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="bg-[#D4AF37]/10 p-2 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-white">
                {info.icon}
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  {info.label}
                </p>

                <p className="truncate text-xs font-medium text-gray-800 md:text-sm">
                  {info.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}