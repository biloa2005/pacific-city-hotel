import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 pt-16 pb-8 px-6 overflow-hidden">
      {/* Lueur discrète en fond, cohérente avec l'identité or */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/[0.06] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">

          {/* BLOC IDENTITÉ */}
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 text-xl font-serif font-bold tracking-wide w-fit">
              <Image
                src="/logo.png"
                alt="Pacific City Hotel"
                width={200}
                height={200}
                priority
                className="h-[52px] sm:h-[58px] w-auto object-contain"
              />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-clip-text text-transparent">
                Pacific city Hotel
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mt-4 max-w-xs">
              Une hospitalité raffinée au cœur d&apos;Obala. Chambres élégantes,
              cuisine locale sublimée et service attentionné.
            </p>
          </div>
          {/* NAVIGATION */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>

                <a href="tel:+237 651052543"
                  className="flex items-start gap-2.5 text-sm text-white/50 hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  +237 651052543 / 655714864
                </a>
              </li>
              <li>

                <a href="mailto:pacificcity65@gmail.com"
                  className="flex items-start gap-2.5 text-sm text-white/50 hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  pacificcity65@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                En face de la Mairie d&apos;Obala, Cameroun
              </li>
            </ul>
          </div>

          {/* RÉSERVATION RAPIDE */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Réservez votre séjour
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Notre équipe est disponible 24h/24 pour organiser votre arrivée.
            </p>

            <a href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#D4AF37] text-black text-sm font-semibold rounded-full hover:bg-[#F3E5AB] transition-colors"
            >
              Nous contacter
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* SÉPARATEUR */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BAS DE FOOTER */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-white/40">
            © {currentYear} Pacific Hotel — Obala, Cameroun. Tous droits réservés.
          </p>

          {/* Crédit développeur — discret */}
          <p className="text-xs text-white/30">
            Site conçu par{' '}

            <a href="mailto:biloaphilemon@gmail.com"
              className="text-white/40 hover:text-[#D4AF37] transition-colors"
            >
              Biloa Philemon
            </a>
            {' · '}

            <a href="https://github.com/biloa2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#D4AF37] transition-colors"
            >
              github.com/biloa2005
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}