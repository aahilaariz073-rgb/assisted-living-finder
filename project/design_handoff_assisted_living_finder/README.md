# Handoff: Assisted Living Finder Website

## Overview
A 13-page marketing/lead-gen site for Assisted Living Finder, a free senior-living placement and referral service run by Ronald Duke, serving Tupelo, MS and Amory, MS. Primary conversion goal is phone calls (click-to-call), secondary is the contact form. Warm, editorial, human tone — not a corporate SaaS template.

## About the Design Files
The files in this bundle are **design references built as Design Components (DC) in HTML** — a prototyping format specific to this design tool. They are not production code to copy verbatim. The task is to **recreate these designs in the target codebase's actual stack** (e.g. React/Next.js, Vue, plain static site generator, etc.) using that codebase's existing patterns, routing, component structure, and build tooling. If no stack exists yet, a static site generator (e.g. Astro, Eleventy) or lightweight React/Next.js app is a good fit for this kind of multi-page marketing site with a contact form.

Notes specific to this format, so nothing is misread as intentional production code:
- All styling is inline (`style="..."`) — this is a constraint of the prototyping tool, not a recommendation. Recreate styles using the target codebase's normal approach (CSS modules, Tailwind, styled-components, plain CSS, whatever is already used).
- Repeated markup (Header, Footer, ImagePlaceholder, ServiceDetail, AreaDetail) is split into separate `.dc.html` files and mounted via `<dc-import name="X">` tags — treat each as the spec for one reusable component/partial in the real app.
- `<sc-if>` / `<sc-for>` are the prototyping tool's conditional/loop syntax — recreate the same logic with whatever the target framework uses (ternaries/`.map()` in React, `v-if`/`v-for` in Vue, etc.).
- The `support.js` file and the `<script data-dc-script>` blocks are internal runtime plumbing for this tool — ignore them entirely; they have no counterpart in a real app.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final/intended. Recreate pixel-for-pixel where practical using the target codebase's styling system. Photography is placeholder-only (see Assets below) — real photos should be swapped in before/at launch.

## Site Map / Pages
1. **Home** (`Home.dc.html`) — hero, empathy section, services overview, how-it-works (3 steps), why-trust-us, testimonials, closing CTA.
2. **About** (`About.dc.html`) — Ronald Duke's personal story/bio.
3. **Services overview** (`Services.dc.html`) — list of all 7 services, each linking to its detail page.
4. **Service detail pages** (7 files, all built on the shared `ServiceDetail.dc.html` component):
   - `Service-AssistedLiving.dc.html`
   - `Service-MemoryCare.dc.html`
   - `Service-IndependentLiving.dc.html`
   - `Service-SkilledNursing.dc.html`
   - `Service-InHomeCare.dc.html`
   - `Service-Respite.dc.html`
   - `Service-Assessment.dc.html`
5. **Service area pages** (2 files, built on shared `AreaDetail.dc.html` component, unique copy per city):
   - `Area-Tupelo.dc.html`
   - `Area-Amory.dc.html`
6. **Contact** (`Contact.dc.html`) — contact form (Name, Phone, Email, situation textarea, timeline select) + click-to-call, email, service-area list.

Shared components: `Header.dc.html` (sticky nav + click-to-call button, responsive hamburger below 880px), `Footer.dc.html` (NAP, quick links, service areas), `TrustBadge.dc.html` ("Free • No cost to families • No obligation" pill), `ImagePlaceholder.dc.html` (diagonal-striped placeholder box with a label).

## Layout & Components

### Header
- Sticky, `background:#FAF6EE`, bottom border `1px solid #E4DBC6`.
- Max content width 1240px, centered, `padding:14px 24px`.
- Logo: 48×48px image (`assets/logo-icon.png`), `border-radius:10px`, next to two-line wordmark ("Assisted Living Finder" in Fraunces 600 19px `#2F4A3D`, "FINDER" sub-label in Inter 500 13px letter-spacing 0.14em `#C89A4B`).
- Desktop nav (≥880px): Home / About Ronald / Services / Tupelo / Amory / Contact, Inter 500 15px, active link gets `font-weight:700` + `2px solid #C89A4B` underline, inactive `#5B5548`.
- Below 880px: nav collapses behind a hamburger button (42×42px, bordered) that toggles a stacked mobile menu.
- Always-visible click-to-call button: `background:#2F4A3D`, text `#FAF6EE`, `padding:11px 20px`, `border-radius:8px`, phone icon + "(662) 315-4460", hover `background:#223529`.

