"use client";

import { motion } from "framer-motion";
import Link from "@/components/ui/link";
import type { Profile } from "@/lib/api/profile";

type Props = { profile: Profile };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" } as const,
});

export default function Contact({ profile }: Props) {
  const waUrl = `${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <section id="contact" className="py-8 md:py-10 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          className="mb-4 text-2xl md:text-3xl font-medium leading-none tracking-tight text-black"
          {...fadeUp(0)}
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p className="mb-12 text-base text-zinc-500" {...fadeUp(0.1)}>
          Reach out via WhatsApp for a free consultation, or call directly.
        </motion.p>

        <motion.div
          className="flex flex-col gap-2 lg:gap-4 sm:flex-row sm:justify-center"
          {...fadeUp(0.2)}
        >
          <Link
            variant="whatsapp"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 md:h-14 rounded-2xl px-8 text-base font-semibold gap-3 sm:flex-1 sm:max-w-xs"
          >
            <WhatsAppIcon />
            WhatsApp
          </Link>
          <Link
            variant="call"
            href={profile.phone}
            className="h-11 md:h-14 rounded-2xl px-8 text-base font-semibold gap-3 sm:flex-1 sm:max-w-xs"
          >
            <PhoneIcon />
            Call Now
          </Link>
        </motion.div>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-zinc-200 bg-white sm:hidden">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-emerald-600 py-4 text-sm font-semibold text-white"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={profile.phone}
          className="flex flex-1 items-center justify-center gap-2 bg-slate-900 py-4 text-sm font-semibold text-white"
        >
          <PhoneIcon />
          Call
        </a>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.535 5.857L.057 23.082a.75.75 0 0 0 .916.941l5.42-1.429A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.739 9.739 0 0 1-4.988-1.367l-.358-.213-3.712.979.994-3.617-.234-.372A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
      />
    </svg>
  );
}
