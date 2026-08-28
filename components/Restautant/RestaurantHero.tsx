import Image from 'next/image';

export default function RestaurantHero() {
  return (
    <div className="relative w-full aspect-[4/3] lg:h-screen lg:aspect-auto overflow-hidden">
      <Image
        src="/gallerie/bar.webp"
        alt="bar"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 100vw"
      />
    </div>
  );
}