"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";
import { goldenVisaCategories, goldenVisaFaqs, GOLDEN_VISA_SOURCE } from "@/components/data/uaeGoldenVisa";

const WHATSAPP_HREF = "https://wa.me/971589867555";
const linkClass = "font-semibold underline-offset-2 hover:underline";

const benefits = [
  "A long-term, renewable residence visa valid for 5 or 10 years",
  "No sponsor needed",
  "You can stay outside the UAE for longer than the usual six months without the visa lapsing",
  "You can sponsor family members, including your spouse and children",
];

const guides = [
  { title: "Golden Visa UAE – Requirements & Benefits", href: "/blog/golden-visa-uae-guide" },
  { title: "Property Investor Golden Visa", href: "/blog/property-investor-golden-visa-uae-guide" },
  { title: "Software Engineer Golden Visa", href: "/blog/software-engineer-golden-visa-uae-guide" },
  { title: "AI Specialist Golden Visa", href: "/blog/ai-specialist-golden-visa-uae-guide" },
  { title: "Humanitarian Pioneers Golden Visa", href: "/blog/humanitarian-pioneers-visa-uae-documents-guide" },
  { title: "Investor Visa UAE", href: "/blog/investor-visa-uae-guide" },
];

export default function UaeGoldenVisaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Services", href: "/services" }, { name: "UAE Golden Visa" }]} />
            <p className="eyebrow mb-3">UAE Golden Visa Documentation</p>
            <h1 className="page-title mb-6">
              UAE Golden Visa <span style={{ color: "#0A4D8C" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#52606D] mb-6 leading-relaxed">
              The Golden Visa is the UAE&apos;s long-term residence visa for investors, entrepreneurs, people
              with exceptional talent, outstanding students and humanitarian pioneers. We prepare the
              documentation for Pakistani applicants — the decision is made by the UAE authorities.
            </p>
            <p className="text-sm text-[#52606D] mb-8">
              Last updated September 2026 · Checked against the UAE government portal (u.ae)
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#categories"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>See the Categories</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E6E1D8", color: "#0F2A43" }}
                aria-label="Chat with Travelaxis on WhatsApp about the UAE Golden Visa (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#0A4D8C" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">What the Golden Visa Gives You</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl p-5" style={{ backgroundColor: "#F7F3EC", border: "1px solid var(--card-line)" }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0A4D8C" }} aria-hidden />
                <span className="text-sm text-[#52606D]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 scroll-mt-24" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-3">UAE Golden Visa Categories and Requirements</h2>
          <p className="text-[#52606D] leading-relaxed mb-6">
            These are the eligible categories the UAE government lists, with the residency length and main
            requirements for each. Each category has its own detailed conditions.
          </p>
          <div className="space-y-4">
            {goldenVisaCategories.map((c) => (
              <div key={c.category} className="rounded-3xl p-6 bg-white" style={{ border: "1px solid var(--card-line)" }}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="subsection-title">{c.category}</h3>
                  <p className="text-sm font-semibold" style={{ color: "#0A4D8C" }}>{c.duration}</p>
                </div>
                <p className="text-sm text-[#52606D] leading-relaxed">{c.requirements}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#52606D] mt-6">
            Source:{" "}
            <a href={GOLDEN_VISA_SOURCE} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#0A4D8C" }}>
              UAE government — Golden visa
            </a>{" "}
            (information from ICP).
          </p>
        </div>
      </section>

      {/* Pakistani applicants */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-3">Applying from Pakistan</h2>
          <div className="space-y-4 text-[#52606D] leading-relaxed">
            <p>
              Golden Visa applications are made through the UAE&apos;s official channels — ICP&apos;s eServices
              (which also has an eligibility check), GDRFA Dubai&apos;s Golden visa services, and for creatives a
              recommendation from the Ministry of Culture.
            </p>
            <p>
              The documents behind each category — degrees, property title deeds, company and tax records,
              recommendation letters — must be complete and consistent. Documents issued in Pakistan, such
              as degree certificates, generally need attesting before UAE authorities accept them, so start
              that early.
            </p>
          </div>
          <h3 className="subsection-title mt-8 mb-3">How we help</h3>
          <ul className="space-y-2">
            {[
              "Confirming which category fits your profile, from the official criteria",
              "A document checklist for that category",
              "Organising your supporting documents so they are complete and consistent",
              "Guidance on submitting through ICP or GDRFA",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#52606D]">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 scroll-mt-24" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm
            defaultDestination="UAE Golden Visa"
            heading="Get Help With Your Golden Visa Documents"
            subheading="Tell us which category you think you fit — investor, talent, student or another. We'll check the official conditions with you."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E6E1D8]">
            <Accordion type="single" collapsible className="w-full">
              {goldenVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E6E1D8]">
                  <AccordionTrigger className="text-left text-base font-bold py-5 hover:no-underline" style={{ color: "#0F2A43" }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#52606D] text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6 text-center">Golden Visa Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-center gap-3 rounded-2xl p-5 card-hover bg-white"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                <span className="text-sm font-semibold" style={{ color: "#0F2A43" }}>{guide.title}</span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/uae" className="font-semibold hover:underline" style={{ color: "#0A4D8C" }}>
              See all UAE visa services
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
