import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, PHONE_LABEL, WHATSAPP_HREF } from "@/components/home/contact";

type Column = { title: string; links: { name: string; href: string }[] };

const columns: Column[] = [
  {
    title: "Visa services",
    links: [
      { name: "All visit visas", href: "/visit-visa" },
      { name: "Dubai & UAE", href: "/visit-visa/uae" },
      { name: "United Kingdom", href: "/visit-visa/uk" },
      { name: "United States", href: "/visit-visa/usa" },
      { name: "Schengen", href: "/visit-visa/schengen" },
      { name: "Australia", href: "/visit-visa/australia" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { name: "Europe", href: "/visit-visa/europe" },
      { name: "Asia", href: "/visit-visa/asia" },
      { name: "Middle East", href: "/visit-visa/middle-east" },
      { name: "North America", href: "/visit-visa/north-america" },
      { name: "Oceania", href: "/visit-visa/oceania" },
      { name: "All destinations", href: "/destinations" },
    ],
  },
  {
    title: "Study abroad",
    links: [
      { name: "Study visas", href: "/study-visa" },
      { name: "Study in the UK", href: "/study-visa/uk" },
      { name: "Study in the USA", href: "/study-visa/usa" },
      { name: "Study in Canada", href: "/study-visa/canada" },
      { name: "Study in Australia", href: "/study-visa/australia" },
      { name: "Study in Germany", href: "/study-visa/germany" },
    ],
  },
  {
    title: "Immigration",
    links: [
      { name: "Job seeker visas", href: "/job-seeker-visa" },
      { name: "UAE Golden Visa", href: "/services/uae-golden-visa" },
      { name: "Dubai freelance visa", href: "/services/freelance-visa-dubai" },
      { name: "Visa finder", href: "/visa-finder" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Guides & blog", href: "/blog" },
      { name: "FAQs", href: "/faq" },
      { name: "Success stories", href: "/success-stories" },
      { name: "Submit documents", href: "/apply" },
      { name: "About us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const LINK = "text-sm leading-relaxed text-[#B9C7DD] transition-colors hover:text-white";
const HEADING = "mb-3 text-sm font-bold text-white";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pb-16 text-white md:pb-0">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-[1.6fr_repeat(6,1fr)] lg:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Travelaxis home">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images unoptimized */}
              <img
                src="/travelaxis-logo.webp"
                alt="Travelaxis"
                width={300}
                height={100}
                className="h-8 w-auto brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#B9C7DD]">
              Visa documentation and consultancy for visits, study and residency, from our offices in Dubai and Lahore.
            </p>
            <ul className="m-0 mt-4 list-none space-y-1.5 p-0 text-sm text-[#B9C7DD]">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                Al Qusais, Dubai · DHA Phase 8, Lahore
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-teal" aria-hidden />
                <a href={PHONE_HREF} className={LINK}>
                  {PHONE_LABEL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="size-4 shrink-0 text-teal" aria-hidden />
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={LINK} aria-label="WhatsApp us (opens in a new tab)">
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-teal" aria-hidden />
                <a href="mailto:info@travelaxis.me" className={LINK}>
                  info@travelaxis.me
                </a>
              </li>
            </ul>
          </div>

          {/* Language — first on mobile so it's easy to find */}
          <div className="order-first col-span-2 sm:col-span-3 lg:order-last lg:col-span-1">
            <h3 className={HEADING}>Language</h3>
            <label className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 px-3 text-sm text-white">
              <Globe className="size-4 text-teal" aria-hidden />
              <span className="sr-only">Site language</span>
              <select defaultValue="en" className="bg-transparent text-white focus:outline-none" aria-label="Site language">
                <option value="en" className="text-navy">
                  English
                </option>
              </select>
            </label>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className={HEADING}>{col.title}</h3>
              <ul className="m-0 list-none space-y-1.5 p-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={LINK}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-10 max-w-4xl text-xs leading-relaxed text-white/55">
          We provide documentation preparation and consultancy support only. We are not a government authority,
          employer, or recruitment agency, and we do not guarantee visa approval or employment outcomes.
        </p>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm md:flex-row">
          <p className="text-white/60">© {currentYear} Travelaxis. All rights reserved.</p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy" className={LINK}>
              Privacy
            </Link>
            <Link href="/terms" className={LINK}>
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
