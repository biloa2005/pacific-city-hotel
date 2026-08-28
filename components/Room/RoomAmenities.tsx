'use client';

import { useState } from 'react';
import {
  Wifi,
  Tv,
  Wind,
  Coffee,
  ShieldCheck,
  Bath,
  Wine,
  Sparkles,
  UtensilsCrossed,
  LucideIcon,
  CheckCircle2,
} from 'lucide-react';

// Définition du type pour chaque équipement
interface EquipmentItem {
  id: string;
  name: string;
  icon: LucideIcon;
}

// Type pour les catégories de chambres
type RoomCategory = 'suite' | 'standard' | 'simple';

// Données des équipements filtrés par catégorie
const ROOM_EQUIPMENTS: Record<RoomCategory, EquipmentItem[]> = {
  suite: [
    { id: '1', name: 'Wi-Fi Haut Débit Gratuit', icon: Wifi },
    { id: '2', name: 'Smart TV 4K avec Netflix & Câble', icon: Tv },
    { id: '3', name: 'Climatisation Individuelle', icon: Wind },
    { id: '4', name: 'Machine à Café Nespresso & Thé', icon: Coffee },
    { id: '5', name: 'Baignoire Balnéothérapie & Douche', icon: Bath },
    { id: '6', name: 'Mini-bar Offert avec Boissons', icon: Wine },
    { id: '7', name: 'Coffre-fort Électronique', icon: ShieldCheck },
    { id: '8', name: 'Service d’Étage 24h/24', icon: UtensilsCrossed },
    { id: '9', name: 'Produits d’Accueil de Luxe', icon: Sparkles },
  ],
  standard: [
    { id: '1', name: 'Wi-Fi Haut Débit Gratuit', icon: Wifi },
    { id: '2', name: 'Télévision HD avec Chaines Satellite', icon: Tv },
    { id: '3', name: 'Climatisation', icon: Wind },
    { id: '4', name: 'Bouilloire avec Sélection de Thés', icon: Coffee },
    { id: '5', name: 'Salle de Bain Privative avec Douche', icon: Bath },
    { id: '6', name: 'Coffre-fort Sécurisé', icon: ShieldCheck },
  ],
  simple: [
    { id: '1', name: 'Wi-Fi Gratuit', icon: Wifi },
    { id: '2', name: 'Télévision Ecran Plat', icon: Tv },
    { id: '3', name: 'Climatisation / Ventilateur', icon: Wind },
    { id: '4', name: 'Salle d’Eau Privative', icon: Bath },
  ],
};

// Liste des filtres
const FILTERS: { key: RoomCategory; label: string }[] = [
  { key: 'suite', label: 'Suites' },
  { key: 'standard', label: 'Chambres Standard' },
  { key: 'simple', label: 'Chambres Simples' },
];

export default function RoomAmenities() {
  const [activeFilter, setActiveFilter] = useState<RoomCategory>('suite');

  const currentEquipments = ROOM_EQUIPMENTS[activeFilter];

  return (
    <section className="w-full bg-[#FDFBF7] py-16 px-4 sm:px-12 text-stone-900 selection:bg-[#D4AF37] selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* EN-TÊTE ET TITRE */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold block mb-2">
            Confort & Prestations
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-[#D4AF37]">
            Équipements de la chambre
          </h2>
          
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 3 FILTRES DE CATÉGORIES */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/20 scale-105'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* LISTE DES ÉQUIPEMENTS EN 2 COLONNES (STRICTEMENT, MÊME SUR MOBILE) */}
        {/* Changement : md:grid-cols-2 -> grid-cols-2 et gap-4 -> gap-3 (sur mobile) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 bg-white p-4 sm:p-10 rounded-2xl border border-stone-200/80 shadow-sm relative z-10">
          {currentEquipments.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                // Changement : gap-4 -> gap-2 (sur mobile) et p-3.5 -> p-2.5 (sur mobile)
                className="flex items-center gap-2 sm:gap-4 p-2.5 sm:p-3.5 rounded-xl bg-[#FDFBF7]/60 border border-stone-100 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-sm group"
              >
                {/* Icône de l'équipement */}
                {/* Changement : w-10 h-10 -> w-8 h-8 (sur mobile) */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  {/* Changement : w-5 h-5 -> w-4 h-4 (sur mobile) */}
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Nom de l'équipement */}
                {/* Changement : text-sm sm:text-base -> text-[11px] sm:text-base pour que ça tienne sur mobile */}
                <span className="text-stone-800 text-[11px] sm:text-base font-normal tracking-wide flex-1 line-clamp-2">
                  {item.name}
                </span>

                {/* Checkmark discret (Caché sur mobile pour gagner de la place) */}
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors duration-300 hidden sm:block" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}