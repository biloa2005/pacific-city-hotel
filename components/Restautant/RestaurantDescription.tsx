export default function PacificDescription() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto text-center">
      {/* Taille augmentée : text-4xl sur mobile, text-6xl sur tablette, text-7xl sur ordinateur */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
        <span className="text-[#D4AF37]">
          Pacific City Hotel
        </span>
      </h1>
      
      {/* Marges et interlignes ajustés pour équilibrer le grand titre */}
      <p className="text-base md:text-xl leading-loose text-gray-700 max-w-2xl mx-auto">
        Bienvenue au restaurant et bar du{" "}
        <span className="font-bold">Pacific City Hotel</span>
        , où l’élégance culinaire rencontre une atmosphère raffinée. Que ce soit
        pour savourer des plats gourmands préparés avec soin par nos chefs ou
        pour déguster des cocktails créatifs dans une ambiance chaleureuse, notre
        espace vous promet une expérience sensorielle inoubliable au cœur du
        confort ultime.
      </p>
    </section>
  );
}
