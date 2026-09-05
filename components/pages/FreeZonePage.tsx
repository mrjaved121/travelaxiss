'use client';

import Link from "next/link";
import { ArrowRight, Building2, FileText, Plane, Landmark } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FreeZone } from "@/components/data/freeZones";

const relatedServices = [
  {
    title: "Company Formation",
    description: "Full documentation and application support for your free zone company setup.",
    icon: Building2,
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    description: "Approvals and multi-authority coordination alongside your free zone license.",
    icon: FileText,
    link: "/services/government-services",
  },
  {
    title: "UAE Visa Documentation",
    description: "Investor, employment, and family visa documentation tied to your new license.",
    icon: Plane,
    link: "/services/visa-services",
  },
];

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not affiliated with or part of any free zone authority, and we do not issue licenses ourselves. Licenses are issued directly by the relevant free zone authority, subject to their rules and approvals.";

export default function FreeZonePage({ zone }: { zone: FreeZone }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              {`Free Zone Company Formation — ${zone.emirate}`}
            </p>
            <h1 className="page-title mb-6">
              {`${zone.name} Company Formation`}
            </h1>
            <p className="lead mb-6">{zone.heroIntro}</p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.12)' }} aria-hidden />
            <div
              className="relative w-full h-full rounded-[2rem] shadow-xl flex items-center justify-center"
              style={{ backgroundColor: '#F5F8FF' }}
              aria-hidden
            >
              <Landmark className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#155EEF' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Known for / Best for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-8 card-hover transition-all duration-200 hover:-translate-y-1"
            style={{ backgroundColor: '#F5F8FF', border: "1px solid var(--card-line)" }}
          >
            <h3 className="subsection-title mb-4">
              {`What ${zone.name} Is Known For`}
            </h3>
            <ul className="space-y-3">
              {zone.knownFor.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-[#155EEF] mt-0.5">👉</span>
                  <span className="text-[#667085]">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl p-8 card-hover transition-all duration-200 hover:-translate-y-1"
            style={{ backgroundColor: '#F5F8FF', border: "1px solid var(--card-line)" }}
          >
            <h3 className="subsection-title mb-4">
              {`Who ${zone.name} Best Suits`}
            </h3>
            <ul className="space-y-3">
              {zone.bestFor.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-[#155EEF] mt-0.5">👉</span>
                  <span className="text-[#667085]">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20" style={{ backgroundColor: '#155EEF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title mb-4" style={{ color: '#FFFFFF' }}>
              {`How We Support Your ${zone.name} Setup`}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative group rounded-3xl overflow-hidden border border-white/10 p-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <Link href={service.link} className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-hidden
                >
                  <service.icon className="w-6 h-6" style={{ color: '#155EEF' }} />
                </div>
                <h3 className="subsection-title mb-2" style={{ color: '#FFFFFF' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2 className="section-title mb-4">
              Frequently Asked <span style={{ color: '#155EEF' }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {zone.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E4E7EC]">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: '#1D2939' }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-[#155EEF]">❓</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#667085] text-base leading-relaxed pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Compare against other free zones */}
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#667085]">
            Not sure {zone.name} is the right fit?{' '}
            <Link href="/blog/best-freezones-uae" className="font-semibold underline-offset-2 hover:underline" style={{ color: '#155EEF' }}>
              Compare it against every major UAE free zone
            </Link>
            {' '}or{' '}
            <Link href="/free-zones" className="font-semibold underline-offset-2 hover:underline" style={{ color: '#155EEF' }}>
              browse all free zones we support
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#155EEF' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-4">
            {`Start Your ${zone.name} Company`}
          </h2>
          <p className="text-white/90 mb-4">
            We&apos;ll help you prepare a complete, correctly organized application.
          </p>
          <p className="text-sm text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
          >
            Discuss My Business Setup
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
