# Travelaxis Design Guide — "Aqua"

The single source of truth for how travelaxis.me looks. Use only the colours, type and components below. If something new is needed, add it here first.

**Brand feel:** airy, premium, friendly. Soft aqua / lilac / peach washes, rounded white cards, generous spacing, flat friendly illustrations and deep navy type. Teal is the one action colour that tells people where to click.

**What we sell:** visit visa documentation for every destination (Dubai/UAE, UK, USA, Schengen, Canada, Australia, Asia, Middle East and more), from offices in Dubai and Lahore.

**Technical note:** this project runs a customized/pinned Next.js build with some differences from the publicly documented API. Check `node_modules/next/dist/docs/` for the current reference before relying on general Next.js documentation, and watch for deprecation notices.

---

## 1. Colour palette — "Aqua"

| Name | Hex | Token | Use |
|---|---|---|---|
| **Teal** | `#19B6A3` | `--teal` / `--teal-700` (`bg-teal-700`) | Primary buttons (white, bold text) and highlighted cards |
| **Teal hover** | `#149C8C` | `--teal-800` | Hover of primary buttons |
| **Midnight navy** | `#10254A` | `--navy` | Headings, body text, footer (white text) |
| **Soft aqua** | `#DDF7F4` | `--teal-50` / `--teal-100` | Background washes and the eligibility panel |
| **Pale lavender** | `#EEE7FC` | `--lilac-50` | Gradient accents and supporting cards |
| **Warm peach** | `#FFE8D8` | `--peach-50` | Gradient accents and small highlights |
| **White** | `#FFFFFF` | `--background` | Main card surfaces |
| **Wash** | `#DDF7F4 → #EEE7FC → #FFE8D8` | `--wash` (`.bg-wash`) | Gradient bands behind heroes and feature sections |

Supporting tokens (unchanged): electric blue `#2864E8` links (`--primary`), slate `#4B5B70` secondary text, line `#E3EAF3` borders, soft surface `#F4F8FC`.

**Functional colours (never decorative):**
- WhatsApp green `#25D366` — only the WhatsApp icon/button.
- Error red `#D4183D` — only form errors and destructive actions.

**Where they live in code**
- `app/globals.css` → `:root` raw tokens (`--teal`, `--navy`, `--blue` …) and the semantic shadcn tokens mapped onto them (`--primary`, `--foreground`, `--muted-foreground`, `--secondary`, `--border`, `--ring`, `--card-icon-bg`, `--card-shadow` …). Each raw token is also exposed as a Tailwind colour (`bg-teal-700`, `text-navy`, `bg-blue-50` …).
- Older components still hard-code hex values; they were migrated 1:1 (`#0A4D8C→#2864E8`, `#083B6B→#1F4FBF`, `#0F2A43→#10254A`, gold `#F5A524`→teal button `#0B7A6D` with white text, `#F7F3EC→#F4F8FC`, `#E6E1D8→#E3EAF3`, `#E0F0FB→#E8EFFD`, `#38BDF8→#19B6A3`, `#52606D`/`#3E4C5A→#4B5B70`). New code should use the tokens.

### Buttons
- **Primary:** teal fill `#0B7A6D`, white text, `h-12`, `rounded-full` or `rounded-xl`; hover → `#08665B` + slight lift and shadow. One primary per view.
- **Secondary:** white fill, 1px `--line` border, navy text; hover → lift + shadow.
- **Text link:** electric blue `#2864E8`, hover `#1F4FBF`, underline on hover.
- Tap targets ≥ 48px.

### Colour rules
1. **Text on the teal button is white.** Bright teal `#19B6A3` is never a fill behind small text.
2. **Text on electric blue or navy is white** (paragraphs `text-white/90` minimum on blue).
3. Lilac and peach are for icon bubbles and washes, never for text blocks.
4. **Never use** the retired "Ocean & Sand" colours (`#0A4D8C`, `#083B6B`, `#0F2A43`, gold `#F5A524`, `#3B2600`, sand `#F7F3EC`, `#E6E1D8`, `#E0F0FB`, `#38BDF8`, `#52606D`, `#3E4C5A`) or anything in `styles/theme.css` (unused legacy file).
5. Status colours (emerald/amber) only inside small status badges.

