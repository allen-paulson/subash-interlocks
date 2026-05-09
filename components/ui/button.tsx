import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600 border border-transparent",
  secondary:
    "bg-transparent text-zinc-950 border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-50",
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
        "inline-flex items-center justify-center gap-2 rounded-md px-6 h-11 text-sm font-medium transition-colors sm:px-8 sm:h-13 sm:text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500",
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
