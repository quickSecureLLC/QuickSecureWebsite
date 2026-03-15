"use client";

import Image from "next/image";

interface TiltImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function TiltImage({
  src,
  alt,
  width,
  height,
  className = "",
}: TiltImageProps) {
  return (
    <div className={className}>
      <div className="group relative overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
