'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

//--- ICONES SVG INLINE POUR LES RÉSEAUX SOCIAUX ---
// Nous gardons les SVG inline pour éviter d'alourdir le bundle avec une librairie d'icônes supplémentaire.

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

//--- CONFIGURATION DES DONNÉES ---

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61593219600634' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/hotel_pacific_city?igsi=dWIxeTN3b2dwaDF4' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/237651052543' },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+237 651 052 543 / 655 71 48 64',
    href: 'tel:+237651052543', // Format tel: pour les liens mobiles
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'pacificcity65@gmail.com',
    href: 'mailto:pacificcity65@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: "En face de la Mairie d'Obala, Obala, Cameroun",
    href: undefined, // Pas de lien pour l'adresse ici
  },
  {
    icon: Clock,
    label: 'Réception',
    value: 'Ouverte 24h/24, 7j/7',
    href: undefined,
  },
];

//--- COMPOSANT PRINCIPAL ---

export default function ContactClair() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation au défilement (Intersection Observer)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // On ne joue l'animation qu'une seule fois
        }
      },
      { threshold: 0.15 } // Déclenche quand 15% de la section est visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      // CHANGEMENT : bg-white au lieu de bg-[#0B0B0B]
      className="relative w-full bg-white py-20 sm:py-28 px-6 overflow-hidden transition-colors duration-500"
    >
      {/* Motif de fond subtil pour la version claire (optionnel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dotted-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-neutral-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact
          </span>
          <h2
            // CHANGEMENT : text-neutral-900 au lieu de text-white
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight mb-5 transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Pacific{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent">
              City Hotel
            </span>
          </h2>
          <p
            // CHANGEMENT : text-neutral-600 au lieu de text-white/60
            className={`text-neutral-600 text-lg leading-relaxed transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Une question, une réservation ? Notre équipe vous répond avec
            plaisir, à toute heure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* CARTE GOOGLE MAPS (gauche) */}
          <div
            // CHANGEMENT : border-neutral-200 au lieu de border-white/10
            className={`relative rounded-2xl overflow-hidden min-h-[380px] lg:min-h-[520px] border border-neutral-200 shadow-lg transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <iframe
              title="Localisation du Pacific Hotel - En face de la Mairie d'Obala"
              // URL factice, à remplacer par votre vrai lien embed Google Maps
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7138384976!2d11.5312345!3d4.1678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf4f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sMairie%20d&#39;Obala!5e0!3m2!1sfr!2scm!4v1621234567890!5m2!1sfr!2scm"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
            />

            {/* Badge de localisation flottant (adapté au thème clair) */}
            {/* CHANGEMENT : bg-white/95, border-neutral-200, text-neutral-900/60 */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 flex items-start gap-3.5 border border-neutral-200 shadow-xl">
              <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-neutral-950">Pacific Hotel</p>
                <p className="text-xs text-neutral-600 mt-1 line-height-relaxed">
                  En face de la Mairie d'Obala,<br/>Obala, Cameroun
                </p>
              </div>
            </div>
          </div>

          {/* INFOS DE CONTACT (droite) */}
          <div
            className={`font-poppins flex flex-col justify-between gap-10 transition-all duration-700 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Bloc infos */}
            {/* CHANGEMENT : bg-neutral-50, border-neutral-200 au lieu de bg-white/[0.03]/border-white/10 */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7 sm:p-10 shadow-sm">
              <div className="space-y-8">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }, index) => {
                  const content = (
                    <div className="flex items-center gap-5 group">
                      {/* CHANGEMENT : Hover bg-[#D4AF37] reste, mais l'icône devient blanche au survol */}
                      <div className="shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300 shadow-inner">
                        <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        {/* CHANGEMENT : text-neutral-500 au lieu de text-white/40 */}
                        <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium mb-1">
                          {label}
                        </p>
                        {/* CHANGEMENT : text-neutral-950 au lieu de text-white */}
                        <p className="text-base sm:text-lg text-neutral-950 font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
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
                        <a href={href} className="block group">
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
              {/* CHANGEMENT : text-neutral-500 au lieu de text-white/40 */}
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium mb-5">
                Suivez-nous
              </p>
              <div className="flex items-center gap-4">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    // CHANGEMENT : border-neutral-300, text-neutral-600 au lieu de white/15 / white/70
                    // Hover reste doré, mais text-white au lieu de text-black
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
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