import { cn } from "@/lib/utils";

type CTALinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "light" | "dark" | "muted";
  size?: "sm" | "md";
  className?: string;
};

export default function CTALink({
  children,
  href,
  variant = "muted",
  size = "md",
  className,
}: CTALinkProps) {
  const variants = {
    light: "text-white hover:opacity-70",
    dark: "text-white hover:opacity-60",
    muted: "text-blue hover:opacity-60",
  };

  const sizes = {
    sm: "text-[13px] leading-[19.5px] gap-1",
    md: "text-[15px] leading-[22.5px] gap-1",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center transition-opacity",
        variants[variant],
        sizes[size],
        className
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
