import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "UAE Visa Services", href: "/services/visa-services" },
  { label: "UAE Document Attestation", href: "/services/attestation" },
  { label: "For Clients in Pakistan", href: "/pakistan" },
  { label: "Company Formation", href: "/services/company-formation" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "FAQs", href: "/faq" },
];

export default function NotFound() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
          404
        </p>
        <h1 className="page-title mb-4">
          We Couldn&apos;t Find That Page
        </h1>
        <p className="lead mb-10 max-w-xl mx-auto">
          The page you're looking for may have moved or no longer exists. Here's where most visitors were headed:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between gap-2 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow font-semibold"
              style={{ color: "#1D2939" }}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
          >
            <Search className="w-5 h-5" aria-hidden />
            <span>Back to Homepage</span>
          </Link>
          <a
            href="https://wa.me/971589867555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
            style={{ borderColor: "#155EEF", color: "#155EEF" }}
            aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
