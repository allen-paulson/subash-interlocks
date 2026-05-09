import { ElementType, ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "subheading" | "eyebrow" | "description";

type Props = {
  variant: Variant;
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

const variantConfig: Record<
  Variant,
  { tag: ElementType; className: string }
> = {
  h1: {
    tag: "h1",
    className:
      "text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1]",
  },
  h2: {
    tag: "h2",
    className:
      "text-4xl font-bold tracking-tight text-zinc-950 leading-[1.15]",
  },
  h3: {
    tag: "h3",
    className:
      "text-3xl font-semibold tracking-tight text-zinc-950 leading-snug",
  },
  subheading: {
    tag: "p",
    className: "text-xl font-medium text-zinc-600 leading-relaxed",
  },
  eyebrow: {
    tag: "p",
    className:
      "text-xs font-semibold uppercase tracking-widest text-zinc-500",
  },
  description: {
    tag: "p",
    className: "text-base text-zinc-600 leading-relaxed",
  },
};

export default function Text({ variant, children, className, as }: Props) {
  const { tag: DefaultTag, className: variantClass } = variantConfig[variant];
  const Tag = as ?? DefaultTag;

  return (
    <Tag className={[variantClass, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
