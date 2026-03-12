import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ paddingTop: "var(--top-offset)" }}>
      <div className="relative flex flex-col md:flex-row" style={{ minHeight: "calc(100dvh - var(--top-offset))" }}>
        {/* Left content */}
        <div className="flex flex-col px-5 py-12 sm:px-12 md:w-[48%] md:pt-[312px] md:pr-12 md:pb-0 md:pl-30">
          <div className="flex max-w-[443px] flex-col items-start gap-6">
            <div className="flex flex-col gap-4">
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
            src="/images/hero-screenshot.png"
            alt="QuickSecure platform dashboard"
            width={2244}
            height={2382}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAMAAADjcdz2AAAAY1BMVEVbcWQkMkJlaGYvNzVLTU+OhHpzb2gqR1JcXVpugG4oOUgPGyt8g3SZjn+inI0/QDhNxZlEW1qDlXgmKTCvp5aOrpiQoYLTzsChr4hexJ6Tk423t6u3x5y4l4N6soLet168sU/m0FPLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nB3KV5LDMBQDQTDqMWeKSvbe/5RbMv7QNTAo27YVeG8AmIrf3wpq9S/4F6zdSl1rVmOMAd5gw7rve805K0pqzjkhiVISQgiUlGSSsqUmSUopAUE99F7o7Ps7wFEMwROP+uzXHoFGMWi+P8NfV78CDBOqq/P+5GOc5tSoqfHQryMf+bieSJipca3DyDnnv2/kWMJZybUa+YifpQhTOGslaTWO+ERPqMIxxuyvGYFrmPYCk9qHeWrOX7CMWUtKKeUV/QNqRA0sjpEtiQAAAABJRU5ErkJggg=="
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="max-h-full w-auto rounded-none border-white/10 md:rounded-l-xl md:border-t md:border-b md:border-l"
          />
        </div>
      </div>
    </section>
  );
}
