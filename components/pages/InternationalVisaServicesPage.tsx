'use client';

import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Briefcase,
  Flag,
  Globe2,
  Compass,
  Globe,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const visaTypes: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Saudi Arabia Visa Documentation",
    description:
      "Documentation support for Saudi visit, business, and work visa applications, submitted through official Saudi channels.",
    icon: Landmark,
  },
  {
    title: "Europe Work Visa Documentation",
    description:
      "Guidance and paperwork support for individuals already sponsored by a European employer. We do not arrange jobs or sponsorship.",
    icon: Briefcase,
  },
  {
    title: "USA Visa Documentation",
    description:
      "Documentation and application support for common US visa categories, submitted through official US consular channels.",
    icon: Flag,
  },
  {
    title: "Schengen Visa Documentation",
    description:
      "Paperwork support for short-stay Schengen visit and business visa applications across participating European countries.",
    icon: Globe2,
  },
  {
    title: "European Countries Visas",
    description:
      "Documentation assistance for UK and other European visa applications outside the Schengen area.",
    icon: Compass,
  },
  {
    title: "African Countries Visas",
    description:
      "Visa documentation support for business and travel visa applications across African destination countries.",
    icon: Globe,
  },
  {
    title: "Asian Countries Visas",
    description:
      "Documentation assistance for visit, business, and work visa applications across Asian destination countries.",
    icon: MapPin,
  },
  {
    title: "Visa Appointment Booking Support",
    description:
      "Help scheduling and preparing for embassy, consulate, or visa center appointments.",
    icon: CalendarCheck,
  },
];

const countryGroups: { title: string; countries: string[] }[] = [
  {
    title: "Schengen Area",
    countries: [
      "France",
      "Italy",
      "Spain",
      "Germany",
      "Switzerland",
      "Netherlands",
      "Portugal",
      "Czech Republic",
      "Austria",
      "Greece",
      "Belgium",
      "Croatia",
      "Sweden",
      "Lithuania",
      "Iceland",
      "Finland",
      "Denmark",
      "Hungary",
    ],
  },
  {
    title: "USA & UK",
    countries: ["USA", "UK"],
  },
  {
    title: "Other Popular Destinations",
    countries: [
      "South Africa",
      "New Zealand",
      "Indonesia (Bali)",
      "Canada",
      "Cyprus",
      "Russia",
      "China",
      "Japan",
      "Turkey",
      "Singapore",
      "Australia",
    ],
  },
];

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not a government authority, embassy, employer, or recruitment agency for any country, and we do not arrange jobs, sponsor employment, or guarantee visa approval. All visa applications are submitted through the relevant country's official channels—embassies, consulates, or authorized visa centers—subject to their rules and approvals.";

const faqs = [
  {
    q: "Do you issue visas for these countries yourselves?",
    a: "No. We prepare and organize your documentation; the visa itself is issued by the destination country's embassy, consulate, or immigration authority, not by us.",
  },
  {
    q: "Can you guarantee my visa will be approved?",
    a: "No consultancy can guarantee approval for any country. We help ensure your application is complete and correctly documented, which is the biggest factor within your control.",
  },
  {
    q: "Do you help me find a job abroad for a work visa?",
    a: "No. We are a documentation and consultancy service, not a recruitment agency. We support paperwork for applicants who already have a sponsor, employer, or invitation—we don't source jobs or place candidates.",
  },
  {
    q: "Which countries do you currently support?",
    a: "Saudi Arabia, Schengen-area countries, the UK and other European countries, the USA, and a range of African and Asian destinations. If your destination isn't listed, contact us to check.",
  },
  {
    q: "How is this different from your UAE visa documentation service?",
    a: "Our UAE Visa Documentation service covers residency and entry visas for the UAE itself. This service covers documentation for visas to other countries—for UAE residents and others traveling, working, or relocating abroad.",
  },
  {
    q: "Can you book my embassy or visa center appointment?",
    a: "We can help you schedule and prepare for an appointment where booking systems allow it, and make sure your documents are ready in advance.",
  },
];

export default function InternationalVisaServicesPage() {
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
              International Visa Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Visa Documentation <span style={{ color: '#1D63E0' }}>Beyond the UAE</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Documentation and consultancy support for Saudi Arabia, Europe, the USA, Schengen,
              and other regional destinations—for UAE residents traveling, working, or relocating
              abroad.
            </p>
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
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <div
              className="relative w-full h-full rounded-[2rem] shadow-xl flex items-center justify-center"
              style={{ backgroundColor: '#EEF4FF' }}
              aria-hidden
            >
              <Globe2 className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#1D63E0' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visa categories */}
      <section className="py-20" style={{ backgroundColor: '#1D63E0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Destinations We Support
            </h2>
            <p className="text-lg text-gray-400">
              Structured documentation and guidance for the international visa categories most
              requested by our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 md:p-8 text-center border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-hidden
                >
                  <item.icon className="w-7 h-7" style={{ color: '#1D63E0' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries covered */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              Countries We Cover
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
              Documentation Support by Destination
            </h2>
            <p className="text-lg text-gray-600">
              A snapshot of the destinations we most commonly prepare documentation for. Don&apos;t
              see yours listed — contact us to check.
            </p>
          </motion.div>

          <div className="space-y-10">
            {countryGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIndex * 0.08 }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: '#0F1B2D' }}>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.countries.map((country) => (
                    <span
                      key={country}
                      className="px-4 py-2 rounded-full text-sm font-medium border"
                      style={{ borderColor: '#EEF4FF', backgroundColor: '#EEF4FF', color: '#0F1B2D' }}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-10 leading-relaxed">
            {disclaimer}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F1B2D" }}>
              Frequently Asked <span style={{ color: "#1D63E0" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F1B2D" }}
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
          <p className="text-lg text-white/90 mb-4">
            Not sure which destination or visa category fits your plans? We&apos;ll review your
            situation and outline the documentation you need.
          </p>
          <p className="text-sm text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Book an International Visa Consultation
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
