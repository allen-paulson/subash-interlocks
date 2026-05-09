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
    "bg-orange-500 text-white hover:bg-orange-600 border border-transparent",
  secondary:
    "bg-transparent text-zinc-950 border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-50",
  whatsapp:
    "bg-emerald-600 text-white hover:bg-emerald-500 border border-transparent",
  call:
    "bg-slate-900 text-white hover:bg-slate-700 border border-transparent",
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
        "inline-flex items-center justify-center gap-2 rounded-md px-6 h-11 text-sm font-medium transition-colors sm:px-8 sm:h-13 sm:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
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
