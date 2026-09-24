"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InlineLinkList from "@/components/InlineLinkList";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

const europeGuides: { title: string; description: string; href: string }[] = [
  {
    title: "Schengen Visa Rejection Reasons for Pakistani Applicants",
    description: "All 11 official refusal codes, how much bank balance you need, and how to reapply after a rejection.",
    href: "/blog/schengen-visa-rejection-reasons-pakistani-applicants",
  },
  {
    title: "Cover Letter for a Visit Visa: Free Sample & Template",
    description: "A copy-paste cover letter sample and template, plus the mistakes that get letters rejected.",
    href: "/blog/cover-letter-for-visit-visa-sample-pakistan",
  },
];

const schengenCountries: { name: string; href?: string }[] = [
  { name: "France" },
  { name: "Italy" },
  { name: "Spain" },
  { name: "Germany", href: "/services/germany-visa-from-pakistan" },
  { name: "Switzerland" },
  { name: "Netherlands" },
  { name: "Portugal" },
  { name: "Czech Republic" },
  { name: "Austria" },
  { name: "Greece" },
  { name: "Belgium" },
  { name: "Croatia" },
  { name: "Sweden" },
  { name: "Lithuania" },
  { name: "Iceland" },
  { name: "Finland" },
  { name: "Denmark" },
  { name: "Hungary" },
];

export default function VisitVisaEuropePage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services", href: "/visit-visa" }, { name: "Europe" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Europe <span style={{ color: "#155EEF" }}>Visit Visas</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Visit visa documentation for the UK and every Schengen member state, submitted
              through the relevant country&apos;s own official process.
            </p>
            <p className="text-sm text-[#667085] mt-4 leading-relaxed">
              We also prepare visit visa documentation for <InlineLinkList items={[{ label: "North America", href: "/visit-visa/north-america" }, { label: "Middle East", href: "/visit-visa/middle-east" }, { label: "Asia", href: "/visit-visa/asia" }, { label: "Oceania", href: "/visit-visa/oceania" }, { label: "Africa", href: "/visit-visa/africa" }]} />.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">United Kingdom</h2>
          <Link
            href="/visit-visa/uk"
            className="block rounded-3xl p-6 bg-white card-hover"
            style={{ border: "1px solid var(--card-line)" }}
          >
            <h3 className="subsection-title mb-1">UK Visit Visa</h3>
            <p className="text-sm text-[#667085] mb-3">Standard Visitor visa guidance for tourism, family visits, and permitted short stays.</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#155EEF" }}>
              View requirements
              <ArrowRight className="w-4 h-4" aria-hidden />
            </span>
          </Link>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-2">Schengen Area</h2>
          <p className="text-[#667085] mb-6">
            Short-stay visit and business visa documentation across all 18 Schengen member states we support.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {schengenCountries.map((country) =>
              country.href ? (
                <Link
                  key={country.name}
                  href={country.href}
                  className="rounded-2xl px-4 py-3.5 text-center bg-white card-hover block"
                  style={{ border: "1px solid var(--card-line)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>{country.name}</p>
                </Link>
              ) : (
                <div
                  key={country.name}
                  className="rounded-2xl px-4 py-3.5 text-center bg-white"
                  style={{ border: "1px solid var(--card-line)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>{country.name}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">Europe Visa Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {europeGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-start gap-4 rounded-3xl p-6 card-hover"
                style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#155EEF" }}
                  aria-hidden
                >
                  <BookOpen className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                </div>
                <div className="flex-1">
                  <h3 className="subsection-title mb-1">{guide.title}</h3>
                  <p className="text-sm text-[#667085]">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Europe" />
        </div>
      </section>
    </div>
  );
}
