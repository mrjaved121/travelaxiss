"use client";

import Link from "next/link";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Eye,
  FileText,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HomeHeroVisual from "@/components/home/HomeHeroVisual";
import { homepageFaqs } from "@/lib/data/faqs";
import { blogPostSummaries } from "@/components/data/blogIndex";
import { trackEvent } from "@/lib/seo/analytics";

/* ---------- "Ocean and sand" theme ---------- */
const OCEAN = "#0A4D8C"; // primary
const INK = "#0F2A43"; // headings and body text
const SKY = "#38BDF8"; // highlights on dark
const SKY_TINT = "#E0F0FB"; // icon backgrounds
const GOLD = "#F5A524"; // main call to action
const GOLD_TEXT = "#3B2600"; // text on gold
const SAND = "#F7F3EC"; // alternate section background
const LINE = "#E6E1D8"; // card borders
const MUTED = "#3E4C5A"; // supporting text

const WHATSAPP_NUMBER = "971589867555";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Travelaxis, I need help with a visit visa."
)}`;
const PHONE_HREF = "tel:+971589867555";

const disclosure =
  "We are a documentation and consultancy service, not a government authority. We do not issue visas and cannot guarantee an outcome — decisions are made by the relevant authority.";

/* ---------- Content (visit visas only) ---------- */
const heroTrust = ["Dubai & Lahore offices", "Visit visas for every region", "Clear, transparent process", "One point of contact"];

const visitVisaDestinations: { code: string; title: string; description: string; href: string }[] = [
  {
    code: "AE",
    title: "Dubai & UAE",
    description: "Dubai and UAE visit visa documents, routes and what the price is made of, for applicants from Pakistan.",
    href: "/visit-visa/uae",
  },
  {
    code: "GB",
    title: "United Kingdom",
    description: "UK Standard Visitor visa documents, financial evidence and appointment booking.",
    href: "/visit-visa/uk",
  },
  {
    code: "US",
    title: "United States",
    description: "B1/B2 visitor visa paperwork, the DS-160 form and interview preparation.",
    href: "/visit-visa/usa",
  },
  {
    code: "EU",
    title: "Schengen & Germany",
    description: "Which embassy to apply to, the application fee and the document checklist for Schengen countries.",
    href: "/visit-visa/schengen",
  },
  {
    code: "CA",
    title: "Canada",
    description: "Translation, travel bookings and help using IRCC's online system for your visitor visa.",
    href: "/visit-visa/canada",
  },
  {
    code: "AU",
    title: "Australia",
    description: "Visitor visa documents, financial evidence and the online application.",
    href: "/visit-visa/australia",
  },
  {
    code: "AS",
    title: "Asia",
    description: "Visit visa documents for popular Asian destinations, from Malaysia to Thailand and beyond.",
    href: "/visit-visa/asia",
  },
  {
    code: "ME",
    title: "Middle East",
    description: "Visit visa documents for Gulf and Middle East destinations outside the UAE.",
    href: "/visit-visa/middle-east",
  },
];

const moreRegions = [
  { label: "Europe", href: "/visit-visa/europe" },
  { label: "Africa", href: "/visit-visa/africa" },
  { label: "North America", href: "/visit-visa/north-america" },
  { label: "Oceania", href: "/visit-visa/oceania" },
];

const whyValues: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Clear guidance",
    description: "We confirm the exact requirements for your destination and situation — not a generic checklist.",
    icon: Compass,
  },
  {
    title: "Organised documents",
    description: "Help preparing documents, financial evidence and appointment bookings, step by step.",
    icon: FileText,
  },
  {
    title: "Dubai and Pakistan",
    description: "One point of contact from our Dubai and Lahore offices, from your first message to submission.",
    icon: Users,
  },
  {
    title: "Honest and transparent",
    description: "We explain official fees and our service fee separately. No promised outcomes, no hidden steps.",
    icon: Eye,
  },
];

const processSteps: { title: string; description: string }[] = [
  { title: "Choose your destination", description: "Tell us where you are going, when, and the purpose of your trip." },
  { title: "Get your checklist", description: "We confirm the exact documents and steps for your case." },
  { title: "Prepare your documents", description: "We help you get every document ready and correctly organised." },
  { title: "Apply with support", description: "Your application goes through the official channel, and we keep you updated." },
];

const DESTINATION_OPTIONS = [
  "Dubai / UAE",
  "United Kingdom",
  "USA",
  "Schengen / Europe",
  "Canada",
  "Australia",
  "Asia",
  "Middle East",
  "Other",
];

/** The latest three guides about visit visas. */
const guideHighlights = blogPostSummaries
  .filter((post) => /visit|visitor|schengen|tourist|travel/i.test(`${post.id} ${post.title}`))
  .slice(0, 3);

/* ---------- Building blocks ---------- */

/** Plain wrapper (scroll animation removed: it left cards at 60% opacity and caused a hydration warning). */
function FadeIn({ children, className }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <h2 id={id} className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: INK }}>
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: GOLD }} aria-hidden />
      {subtitle ? (
        <p className="mt-4 text-pretty text-lg" style={{ color: MUTED }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function CtaButtons({ location, className = "" }: { location: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <a
        href="#get-started"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-base font-bold transition-colors hover:brightness-105"
        style={{ backgroundColor: GOLD, color: GOLD_TEXT }}
      >
        Check requirements
        <ArrowRight className="size-5" aria-hidden />
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { page: location })}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-base font-semibold transition-colors hover:bg-white/90"
        style={{ color: INK }}
        aria-label="WhatsApp Travelaxis (opens in a new tab)"
      >
        <MessageCircle className="size-5 text-[#25D366]" aria-hidden />
        WhatsApp us
      </a>
      <a
        href={PHONE_HREF}
        onClick={() => trackEvent("phone_click", { page: location })}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10"
      >
        <Phone className="size-5" aria-hidden />
        Call now
      </a>
    </div>
  );
}

function QualificationForm() {
  const idPrefix = useId();
  const [destination, setDestination] = useState(DESTINATION_OPTIONS[0]);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      "Hi, I'd like help with a visit visa.",
      `Destination: ${destination}`,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
    ];
    trackEvent("whatsapp_click", { page: "homepage_form" });
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClassName =
    "h-12 w-full rounded-xl border border-[#D6DEE6] bg-white px-4 text-[#0F2A43] placeholder:text-[#94A3B0] transition-shadow focus:outline-none focus:ring-2 focus:ring-[#0A4D8C]/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl p-6 shadow-[0_8px_24px_rgba(15,42,67,0.08)] md:p-8" style={{ border: `1px solid ${LINE}`, backgroundColor: SAND }}>
      <div>
        <label htmlFor={`${idPrefix}-destination`} className="mb-2 block text-sm font-semibold" style={{ color: INK }}>
          Where are you travelling?
        </label>
        <select
          id={`${idPrefix}-destination`}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className={fieldClassName}
        >
          {DESTINATION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-2 block text-sm font-semibold" style={{ color: INK }}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-whatsapp`} className="mb-2 block text-sm font-semibold" style={{ color: INK }}>
            WhatsApp number
          </label>
          <input
            id={`${idPrefix}-whatsapp`}
            type="tel"
            required
            autoComplete="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+92…"
            className={fieldClassName}
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-semibold text-white transition-colors hover:bg-[#083B6B]"
        style={{ backgroundColor: OCEAN }}
      >
        Check requirements
        <ArrowRight className="size-5" aria-hidden />
      </button>
      <p className="text-center text-xs" style={{ color: MUTED }}>
        Opens WhatsApp with your details filled in.
      </p>
    </form>
  );
}

