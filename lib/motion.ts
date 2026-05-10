import type { Variants } from "framer-motion";

export const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const defaultTransition = { duration: 0.5, ease };
