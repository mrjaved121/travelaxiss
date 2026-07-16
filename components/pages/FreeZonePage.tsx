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
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              {`Free Zone Company Formation — ${zone.emirate}`}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              {`${zone.name} Company Formation`}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{zone.heroIntro}</p>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4" style={{ borderColor: "#1D63E0" }}>
              {disclaimer}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <div
              className="relative w-full h-full rounded-[2rem] shadow-xl flex items-center justify-center"
              style={{ backgroundColor: '#EEF4FF' }}
              aria-hidden
            >
              <Landmark className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#1D63E0' }} />
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
            className="rounded-3xl p-8 border border-gray-100 shadow-sm"
            style={{ backgroundColor: '#EEF4FF' }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
              {`What ${zone.name} Is Known For`}
            </h2>
            <ul className="space-y-3">
              {zone.knownFor.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-[#1D63E0] mt-0.5">👉</span>
                  <span className="text-gray-700">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl p-8 border border-gray-100 shadow-sm"
            style={{ backgroundColor: '#EEF4FF' }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
              {`Who ${zone.name} Best Suits`}
            </h2>
            <ul className="space-y-3">
              {zone.bestFor.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-[#1D63E0] mt-0.5">👉</span>
                  <span className="text-gray-700">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20" style={{ backgroundColor: '#1D63E0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
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
                  <service.icon className="w-6 h-6" style={{ color: '#1D63E0' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
              Frequently Asked <span style={{ color: '#1D63E0' }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {zone.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: '#0F1B2D' }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-[#1D63E0]">❓</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D63E0' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {`Start Your ${zone.name} Company`}
          </h2>
          <p className="text-lg text-white/90 mb-4">
            We&apos;ll help you prepare a complete, correctly organized application.
          </p>
          <p className="text-sm text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Contact Travelaxis
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
