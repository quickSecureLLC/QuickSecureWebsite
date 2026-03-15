import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProductShowcase from "@/components/sections/ProductShowcase";
import UseCases from "@/components/sections/UseCases";
import ComparisonFAQ from "@/components/sections/ComparisonFAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <UseCases />
      <ProductShowcase />
      <ComparisonFAQ />
    </>
  );
}
