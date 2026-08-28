'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Accueil', href: '/' },
 
  { name: 'Chambres', href: 'chambres' },
  { name: 'Saveurs & Bar', href: 'restaurant' },
  { name: 'Divertissement', href: '#divertissement' },
  { name: 'Galerie', href: 'galerie' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[88px] sm:h-[104px] relative">
        
        {/* LOGO */}
        <Link 
          href="#" 
          className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Pacific City Hotel"
            width={400}
            height={400}
            priority
            className="h-[70px] sm:h-[88px] w-auto object-contain"
          />
        </Link>

        {/* NAVIGATION DESKTOP (Au scroll uniquement) */}
        {isScrolled && (
          <ul className="hidden lg:flex items-center gap-1 font-medium text-sm transition-all duration-300">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="px-3 py-2 rounded text-gray-800 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* BOUTON BURGER (Simples barres sur mobile, style doré sur grand écran) */}
        <button
          type="button"
          onClick={toggleMenu}
          className={`${
            isScrolled ? 'lg:hidden' : 'flex'
          } p-2 lg:px-3.5 lg:py-2 text-[#D4AF37] lg:text-white lg:bg-[#D4AF37] hover:bg-[#D4AF37]/10 lg:hover:bg-[#b8962d] rounded-lg relative z-50 transition-all items-center gap-2 border border-[#D4AF37]/30 lg:border-2 lg:border-white shadow-sm lg:shadow-md active:scale-95`}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#D4AF37] lg:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-[#D4AF37] lg:text-white" />
          )}
          <span className="hidden lg:inline text-xs uppercase tracking-wider font-bold text-white">
            Menu
          </span>
        </button>

        {/* MENU DÉROULANT */}
        {isOpen && (
          <div className="absolute top-full right-4 sm:right-6 mt-2 w-64 bg-white rounded-lg shadow-xl border border-[#D4AF37]/20 overflow-hidden z-50">
            <nav className="flex flex-col divide-y divide-[#D4AF37]/10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="p-3 border-t border-[#D4AF37]/20 bg-[#D4AF37]/5">
              <a 
                href="tel:+237651052543" 
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium border border-[#D4AF37] text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                +237 651 052 543
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Overlay pour fermer au clic extérieur */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}