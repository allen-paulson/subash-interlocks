"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, container, fadeIn, ease, defaultTransition } from "@/lib/motion";

const FEATURES = [
  { label: "PREMIUM QUALITY", sub: "Top-grade materials" },
  { label: "BUILT TO LAST", sub: "Stronger. Safer. Smarter." },
  { label: "EXPERT CRAFTSMANSHIP", sub: "Detail in every piece" },
  { label: "PERSONALIZED SERVICE", sub: "We listen. We deliver." },
];

export default function Banner() {
  return (
    <section className="relative flex w-full flex-col min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/banner-bg.webp"
        alt="Luxury interlock paving"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease }}
      />

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center py-24 pt-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Social proof badge */}
        <motion.div
          className="flex items-center gap-2.5 mb-8 bg-black/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((n) => (
              <Image
                key={n}
                src={`/assets/users/user${n}.webp`}
                alt="Customer"
                width={24}
                height={24}
                className="rounded-full ring-1 ring-white/20 object-cover size-6"
              />
            ))}
          </div>
          <span className="text-xs text-white/70 pr-1 tracking-wide">
            100+ Happy Customers
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-serif font-light leading-[1.1] tracking-tight"
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Master Craftsmanship in
          </span>
          <span className="block text-gold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
            Interlock Paving
          </span>
        </motion.h1>

        {/* Diamond separator */}
        <motion.div
          className="flex items-center gap-4 my-7"
          variants={fadeIn}
          transition={{ ...defaultTransition, delay: 0.35 }}
        >
          <div className="h-px w-16 bg-gold/35" />
          <div
            className="size-1.5 bg-gold"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          <div className="h-px w-16 bg-gold/35" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-[10px] sm:text-xs tracking-[0.35em] text-white/45 mb-10 uppercase"
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.42 }}
        >
          Precision. Durability. Timeless Beauty.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold-hover text-[#0d0d0d] font-sans font-semibold text-xs tracking-[0.2em] px-9 py-4 transition-colors uppercase"
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.52 }}
        >
          Get In Touch
          <span className="text-base leading-none">→</span>
        </motion.a>
      </motion.div>

      {/* Bottom feature strip */}
      <motion.div
        className="relative z-10 border-t border-white/8 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 px-5 py-4 border-e border-white/8 last:border-0 max-md:nth-2:border-0"
              >
                <FeatureIcon />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-white/80 uppercase">
                    {f.label}
                  </p>
                  <p className="text-[10px] text-white/40 mt-0.5">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-5 text-gold shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}
