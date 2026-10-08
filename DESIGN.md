# Travelaxis Design Guide — "Ocean & Sand"

The single source of truth for how travelaxis.me looks. Use only the colours, type and components below. If something new is needed, add it here first.

**Brand feel:** clean, calm, trustworthy, professional. Ocean blue says trust, sand adds warmth, gold is the one bright accent that tells people where to click.

**What we sell:** visit visa documentation for every destination (Dubai/UAE, UK, USA, Schengen, Canada, Australia, Asia, Middle East and more), from offices in Dubai and Lahore.

---

## 1. Colour palette

| Name | Hex | Use it for | Tailwind |
|---|---|---|---|
| **Ocean blue** (primary) | `#0A4D8C` | Brand, primary buttons, links, icon fills, hero background | `bg-primary` / `text-primary` / `bg-[#0A4D8C]` |
| **Ocean dark** | `#083B6B` | Hover state of ocean buttons | `bg-primary-hover` |
| **Navy ink** | `#0F2A43` | Headings, body text, top contact bar, newsletter band | `text-foreground` / `bg-[#0F2A43]` |
| **Gold** (accent) | `#F5A524` | Main call-to-action button, section underline, step numbers | `bg-[#F5A524]` |
| **Gold text** | `#3B2600` | Text and icons **on** gold | `text-[#3B2600]` |
| **Slate** | `#52606D` | Supporting text, descriptions, captions | `text-muted-foreground` |
| **Sand** | `#F7F3EC` | Alternate section backgrounds, light cards, form panels | `bg-secondary` / `bg-muted` |
| **Sand line** | `#E6E1D8` | Borders, dividers, card outlines | `border-border` |
| **Sky tint** | `#E0F0FB` | Icon bubbles, small tags/pills | `bg-[#E0F0FB]` |
| **Sky** | `#38BDF8` | Checkmarks and soft glow **on blue backgrounds only** | `text-[#38BDF8]` |
| **White** | `#FFFFFF` | Page background, cards | `bg-white` |

**Functional colours (never decorative):**
- WhatsApp green `#25D366` — only the WhatsApp icon/button.
- Error red `#D4183D` — only form errors and destructive actions.

**Where they live in code**
- `app/globals.css` → `:root` tokens (`--primary`, `--foreground`, `--muted-foreground`, `--secondary`, `--border`, `--card-icon-bg` …).
- `components/pages/HomePage.tsx` → same values as named constants (`OCEAN`, `INK`, `GOLD`, `SAND`, `LINE`, `MUTED`).

### Colour rules
1. **One gold button per view.** Gold is the main action ("Check requirements", "Chat on WhatsApp" in CTA bands). Everything else is ocean, white or outline.
2. **Text on ocean or navy is white** (`text-white`, or `text-white/85` for paragraphs).
3. **Text on gold is `#3B2600`**, never white (white on gold fails contrast).
4. **Never use** the old colours: `#155EEF` (bright blue), `#1D2939`, `#667085`, `#E4E7EC`, `#F1F6FB`, or any gold/black from `styles/theme.css` (unused legacy file).
5. No other hues (purple, teal, red accents, rainbow icons). Status colours (emerald/amber) only inside small status badges.

### Approved pairings (all pass WCAG AA)
| Foreground | Background | Use |
|---|---|---|
| `#0F2A43` navy | `#FFFFFF` / `#F7F3EC` | Headings, body |
| `#52606D` slate | `#FFFFFF` / `#F7F3EC` | Descriptions |
| `#FFFFFF` white | `#0A4D8C` / `#0F2A43` | Hero, bands, buttons |
| `#3B2600` | `#F5A524` gold | Gold buttons, step numbers |
| `#0A4D8C` ocean | `#E0F0FB` sky tint | Tags, icon bubbles |

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
| **Gold (primary CTA)** | The one main action per view | `h-12 px-5 rounded-xl bg-[#F5A524] text-[#3B2600] font-bold hover:brightness-105` |
| **Ocean** | Secondary actions on white/sand, form submit, header CTA | `h-12 px-5 rounded-xl bg-[#0A4D8C] text-white font-semibold hover:bg-[#083B6B]` |
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
White card, **gold** number circle (`size-11 rounded-full bg-[#F5A524] text-[#3B2600] font-extrabold`), bold title, slate text.

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
