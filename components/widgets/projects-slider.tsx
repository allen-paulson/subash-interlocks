"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Button from "@/components/ui/button";
import type { Project } from "@/lib/api/projects";

type Props = { projects: Project[] };

const WIDTHS = [
  "40vh",
  "60vh",
  "28vh",
  "50vh",
  "30vh",
  "45vh",
  "32vh",
  "55vh",
  "38vh",
  "48vh",
];

export default function ProjectsSlider({ projects }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, dragFree: true },
    [
      AutoScroll({
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [sliceCount, setSliceCount] = useState(10);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setSliceCount(mq.matches ? 5 : 10);
    const handler = (e: MediaQueryListEvent) =>
      setSliceCount(e.matches ? 5 : 10);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    if (sliceCount === 5) autoScroll.stop();
    else autoScroll.play();
  }, [emblaApi, sliceCount]);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [overlayOpen]);

  const featured = projects.slice(0, sliceCount);

  return (
    <section id="works" className="pb-8 md:pb-10 lg:pb-20">
      {/* Fixed height eliminates layout shift while images load */}
      <div className="h-[50vh] overflow-hidden" ref={emblaRef}>
        <div className="flex h-full items-stretch">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className={`relative ms-1 shrink-0 overflow-hidden rounded-sm`}
              style={{ width: WIDTHS[i % WIDTHS.length] }}
            >
              {/* Shimmer placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #e4e4e7 25%, #f4f4f5 50%, #e4e4e7 75%)",
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
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="secondary" onClick={() => setOverlayOpen(true)}>
          View All Works
        </Button>
      </div>

      {overlayOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/95 px-6 py-10 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-medium leading-none tracking-tight text-white">
                All Projects
              </h2>
              <button
                onClick={() => setOverlayOpen(false)}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                aria-label="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-5"
                >
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative aspect-square overflow-hidden rounded-sm bg-zinc-800"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
