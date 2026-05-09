# Project Requirements Document (PRD): Multitenant Portfolio SaaS for Kerala Tradespeople

## 1. Project Overview

A high-performance, single-page portfolio template for skilled tradespeople (e.g., interlock layers)[cite: 2]. The goal is a "Zero-Logo" design that relies on elite typography and high-quality imagery to build trust[cite: 2].

## 2. Technical Stack

- **Framework:** Next.js (App Router)[cite: 2]
- **Styling:** Tailwind CSS[cite: 2]
- **Database/Storage:** Supabase (for multitenant data and image hosting)[cite: 2]
- **Routing:** Wildcard subdomains (e.g., `sumesh.pani.in`) via Middleware[cite: 2].

---

## 3. Section-by-Section Specifications

### A. Global Header

- **Logo:** None. Text-based branding only: `SUMESH.` (Black, Heavy Weight)[cite: 2].
- **Menu:** Works, About, Contact (Smooth scroll anchors)[cite: 2].
- **Language Toggle:** EN | MAL (Persistent state for content switching)[cite: 2].

### B. Banner (Hero)

- **Visual:** High-res background of a complex interlock design[cite: 2].
- **Badges:** Two "Pill" designs at the top: `[ 15+ Years Experience ]` and `[ 100+ Satisfied Customers ]`[cite: 2].
- **Headline:** "Master Craftsmanship in Interlock Paving"[cite: 2].
- **CTA:** Floating WhatsApp button + "View Projects" button[cite: 2].

### C. Image Slider (The Proof)

- **Logic:** A horizontal, touch-swipe enabled slider showing 10-12 curated "Complex Designs"[cite: 2].
- **Button:** A "View All" button at the end of the slider to open a grid overlay of the remaining 60+ images[cite: 2].

### D. About Section (Split Layout)

- _Reference Image Provided: 2-column minimalist layout[cite: 2]._
- **Left Column:** Large, bold H2 headline: "PROFESSIONAL SOLUTIONS FOR YOUR OUTDOOR SPACES" with a thick accent underline in slate or earth tone[cite: 2].
- **Right Column:** Two paragraphs detailing the 15 years of experience, expertise in Kerala monsoons, and precision cutting[cite: 2].

### E. Info Cards (Services)

- **Design:** 3-column grid of minimalist cards with subtle borders[cite: 2].
- **Content:**
  1.  **Custom Geometric Designs:** Precise stone cutting for circles and waves[cite: 2].
  2.  **Maintenance & Re-laying:** Restoring old surfaces[cite: 2].
  3.  **Heavy-Duty Driveways:** Commercial-grade durability[cite: 2].

### F. Testimonials

- **Design:** Clean, centered typography[cite: 2].
- **Content:** Quotes from local clients in Kerala, mentioning specific locations (e.g., Thrissur, Ernakulam)[cite: 2].

### G. Contact Section

- **Design:** Heavy emphasis on immediate action[cite: 2].
- **Buttons:** Two large, side-by-side buttons:
  - **WhatsApp:** `bg-emerald-600` with pre-filled message logic[cite: 2].
  - **Call:** `bg-slate-900` for direct mobile dialling[cite: 2].

---

## 4. Multitenant & Performance Requirements

- **Middleware Logic:** Extract subdomain from `host` header and fetch profile data from Supabase[cite: 2].
- **Image Pipeline:** All images must be served as **WebP** via a CDN to ensure fast loading on mobile data in rural Kerala[cite: 2].
- **Responsive:** Extreme focus on "Mobile-First." The "WhatsApp" and "Call" buttons should be sticky on mobile[cite: 2].
