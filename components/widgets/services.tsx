"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Service } from "@/lib/api/services";
import { fadeUp, container, defaultTransition } from "@/lib/motion";

type Props = { services: Service[] };

const icons: Record<Service["iconKey"], React.ReactNode> = {
  compass: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  wrench: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  ),
  truck: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  ),
};

export default function Services({ services }: Props) {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          <motion.div
            className="flex items-center gap-3 mb-8"
            variants={fadeUp}
            transition={defaultTransition}
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">
              Services
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-gold/50" />
            <div
              className="size-1.5 bg-gold"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
          </motion.div>

          <motion.h2
            className="font-serif font-light text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-foreground mb-4"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.06 }}
          >
            What I Do
          </motion.h2>
          <motion.div
            className="h-px w-10 bg-gold/50 mb-6"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
          />
          <motion.p
            className="text-sm text-foreground/50 leading-relaxed max-w-md mb-12 md:mb-16"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.14 }}
          >
            Premium interlock paving solutions, built with precision, passion, and
            a promise of perfection.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative flex flex-col sm:flex-row overflow-hidden rounded-sm border border-white/8 bg-surface hover:border-gold/40 transition-colors duration-200 ease-linear"
              variants={fadeUp}
              transition={defaultTransition}
            >
              {/* Left: content */}
              <div className="flex flex-col justify-center gap-5 p-7 sm:p-10 sm:w-[45%] lg:w-[40%]">
                {/* Icon circle */}
                <div className="flex items-center justify-center size-12 rounded-full border border-gold/40 text-gold">
                  {icons[service.iconKey]}
                </div>
                <div className="h-px w-8 bg-gold/30" />
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                  {service.title}
                </h3>
                <div className="h-px w-8 bg-gold/30" />
                <p className="text-sm leading-relaxed text-foreground/50">
                  {service.description}
                </p>
              </div>

              {/* Right: image */}
              <div className="relative h-56 sm:h-auto sm:flex-1 overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-200 ease-linear group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 60vw"
                />
                {/* Fade — top on mobile, left on sm+ */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #141414 0%, transparent 40%)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none hidden sm:block"
                  style={{
                    background:
                      "linear-gradient(to right, #141414 0%, transparent 45%)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
