"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { cn } from "@/lib/utils";

export default function LottieCard({
  title,
  description,
  lottie,
  animationAspect,
  className,
  textClassName,
}: {
  title: string;
  description: string;
  lottie: string;
  animationAspect?: string;
  className?: string;
  textClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const dotLottieRef = useRef<DotLottie | null>(null);

  // Track when card enters/leaves viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
          dotLottieRef.current?.play();
        } else {
          dotLottieRef.current?.pause();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dotLottieRefCallback = useCallback((instance: DotLottie | null) => {
    dotLottieRef.current = instance;
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-surface bg-lottie-bg",
        className
      )}
    >
      <div className={cn("flex flex-col justify-start p-5 sm:p-6", textClassName)}>
        <h3 className="mb-px text-[16px] font-normal leading-[1.5] tracking-[0.16px] text-white">
          {title}
        </h3>
        <p className="text-[16px] leading-[1.5] tracking-[0.08px] text-white/50">
          {description}
        </p>
      </div>
      <div
        className="min-h-0 flex-1 overflow-hidden"
        style={animationAspect ? { aspectRatio: animationAspect } : undefined}
      >
        {hasBeenVisible ? (
          <DotLottieReact
            src={lottie}
            loop
            autoplay
            className="size-full"
            dotLottieRefCallback={dotLottieRefCallback}
          />
        ) : (
          <div className="size-full" />
        )}
      </div>
    </div>
  );
}