/* ---------- Page ---------- */

export default function HomePage() {
  return (
    <div className="overflow-x-hidden" style={{ color: INK }}>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden text-white" style={{ backgroundColor: OCEAN }}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(245,165,36,0.14),transparent_50%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium ring-1 ring-white/20">
              <MapPin className="size-4" aria-hidden />
              Visit visa documentation · Dubai & Lahore
            </p>
            <h1 id="hero-heading" className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Visit visa support for every destination
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base text-white/85 sm:text-lg">
              Visit visa document preparation for applicants in Pakistan and the UAE — for Dubai, the UK, USA, Schengen,
              Canada, Australia and more.
            </p>
            <CtaButtons location="homepage_hero" className="mt-8" />
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {heroTrust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4" style={{ color: SKY }} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-white/65">{disclosure}</p>
          </div>
          <div className="relative hidden lg:block">
            <HomeHeroVisual />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" aria-labelledby="destinations-heading" className="scroll-mt-24 py-16 sm:py-20" style={{ backgroundColor: SAND }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="destinations-heading"
            title="Visit visa destinations"
            subtitle="Document preparation and application support for tourist, family and business visits."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visitVisaDestinations.map((item, i) => (
              <li key={item.href}>
                <FadeIn delay={Math.min(i * 0.04, 0.3)} className="h-full">
                  <Link
                    href={item.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(15,42,67,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,42,67,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0A4D8C]/30"
                    style={{ border: `1px solid ${LINE}` }}
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{ backgroundColor: GOLD }}
                      aria-hidden
                    />
                    <span
                      className="mb-5 grid size-12 place-items-center rounded-xl text-sm font-extrabold tracking-wider text-white shadow-sm"
                      style={{ backgroundColor: OCEAN }}
                      aria-hidden
                    >
                      {item.code}
                    </span>
                    <h3 className="text-xl font-bold" style={{ color: INK }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed" style={{ color: MUTED }}>
                      {item.description}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5"
                      style={{ color: OCEAN }}
                    >
                      Learn more
                      <ArrowRight className="size-4" aria-hidden />
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: MUTED }}>
              <Globe2 className="size-4" aria-hidden />
              Also:
              {moreRegions.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="rounded-full px-3 py-1 font-semibold transition-colors hover:bg-[#E0F0FB]"
                  style={{ border: `1px solid ${LINE}`, color: OCEAN }}
                >
                  {r.label}
                </Link>
              ))}
            </p>
            <Link
              href="/visit-visa"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 font-semibold transition-colors hover:bg-[#F7F3EC]"
              style={{ border: "1px solid #C9DCEC", color: OCEAN }}
            >
              View all visit visa destinations
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Travelaxis */}
      <section aria-labelledby="why-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="why-heading"
            title="Why choose Travelaxis"
            subtitle="We don't decide applications. We help you prepare a complete, well-organised one and understand each step before you take it."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyValues.map((value, i) => (
              <li key={value.title}>
                <FadeIn delay={i * 0.06} className="h-full rounded-xl bg-white p-6 text-center shadow-xs ring-1 ring-[#E6E1D8]">
                  <span
                    className="mx-auto mb-4 grid size-14 place-items-center rounded-full text-white shadow-sm"
                    style={{ backgroundColor: OCEAN }}
                  >
                    <value.icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold" style={{ color: INK }}>
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed" style={{ color: MUTED }}>
                    {value.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="process-heading" className="py-16 sm:py-20" style={{ backgroundColor: SAND }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="process-heading"
            title="How it works"
            subtitle="Four simple steps from your first message to submission."
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <FadeIn delay={i * 0.08} className="relative h-full rounded-xl border border-[#E6E1D8] bg-white p-6">
                  <div className="h-full">
                    <span
                      aria-hidden="true"
                      className="mb-4 grid size-11 place-items-center rounded-full text-lg font-extrabold"
                      style={{ backgroundColor: GOLD, color: GOLD_TEXT }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold" style={{ color: INK }}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed" style={{ color: MUTED }}>
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Get started form */}
      <section id="get-started" aria-labelledby="get-started-heading" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 id="get-started-heading" className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: INK }}>
              Tell us where you&apos;re travelling
            </h2>
            <p className="mt-4 text-pretty text-lg" style={{ color: MUTED }}>
              Answer a couple of questions and we&apos;ll take it from there on WhatsApp — with the exact documents for your
              destination.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "A document checklist for your specific case",
                "Help with financial evidence and appointments",
                "One contact person in Dubai or Lahore",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ color: INK }}>
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0" style={{ color: OCEAN }} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <QualificationForm />
        </div>
      </section>

      {/* Useful guides */}
      {guideHighlights.length > 0 ? (
        <section aria-labelledby="guides-heading" className="py-16 sm:py-20" style={{ backgroundColor: SAND }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="guides-heading"
              title="Visit visa guides"
              subtitle="Plain-language guides to documents, funds and common refusal reasons."
            />
            <ul className="grid gap-6 md:grid-cols-3">
              {guideHighlights.map((post, i) => (
                <li key={post.id}>
                  <FadeIn delay={i * 0.08} className="h-full">
                    <Link
                      href={`/blog/${post.id}`}
                      className="group flex h-full flex-col rounded-xl bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{ border: `1px solid ${LINE}` }}
                    >
                      <span
                        className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{ backgroundColor: SKY_TINT, color: OCEAN }}
                      >
                        <BookOpen className="size-3.5" aria-hidden />
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold leading-snug" style={{ color: INK }}>
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm" style={{ color: MUTED }}>
                        {post.excerpt}
                      </p>
                      <span className="mt-4 pt-4 text-xs" style={{ borderTop: `1px solid ${LINE}`, color: MUTED }}>
                        {post.date} · {post.readTime}
                      </span>
                    </Link>
                  </FadeIn>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold" style={{ color: OCEAN }}>
                Browse all guides
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="rounded-xl bg-white px-5" style={{ border: `1px solid ${LINE}` }}>
            {homepageFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`} style={{ borderColor: LINE }}>
                <AccordionTrigger className="py-4 text-left text-base font-semibold hover:no-underline" style={{ color: INK }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed" style={{ color: MUTED }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-1.5 font-semibold" style={{ color: OCEAN }}>
              See all frequently asked questions
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="cta-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl px-6 py-12 text-center text-white sm:px-12" style={{ backgroundColor: OCEAN }}>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.3),transparent_55%)]"
            />
            <div className="relative">
              <h2 id="cta-heading" className="text-balance text-2xl font-bold sm:text-3xl">
                Planning a trip? Let&apos;s get your documents right
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
                Message us with your destination and we&apos;ll tell you exactly what you need — from our Dubai and Lahore
                offices.
              </p>
              <CtaButtons location="homepage_final_cta" className="mt-7 justify-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
