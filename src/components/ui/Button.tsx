import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-normal transition-opacity hover:opacity-60";

  const variants = {
    primary: "bg-[#D7D128] text-[#070B16]",
    outline: "border border-white/20 text-white bg-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[13px] leading-[19.5px]",
    md: "px-3 py-1.5 text-[14px] leading-[16.8px]",
    lg: "px-4 py-2 text-[18px] leading-[22.5px]",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
