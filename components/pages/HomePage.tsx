import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ClipboardList,
  FileSearch,
  FileText,
  Heart,
  ListChecks,
  MessageCircle,
  Plane,
  Receipt,
  Scale,
  BookOpen,
  UserRound,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EligibilityChecker from "@/components/home/EligibilityChecker";
import PathwayCarousel, { type Pathway } from "@/components/home/PathwayCarousel";
import TrackedLink from "@/components/home/TrackedLink";
import { WHATSAPP_HREF } from "@/components/home/contact";
import { homepageFaqs } from "@/lib/data/faqs";

/* Layout rhythm (see DESIGN.md). Colours come from the Aqua tokens in globals.css. */
const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const SECTION = "py-10 sm:py-14";

const BTN_BASE =
  "btn inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 transition-all hover:-translate-y-0.5 hover:shadow-md";
const BTN_PRIMARY = `${BTN_BASE} bg-teal-700 text-white hover:bg-teal-800`;
const BTN_SECONDARY = `${BTN_BASE} border border-line bg-white text-navy`;

type Tone = "teal" | "lilac" | "peach";
const BUBBLE: Record<Tone, string> = {
  teal: "bg-teal-50 text-teal-700",
  lilac: "bg-lilac-50 text-lilac",
  peach: "bg-peach-50 text-[#E2713A]",
};

const heroFeatures: { title: string; description: string; icon: LucideIcon; tone: Tone }[] = [
  { title: "Personal guidance", description: "Friendly, one-to-one support for your visa journey.", icon: UsersRound, tone: "teal" },
  { title: "Clear next steps", description: "Know what to prepare and what happens next.", icon: ListChecks, tone: "lilac" },
  { title: "Thoughtful document review", description: "Have your documents checked for a smoother process.", icon: FileSearch, tone: "peach" },
];

const pathways: Pathway[] = [
  {
    tag: "Visit Visa",
    tagTone: "teal",
    flag: "ae",
    title: "UAE Visit Visa",
    description: "Get expert guidance for your short-term visit to the UAE.",
    href: "/visit-visa/uae",
    image: "/images/home/uae.webp",
    featured: true,
  },
  {
    tag: "Visit Visa",
    tagTone: "lilac",
    flag: "gb",
    title: "UK Visit Visa",
    description: "Plan your UK trip with a complete, well-organised file.",
    href: "/visit-visa/uk",
    image: "/images/home/uk.webp",
  },
  {
    tag: "Visitor Visa",
    tagTone: "peach",
    flag: "us",
    title: "USA Visitor Visa",
    description: "Prepare your B1/B2 documents and interview with clarity.",
    href: "/visit-visa/usa",
    image: "/images/home/usa.webp",
  },
  {
    tag: "Short Stay",
    tagTone: "blue",
    flag: "eu",
    title: "Schengen Short Stay",
    description: "Get guidance for a short stay across Schengen countries.",
    href: "/visit-visa/schengen",
    image: "/images/home/schengen.webp",
  },
  {
    tag: "Visit Visa",
    tagTone: "teal",
    flag: "au",
    title: "Australia Visit Visa",
    description: "Organise your visitor visa documents step by step.",
    href: "/visit-visa/australia",
    image: "/images/home/australia.webp",
  },
  {
    tag: "Short Stay",
    tagTone: "lilac",
    flag: "pt",
    title: "Portugal Short Stay",
    description: "Prepare a clear Schengen file for your Portugal trip.",
    href: "/visit-visa/portugal",
    image: "/images/home/portugal.webp",
  },
];

const destinations: { name: string; href: string; image: string }[] = [
  { name: "UAE", href: "/visit-visa/uae", image: "/images/home/uae.webp" },
  { name: "UK", href: "/visit-visa/uk", image: "/images/home/uk.webp" },
  { name: "Canada", href: "/visit-visa/canada", image: "/images/home/canada.webp" },
  { name: "United States", href: "/visit-visa/usa", image: "/images/home/usa.webp" },
  { name: "Schengen", href: "/visit-visa/schengen", image: "/images/home/schengen.webp" },
  { name: "Portugal", href: "/visit-visa/portugal", image: "/images/home/portugal.webp" },
  { name: "Australia", href: "/visit-visa/australia", image: "/images/home/australia.webp" },
  { name: "New Zealand", href: "/visit-visa/new-zealand", image: "/images/home/new-zealand.webp" },
];