### Footer
- `background:#2F4A3D`, text `#EDE7D6`, Inter font.
- 4-column flex-wrap layout (max 1240px): brand blurb + trust line, Contact (phone/email/Ronald's name), Service Areas (Tupelo/Amory), Quick Links (About/Services/Contact).
- Bottom bar: `border-top:1px solid #40594A`, centered copyright, `color:#9FA98F`, 13px.

### Trust badge
- Inline-flex pill, `background:#F3ECDD`, `border:1px solid #E4DBC6`, `border-radius:999px`, `padding:9px 18px`, checkmark icon in `#C89A4B`, text Inter 600 13px `#2F4A3D`: "Free • No cost to families • No obligation".

### Image placeholder
- Box with configurable height (default 320px), `border-radius:14px`, diagonal repeating-stripe pattern in warm tans (`#E4D8BC`/`#DCCEAC`), centered monospace label chip describing the intended photo (e.g. "family touring an assisted living community").

### Home page structure (top to bottom)
1. Hero: trust badge, H1 (Fraunces 600, clamp(36px,5.5vw,58px), `#2F4A3D`, max-width 15ch) — "Finding the right senior care shouldn't fall on you alone" — subhead (Inter 19px/1.75 `#3E382E`), two CTAs (filled "Call (662) 315-4460", outlined "Get Free Help"), image placeholder at right (440px tall).
2. Empathy section: centered-width (800px) two-paragraph copy block, no card, just generous whitespace.
3. Services overview: large featured card (Assisted Living Placement, image + title + blurb) at 2fr next to a stacked list of 6 smaller service links at 1fr.
4. How it works: 3-column (flex-wrap) numbered steps on `#F3ECDD` background band, large italic Fraunces numerals in `#C89A4B`.
5. Why trust us: image left / 3-item checklist right (Genuinely free, Real local knowledge, One point of contact), checkmark icons in `#C89A4B`.
6. Testimonials: 3-column band on `#2F4A3D` dark background, italic Fraunces pull-quotes in `#EDE7D6`, attribution in `#9FA98F`.
7. Closing CTA: centered, large Fraunces headline, two buttons (call / get free help).

### Service detail template (`ServiceDetail.dc.html`)
- Top: eyebrow label (Inter 700 13px uppercase `#C89A4B`) + H1 (Fraunces 600, clamp(32px,4.5vw,48px)) + intro paragraph (max 56ch) + CTA button, image placeholder at right (320px).
- Two-column "Who this is for" / "How Assisted Living Finder helps" checklist section, divider border below.
- Closing CTA band on `#F3ECDD` background with call + "Start Online" buttons.

### Area detail template (`AreaDetail.dc.html`)
- Hero: eyebrow "Serving {City}, Mississippi", H1 "Senior Living Guidance in {City}, MS", intro paragraph, call + "Get Free Help" buttons, image placeholder.
- "What families in {City} are looking for": 3 cards on `#F3ECDD` background, each with a title + body (city-specific needs).
- Two-column: long-form "Why local knowledge matters" copy (2 paragraphs) + a dark `#2F4A3D` callout card with a call CTA.

### Contact page
- Hero: eyebrow, H1 "Let's figure this out together", intro paragraph, trust badge.
- Two-column: left = 3 stacked info cards (Call/text, Email, Service areas) each on `#F3ECDD` background with a circular `#2F4A3D` icon badge; right = form card (also `#F3ECDD`) with Name, Phone, Email, "Tell us about your situation" textarea, Preferred timeline select (Right away / This month / Planning ahead / Not sure), submit button. On submit, form swaps to a dark `#2F4A3D` thank-you confirmation panel (client-side only in the prototype — needs real submission handling, e.g. POST to an email service or CRM).

### About page
- Hero: eyebrow "About Ronald", H1 "A neighbor first, an advisor second", large italic pull-quote from Ronald, image placeholder.
- Centered (800px) 3-paragraph personal narrative.
- 3-card row (Local roots / Patient, no pressure / Family-first) on `#F3ECDD` cards.
- Closing CTA band on `#2F4A3D`.

## Interactions & Behavior
- **Click-to-call**: every phone number instance is `<a href="tel:+16623154460">`.
- **Email**: `<a href="mailto:AssistedLivingFinder@gmail.com">`.
- **Header responsiveness**: JS-driven breakpoint at 880px (`window.innerWidth < 880`) toggles between inline desktop nav and a hamburger + collapsible mobile nav. Recreate with CSS media queries + a toggle state instead of a JS-measured breakpoint if the target stack prefers that.
- **Contact form**: controlled inputs (name, phone, email, message, timeline — default "Right away"), `onSubmit` prevents default and swaps the form for a static thank-you message. No real backend wired up — needs an actual submit handler (email delivery, CRM, or serverless function) in production.
- **Hover states**: primary buttons darken from `#2F4A3D` to `#223529`; service-list rows on the Services page highlight to `#F3ECDD` background on hover.
- No page transition animations; content is static once rendered.

## State Management
- Header: `isMobile` (boolean, from viewport width), `menuOpen` (boolean, toggled by hamburger button).
- Contact form: `name`, `phone`, `email`, `message`, `timeline`, `submitted` (all local component state, no persistence/routing).
- No global state, no data fetching — this is a static content site plus one local form.

## Design Tokens

### Colors
- Cream/ivory background: `#FAF6EE`
- Warm sand card background: `#F3ECDD`
- Deep forest green (primary/grounding): `#2F4A3D`
- Darker green (hover state): `#223529`
- Muted gold/amber accent: `#C89A4B`
- Body text (dark warm gray): `#3E382E`
- Secondary/muted text: `#5B5548`
- Light border: `#E4DBC6`
- Input border: `#D8CBA9`
- Footer light text: `#EDE7D6`
- Footer muted text: `#C9C0AA`
- Footer border: `#40594A`
- Footer faint text: `#9FA98F`
- Placeholder stripe tans: `#E4D8BC`, `#DCCEAC`
- Placeholder box fill: `#EDE4D0`

### Typography
- Headline serif: **Fraunces** (weights 400/500/600/700, italic 500) — used for all H1/H2/H3, pull-quotes, numerals.
- Body sans: **Inter** (weights 400/500/600/700) — used for body copy, nav, buttons, labels, forms.
- Loaded via Google Fonts: `Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500` + `Inter:wght@400;500;600;700`.
- H1 sizes typically `clamp(32px–36px, ~5vw, 48px–58px)`; H2 typically `clamp(28px, 3.6vw, 38px)`.
- Body copy 15–19px, line-height 1.55–1.85 depending on density.

### Spacing / radius
- Card/section border-radius: 12–16px (`14px` most common).
- Button border-radius: 8px.
- Pill border-radius: 999px.
- Section vertical padding: 64–88px on desktop.
- Max content width: 1240px (800px for narrow prose sections).

### Shadows
- None used intentionally — the design deliberately avoids drop shadows/glassmorphism per its "editorial, not SaaS" direction. Keep it that way.

## Assets
- `assets/logo-icon.png` — cropped logo mark (house/couple icon), used at 44–48px in header/footer, `background:#8FCB9F` behind it, `object-position:center 40%`.
- `assets/logo-mark.png` / `assets/logo.png` — uncropped source logo (kept for reference only; not used directly in pages).
- All photography is placeholder (`ImagePlaceholder` component) — needs real, candid photos of older adults with family/caregivers before launch, per the brief's photography direction (warm, human, not stock-perfect).

## SEO / Technical requirements to preserve
- Every page has a unique `<title>` and meta description, and exactly one `<h1>`.
- Area pages (Tupelo, Amory) put the city name in the H1 and repeat it through body copy — keep this pattern for any future area pages.
- `LocalBusiness` JSON-LD schema is present on Home, Services, all service detail pages, both area pages, and Contact — includes name, telephone (`+16623154460`), email, `areaServed` (Tupelo/Amory), founder (Ronald Duke), and `priceRange: "Free to families"`. Recreate this schema in the real app's `<head>`/layout, ideally generated once and shared rather than duplicated per page.
- NAP (Name/Address/Phone) is consistent everywhere: phone always `(662) 315-4460` / `tel:+16623154460`, email always `AssistedLivingFinder@gmail.com`.
- Mobile-first responsive via flex-wrap layouts; no fixed breakpoints beyond the 880px header collapse — verify real implementation holds up down to ~360px width.

## Files in this bundle
- `Home.dc.html`, `About.dc.html`, `Services.dc.html`, `Contact.dc.html`
- `Service-AssistedLiving.dc.html`, `Service-MemoryCare.dc.html`, `Service-IndependentLiving.dc.html`, `Service-SkilledNursing.dc.html`, `Service-InHomeCare.dc.html`, `Service-Respite.dc.html`, `Service-Assessment.dc.html`
- `Area-Tupelo.dc.html`, `Area-Amory.dc.html`
- Shared components: `Header.dc.html`, `Footer.dc.html`, `TrustBadge.dc.html`, `ImagePlaceholder.dc.html`, `ServiceDetail.dc.html`, `AreaDetail.dc.html`
- `assets/` — logo files
- A fully self-contained, offline-viewable export of the homepage is also included as `Assisted Living Finder - Home.html` for quick visual reference (open directly in a browser).
