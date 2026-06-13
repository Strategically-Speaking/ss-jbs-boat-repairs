import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
  secondary:
    "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary focus-visible:ring-secondary",
  ghost:
    "text-secondary hover:text-secondary/80 hover:underline focus-visible:ring-secondary",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const base =
  "inline-flex items-center justify-center font-semibold rounded transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
