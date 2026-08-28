'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Accueil', href: '/' },
  { name: 'Chambres', href: 'chambres' },
  { name: 'Saveurs & Bar', href: 'restaurant' },
  { name: 'Galerie', href: 'gallerie' },
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm'
            : 'lg:bg-transparent lg:border-transparent lg:shadow-none max-lg:bg-white max-lg:border-b max-lg:border-[#D4AF37]/10 max-lg:shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px] sm:h-[88px] lg:h-[104px] relative">
          
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
              className="h-[50px] sm:h-[70px] lg:h-[88px] w-auto object-contain"
            />
          </Link>

          {/* NAVIGATION DESKTOP */}
          <ul className={`hidden lg:flex items-center gap-1 font-medium text-sm transition-all duration-300 ${
            isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`px-3 py-2 rounded transition-colors ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10'
                      : 'text-white hover:text-[#D4AF37] hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* BOUTON BURGER - 3 barres horizontales */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <span className={`block w-6 h-0.5 bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-[#D4AF37] rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>

          {/* BOUTON RÉSERVER */}
          <Link
            href="/contact"
            className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
              isScrolled
                ? 'bg-[#D4AF37] text-white hover:bg-[#b8962d]'
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Réserver
          </Link>

          {/* MENU DÉROULANT MOBILE */}
          {isOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-lg shadow-xl border border-[#D4AF37]/20 overflow-hidden z-50">
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
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="px-4 py-3 text-sm font-medium text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Réserver
                </Link>
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

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </header>
      
      {/* Espace réservé */}
      <div className="h-[70px] sm:h-[88px] lg:h-[104px]"></div>
    </>
  );
}