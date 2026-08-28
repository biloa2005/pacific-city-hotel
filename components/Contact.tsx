'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface RestaurantItem {
  id: string;
  title: string;
  fileName: string;
}

const items: RestaurantItem[] = [
  { id: '1', title: 'Facade avant', fileName: 'accueil.webp' },
  { id: '2', title: 'Parking', fileName: 'vue.webp' },
  {
    id: '3',
    title: 'Espace privée Restaurant',
    fileName: 'reception prive.webp',
  },
  {
    id: '4',
    title: 'Salle de conference',
    fileName: 'salle de conference.webp',
  },
  {
    id: '5',
    title: 'Espace detentes interieur',
    fileName: 'repos.webp',
  },
  { id: '6', title: 'Balansoir', fileName: 'balansoire.webp' },
  {
    id: '7',
    title: 'Entrer principale',
    fileName: 'hero.webp',
  },
  {
    id: '8',
    title: 'Reception',
    fileName: 'porte ancienne.webp',
  },
];

export default function RestaurantGrid() {
  const [selectedItem, setSelectedItem] =
    useState<RestaurantItem | null>(null);

  // État pour savoir si le composant est visible
  const [isVisible, setIsVisible] = useState(false);

  // Référence vers la section
  const sectionRef = useRef<HTMLElement>(null);

  // Animation lorsque la section entre dans l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // On arrête d'observer après la première apparition
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Gestion de la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-5xl mx-auto p-2 sm:p-4"
    >
      {/* GRILLE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 max-w-4xl mx-auto">
        {items.map((item, index) => {
          // Les éléments pairs viennent de gauche
          const fromLeft = index % 2 === 0;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className={`
                group relative flex flex-col overflow-hidden
                bg-black text-left
                focus:outline-none
                focus:ring-2
                focus:ring-amber-500

                transition-all
                duration-700
                ease-out

                ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${
                        fromLeft
                          ? '-translate-x-20'
                          : 'translate-x-20'
                      }`
                }
              `}
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={`/gallerie/${item.fileName}`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="scale-75 transform rounded-full bg-black/30 p-2 backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
                    <svg
                      className="h-5 w-5 text-white sm:h-6 sm:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* TITRE */}
              <div className="border-t border-gray-100 bg-white p-1.5 text-center sm:p-2">
                <p className="truncate text-xs font-medium text-gray-800 sm:text-sm">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FERMER */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Fermer la modal"
              className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/80 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* IMAGE MODAL */}
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src={`/gallerie/${selectedItem.fileName}`}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* TITRE MODAL */}
            <div className="bg-white p-4 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}