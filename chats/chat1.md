# Assisted Living Finder Website

_Started 2026-07-08 15:59 UTC_

---

## User

Build a modern, multi-page website for "Assisted Living Finder," a senior living placement and referral service. This is NOT a facility — it's a personal guide that helps families find the right assisted living, memory care, and senior care options. The service is FREE to families (funded by the communities we refer to). Make this a big, reassuring selling point.

BUSINESS DETAILS (use these real details, no placeholders):
- Name: Assisted Living Finder
- Owner/founder: Ronald Duke (local senior care advisor)
- Phone: (662) 315-4460  → make every instance click-to-call
- Email: AssistedLivingFinder@gmail.com
- Primary service areas: Tupelo, MS and Amory, MS (northeast Mississippi)

WHO IT'S FOR & THE JOB:
The visitor is usually an adult child (40s–60s) researching care for an aging parent, often stressed, grieving, and short on time. The site's job is to make them feel calm, understood, and confident enough to CALL or fill out the contact form. Primary conversion = phone call. Secondary = contact form.

VISUAL DIRECTION — warm, human, editorial. Absolutely NOT a generic "AI-generated" template.
- Mood: calm, trustworthy, personal, like a caring family friend who happens to be an expert — not clinical, not corporate SaaS.
- Palette: warm neutrals (ivory/cream/warm sand background), a deep grounding color (soft forest green OR warm navy), and a muted gold/amber accent. NO purple/blue tech gradients, no neon, no cold hospital-white.
- Typography: pair a warm humanist SERIF for headlines (e.g., Fraunces, Lora, or Source Serif) with a clean humanist sans for body (e.g., Inter or Source Sans). Real type hierarchy, generous line height.
- Layout: editorial and asymmetric. Left-aligned hero (not a centered headline with two buttons). Vary section rhythm — full-bleed image sections, offset text blocks, pull quotes. Lots of intentional whitespace.
- Photography direction: candid, warm images of older adults with family/caregivers — real and human, not stock-perfect. Use tasteful image placeholders with clear alt guidance.

THINGS TO AVOID (these read as "AI-made" — do NOT do them):
- Three identical feature cards with emoji icons in a perfect row
- Centered hero headline + two pill buttons + gradient background
- Glassmorphism, heavy drop shadows, everything ultra-rounded
- Purple/indigo gradients and generic "startup" aesthetics
- Symmetrical, cookie-cutter card grids everywhere
Instead: break the grid, use real editorial spacing, mix column widths, let the design feel handcrafted.

PAGES TO BUILD:

1. HOME
   - Hero: warm headline about guiding families to the right senior care in Tupelo & Amory, subhead emphasizing it's free and personal, click-to-call + "Get Free Help" button.
   - "You don't have to figure this out alone" empathy section.
   - Services overview (link to each below) — laid out editorially, not as identical cards.
   - "How it works" — simple 3 steps (Talk to Ronald → Get matched to options → Tour & decide, we handle the legwork).
   - Why families trust us (free service, local knowledge, one point of contact).
   - Testimonials (2–3 warm placeholder quotes from families).
   - Strong closing CTA band with phone number.

2. ABOUT — Ronald Duke's personal story: why he does this, his local roots in northeast Mississippi, his approach (patient, no pressure, family-first). Make it feel like a real person, not a bio template.

3. SERVICES — a services overview page plus a dedicated section/page for each:
   - Assisted Living Placement
   - Memory Care & Alzheimer's Placement
   - Independent Living Guidance
   - Skilled Nursing / Nursing Home Referrals
   - In-Home Care Referrals
   - Respite & Short-Term Care
   - Free Care Assessment
   For each: what it is, who it's for, how Assisted Living Finder helps, and a CTA.

4. SERVICE AREA PAGES — one for TUPELO, MS and one for AMORY, MS.
   Each with UNIQUE content (not copy-paste): local intro, the specific care needs/options in that town, why local expertise matters there, and a local CTA. Put the city name in the H1 and throughout.

5. CONTACT — friendly contact section with a form (Name, Phone, Email, "Tell us about your situation," Preferred timeline) plus click-to-call phone, email, and service-area list. Reassure that reaching out is free and no-obligation.

GLOBAL COMPONENTS:
- Sticky header with logo, nav, and a prominent click-to-call phone button.
- Footer with NAP (name, phone, email, service areas), quick links, and the free-service reassurance line.
- A recurring "Free • No cost to families • No obligation" trust badge.

SEO / TECHNICAL:
- Unique page title + single H1 per page, with city names in area pages and headings.
- Consistent NAP everywhere (exact phone (662) 315-4460 and email).
- LocalBusiness schema for the business + area served (Tupelo, Amory).
- Semantic HTML, accessible contrast, mobile-first responsive, fast-loading.
- All phone numbers as tel: links; email as mailto:.

Tone throughout: warm, plain-spoken, reassuring. Speak to a worried family member like a trusted local guide.

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

Building the shared components first (Header, Footer, image placeholder, trust badge, and reusable service/area body templates), then the 13 pages.

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

Now the two area pages.

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

Now About and Contact pages.

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

All 13 pages plus shared components are built. Verifying the home page now.

_[tool: ready_for_verification]_

Site's built: Home, About, Services (overview + 7 detail pages), Tupelo, Amory, and Contact, all sharing a Header/Footer/trust-badge with click-to-call throughout, LocalBusiness schema, and warm forest-green/cream/gold editorial styling. Let me know if you'd like real photos dropped in place of the placeholders, or copy adjustments.

## User

Check didn’t complete

## Assistant

_[tool: show_html]_

_[tool: get_webview_logs]_

No console errors on Home. The verifier timed out rather than finding a real issue — re-running it.

_[tool: ready_for_verification]_

Re-ran verification — no news from here means it's clean.

## User

fix the logo

## Assistant

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: run_script]_

_[tool: run_script]_

Good, found the card bounds. Cropping it tightly now.

_[tool: run_script]_

Now updating Header and Footer to use the cropped, properly-framed logo mark.

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

Now updating Header and Footer to use this clean icon crop.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Logo fixed — now shows just the house/couple icon mark cropped cleanly instead of the full padded card getting squished into the small header/footer slot.

## User

Save as standalone HTML: Home.dc.html

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_write]_

Now bundling this flattened, self-contained copy.

_[tool: super_inline_html]_

_[tool: show_html]_

Renders cleanly, logo displays correctly. Checking console and delivering.

_[tool: get_webview_logs]_

_[tool: present_fs_item_for_download]_

Here's the standalone, offline-ready Home page. Note: this exports just Home (the site's other pages link out via `.dc.html` files, which aren't part of this offline bundle) — let me know if you want each page exported the same way.

## User

Export all pages as standalone HTML

## User

export homepage

## User

export homepage

## Assistant

_[tool: present_fs_item_for_download]_

Here's the standalone homepage export.

## User

how to give to claude code?

## Assistant

_[tool: read_skill_prompt]_

_[tool: write_file]_

_[tool: copy_files]_

_[tool: present_fs_item_for_download]_

Handoff package with README + all page/component files ready to download. Want screenshots of each page included too?

## User

Export all pages as standalone HTML

## Assistant

_[tool: run_script]_

_[tool: run_script]_

_[tool: copy_files]_

Now bundling each page into a self-contained standalone file.

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

_[tool: super_inline_html]_

Note: since each page is bundled independently, cross-page links (Home → Services, etc.) will only work if all 13 files stay together in the same folder — that's how they're packaged below.

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: present_fs_item_for_download]_

All 13 pages exported as standalone, offline-ready HTML files (zipped). Keep them together in one folder so the internal links between pages keep working.

