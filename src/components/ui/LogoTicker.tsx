import Image from "next/image";

const logos = [
  { src: "/images/logos/qs-central-logo.png", alt: "Central", w: 72, h: 64 },
  { src: "/images/logos/qs-woodward-logo.png", alt: "Woodward", w: 228, h: 64 },
  { src: "/images/logos/qs-gracepoint-logo-v2.png", alt: "Gracepoint", w: 182, h: 64 },
  { src: "/images/logos/qs-ridgemont-logo.png", alt: "Ridgemont", w: 65, h: 64 },
  { src: "/images/logos/qs-northview-logo.png", alt: "Northview", w: 275, h: 64 },
];

export default function LogoTicker() {
  return (
    <>
      {/* Mobile/Tablet: evenly spaced, Northview overflows right edge */}
      <div className="w-full overflow-hidden py-8 md:hidden">
        <div className="flex items-center gap-16 px-5 sm:gap-20 sm:px-12">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="h-6 w-auto shrink-0 brightness-0 invert opacity-60 sm:h-8"
            />
          ))}
        </div>
      </div>

      {/* Desktop: absolute, spread across left half with gradient fade on both edges */}
      <div
        className="pointer-events-none absolute bottom-12 left-0 hidden w-[48%] overflow-hidden md:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 100px, white 160px, white calc(100% - 90px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 100px, white 160px, white calc(100% - 90px), transparent 100%)",
        }}
      >
        <div className="flex items-center justify-between pl-12 pr-2 lg:pl-30">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="h-7 w-auto brightness-0 invert opacity-60 lg:h-8"
            />
          ))}
        </div>
      </div>
    </>
  );
}
