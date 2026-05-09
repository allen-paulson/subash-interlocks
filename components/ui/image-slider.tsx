"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export type SliderImage = {
  src: string;
  alt: string;
};

type Props = {
  images: SliderImage[];
  speed?: number;
  gap?: number;
  maxImageWidth?: number;
  maxImageHeight?: number;
};

export default function ImageSlider({
  images,
  speed = 50,
  gap = 16,
  maxImageWidth = 480,
  maxImageHeight = 320,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: false,
  });

  const isDraggingRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const tick = useCallback(
    (timestamp: number) => {
      if (emblaApi && !isDraggingRef.current) {
        const elapsed = lastTimeRef.current
          ? timestamp - lastTimeRef.current
          : 0;
        if (elapsed > 0 && elapsed < 100) {
          const engine = emblaApi.internalEngine();
          const delta = (speed / 1000) * elapsed;
          engine.location.add(-delta);
          engine.target.set(engine.location.get());
          engine.scrollLooper.loop(-1);
          engine.slideLooper.loop();
          engine.translate.to(engine.location.get());
        }
      }
      lastTimeRef.current = timestamp;
      rafRef.current = requestAnimationFrame(tick);
    },
    [emblaApi, speed]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => {
      isDraggingRef.current = true;
    };
    const onSettle = () => {
      isDraggingRef.current = false;
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("settle", onSettle);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("settle", onSettle);
      cancelAnimationFrame(rafRef.current);
    };
  }, [emblaApi, tick]);

  return (
    <div
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
      ref={emblaRef}
    >
      <div
        className="flex items-start select-none"
        style={{ gap }}
      >
        {images.map((img, i) => (
          <div key={i} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              draggable={false}
              className="block object-cover object-top h-auto w-auto"
              style={{
                maxWidth: maxImageWidth,
                maxHeight: maxImageHeight,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
