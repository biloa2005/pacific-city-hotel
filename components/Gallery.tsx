'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Expand } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const GALLERY: GalleryImage[] = [
  {
    id: '1',
    src: '/gallerie/bar.webp',
    alt: 'Restauration',
    category: 'Bar Cocktail et Détente',
  },
  {
    id: '2',
    src: '/gallerie/accueil.webp',
    alt: 'Hôtel',
    category: 'Façade avant du Pacific Hotel',
  },
  {
    id: '3',
    src: '/gallerie/parking.webp',
    alt: 'Établissement',
    category: 'Vue Extérieure du Bâtiment',
  },
  {
    id: '4',
    src: '/gallerie/porte%20ancienne.webp',
    alt: 'Etablissement',
    category: 'Entrée Moderne et Design Lumineux',
  },
  {
    id: '5',
    src: '/gallerie/reception%20prive.webp',
    alt: "Établissement",
    category: 'Salon Privé du Restaurant',
  },
  {
    id: '6',
    src: '/gallerie/repos.webp',
    alt: 'Espaces Communs',
    category: 'Espace Détente Intérieur',
  },
  {
    id: '7',
    src: '/gallerie/salle%20de%20conference.jpg',
    alt: 'Affaires & Réunions',
    category: 'Salle de Conférence',
  },
  {
    id: '8',
    src: '/gallerie/vue.webp',
    alt: 'Parking Privé et Sécurisé',
    category: 'Parking',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
      { threshold: 0.3

       }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ferme la lightbox avec la touche Échap
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Liste dupliquée pour un défilement infini sans coupure visible
  const loopedGallery = [...GALLERY, ...GALLERY];

  return (
    <section
      ref={sectionRef}
      id="galerie"
      className="relative w-full bg-white py-20 sm:py-28 overflow-hidden"
    >
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 26s;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Galerie
          </span>
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Un aperçu de{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#D4AF37] bg-clip-text text-transparent">
              votre séjour
            </span>
          </h2>
          <p
            className={`text-gray-600 leading-relaxed transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Chambres, équipe, restaurant : plongez dans l&apos;univers du
            Pacific Hotel en images.
          </p>
        </div>
      </div>

      {/* BANDEAU DÉFILANT INFINI */}
      <div
        className={`relative w-full transition-opacity duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Voiles de fondu sur les bords pour un effet propre */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track flex w-max gap-4 sm:gap-6 px-3">
          {loopedGallery.map((image, index) => (
            <button
              key={`${image.id}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative shrink-0 w-[220px] h-[280px] sm:w-[280px] sm:h-[360px] rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label={`Agrandir : ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Badge catégorie */}
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[10px] font-medium text-white">
                {image.category}
              </span>

              {/* Icône zoom au survol */}
              <span className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37] text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Expand className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          `}</style>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-5 right-5 z-10 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-3xl w-full animate-[zoomIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-[#D4AF37] rounded-full text-[11px] font-semibold text-black mb-2">
                {selectedImage.category}
              </span>
              <p className="text-white/80 text-sm">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}