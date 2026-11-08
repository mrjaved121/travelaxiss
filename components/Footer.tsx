import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const WHATSAPP_HREF = "https://wa.me/971589867555";

type Column = { title: string; links: { name: string; href: string }[] };

const columns: Column[] = [
  {
    title: "Visit visas",
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
      { name: "Europe & Schengen", href: "/visit-visa/europe" },
      { name: "Asia", href: "/visit-visa/asia" },
      { name: "Middle East", href: "/visit-visa/middle-east" },
      { name: "North America", href: "/visit-visa/north-america" },
      { name: "Oceania", href: "/visit-visa/oceania" },
      { name: "Africa", href: "/visit-visa/africa" },
      { name: "All destinations", href: "/destinations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Guides & blog", href: "/blog" },
      { name: "FAQs", href: "/faq" },
      { name: "Success stories", href: "/success-stories" },
      { name: "Submit documents", href: "/apply" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Book a consultation", href: "/consultation" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const LINK = "text-sm leading-relaxed text-white/75 transition-colors hover:text-white hover:underline underline-offset-4";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pb-16 text-white md:pb-0">
      <NewsletterSignup />

      <div className="mx-auto max-w-7xl border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.5fr_repeat(4,1fr)_1.3fr]">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block rounded-xl bg-white px-3 py-2" aria-label="Travelaxis home">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images unoptimized */}
              <img src="/travelaxis-logo.webp" alt="Travelaxis" width={704} height={158} className="h-8 w-auto" loading="lazy" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Visit visa guidance for travel, family visits and business trips, from our offices in Dubai and Lahore.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-sm font-bold text-white">{col.title}</h3>
              <ul className="m-0 list-none space-y-2 p-0">
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

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-4 text-sm font-bold text-white">Contact</h3>
            <ul className="m-0 list-none space-y-2.5 p-0">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <span className="text-sm text-white/75">Al Qusais, Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <span className="text-sm text-white/75">DHA Phase 8, Lahore, Pakistan</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-[#25D366]" aria-hidden />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                  aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <a href="mailto:info@travelaxis.me" className={LINK}>
                  info@travelaxis.me
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                <a href="tel:+971589867555" className={LINK}>
                  +971 58 986 7555
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 max-w-4xl text-xs leading-relaxed text-white/60">
          We provide documentation preparation and consultancy support only. We are not a government authority,
          employer, or recruitment agency, and we do not guarantee visa approval or employment outcomes. Applications
          are submitted through official government channels or by the applicant/employer.
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/70">© {currentYear} Travelaxis. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className={LINK}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={LINK}>
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
