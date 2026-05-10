"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Profile } from "@/lib/api/profile";

type Props = { profile: Profile };

export default function Header({ profile }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: profile.nav.works.toUpperCase(), href: "/works" },
    { label: profile.nav.about.toUpperCase(), href: "#about" },
    { label: profile.nav.contact.toUpperCase(), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0d0d0d]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <span className="font-serif text-xl font-medium tracking-wide text-gold">
          {profile.name}
        </span>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.18em] text-white/55 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center h-9 px-5 text-[11px] font-medium tracking-[0.18em] text-white border border-white/25 rounded-sm hover:border-gold hover:text-gold transition-colors"
        >
          GET IN TOUCH
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white/70 transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white/70 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white/70 transition-all duration-300 ${menuOpen ? "translate-y-[-6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <nav className="flex flex-col gap-6 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.03, duration: 0.15 }}
                  className="text-sm font-medium tracking-[0.18em] text-white/55 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
