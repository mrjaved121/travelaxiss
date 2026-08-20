'use client';

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CircleDollarSign,
  Briefcase,
  Users,
  Plane,
  FileStack,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { visaServicesFaqs } from "@/components/data/visaServicesFaqs";

const visaTypes: { title: string; description: string; icon: LucideIcon; link: string }[] = [
  {
    title: "Investor / Partner Visas",
    description:
      "Documentation and application support for business owners and investors establishing a company.",
    icon: CircleDollarSign,
    link: "/blog/investor-visa-uae-guide",
  },
  {
    title: "Employment Visas",
    description:
      "Guidance and paperwork support for individuals already sponsored by a UAE-based employer. We do not arrange jobs or sponsorship.",
    icon: Briefcase,
    link: "/services/uae-employment-visa",
  },
  {
    title: "Family Sponsorship Visas",
    description:
      "Assistance with documentation for sponsoring spouse, children, and parents in the UAE.",
    icon: Users,
    link: "/blog/family-sponsorship-income-requirements-uae",
  },
  {
    title: "Visit & Tourist Visas",
    description:
      "Support with visit and tourist visa documentation for short-term business or leisure travel.",
    icon: Plane,
    link: "/services/uae-visit-visa",
  },
  {
    title: "Visa Renewals & Cancellations",
    description:
      "Renewal documentation support and cancellation-related formalities coordinated through official channels.",
    icon: FileStack,
    link: "/services/uae-visa-extension-renewal",
  },
];

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not a government authority, employer, or recruitment agency, and we do not arrange jobs, sponsor employment, or guarantee visa approval. All visa applications are submitted through official UAE government channels or authorized entities, subject to applicable rules and approvals.";


export default function VisaServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EAF1FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              Visa Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#071A2B' }}>
              UAE Visa <span style={{ color: '#155EEF' }}>Documentation &amp; Consultancy</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              End-to-end UAE visa documentation and consultancy support&mdash;from eligibility
              review and paperwork to application guidance, renewals, and cancellation
              assistance.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="UAE visa documentation: investor, employment, family, and visit visa consultancy"
              width={640}
              height={427}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Visa categories */}
      <section className="py-20" style={{ backgroundColor: '#155EEF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Support Across Major UAE Visa Categories
            </h2>
            <p className="text-lg text-white/75">
              Structured documentation and guidance for the visa categories most businesses
              and families need in the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative group rounded-3xl p-6 md:p-8 text-center border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <Link href={item.link} className="absolute inset-0 z-10 rounded-3xl" aria-label={`Read more about ${item.title}`} />
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-hidden
                >
                  <item.icon className="w-7 h-7" style={{ color: '#155EEF' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#FFFFFF' }}>
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#071A2B' }}>
              Frequently Asked <span style={{ color: '#155EEF' }}>Questions</span>
            </h2>
          </motion.div>
          <div className="rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100" style={{ backgroundColor: '#EAF1FF' }}>
            <Accordion type="single" collapsible className="w-full">
              {visaServicesFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: '#071A2B' }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-[#155EEF]">❓</span>
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
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#155EEF' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <p className="text-lg text-white/90 mb-4">
            Not sure which category fits? We&apos;ll review your situation, outline
            documentation requirements, realistic timelines, and next steps for official
            submission.
          </p>
          <p className="text-sm text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
          >
            Book a Visa Documentation Consultation
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
