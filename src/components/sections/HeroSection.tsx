import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-[60px]">
      <div className="relative flex min-h-[calc(100dvh-60px)] flex-col md:flex-row">
        {/* Left content */}
        <div className="flex flex-col px-5 py-12 sm:px-12 md:w-[48%] md:pt-[312px] md:pr-12 md:pb-0 md:pl-[120px]">
          <div className="flex max-w-[443px] flex-col items-start gap-[24px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[28px] leading-[0.9] tracking-[-0.72px] text-white sm:text-[32px] md:text-[36px]">
                Safer Schools Start Here
              </h1>
              <p className="max-w-[443px] text-[14px] leading-[1.5] tracking-[0.08px] text-white/70 sm:text-[15px] md:text-[16px]">
                The unified K-12 platform combining emergency response, daily
                operations, hardware, and integrations into one system. Built so
                teachers and staff can act quickly and confidently when it matters
                most.
              </p>
            </div>
            <Button href="/contact" size="md">
              Request demo
            </Button>
          </div>
        </div>

        {/* Right product screenshot */}
        <div className="relative flex min-h-[400px] items-center justify-end px-5 sm:px-12 md:min-h-0 md:h-[calc(100dvh-50px)] md:w-[52%] md:px-0">
          <Image
            src="/images/hero-screenshot.webp"
            alt="QuickSecure platform dashboard"
            width={2244}
            height={2382}
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="max-h-full w-auto rounded-none border-[#1A1F2E] md:rounded-l-[12px] md:border-t-[0.5px] md:border-b-[0.5px] md:border-l-[0.5px]"
          />
        </div>
      </div>
    </section>
  );
}
