import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { getAllProjects } from "@/lib/api/projects";
import { getProfile } from "@/lib/api/profile";

export const metadata: Metadata = {
  title: "All Works",
  description:
    "Browse the complete portfolio of interlock paving projects by Subash D — residential courtyards, commercial complexes, custom geometric designs and heavy-duty driveways across Kerala.",
};

export default async function WorksPage() {
  const [projects, profile] = await Promise.all([
    getAllProjects(),
    getProfile(),
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0d0d0d]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <NextLink
            href="/"
            className="font-serif text-xl font-medium tracking-wide text-gold"
          >
            {profile.name}
          </NextLink>
          <NextLink
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-white/50 hover:text-gold transition-colors uppercase"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </NextLink>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 pb-24">
        {/* Page title */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold tracking-[0.3em] text-gold uppercase">
              Portfolio
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight text-foreground">
            All <span className="text-gold italic">Works</span>
          </h1>
          <p className="mt-4 text-sm text-foreground/40">
            {projects.length} projects · Kerala
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-square overflow-hidden bg-surface"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                loading="lazy"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/40 mb-6">
            Interested in a project like these?
          </p>
          <NextLink
            href="/#contact"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-hover text-[#0d0d0d] font-sans font-semibold text-xs tracking-[0.2em] px-9 py-4 transition-colors uppercase"
          >
            Get In Touch
            <span className="text-base leading-none">→</span>
          </NextLink>
        </div>
      </main>
    </div>
  );
}
