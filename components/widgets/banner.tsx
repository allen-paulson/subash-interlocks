"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "@/components/ui/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

export default function Banner() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-[50svh]">
      <div className="relative z-10 flex flex-col items-center justify-between px-6 py-10 pt-28">
        <motion.div
          className="flex items-center gap-1.5 mb-6 bg-orange-500 p-1 rounded-full"
          {...fade(0)}
        >
          <div className="flex -space-x-2">
            <Image
              src="/assets/users/user1.webp"
              alt="Customer"
              width={40}
              height={40}
              className="rounded-full ring-1 ring-white object-cover size-5"
            />
            <Image
              src="/assets/users/user2.webp"
              alt="Customer"
              width={40}
              height={40}
              className="rounded-full ring-1 ring-white object-cover size-5"
            />
            <Image
              src="/assets/users/user3.webp"
              alt="Customer"
              width={40}
              height={40}
              className="rounded-full ring-1 ring-white object-cover size-5"
            />
          </div>
          <span className="text-xs text-white pe-2">+100 happy customers</span>
        </motion.div>

        <motion.h1
          className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-none tracking-tight text-black"
          {...fade(0.12)}
        >
          Master Craftsmanship in <br />
          Interlock Paving
        </motion.h1>

        <motion.div
          className="flex flex-wrap items-center justify-center mt-6"
          {...fade(0.22)}
        >
          <Link href="#contact">Get in Touch</Link>
        </motion.div>
      </div>
    </section>
  );
}
