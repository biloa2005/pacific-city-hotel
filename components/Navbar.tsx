'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Hotel, PhoneCall } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#a-propos' },
  // { name: 'Services', href: '#services' },
  { name: 'Chambres', href: '#chambres' },
  { name: 'Restaurant', href: '#restaurant' },
  { name: 'Divertissement', href: '#divertissement' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[65px] relative">
        
        {/* LOGO & NOM DE L'HÔTEL */}
        <Link 
          href="#" 
          className="flex items-center gap-2 text-xl font-serif font-bold tracking-wide hover:opacity-90 transition-opacity"
          onClick={closeMenu}
        >
          <Hotel className="w-7 h-7 text-[#D4AF37]" />
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent">
            Pacific Hotel
          </span>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <ul className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="px-3 py-2 rounded hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BURGER MOBILE & TABLETTE */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden p-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded relative z-50"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* LISTE DEROULANTE (dropdown) */}
        {isOpen && (
          <div className="lg:hidden absolute top-full right-4 sm:right-6 mt-2 w-64 bg-white rounded-lg shadow-xl border border-[#D4AF37]/20 overflow-hidden z-50">
            <nav className="flex flex-col divide-y divide-[#D4AF37]/10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 text-sm font-medium hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact rapide */}
            <div className="p-3 border-t border-[#D4AF37]/20 bg-[#D4AF37]/5">
              <a 
                href="tel:+123456789" 
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm border border-[#D4AF37] text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                +237 456 789
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Overlay léger pour fermer en cliquant en dehors */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[65px] z-40" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}