'use client';
//composant restaurant adapter 
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
  { id: '3', title: 'Espace privée Restaurant', fileName: 'reception prive.webp' },
  { id: '4', title: 'Salle de conference', fileName: 'salle de conference.webp' },
  { id: '5', title: 'Espace detentes interieur', fileName: 'repos.webp' },
  { id: '6', title: 'Balansoir', fileName: 'balansoire.webp' },
  { id: '7', title: 'Entrer principale', fileName: 'hero.webp' },
  { id: '8', title: 'Reception', fileName: 'porte ancienne.webp' },
];

export default function RestaurantGrid() {
  const [selectedItem, setSelectedItem] = useState<RestaurantItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Gestion de la touche Échap pour fermer la modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animation d'apparition en cascade
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Déclencher l'apparition des éléments un par un
            items.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150); // Délai de 150ms entre chaque élément
            });
            observer.disconnect(); // Arrêter l'observation après déclenchement
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-5xl mx-auto p-2 sm:p-4 overflow-hidden">
      {/* Grille responsive avec réduction sur grand écran */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1.5 sm:gap-2 lg:gap-3 max-w-4xl mx-auto">
        {items.map((item, index) => {
          // Déterminer la direction d'entrée (gauche ou droite)
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.includes(index);
          
          return (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative flex flex-col overflow-hidden bg-black text-left focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${isLeft ? '-translate-x-16' : 'translate-x-16'}`
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Conteneur d'image rectangulaire (Ratio 4:3) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={`/gallerie/${item.fileName}`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay Hover : Assombrissement + Croix blanche au centre */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm transform scale-75 transition-transform duration-300 group-hover:scale-100">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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

              {/* Titre du plat sous l'image */}
              <div className="p-1.5 sm:p-2 bg-white text-center border-t border-gray-100">
                <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal d'affichage du plat sélectionné */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl transition-all animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture (Croix) */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Fermer la modal"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image de la Modal au format rectangulaire */}
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

            {/* Titre dans la modal */}
            <div className="p-4 bg-white text-center">
              <h3 className="text-xl font-bold text-gray-900">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}