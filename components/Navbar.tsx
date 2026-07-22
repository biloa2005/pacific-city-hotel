'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Hotel, PhoneCall } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#a-propos' },
  { name: 'Services', href: '#services' },
  { name: 'Chambres', href: '#chambres' },
  { name: 'Restaurant', href: '#restaurant' },
  { name: 'Divertissement', href: '#divertissement' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LOGO & NOM DE L'HÔTEL */}
        <div className="navbar-start">
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
        </div>

        {/* NAVIGATION DESKTOP (Grands écrans lg+) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-btn transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* BURGER MOBILE & TABLETTE */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost btn-square text-[#D4AF37] hover:bg-[#D4AF37]/10"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE / TABLETTE (Drawer Overlay) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-base-100 z-40 flex flex-col justify-between p-6 border-t border-[#D4AF37]/20 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 text-lg font-medium rounded-box hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Pied du menu mobile : Contact rapide */}
          <div className="pt-6 border-t border-[#D4AF37]/20">
            <a 
              href="tel:+123456789" 
              className="btn w-full gap-2 text-sm bg-transparent border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Réception : +123 456 789
            </a>
          </div>
        </div>
      )}
    </header>
  );
}