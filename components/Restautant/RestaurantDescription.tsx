
'use client';

import {
  Clock3,
  Phone,
  Mail,
  CalendarCheck,
} from 'lucide-react';

export default function PacificDescription() {
  return (
    <section className="w-full py-12 px-6 lg:px-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1.8fr] lg:divide-x lg:divide-gray-200">
        {/* =====================================================
            COLONNE GAUCHE — DESCRIPTION
        ====================================================== */}
        <div className="text-center lg:text-left lg:pr-16 lg:pl-16">
          
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
  <span className="font-serif text-[#D4AF37]">
    Pacific City Hotel
  </span>
  <span className="block text-base md:text-xl font-light italic text-gray-600 mt-3 tracking-wide">
    Restaurant & Bar
  </span>
</h1>

<p className="text-base md:text-base leading-loose text-gray-700 max-w-2xl mx-auto lg:mx-0">
  Au{' '}
  
    Pacific City Hotel
 
  , chaque instant se savoure. Ici, <span className="font-semibold text-gray-900">l'excellence culinaire épouse
  le raffinement d'un cadre pensé pour vous surprendre</span>. Nos chefs
  subliment chaque assiette avec passion, tandis que nos mixologues
  réinventent l'art du cocktail dans une atmosphère aussi élégante
  qu'envoûtante. Bienvenue dans un lieu où le goût, le style et
  l'émotion se rencontrent.
</p>

        </div>


        {/* =====================================================
            COLONNE DROITE — INFORMATIONS & RÉSERVATIONS
        ====================================================== */}
        <div className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:pl-16 lg:pr-16">

          <div className="card bg-base-100">
            
            <div className="card-body p-6 md:p-8">

              {/* Titre */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D4AF37]/10">
                    <CalendarCheck
                      className="w-6 h-6 text-[#D4AF37]"
                    />
                  </div>

                  <h2 className="font-serif text-lg md:text-xl font-bold text-gray-900">
                    Infos & Réservations
                  </h2>

                </div>

                <div className="h-[2px] w-16 bg-[#D4AF37] mt-4" />
              </div>


              {/* Horaires */}
              <div className="flex items-start gap-4 py-4 border-b border-gray-100">

                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <Clock3 className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Horaires
                  </p>

                  <p className="mt-1 text-base font-medium text-gray-900">
                    À partir de 6H00 à 23H00
                  </p>
                </div>

              </div>


              {/* Téléphone */}
              <div className="flex items-start gap-4 py-4 border-b border-gray-100">

                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Téléphone
                  </p>

                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href="tel:+237651052543"
                      className="text-base font-medium text-gray-900 hover:text-[#D4AF37] transition-colors"
                    >
                      +237 651 052 543
                    </a>

                    <a
                      href="tel:+237655714864"
                      className="text-base font-medium text-gray-900 hover:text-[#D4AF37] transition-colors"
                    >
                      +237 655 714 864
                    </a>
                  </div>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-start gap-4 py-4">

                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Email
                  </p>

                  <a
                    href="mailto:pacificcity65@gmail.com"
                    className="mt-1 block text-base font-medium text-gray-900 hover:text-[#D4AF37] transition-colors break-all"
                  >
                    pacificcity65@gmail.com
                  </a>
                </div>

              </div>


            

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
