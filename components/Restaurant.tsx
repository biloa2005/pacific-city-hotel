'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Flame, Leaf, Wine, Beer, Citrus } from 'lucide-react';

type Category = 'tous' | 'plats' | 'salades' | 'boissons';

interface MenuItem {
  id: string;
  name: string;
  category: Exclude<Category, 'tous'>;
  categoryLabel: string;
  description: string;
  image: string;
  price: number;
  icon: typeof Flame;
  signature?: boolean;
}

// const FILTERS: { key: Category; label: string }[] = [
//   { key: 'tous', label: 'Toute la carte' },
//   { key: 'plats', label: 'Plats traditionnels' },
//   { key: 'salades', label: 'Salades & Entrées' },
//   { key: 'boissons', label: 'Boissons' },
// ];

const MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Ndolé Royal',
    category: 'plats',
    categoryLabel: 'Plat signature',
    description: 'Feuilles de ndolé mijotées, arachides, crevettes et viande de bœuf, servi avec plantain ou riz.',
    image: '/restaurant/ndolet.webp',
    price: 3000,
    icon: Flame,
    signature: true,
  },
  {
    id: '2',
    name: 'Poisson braisé',
    category: 'plats',
    categoryLabel: 'Plat Populaire',
    description: "Le poisson frais du jour, sublimé par le parfum unique du poivre blanc de Penja et de nos épices locales grillées sur la braise.",
    image: '/restaurant/poisson braisse.webp',
    price: 2500,
    icon: Flame,
  },
  {
    id: '3',
    name: 'Salade Composée du Chef',
    category: 'salades',
    categoryLabel: 'Salade',
    description: 'Légumes de saison, avocat, œuf mollet et vinaigrette maison au citron vert.',
    image: '/restaurant/salade.webp',
    price: 3000,
    icon: Leaf,
  },
  {
    id: '4',
    name: 'Salade Fraîcheur Tropicale',
    category: 'salades',
    categoryLabel: 'Salade',
    description: 'Mangue, banane, tomate cerise et menthe fraîche.',
    image: '/restaurant/salade de fruit.webp',
    price: 2000,
    icon: Leaf,
  },
  // {
  //   id: '5',
  //   name: 'Bière Artisanale Locale',
  //   category: 'boissons',
  //   categoryLabel: 'Boisson brassicole',
  //   description: 'Sélection de bières artisanales brassées localement, blonde ou ambrée.',
  //   image: '/restaurant/bierre artisanale.webp',
  //   price: 1500,
  //   icon: Beer,
  // },
  {
    id: '6',
    name: 'Jus Naturel Bissap',
    category: 'boissons',
    categoryLabel: 'Jus naturel',
    description: " Une boisson locale intensément rafraîchissante aux notes acidulées de fleurs d'hibiscus infusées.",
    image: '/restaurant/jus de bissap.webp',
    price: 1000,
    icon: Citrus,
  },
  {
    id: '7',
    name: 'Liqueur',
    category: 'boissons',
    categoryLabel: 'Liqueur',
    description: 'Liqueur infusée aux fruits locaux, servie fraîche en digestif.',
    image: '/restaurant/liqueur.webp',
    price: 2000,
    icon: Wine,
  },
];

export default function Restaurant() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Category>('tous');

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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredMenu = useMemo(() => {
    if (activeFilter === 'tous') return MENU;
    return MENU.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="restaurant"
      className="relative w-full bg-[#0B0B0B] py-20 sm:py-28 px-6 overflow-hidden"
    >
      {/* Texture subtile en fond */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop')",
          backgroundSize: 'cover',
        }}
      />

      <style>{`
        @keyframes dishFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .dish-card-animate {
          animation: dishFadeIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .dish-card-animate { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto">

        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Notre restaurant
          </span>
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            Une cuisine locale{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent">
              sublimée
            </span>
          </h2>
          <p
            className={`text-white/60 leading-relaxed transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            Des saveurs camerounaises authentiques aux boissons artisanales,
            chaque plat raconte une histoire du terroir.
          </p>
        </div>
        <div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredMenu.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className={`group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#171411] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_24px_55px_rgba(0,0,0,0.4)] ${isVisible ? 'dish-card-animate' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2a2118]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                  {item.signature && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#171411]">
                      Signature
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-bold leading-tight text-[#F7F0E2]">
                      {item.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-[#D4AF37]/12 px-2.5 py-1 text-xs font-bold text-[#E6C75A]">
                      {item.price.toLocaleString('fr-FR')} FCFA
                    </span>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-white/40">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/35 text-[#D4AF37]">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <span>Préparé avec soin</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>);
}