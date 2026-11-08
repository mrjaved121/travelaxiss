import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Globe2, MapPin, MessageCircle, Phone, Plane } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroPicker from "@/components/home/HeroPicker";
import TrackedLink from "@/components/home/TrackedLink";
import { PHONE_HREF, PHONE_LABEL, WHATSAPP_HREF } from "@/components/home/contact";
import { homepageFaqs } from "@/lib/data/faqs";

/* Brand colours (navy + gold), as used across the site. */
const OCEAN = "#2864E8"; // navy / primary
const INK = "#10254A"; // headings and body text
const GOLD = "#0B7A6D"; // main call to action (teal button, white text)
const GOLD_TEXT = "#FFFFFF"; // text on teal button
const SAND = "#F4F8FC"; // alternate section background
const LINE = "#E3EAF3"; // card borders
const MUTED = "#4B5B70"; // supporting text (≥ 7:1 on white and sand)

/* One spacing rhythm for every section: 48px on phones, 64px on tablets, 96px on desktop. */
const SECTION = "py-12 sm:py-16 lg:py-24";
const CONTAINER = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

/* One primary and one secondary button style. */
const BTN_BASE =
  "btn inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-base transition-[filter,background-color] focus-visible:outline-none focus-visible:ring-4 sm:w-auto";
const BTN_PRIMARY = `${BTN_BASE} bg-[#0B7A6D] text-white hover:brightness-105 focus-visible:ring-[#0B7A6D]/40`;
const BTN_SECONDARY = `${BTN_BASE} border border-[#E3EAF3] bg-white text-[#10254A] hover:bg-[#F4F8FC] focus-visible:ring-[#2864E8]/30`;

const disclosure =
  "We are a documentation service, not a government authority. We don't issue visas or guarantee outcomes; the relevant authority makes every decision.";

const heroTrust = ["Dubai & Lahore offices", "Clear, transparent process", "One point of contact"];

/** `flag` = flagcdn.com country code (SVG flags render on every OS, unlike flag emojis); null = region. */
const destinations: { flag: string | null; title: string; href: string }[] = [
  { flag: "ae", title: "Dubai & UAE", href: "/visit-visa/uae" },
  { flag: "gb", title: "United Kingdom", href: "/visit-visa/uk" },
  { flag: "us", title: "United States", href: "/visit-visa/usa" },
  { flag: "eu", title: "Schengen", href: "/visit-visa/schengen" },
  { flag: "ca", title: "Canada", href: "/visit-visa/canada" },
  { flag: "au", title: "Australia", href: "/visit-visa/australia" },
  { flag: null, title: "Asia", href: "/visit-visa/asia" },
  { flag: null, title: "Middle East", href: "/visit-visa/middle-east" },
];