const steps: { title: string; description: string; icon: LucideIcon; tone: Tone }[] = [
  { title: "Tell us your plans", description: "Share your destination, dates and reason for travel with us.", icon: CalendarDays, tone: "teal" },
  { title: "Prepare with confidence", description: "Get a clear list of requirements and helpful guidance.", icon: FileText, tone: "lilac" },
  { title: "Move forward with clarity", description: "Submit your application and stay informed along the way.", icon: Plane, tone: "peach" },
];

const resources: { title: string; href: string; image: string }[] = [
  {
    title: "Visit visa cover letter: a simple guide",
    href: "/blog/cover-letter-for-visit-visa-sample-pakistan",
    image: "/images/home/guide-checklist.webp",
  },
  {
    title: "UK visit visa: fees and processing time",
    href: "/blog/uk-visit-visa-fee-processing-time-pakistan",
    image: "/images/home/guide-uk.webp",
  },
  {
    title: "Schengen visa: common refusal reasons",
    href: "/blog/schengen-visa-rejection-reasons-pakistani-applicants",
    image: "/images/home/guide-schengen.webp",
  },
];

/* Our commitments. Shown instead of client quotes until real, permitted testimonials exist
   (see components/data/testimonials.ts). */
const promises: { quote: string; label: string; icon: LucideIcon; tone: Tone }[] = [
  { quote: "Official fees and our fee are always shown separately.", label: "Clear pricing", icon: Receipt, tone: "teal" },
  { quote: "One point of contact from your first message to submission.", label: "Personal support", icon: UserRound, tone: "lilac" },
  { quote: "We never promise approval. The decision is always the authority's.", label: "Honest advice", icon: Scale, tone: "peach" },
];

