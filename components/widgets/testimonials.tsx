"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import type { Testimonial } from "@/lib/api/testimonials";

type Props = { testimonials: Testimonial[] };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-zinc-200 lg:border-zinc-100 bg-white p-7 lg:shadow-sm">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-7 text-orange-200"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <p className="flex-1 text-base leading-relaxed text-zinc-600">
        {t.quote}
      </p>

      <div className="flex items-center gap-3 border-t border-zinc-100 pt-5">
        {t.imageSrc ? (
          <Image
            src={t.imageSrc}
            alt={t.author}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover ring-2 ring-orange-100"
          />
        ) : (
          <div className="flex size-11 items-center justify-center rounded-full bg-orange-50 text-sm font-semibold text-orange-500">
            {t.author
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((w) => w[0]?.toUpperCase())
              .join("")}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-zinc-950">{t.author}</p>
          {t.location ? (
            <p className="text-xs text-zinc-400">{t.location}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ testimonials }: Props) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <section className="py-8 md:py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mb-6 md:mb-10 lg:mb-14" {...fadeUp(0)}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-none tracking-tight text-black">
            What Clients Say
          </h2>
        </motion.div>

        {/* Mobile / tablet slider */}
        <div className="lg:hidden -mx-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 px-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  className="w-[82vw] shrink-0 sm:w-[55vw]"
                  {...fadeUp(i * 0.1)}
                >
                  <TestimonialCard t={t} />
                </motion.div>
              ))}
              <div className="w-6 shrink-0" aria-hidden />
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} {...fadeUp(i * 0.1)}>
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
