'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Flame, Leaf, GlassWater, Wine, Beer, Citrus } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=1200&auto=format&fit=crop',
    price: 6500,
    icon: Flame,
    signature: true,
  },
  {
    id: '2',
    name: 'Poisson Sauce Tomate',
    category: 'plats',
    categoryLabel: 'Plat traditionnel',
    description: 'Poisson braisé mijoté dans une sauce tomate épicée, oignons et poivrons frais.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    price: 5500,
    icon: Flame,
  },
  {
    id: '3',
    name: 'Salade Composée du Chef',
    category: 'salades',
    categoryLabel: 'Salade',
    description: 'Légumes de saison, avocat, œuf mollet et vinaigrette maison au citron vert.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    price: 3000,
    icon: Leaf,
  },
  {
    id: '4',
    name: 'Salade Fraîcheur Tropicale',
    category: 'salades',
    categoryLabel: 'Salade',
    description: 'Mangue, concombre, tomate cerise et menthe fraîche, sauce miel-gingembre.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    price: 2800,
    icon: Leaf,
  },
  {
    id: '5',
    name: 'Bière Artisanale Locale',
    category: 'boissons',
    categoryLabel: 'Boisson brassicole',
    description: 'Sélection de bières artisanales brassées localement, blonde ou ambrée.',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1200&auto=format&fit=crop',
    price: 1500,
    icon: Beer,
  },
  {
    id: '6',
    name: 'Jus Naturel Bissap-Gingembre',
    category: 'boissons',
    categoryLabel: 'Jus naturel',
    description: 'Pressé maison à base d\u2019hibiscus, gingembre frais et zeste de citron.',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1200&auto=format&fit=crop',
    price: 1200,
    icon: Citrus,
  },
  {
    id: '7',
    name: 'Liqueur Maison',
    category: 'boissons',
    categoryLabel: 'Liqueur',
    description: 'Liqueur artisanale infusée aux fruits locaux, servie fraîche en digestif.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop',
    price: 2500,
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
      { threshold: 0.15 }
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
          animation: dishFadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Notre restaurant
          </span>
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4 transition-all duration-700 delay-100 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Une cuisine locale{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent">
              sublimée
            </span>
          </h2>
          <p
            className={`text-white/60 leading-relaxed transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Des saveurs camerounaises authentiques aux boissons artisanales,
            chaque plat raconte une histoire du terroir.
          </p>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredMenu.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className="bg-white rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-60 object-cover"
        />

        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">
            {item.name}
          </h3>

          <p className="text-gray-600 mb-4">
            {item.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-bold text-[#D4AF37]">
              {item.price.toLocaleString("fr-FR")} FCFA
            </span>

            <Icon className="text-[#D4AF37]" />
          </div>
        </div>
      </div>
    );
  })}
</div>
</div>
      </section>);
}