const steps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Tell us your destination",
    description: "Share where you're going, when and why. We confirm the exact checklist for your case.",
    icon: MapPin,
  },
  {
    title: "We prepare your documents",
    description: "We help you organise every document, financial proof and booking, step by step.",
    icon: FileCheck2,
  },
  {
    title: "You submit and travel",
    description: "You apply through the official channel. Official fees and our fee are always shown separately.",
    icon: Plane,
  },
];

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-[65ch] text-center sm:mb-10">
      <h2 id={id} className="section-title text-balance" style={{ color: INK }}>
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-base sm:text-lg" style={{ color: MUTED }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function WhatsAppButton({ location, className }: { location: string; className: string }) {
  return (
    <TrackedLink
      event="whatsapp_click"
      location={location}
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="WhatsApp us (opens in a new tab)"
    >
      <MessageCircle className="size-5 text-[#25D366]" aria-hidden />
      WhatsApp us
    </TrackedLink>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden" style={{ color: INK }}>
      {/* 1. Hero */}
      <section aria-labelledby="hero-heading" className="text-white" style={{ backgroundColor: OCEAN }}>
        <div className={`${CONTAINER} pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20`}>
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="hero-title text-balance" style={{ color: "#FFFFFF" }}>
              Visit visa documents for Pakistan &amp; UAE travellers
            </h1>
            <p className="lead mt-5 max-w-[60ch] text-pretty" style={{ color: "rgba(255,255,255,0.9)" }}>
              From our offices in Dubai and Lahore, we prepare complete, well-organised visit visa files for Dubai,
              the UK, USA, Schengen, Canada, Australia and more.
            </p>

            <HeroPicker />

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-base font-semibold">
              <TrackedLink
                event="whatsapp_click"
                location="homepage_hero"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 underline-offset-4 hover:underline"
                aria-label="WhatsApp us (opens in a new tab)"
              >
                <MessageCircle className="size-5 text-[#25D366]" aria-hidden />
                WhatsApp us
              </TrackedLink>
              <TrackedLink
                event="phone_click"
                location="homepage_hero"
                href={PHONE_HREF}
                className="inline-flex min-h-12 items-center gap-2 underline-offset-4 hover:underline"
              >
                <Phone className="size-5" aria-hidden />
                {PHONE_LABEL}
              </TrackedLink>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6" style={{ color: "rgba(255,255,255,0.92)" }}>
              {heroTrust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-[#7DD3FC]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[65ch] text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              {disclosure}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Popular destinations */}
      <section id="destinations" aria-labelledby="destinations-heading" className={`scroll-mt-24 ${SECTION}`} style={{ backgroundColor: SAND }}>
        <div className={CONTAINER}>
          <SectionHeading
            id="destinations-heading"
            title="Popular destinations"
            subtitle="Document preparation for tourist, family and business visits."
          />
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {destinations.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="card-hover flex h-full min-h-[4.5rem] items-center gap-3 rounded-xl bg-white p-4 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2864E8]/30"
                  style={{ border: `1px solid ${LINE}` }}
                >
                  {item.flag ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://flagcdn.com/${item.flag}.svg`}
                      alt=""
                      width={36}
                      height={24}
                      loading="lazy"
                      className="h-6 w-9 shrink-0 rounded object-cover ring-1 ring-black/10"
                    />
                  ) : (
                    <span className="grid h-6 w-9 shrink-0 place-items-center rounded text-white" style={{ backgroundColor: OCEAN }} aria-hidden>
                      <Globe2 className="size-4" />
                    </span>
                  )}
                  <span className="text-base font-semibold leading-snug" style={{ color: INK }}>
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/visit-visa/"
              className="inline-flex min-h-12 items-center gap-2 px-2 text-base font-semibold underline-offset-4 hover:underline"
              style={{ color: OCEAN }}
            >
              See all destinations
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* 3. How it works */}
      <section aria-labelledby="process-heading" className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading
            id="process-heading"
            title="How it works"
            subtitle="We don't decide applications. We help you send a complete one and explain each step first."
          />
          <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl p-5 md:flex-col md:p-6" style={{ border: `1px solid ${LINE}` }}>
                <span className="grid size-12 shrink-0 place-items-center rounded-full text-white" style={{ backgroundColor: OCEAN }} aria-hidden>
                  <step.icon className="size-6" />
                </span>
                <div>
                  <h3 className="h4-title" style={{ color: INK }}>
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed" style={{ color: MUTED }}>
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. FAQ */}
      <section aria-labelledby="faq-heading" className={SECTION} style={{ backgroundColor: SAND }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="rounded-xl bg-white px-5" style={{ border: `1px solid ${LINE}` }}>
            {homepageFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`} style={{ borderColor: LINE }}>
                <AccordionTrigger className="min-h-12 py-4 text-left text-base font-semibold hover:no-underline" style={{ color: INK }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed" style={{ color: MUTED }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-center">
            <Link
              href="/faq/"
              className="inline-flex min-h-12 items-center gap-2 px-2 text-base font-semibold underline-offset-4 hover:underline"
              style={{ color: OCEAN }}
            >
              All questions
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section aria-labelledby="cta-heading" className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="rounded-2xl px-5 py-10 text-center sm:px-10 sm:py-12" style={{ backgroundColor: OCEAN }}>
            <h2 id="cta-heading" className="section-title text-balance" style={{ color: "#FFFFFF" }}>
              Planning a trip? Get your checklist today.
            </h2>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a href="#check-requirements" className={BTN_PRIMARY} style={{ backgroundColor: GOLD, color: GOLD_TEXT }}>
                Get my checklist
                <ArrowRight className="size-5" aria-hidden />
              </a>
              <WhatsAppButton location="homepage_final_cta" className={BTN_SECONDARY} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
