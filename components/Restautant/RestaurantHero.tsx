import Image from 'next/image';
import { Star } from 'lucide-react';

export default function RestaurantHero() {
  return (
    <div className="relative w-full h-[55vh] lg:h-screen overflow-hidden overflow-hidden bg-black">
      {/* Image de fond */}
      <Image
        src="/gallerie/bar.webp"
        alt="Pacific Hotel - Bar"
        fill
        priority
        className="object-cover"
        
      />
      
      {/* Assombrissement */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Texte superposé */}
      <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
        
          
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg tracking-wide">
            Pacific Hotel
          </h2>
          
          <p className="text-white/80 text-sm sm:text-base mt-0.5 drop-shadow-md font-light tracking-wider">
            Bar
          </p>
        </div>
      </div>
    </div>
  );
}