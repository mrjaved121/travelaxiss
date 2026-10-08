"use client";

import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Flag,
  Snowflake,
  Sun,
  Compass,
  Globe2,
  MapPin,
  CheckCircle,
  MessageCircle,
  Search,
  ClipboardList,
  FileCheck2,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GuideCard from "@/components/GuideCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { studyVisaFaqs } from "@/components/data/studyVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const relatedServices = [
  { href: "/visit-visa", label: "Tourist & Visit Visas" },
  { href: "/visit-visa/uae", label: "Dubai Visit Visa from Pakistan" },
  { href: "/visit-visa/schengen", label: "Schengen & Germany Visit Visa" },
];

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not a university, embassy, or immigration authority, and we do not arrange admission or guarantee visa approval. Applications are submitted through each country's official visa channels.";

const countries: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  {
    title: "UK Study Visa",
    description: "Student Visa documentation for admitted students with a CAS from a licensed UK institution.",
    icon: Landmark,
    href: "/study-visa/uk",
  },
  {
    title: "USA Study Visa",
    description: "F1 Student Visa documentation, DS-160 review, and interview preparation.",
    icon: Flag,
    href: "/study-visa/usa",
  },
  {
    title: "Canada Study Visa",
    description: "Official IRCC fees and requirements for a study permit once you hold a Letter of Acceptance (information guide).",
    icon: Snowflake,
    href: "/study-visa/canada",
  },
  {
    title: "Australia Study Visa",
    description: "Student Visa (Subclass 500) documentation for a Confirmation of Enrolment.",
    icon: Sun,
    href: "/study-visa/australia",
  },
  {
    title: "Germany Study Visa",
    description: "Student/Ausbildung Visa documentation for applicants from Pakistan.",
    icon: Compass,
    href: "/study-visa/germany",
  },
  {
    title: "Other European Countries",
    description: "Study visa documentation support for France, Italy, Netherlands, and other European destinations outside the UK.",
    icon: Globe2,
    href: "/services/international-visas#schengen-countries",
  },
  {
    title: "China Visa Documentation",
    description: "Documentation support for applicants heading to China, including study-related applications.",
    icon: MapPin,
    href: "/services/international-visas#other-countries",
  },
];

const howWeHelp = [
  "A document checklist reviewed against your specific university and course",
  "Help preparing financial evidence, admission letters, and supporting statements",
  "One point of contact from your first message through to submission",
];

const howItWorks: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "Tell Us What You Need", description: "Let us know your destination and course or admission status.", icon: Search },
  { number: "02", title: "We Check the Requirements", description: "We find out exactly which documents you need, based on current rules.", icon: ClipboardList },
  { number: "03", title: "We Help You Prepare", description: "We help you get every document ready and organized correctly.", icon: FileCheck2 },
  { number: "04", title: "We Submit & Keep You Updated", description: "Your application goes through the right official channel, and we keep you posted.", icon: Send },
];

export default function StudyVisaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Services", href: "/services" }, { name: "Study Visas" }]} />
            <p className="eyebrow mb-3">Study Visa Documentation</p>
            <h1 className="page-title mb-6">
              Study Visa <span style={{ color: "#0A4D8C" }}>Documentation</span>
            </h1>
            <p className="lead text-[#52606D] mb-6 leading-relaxed">
              Planning to study in the UK, USA, Australia, Germany, elsewhere in Europe, or China? We
              help you prepare the right documents for your student visa application, so
              you can focus on your admission while we handle the paperwork.
            </p>
            <p className="text-sm text-[#52606D] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#0A4D8C" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>Check Requirements</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E6E1D8", color: "#0F2A43" }}
                aria-label="Chat with Travelaxis on WhatsApp about study visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#0A4D8C" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choose your destination */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-4">Choose Your Destination</h2>
            <p className="text-[#52606D]">
              Study visa documentation for the destinations our clients ask about most.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((item, index) => (
              <GuideCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
                ctaLabel="Explore"
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <h2 className="section-title mb-4">How We Help</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto rounded-3xl p-8 bg-white border" style={{ borderColor: "#E6E1D8" }}>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#0A4D8C" }} aria-hidden />
                  <span className="text-[#52606D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">Study Visa Process</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-[24px] bg-white p-7 card-hover text-center"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <step.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <p className="text-4xl font-bold mb-3 tracking-tight" style={{ color: "#0A4D8C" }}>
                  {step.number}
                </p>
                <h3 className="subsection-title mb-2">{step.title}</h3>
                <p className="text-[0.9375rem] text-[#52606D] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E6E1D8]">
            <Accordion type="single" collapsible className="w-full">
              {studyVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E6E1D8]">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F2A43" }}
                  >
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

      {/* Related services */}
      <RelatedLinks links={relatedServices} />

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0A4D8C" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Start Your Study Visa Application</h2>
          <p className="lead mb-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Tell us your destination and course, and we&apos;ll map out exactly what you need.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-[#F5A524] text-[#3B2600] shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-md"
            >
              <span>Check Requirements</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#0A4D8C" }}
              aria-label="Chat with Travelaxis on WhatsApp about study visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
