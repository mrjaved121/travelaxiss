'use client';

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  Scale,
  HeadphonesIcon,
  Plane,
  Globe2,
  Moon,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { DubaiArea } from "@/components/data/dubaiAreas";

const coreServices: { title: string; description: string; icon: LucideIcon; link: string }[] = [
  {
    title: "Company Formation",
    description: "Mainland, freezone, and offshore company setup and license processing support.",
    icon: Building2,
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    description: "Approvals, Dubai Chamber services, and multi-authority coordination.",
    icon: FileText,
    link: "/services/government-services",
  },
  {
    title: "Legal Documentation",
    description: "POA/MOA preparation, certificate attestation, and corporate documentation.",
    icon: Scale,
    link: "/services/legal-documentation",
  },
  {
    title: "Business Support",
    description: "Trademark registration, ISO certification, and corporate bank account support.",
    icon: HeadphonesIcon,
    link: "/services/business-support",
  },
  {
    title: "UAE Visa Documentation",
    description: "Investor, employment, family, and visit visa documentation support.",
    icon: Plane,
    link: "/services/visa-services",
  },
  {
    title: "International Visa Documentation",
    description: "Documentation support for Saudi Arabia, Europe, USA, Schengen, and beyond.",
    icon: Globe2,
    link: "/services/international-visas",
  },
  {
    title: "Umrah Services",
    description: "Umrah visa documentation, transport, and hotel coordination from Dubai.",
    icon: Moon,
    link: "/services/umrah-services",
  },
];

const generalFaqs: { q: string; a: string }[] = [
  {
    q: "Do you guarantee approval for company formation or visa applications?",
    a: "No — we provide documentation preparation and consultancy support only. Approvals are decided by the relevant UAE government authority, not by us.",
  },
  {
    q: "Is Travelaxis a government authority?",
    a: "No. We are a documentation and consultancy service. Licenses and visas are issued by the relevant DED, free zone authority, GDRFA, or ICP.",
  },
];

export default function DubaiAreaPage({ area }: { area: DubaiArea }) {
  const faqs = [...area.faqs, ...generalFaqs];

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
              {area.isOffice ? "Our Office Location" : "Serving This Area"}
            </p>
            <h1 className="page-title mb-6">
              Business Setup &amp; Visa Documentation in{" "}
              <span style={{ color: '#155EEF' }}>{area.name}</span>
            </h1>
            <p className="lead mb-6">{area.heroIntro}</p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4" style={{ borderColor: "#155EEF" }}>
              We provide documentation assistance and consultancy support only. We are not a
              government authority, and we do not guarantee approval. Licenses and visas are
              issued by the relevant UAE authority, not by us.
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
              <MapPin className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#155EEF' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Area context */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="section-title mb-6">
              About {area.fullLabel}
            </h2>
            <ul className="space-y-3">
              {area.context.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{ backgroundColor: '#155EEF', color: '#FFFFFF' }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-[#667085]">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: '#155EEF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title mb-4" style={{ color: '#FFFFFF' }}>
              {`Services for ${area.name} Businesses & Residents`}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={`relative group rounded-3xl overflow-hidden border border-white/10 p-6${
                  index === coreServices.length - 1 && coreServices.length % 3 === 1
                    ? " sm:col-start-1 lg:col-start-2"
                    : ""
                }`}
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
              {faqs.map((faq, i) => (
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

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#155EEF' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-4">
            Get Started From {area.name}
          </h2>
          <p className="text-white/90 mb-8">
            Tell us what you need and we&apos;ll outline the documentation, timeline, and next
            steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
          >
            Contact Travelaxis
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