function SectionHeading({
  id,
  title,
  subtitle,
  action,
}: {
  id: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id={id} className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem]">
          {title}
        </h2>
        {subtitle ? <p className="mt-1.5 text-base text-slate">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

function IconBubble({ icon: Icon, tone, size = "md" }: { icon: LucideIcon; tone: Tone; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-14" : "size-12";
  return (
    <span className={`grid ${box} shrink-0 place-items-center rounded-full ${BUBBLE[tone]}`} aria-hidden>
      <Icon className={size === "lg" ? "size-7" : "size-6"} />
    </span>
  );
}

/** Teal hand-drawn underline under the hero's highlighted words. */
function Swoosh() {
  return (
    <svg
      viewBox="0 0 300 18"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-3 w-full text-teal"
      aria-hidden
    >
      <path d="M3 13C70 4 170 2 297 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** Flat signpost illustration for the "guides" band. */
function SignpostIllustration() {
  return (
    <svg viewBox="0 0 480 220" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" x2="1">
          <stop offset="0" stopColor="#E9FBF8" stopOpacity="0" />
          <stop offset="1" stopColor="#F1EDFD" />
        </linearGradient>
      </defs>
      <rect width="480" height="220" fill="url(#sky)" />
      {/* distant skyline */}
      <g fill="#CFF0EA">
        <rect x="70" y="120" width="14" height="40" />
        <rect x="88" y="104" width="10" height="56" />
        <path d="M104 160V98l6-14 6 14v62z" />
        <rect x="122" y="128" width="18" height="32" />
        <rect x="146" y="112" width="12" height="48" />
      </g>
      {/* hills */}
      <path d="M0 180C80 130 170 130 250 165S400 150 480 120V220H0z" fill="#D9D0F7" opacity=".7" />
      <path d="M0 200C110 160 220 175 300 190S420 170 480 160V220H0z" fill="#9FE3D6" />
      <path d="M120 220C200 196 260 192 330 220z" fill="#F7E3C9" />
      <path d="M0 214C140 196 300 200 480 190V220H0z" fill="#7CD4C3" />
      {/* signpost */}
      <rect x="318" y="48" width="9" height="150" rx="3" fill="#10254A" />
      <path d="M262 58h70v22h-70l-12-11z" fill="#FFB27A" />
      <path d="M322 90h78l12 11-12 11h-78z" fill="#19B6A3" />
      <path d="M256 122h70v22h-70l-12-11z" fill="#7C5CE6" />
      {/* map pin */}
      <g transform="translate(420 132)">
        <path d="M0 0c-11 0-19 8-19 18 0 14 19 32 19 32s19-18 19-32C19 8 11 0 0 0z" fill="#0B7A6D" />
        <circle cx="0" cy="18" r="7" fill="#fff" />
      </g>
      {/* little clouds */}
      <g fill="#fff">
        <ellipse cx="200" cy="40" rx="26" ry="9" />
        <ellipse cx="400" cy="34" rx="20" ry="7" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden text-navy">
      {/* 1. Hero */}
      <section aria-labelledby="hero-heading" className="bg-wash relative">
        {/* Photo fades into the wash on large screens. */}
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] lg:block"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, #000 32%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 32%)",
          }}
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/hero.webp"
            alt=""
            width={1600}
            height={1067}
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_60%]"
          />
        </div>

        <div className={`${CONTAINER} relative pb-10 pt-10 sm:pt-14 lg:pb-14 lg:pt-20`}>
          <div className="max-w-xl">
            <h1
              id="hero-heading"
              className="text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-[3.25rem] lg:text-[3.75rem]"
            >
              A clearer path to{" "}
              <span className="relative inline-block whitespace-nowrap">
                somewhere new.
                <Swoosh />
              </span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-pretty text-lg leading-relaxed text-slate">
              Thoughtful visit visa guidance to help you travel, visit family, or explore somewhere new with
              confidence, from our offices in Dubai and Lahore.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#pathways" className={BTN_PRIMARY}>
                Explore visa options
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a href="#check-requirements" className={BTN_SECONDARY}>
                Check eligibility
              </a>
            </div>
          </div>

          {/* Phone/tablet: photo as a rounded block below the text. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/hero.webp"
            alt="Two travellers watching hot-air balloons over a valley"
            width={1600}
            height={1067}
            className="mt-8 aspect-[16/10] w-full rounded-3xl object-cover lg:hidden"
          />

          <ul className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-24">
            {heroFeatures.map((f) => (
              <li
                key={f.title}
                className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[var(--card-shadow)] backdrop-blur"
              >
                <IconBubble icon={f.icon} tone={f.tone} size="lg" />
                <div>
                  <h2 className="text-base font-bold text-navy">{f.title}</h2>
                  <p className="mt-0.5 text-sm leading-snug text-slate">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Featured visa pathways */}
      <section id="pathways" aria-labelledby="pathways-heading" className={`scroll-mt-24 ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeading
            id="pathways-heading"
            title="Featured visa pathways"
            subtitle="Explore popular visa options with clear guidance and simple next steps."
          />
          <PathwayCarousel items={pathways} />
        </div>
      </section>

      {/* 3. Explore destinations */}
      <section id="destinations" aria-labelledby="destinations-heading" className="scroll-mt-24 pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <SectionHeading
            id="destinations-heading"
            title="Explore destinations"
            subtitle="Discover popular destinations for holidays, family visits and business trips."
            action={
              <Link
                href="/visit-visa/"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline"
              >
                View all destinations
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            }
          />
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {destinations.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="card-hover group block overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--card-shadow)] transition-all hover:-translate-y-1"
                >
                  <span className="block aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.image}
                      alt=""
                      width={800}
                      height={450}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex items-center justify-between gap-2 px-4 py-3">
                    <span className="text-base font-bold text-navy">{d.name}</span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-teal text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                      <ArrowRight className="size-3.5" aria-hidden />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Eligibility */}
      <section aria-label="Check your eligibility" className="pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <EligibilityChecker />
        </div>
      </section>

      {/* 5. A simple process */}
      <section aria-labelledby="process-heading" className="pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <SectionHeading
            id="process-heading"
            title="A simple process"
            subtitle="A clear, step-by-step journey with the right support at every stage."
          />
          <ol className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {steps.map((step, i) => (
              <li key={step.title} className="contents">
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-[var(--card-shadow)]">
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-full text-lg font-extrabold ${BUBBLE[step.tone]}`}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <step.icon className={`size-8 shrink-0 ${BUBBLE[step.tone].split(" ")[1]}`} aria-hidden />
                  <div>
                    <h3 className="text-base font-bold text-navy">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-snug text-slate">{step.description}</p>
                  </div>
                </div>
                {i < steps.length - 1 ? (
                  <ArrowRight className="mx-auto hidden size-5 text-navy md:block" aria-hidden />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Family visits band */}
      <section aria-labelledby="family-heading" className="pb-6">
        <div className={CONTAINER}>
          <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-[#F6F2FE] to-lilac-50 shadow-[var(--card-shadow)] md:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/family.webp"
              alt="A family watching the sunset together on a beach"
              width={800}
              height={533}
              loading="lazy"
              className="h-56 w-full object-cover md:h-full md:min-h-64 md:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
            />
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="flex items-center gap-2 text-sm font-bold text-lilac">
                <Heart className="size-4" aria-hidden />
                Family visits
              </p>
              <h2 id="family-heading" className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-[1.75rem]">
                Plan a visit to the people you love.
              </h2>
              <p className="mt-2 max-w-[48ch] text-base text-slate">
                Invitation letters, sponsor documents and proof of ties, organised so your family trip starts
                calmly.
              </p>
              <Link href="/visit-visa/" className={`${BTN_PRIMARY} mt-5 self-start`}>
                Explore visit visas
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guides band */}
      <section aria-labelledby="guides-band-heading" className="pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-teal-50 via-[#EFF6FB] to-lilac-50 shadow-[var(--card-shadow)] md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="flex items-center gap-2 text-sm font-bold text-teal-700">
                <BookOpen className="size-4" aria-hidden />
                Free guides
              </p>
              <h2 id="guides-band-heading" className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-[1.75rem]">
                Thinking about study or work abroad?
              </h2>
              <p className="mt-2 max-w-[52ch] text-base text-slate">
                Our service is visit visas, but our free guides explain study, work and residence routes so you
                know where to start.
              </p>
              <Link href="/blog/" className={`${BTN_PRIMARY} mt-5 self-start`}>
                Read the guides
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="h-48 md:h-auto">
              <SignpostIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Resources */}
      <section aria-labelledby="resources-heading" className="pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <SectionHeading
            id="resources-heading"
            title="Resources"
            subtitle="Helpful guides and insights for your travel plans."
            action={
              <Link
                href="/blog/"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline"
              >
                View all resources
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            }
          />
          <ul className="grid gap-4 md:grid-cols-3">
            {resources.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--card-shadow)] transition-all hover:-translate-y-1"
                >
                  <span className="block aspect-[16/7] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image}
                      alt=""
                      width={800}
                      height={350}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 items-center justify-between gap-3 p-4">
                    <span className="text-base font-bold leading-snug text-navy">{r.title}</span>
                    <ArrowRight className="size-5 shrink-0 text-navy transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Our promises */}
      <section aria-labelledby="promises-heading" className="pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="promises-heading" className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem]">
                What you can expect
              </h2>
              <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700">Our promises</span>
            </div>
            <p className="mt-1.5 text-base text-slate">The way we work with every traveller, on every application.</p>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {promises.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-[var(--card-shadow)]"
              >
                <IconBubble icon={p.icon} tone={p.tone} size="lg" />
                <div>
                  <p className="text-base leading-snug text-navy">&ldquo;{p.quote}&rdquo;</p>
                  <p className="mt-1.5 text-sm font-semibold text-slate">{p.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. FAQ */}
      <section aria-labelledby="faq-heading" className="pb-10 sm:pb-14">
        <div className={CONTAINER}>
          <SectionHeading
            id="faq-heading"
            title="Frequently asked questions"
            subtitle="Quick answers to common questions about our services."
            action={
              <Link
                href="/faq/"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline"
              >
                All questions
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            }
          />
          <Accordion type="single" collapsible className="flex flex-col gap-2.5">
            {homepageFaqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="rounded-xl border border-line bg-white px-5 shadow-[var(--card-shadow)] last:border-b"
              >
                <AccordionTrigger className="min-h-12 py-3.5 text-left text-base font-semibold text-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section aria-labelledby="cta-heading" className="pb-12 sm:pb-16">
        <div className={CONTAINER}>
          <div className="bg-wash flex flex-col gap-5 rounded-3xl border border-white p-6 shadow-[var(--card-shadow)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <span className="hidden size-16 shrink-0 place-items-center rounded-2xl border border-teal-100 bg-white text-teal-700 sm:grid" aria-hidden>
                <ClipboardList className="size-8" />
              </span>
              <div>
                <h2 id="cta-heading" className="text-2xl font-extrabold tracking-tight text-navy sm:text-[1.75rem]">
                  Ready to plan your next trip?
                </h2>
                <p className="mt-1 text-base text-slate">Get expert guidance for your visit visa documents.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/consultation/" className={BTN_PRIMARY}>
                <CalendarDays className="size-4" aria-hidden />
                Book a consultation
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <TrackedLink
                event="whatsapp_click"
                location="homepage_final_cta"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_BASE} border-2 border-teal-700 bg-white text-teal-700`}
                aria-label="WhatsApp chat (opens in a new tab)"
              >
                <MessageCircle className="size-5 text-[#25D366]" aria-hidden />
                WhatsApp chat
              </TrackedLink>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-[80ch] text-center text-sm text-slate">
            <BadgeCheck className="mr-1 inline size-4 align-[-3px] text-teal-700" aria-hidden />
            We are a documentation service, not a government authority. We don&apos;t issue visas or guarantee
            outcomes; the relevant authority makes every decision.
          </p>
        </div>
      </section>
    </div>
  );
}
