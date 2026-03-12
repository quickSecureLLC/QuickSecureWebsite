"use client";

import { useEffect, useRef, useState } from "react";

const BANNER_TEXT =
  "Introducing QuickSecure Panic Button — Instant emergency response for schools";
const ITEM_COUNT = 6;
const SCROLL_SPEED = 72; // px/s

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Check sessionStorage on mount
  useEffect(() => {
    if (sessionStorage.getItem("bannerDismissed") === "true") {
      setDismissed(true);
    }
  }, []);

  // Set body data attribute for dismissed state
  useEffect(() => {
    if (dismissed) {
      document.body.dataset.banner = "dismissed";
    } else {
      delete document.body.dataset.banner;
    }
    return () => {
      delete document.body.dataset.banner;
    };
  }, [dismissed]);

  // Set animation duration based on actual content width for consistent speed
  useEffect(() => {
    if (dismissed || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    trackRef.current.style.setProperty(
      "--marquee-duration",
      `${halfWidth / SCROLL_SPEED}s`
    );
  }, [dismissed]);

  const handleDismiss = () => {
    sessionStorage.setItem("bannerDismissed", "true");
    // Animate --banner-h from 36 → 0 over 300ms via JS (replaces CSS transition)
    const start = performance.now();
    const from = 36;
    const duration = 300;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      document.body.style.setProperty("--banner-h", `${from * (1 - t)}px`);
      if (t < 1) requestAnimationFrame(step);
      else setDismissed(true);
    };
    requestAnimationFrame(step);
  };

  const items = Array.from({ length: ITEM_COUNT }, (_, i) => (
    <span key={i} className="inline-flex shrink-0 items-center gap-3">
      <span className="whitespace-nowrap">{BANNER_TEXT}</span>
      <a
        href="/product/emergency-response"
        onClick={handleDismiss}
        className="whitespace-nowrap underline underline-offset-2 hover:opacity-70"
      >
        Learn more
      </a>
      <span className="text-navy/40" aria-hidden="true">
        &bull;
      </span>
    </span>
  ));

  return (
    <div
      data-announcement-banner
      className={`fixed top-0 right-0 left-0 z-60 flex h-[36px] items-center overflow-clip bg-yellow text-navy transition-[opacity,visibility] duration-300 ${
        dismissed ? "invisible opacity-0" : ""
      }`}
      role="banner"
      aria-hidden={dismissed || undefined}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-[60px]"
        style={{
          background:
            "linear-gradient(to right, var(--color-yellow), transparent)",
        }}
      />

      {/* Scrolling track — CSS animation runs on compositor, immune to main-thread jank */}
      <div
        ref={trackRef}
        data-marquee
        className="flex gap-3 hover:[animation-play-state:paused]"
      >
        <div className="flex shrink-0 items-center gap-3 text-[13px] font-medium leading-none">
          {items}
        </div>
        <div
          className="flex shrink-0 items-center gap-3 text-[13px] font-medium leading-none"
          aria-hidden="true"
        >
          {items}
        </div>
      </div>

      {/* Right fade */}
      <div
        className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-[60px]"
        style={{
          background:
            "linear-gradient(to left, var(--color-yellow), transparent)",
        }}
      />
    </div>
  );
}
