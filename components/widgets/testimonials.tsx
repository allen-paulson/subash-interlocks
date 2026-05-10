"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { Testimonial } from "@/lib/api/testimonials";
import { fadeUp, container, defaultTransition } from "@/lib/motion";

type Props = { testimonials: Testimonial[] };

function highlightLatinWords(text: string) {
  const parts = text.split(/(\s+)/);
  return parts.map((part, i) => {
    const isLatin = /^[a-zA-Z]+$/.test(part.replace(/[.,!?]/g, ""));
    if (isLatin && part.trim().length > 0) {
      return (
        <span key={i} className="text-gold font-medium">
          {part}
        </span>
      );
    }
    return part;
  });
}

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-4 text-gold">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="h-full rounded-sm border border-white/8 bg-surface p-7 md:p-8 flex flex-col">
      {/* Quote mark */}
      <div className="mb-5">
        <svg viewBox="0 0 36 30" fill="currentColor" className="size-7 text-gold">
          <path d="M0 30V18.182C0 7.955 5.455 2.318 16.364 0L18 3.273C13.09 4.727 10 7.636 9.273 12H16V30H0Zm20 0V18.182C20 7.955 25.455 2.318 36.364 0L38 3.273C33.09 4.727 30 7.636 29.273 12H36V30H20Z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="flex-1 text-base leading-loose text-foreground/75 mb-7">
        {highlightLatinWords(t.quote)}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/8 mb-5" />

      {/* Author */}
      <div className="flex items-center gap-4">
        {t.imageSrc ? (
          <Image
            src={t.imageSrc}
            alt={t.author}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover ring-2 ring-gold/30"
          />
        ) : (
          <div className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-sm font-semibold text-gold">
            {t.author
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((w) => w[0]?.toUpperCase())
              .join("")}
          </div>
        )}
        <div>
          <p className="font-serif text-base font-medium text-gold">{t.author}</p>
          {t.location && (
            <p className="text-[11px] tracking-widest text-foreground/40 uppercase">
              {t.location}
            </p>
          )}
          <div className="mt-1.5">
            <StarRating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ testimonials }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header row */}
        <motion.div
          className="flex items-end justify-between mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
              transition={defaultTransition}
            >
              <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">
                Testimonials
              </span>
              <div className="h-px w-10 bg-gold/50" />
            </motion.div>
            <motion.h2
              className="font-serif font-light text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight"
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: 0.07 }}
            >
              <span className="text-foreground">What </span>
              <span className="text-gold italic">Clients Say</span>
            </motion.h2>
          </div>

          {/* Prev / Next — desktop only */}
          <motion.div
            className="hidden md:flex gap-3 shrink-0"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.12 }}
          >
            <PrevNextButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
          </motion.div>
        </motion.div>

        {/* Embla carousel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Prev / Next — mobile only, below carousel */}
        <div className="flex md:hidden gap-3 mt-8">
          <PrevNextButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />
        </div>
      </div>
    </section>
  );
}

function PrevNextButtons({
  scrollPrev,
  scrollNext,
}: {
  scrollPrev: () => void;
  scrollNext: () => void;
}) {
  return (
    <>
      <button
        onClick={scrollPrev}
        aria-label="Previous testimonial"
        className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-[#0d0d0d] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next testimonial"
        className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-[#0d0d0d] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </>
  );
}
