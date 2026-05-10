"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/api/profile";
import { fadeUp, container, defaultTransition } from "@/lib/motion";

type Props = { profile: Profile };

export default function Contact({ profile }: Props) {
  const waUrl = `${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          {/* Section label */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            variants={fadeUp}
            transition={defaultTransition}
          >
            <div className="h-px w-10 bg-gold/50" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">
              Contact
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </motion.div>

          <motion.h2
            className="font-serif font-light text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-4"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.07 }}
          >
            Ready to Transform{" "}
            <span className="text-gold italic">Your Space?</span>
          </motion.h2>

          <motion.p
            className="text-sm text-foreground/45 mb-12 leading-relaxed"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.13 }}
          >
            Reach out via WhatsApp for a free consultation, or call directly.
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fbe5c] text-white font-sans font-semibold text-xs tracking-[0.15em] uppercase px-8 py-4 transition-colors sm:flex-1 sm:max-w-xs"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={profile.phone}
              className="inline-flex items-center justify-center gap-3 border border-gold/40 text-gold hover:bg-gold hover:text-[#0d0d0d] font-sans font-semibold text-xs tracking-[0.15em] uppercase px-8 py-4 transition-all sm:flex-1 sm:max-w-xs"
            >
              <PhoneIcon />
              Call Now
            </a>
          </motion.div>

          {/* Footer note */}
          <motion.p
            className="mt-16 text-[11px] tracking-widest text-foreground/20 uppercase"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.28 }}
          >
            Serving Thrissur · Ernakulam · All Kerala
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-white/8 sm:hidden">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-4 text-xs font-semibold tracking-wider text-white uppercase"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={profile.phone}
          className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-xs font-semibold tracking-wider text-[#0d0d0d] uppercase"
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.535 5.857L.057 23.082a.75.75 0 0 0 .916.941l5.42-1.429A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.739 9.739 0 0 1-4.988-1.367l-.358-.213-3.712.979.994-3.617-.234-.372A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
    </svg>
  );
}