### Approved pairings (all pass WCAG AA)
| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `#10254A` navy | `#FFFFFF` / `#F4F8FC` | 15.2 / 14.3 | Headings, body |
| `#4B5B70` slate | `#FFFFFF` / `#F4F8FC` | 6.9 / 6.5 | Descriptions |
| `#FFFFFF` white | `#0B7A6D` teal button | 5.2 | Primary buttons |
| `#FFFFFF` white | `#2864E8` / `#10254A` | 5.2 / 15.2 | Bands, footer, blue buttons |
| `#2864E8` blue | `#FFFFFF` / `#F4F8FC` | 5.2 / 4.8 | Links |
| `#7C5CE6` lilac | `#FFFFFF` | 4.6 | Icon accents |

## 1a. Logo

- **Main logo:** "Travel" in ocean blue + "Axis" in gold with a plane and swoosh. Files: `public/travelaxis-logo.webp` (used in pages) and `public/travelaxis-logo.png` (social share image, structured data). 704×158, transparent background.
- **Favicon / app icon:** gold plane on an ocean rounded square (`app/icon.png`, `app/apple-icon.png`).
- **Where it appears:** header (`h-9 sm:h-10`), footer (`h-9`), Open Graph image, `logo` in the ProfessionalService schema.
- Use it on **white or sand** backgrounds only. On ocean or navy the blue "Travel" loses contrast — use the white header area instead of placing the logo on the hero.
- Keep clear space around it equal to the height of the plane; never stretch, recolour, add shadows or re-type the wordmark in a font.

---

## 2. Typography

- **Font:** Manrope (loaded in `app/layout.tsx`), for headings and body.
- **Weights:** 400 body · 600 labels/buttons · 700 card titles · 800 section headings.
- `components/home/fonts.ts` loads Fraunces (serif) — used **only** for the airport codes (LHE / LHR) on the hero boarding-pass card. Don't use it elsewhere.

| Role | Size (mobile → desktop) | Weight | Colour | Tailwind |
|---|---|---|---|---|
| Hero H1 | 30 → 48px | 700 | white | `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight` |
| Section H2 | 30 → 36px | 800 | navy | `text-3xl sm:text-4xl font-extrabold tracking-tight` |
| Card title H3 | 18–20px | 700 | navy | `text-lg font-bold` / `text-xl font-bold` |
| Lead paragraph | 18px | 400 | slate | `text-lg` |
| Body | 15–16px | 400 | slate | `text-[0.9375rem] leading-relaxed` |
| Small / meta | 12–14px | 500 | slate | `text-xs` / `text-sm` |

Rules: one H1 per page · sentence case for headings and buttons · keep line length under ~70 characters (`max-w-2xl` for paragraphs).

---

## 3. Layout and spacing

