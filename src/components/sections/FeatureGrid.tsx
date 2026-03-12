"use client";

import dynamic from "next/dynamic";
import Container from "@/components/ui/Container";

const LottieCard = dynamic(() => import("@/components/ui/LottieCard"), {
  ssr: false,
  loading: () => <div className="rounded-lg bg-lottie-bg" />,
});

const steps = [
  {
    title: "QuickSecure Panic",
    description: "One-tap emergency alerts with direct-to-dispatch",
    lottie: "/images/lottie/qs-panic.json",
  },
  {
    title: "QuickSecure Nexus",
    description: "Central dashboard for monitoring and response",
    lottie: "/images/lottie/qs-nexus.json",
  },
  {
    title: "RLS Hardware",
    description: "Retrofit locks that upgrade any existing door",
    lottie: "/images/lottie/qs-rls.json",
  },
];

export default function FeatureGrid() {
  return (
    <section id="products" className="bg-surface pt-25 pb-20 sm:pt-[150px] sm:pb-24 md:pt-[150px] md:pb-28">
      <Container>
        <div className="mb-8 flex flex-col gap-1.5 sm:mb-10 md:mb-12">
          <h2 className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white sm:text-[24px] md:text-[27px]">
            One platform for everything
          </h2>
          <p className="text-[22px] leading-[0.9] tracking-[-0.54px] text-white/50 sm:text-[24px] md:text-[27px]">
            Built for K-12 from the ground up
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <LottieCard
              key={step.title}
              {...step}
              animationAspect="412/282"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
