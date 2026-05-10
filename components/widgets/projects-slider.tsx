"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/api/projects";
import { fadeUp, defaultTransition } from "@/lib/motion";

type Props = { projects: Project[] };

const WIDTHS = ["55vh", "40vh", "65vh", "35vh", "50vh"];

export default function ProjectsSlider({ projects }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    watchDrag: () => window.matchMedia("(pointer: fine)").matches,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="works" className="pb-10 md:pb-16 lg:pb-24">
      {/* Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="h-[50vh] overflow-hidden md:cursor-grab md:active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex h-full items-stretch">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="relative ms-1 shrink-0 overflow-hidden"
                style={{ width: WIDTHS[i % WIDTHS.length] }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #141414 25%, #1e1e1e 50%, #141414 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s ease-in-out infinite",
                  }}
                />
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="60vh"
                  loading="lazy"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile prev/next buttons */}
      <div className="flex md:hidden justify-center gap-3 mt-6">
        <button
          onClick={scrollPrev}
          aria-label="Previous project"
          className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-[#0d0d0d] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next project"
          className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-[#0d0d0d] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-6 md:mt-10 flex justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUp}
        transition={{ ...defaultTransition, delay: 0.1 }}
      >
        <NextLink
          href="/works"
          className="inline-flex items-center gap-3 border border-gold/50 text-gold hover:bg-gold hover:text-[#0d0d0d] px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300"
        >
          View All Works
          <span className="text-base leading-none">→</span>
        </NextLink>
      </motion.div>
    </section>
  );
}