- **Container:** `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- **Section spacing:** `py-16 sm:py-20`
- **Grid gaps:** `gap-5` / `gap-6`
- **Section rhythm:** alternate backgrounds so white cards always sit on sand:
  `Hero (ocean) → Sand → White → Sand → White → … → CTA band (ocean) → Newsletter (navy) → Footer (white)`
- **Corner radius:** buttons `rounded-xl` (home) or `rounded-full` (header/CTA bands) · cards `rounded-2xl` · pills `rounded-full`
- **Shadows:** soft, navy-tinted only
  - resting card: `shadow-[0_2px_8px_rgba(15,42,67,0.06)]`
  - hover card: `shadow-[0_16px_32px_rgba(15,42,67,0.14)]`

---

## 4. Components

### Section heading
Centered navy H2, short gold bar under it, slate subtitle.
```tsx
<h2 className="text-3xl font-extrabold tracking-tight text-[#0F2A43] sm:text-4xl">Visit visa destinations</h2>
<span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F5A524]" />
<p className="mt-4 text-lg text-[#52606D]">Subtitle…</p>
```

### Buttons
| Type | When | Classes |
|---|---|---|
| **Teal (primary CTA)** | The one main action per view | `h-12 px-5 rounded-xl bg-teal-700 text-white font-bold hover:bg-teal-800` |
| **Electric blue** | Secondary actions on white, form submit | `h-12 px-5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover` |
| **White** | On blue backgrounds (e.g. WhatsApp) | `bg-white text-[#0F2A43]` + green WhatsApp icon |
| **Outline on blue** | Tertiary on blue (e.g. Call now) | `border border-white/40 text-white hover:bg-white/10` |
| **Outline on light** | "View all…" links | `bg-white border border-[#C9DCEC] text-[#0A4D8C]` |

Minimum height 44–48px (tap target). Always include an icon only when it adds meaning (arrow, phone, WhatsApp).

### Destination / service card
White card on sand, solid ocean country-code badge, bold navy title, slate description, ocean "Learn more →". On hover: lifts 4px, deeper shadow, gold bar slides in across the top.
```tsx
<Link className="group relative flex flex-col rounded-2xl border border-[#E6E1D8] bg-white p-6
                 shadow-[0_2px_8px_rgba(15,42,67,0.06)] transition-all hover:-translate-y-1
                 hover:shadow-[0_16px_32px_rgba(15,42,67,0.14)]">
  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#F5A524] transition-transform group-hover:scale-x-100" />
  <span className="mb-5 grid size-12 place-items-center rounded-xl bg-[#0A4D8C] text-sm font-extrabold text-white">GB</span>
  <h3 className="text-xl font-bold text-[#0F2A43]">United Kingdom</h3>
  <p className="mt-2 text-[0.9375rem] text-[#52606D]">…</p>
  <span className="mt-5 text-sm font-bold text-[#0A4D8C]">Learn more →</span>
</Link>
```
Use 2-letter country codes (AE, GB, US, EU, CA, AU) instead of flag emojis — flag emojis don't render on Windows.

### Feature card ("Why choose us")
Centered, solid ocean icon circle (`size-14 rounded-full bg-[#0A4D8C] text-white`), bold navy title, slate text.

### Process step
White card, **teal** number circle (`size-11 rounded-full bg-teal-700 text-white font-extrabold`), bold title, slate text.

### Tags / pills
`rounded-full bg-[#E0F0FB] px-2.5 py-1 text-xs font-semibold text-[#0A4D8C]`

### Forms
- Field: `h-12 rounded-xl border border-[#D6DEE6] bg-white px-4 text-[#0F2A43] placeholder:text-[#94A3B0] focus:ring-2 focus:ring-[#0A4D8C]/40`
- Label: `text-sm font-semibold text-[#0F2A43]` above the field
- Panel: sand background, sand-line border, soft shadow
- Submit: ocean button, full width

### CTA band (bottom of inner pages)
Ocean background, white heading and paragraph, **gold** "Chat on WhatsApp" button.

### Header and footer
- Top contact bar: navy `#0F2A43`, white text
- Header: white, navy nav links, ocean hover/active, ocean "Check Requirements" button
- Newsletter band: navy `#0F2A43`
- Footer: white, navy headings, slate links, sand-line top border

### Hero (home)
Ocean background with a soft sky glow (top-right) and faint gold glow (bottom-left). Left: location pill, H1, lead, three buttons (gold / white WhatsApp / outline Call), trust checklist with sky ticks, small disclaimer in `text-white/65`. Right (desktop only): boarding-pass "Document pass" illustration (`components/home/HomeHeroVisual.tsx`), clearly labelled **EXAMPLE**.

---

## 5. Icons and imagery

- **Icons:** `lucide-react` only, outline style, `size-4` inline / `size-5` in buttons / `size-6`–`size-7` in feature circles.
- Icons take the colour of their context (ocean on light, white on ocean). Decorative icons get `aria-hidden`.
- **No stock photos** of fake clients or fake visas. Illustrations must be labelled as examples.

## 6. Motion

- Subtle only: hover lift (`hover:-translate-y-0.5` / `-1`), shadow change, arrow nudge, 200–300ms.
- **Do not** add scroll fade-in wrappers that start below full opacity — they caused cards to stay at 60% opacity and a hydration warning. Content must be fully visible on load.

## 7. Content and trust rules

- Always show the disclaimer near the hero or main CTA: *"We are a documentation and consultancy service, not a government authority. We do not issue visas and cannot guarantee an outcome — decisions are made by the relevant authority."*
- Never invent prices, government fees, processing times, approval rates or testimonials.
- Canada: only translation, travel bookings and help using IRCC's online system (not an authorized Canadian representative).
- Contact: +971 58 986 7555 · info@travelaxis.me · WhatsApp wa.me/971589867555 · Offices: Al Qusais, Dubai and DHA Phase 8, Lahore.

## 8. Accessibility checklist

- [ ] Every colour pairing comes from the "approved pairings" table
- [ ] One H1 per page, headings in order (H1 → H2 → H3)
- [ ] Buttons and links ≥ 44px tall on mobile
- [ ] Visible focus ring (`focus-visible:ring-4 ring-[#0A4D8C]/30`)
- [ ] Every input has a visible `<label>`
- [ ] External links (WhatsApp) open in a new tab with an `aria-label` saying so

## 9. Quick audit command

Run in the project folder to list every hex colour in use. Only the palette above (plus form-field greys `#D6DEE6`, `#94A3B0`, `#98A2B3`, `#C9DCEC`) should appear:
```bash
git grep -ohiE "#[0-9a-f]{6}\b" -- app components lib | sort | uniq -c | sort -rn
```
