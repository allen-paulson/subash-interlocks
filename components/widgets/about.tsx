"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import type { Profile } from "@/lib/api/profile";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, "change", (v) => setDisplay(Math.round(v)));

  useEffect(() => {
    if (!inView) return;
    animate(count, to, { duration: 0.5, ease: "easeOut" });
  }, [inView, to]);

  return <span ref={ref}>{display}</span>;
}

type Props = { profile: Profile };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

export default function About({ profile }: Props) {
  return (
    <section id="about" className="py-8 md:py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.h2
              className="text-2xl sm:text-4xl md:text-5xl max-lg:max-w-xl font-medium leading-none tracking-tight text-black-700"
              {...fadeUp(0)}
            >
              Professional solutions for your outdoor spaces
            </motion.h2>

            <motion.div
              className="mt-6 md:mt-10 lg:mt-22 flex gap-10"
              {...fadeUp(0.15)}
            >
              <div>
                <p className="text-4xl md:text-5xl font-medium text-orange-500">
                  <CountUp to={profile.yearsExperience} />+
                </p>
                <p className="mt-1 text-xs md:text-sm lg:text-base text-orange-400">
                  Years Experience
                </p>
              </div>
              <div className="w-px bg-orange-200" />
              <div>
                <p className="text-4xl md:text-5xl font-medium text-orange-500">
                  <CountUp to={profile.satisfiedCustomers} />+
                </p>
                <p className="mt-1 text-xs md:text-sm lg:text-base text-orange-400">
                  Satisfied Customers
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 pt-2">
            {profile.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-base lg:text-xl leading-tight text-zinc-600"
                {...fadeUp(i * 0.12)}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
