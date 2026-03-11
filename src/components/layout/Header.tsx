"use client";

import { useState } from "react";
import QuickSecureLogo from "@/components/ui/QuickSecureLogo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solutions", href: "/#use-cases" },
  { label: "Our Story", href: "/our-story" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-page-bg">
      <div className="relative flex h-[60px] items-center px-5 sm:px-12 md:px-[120px]">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <QuickSecureLogo color="light" className="h-[28px] w-auto" />
        </a>

        {/* Desktop Nav - absolutely centered */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[15px] md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full px-[12px] py-[6px] text-[14px] leading-[16.8px] text-white transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="ml-auto hidden md:block">
          <Button href="/contact" size="md">
            Request demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-[400px]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-2 px-5 pb-6 sm:px-12" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-[16px] text-white transition-opacity hover:opacity-60"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 px-3">
            <Button href="/contact" size="md" className="w-full">
              Request demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
