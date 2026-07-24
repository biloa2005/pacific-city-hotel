'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';


// la librairie, donc on utilise de simples SVG inline pour ces réseaux.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/123456789' },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+123 456 789',
    href: 'tel:+123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@pacifichotel.cm',
    href: 'mailto:contact@pacifichotel.cm',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: "En face de la Mairie d'Obala, Obala, Cameroun",
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Réception',
    value: 'Ouverte 24h/24, 7j/7',
    href: undefined,
  },
];

export default function Contact() {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0B0B0B] py-20 sm:py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact
          </span>
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Parlons de{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent">
              votre séjour
            </span>
          </h2>
          <p
            className={`text-white/60 leading-relaxed transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Une question, une réservation ? Notre équipe vous répond avec
            plaisir, à toute heure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* CARTE GOOGLE MAPS (gauche) */}
          <div
            className={`relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-[480px] border border-white/10 transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <iframe
              title="Localisation du Pacific Hotel - En face de la Mairie d'Obala"
              src="https://www.google.com/maps?q=Mairie+d%27Obala,+Cameroun&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Badge de localisation flottant */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-black/80 backdrop-blur-md rounded-xl px-4 py-3.5 flex items-start gap-3 border border-[#D4AF37]/20">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Pacific Hotel</p>
                <p className="text-xs text-white/60 mt-0.5">
                  En face de la Mairie d&apos;Obala
                </p>
              </div>
            </div>
          </div>

          {/* INFOS DE CONTACT (droite) */}
          <div
            className={`flex flex-col justify-between gap-8 transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Bloc infos */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="space-y-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }, index) => {
                  const content = (
                    <div className="flex items-start gap-4 group">
                      <div className="shrink-0 w-11 h-11 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-[11px] text-white/40 uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm sm:text-base text-white font-medium">
                          {value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <div
                      key={label}
                      className={`transition-all duration-500 ease-out ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      {href ? (
                        <a href={href} className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <p className="text-[11px] text-white/40 uppercase tracking-wide mb-4">
                Suivez-nous
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  
          <a          key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}