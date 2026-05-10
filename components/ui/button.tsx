import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-gold text-[#0d0d0d] hover:bg-gold-hover border border-transparent",
  secondary:
    "bg-transparent text-gold border border-gold/40 hover:bg-gold hover:text-[#0d0d0d]",
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 px-6 h-11 text-xs font-semibold tracking-[0.15em] uppercase transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        variantClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
