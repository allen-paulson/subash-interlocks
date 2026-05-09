import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export default function Pill({ children, className }: Props) {
  return (
    <div
      className={[
        "rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
