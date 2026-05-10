"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/api/profile";
import { fadeUp, container, fadeIn, defaultTransition } from "@/lib/motion";

type Props = { profile: Profile };

const FEATURES = [
  {
    heading: "Built on experience.",
    subheading: "Driven by precision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    heading: "Engineered to last.",
    subheading: "Designed to impress.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

export default function About({ profile }: Props) {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">
            About
          </span>
          <div className="h-px w-10 bg-gold/50" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading + stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
          >
            <motion.h2
              className="font-serif font-light text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight text-foreground"
              variants={fadeUp}
              transition={defaultTransition}
            >
              Professional solutions{" "}
              <span className="text-gold italic">for your outdoor spaces</span>
            </motion.h2>

            {/* Stats card */}
            <motion.div
              className="mt-10 grid grid-cols-2 divide-x divide-gold/20 rounded-sm border border-gold/15 bg-surface overflow-hidden"
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              <StatBlock
                icon={<AwardIcon />}
                value={`${profile.yearsExperience}+`}
                label="Years Experience"
              />
              <StatBlock
                icon={<PeopleIcon />}
                value={`${profile.satisfiedCustomers}+`}
                label="Satisfied Customers"
              />
            </motion.div>
          </motion.div>

          {/* Right — feature blocks */}
          <motion.div
            className="flex flex-col gap-8 lg:gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
          >
            {profile.about.paragraphs.map((para, i) => (
              <motion.div
                key={i}
                className="flex gap-5"
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: i * 0.07 }}
              >
                {/* Icon circle */}
                <div className="shrink-0 flex items-center justify-center size-12 rounded-full border border-gold/35 text-gold">
                  {FEATURES[i]?.icon}
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-foreground">
                    {FEATURES[i]?.heading}{" "}
                    <span className="italic text-gold">
                      {FEATURES[i]?.subheading}
                    </span>
                  </p>
                  <div className="mt-2 h-px w-8 bg-gold/35" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                    {para}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 py-8 px-4">
      <div className="flex items-center justify-center size-10 rounded-full border border-gold/30 text-gold">
        {icon}
      </div>
      <p className="font-serif text-4xl md:text-5xl font-light text-gold">
        {value}
      </p>
      <div className="h-px w-6 bg-gold/40" />
      <p className="text-[10px] font-medium tracking-[0.18em] text-foreground/45 uppercase">
        {label}
      </p>
    </div>
  );
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}
