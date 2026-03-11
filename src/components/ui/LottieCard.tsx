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
  const [isVisible, setIsVisible] = useState(false);
  const dotLottieRef = useRef<DotLottie | null>(null);

  // Track when card enters/leaves viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play/pause based on visibility
  useEffect(() => {
    const instance = dotLottieRef.current;
    if (!instance) return;
    if (isVisible) {
      instance.play();
    } else {
      instance.pause();
    }
  }, [isVisible]);

  const dotLottieRefCallback = useCallback((instance: DotLottie | null) => {
    dotLottieRef.current = instance;
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col overflow-hidden rounded-[8px] border-[0.5px] border-[#1A1F2E] bg-[#2D3748]",
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
            autoplay
            loop
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
