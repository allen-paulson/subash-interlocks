import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "call";

type Props = NextLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    variant?: Variant;
    children: ReactNode;
    className?: string;
  };

const variantClass: Record<Variant, string> = {
  primary:
    "bg-gold text-[#0d0d0d] hover:bg-gold-hover border border-transparent",
  secondary:
    "bg-transparent text-gold border border-gold/40 hover:bg-gold hover:text-[#0d0d0d]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fbe5c] border border-transparent",
  call:
    "bg-transparent text-gold border border-gold/40 hover:bg-gold hover:text-[#0d0d0d]",
};

export default function Link({
  variant = "primary",
  children,
  className,
  ...props
}: Props) {
  return (
    <NextLink
      className={[
        "inline-flex items-center justify-center gap-2 px-6 h-11 text-xs font-semibold tracking-[0.15em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        variantClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </NextLink>
  );
}
