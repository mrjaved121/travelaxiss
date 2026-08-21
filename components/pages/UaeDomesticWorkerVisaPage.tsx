"use client";

import Link from "next/link";
import {
  ArrowRight,
  Home,
  FileCheck,
  Users,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { uaeDomesticWorkerVisaFaqs } from "@/components/data/uaeDomesticWorkerVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not a Tadbeer center, MOHRE, or an employer, and we do not place or supply domestic workers. Sponsorship is processed through official UAE government channels and licensed Tadbeer centers, subject to their rules and approvals.";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Tadbeer-Channel Sponsorship",
    description: "Recruitment and sponsorship processed through a government-authorized Tadbeer center, the proper route under current UAE regulations.",
    icon: Home,
  },
  {
    title: "Sponsor Eligibility",
    description: "Confirming your household meets the current income and accommodation requirements before you begin.",
    icon: Users,
  },
  {
    title: "Contract & Documentation",
    description: "Preparing the formal employment contract and supporting documents both sides need for a valid sponsorship.",
    icon: FileCheck,
  },
  {
    title: "Ongoing Compliance",
    description: "Keeping your sponsorship compliant with current labour rules for the duration of employment.",
    icon: ShieldCheck,
  },
];

const howWeHelp = [
  "Confirming your household's eligibility before you commit to a recruitment process",
  "A document checklist prepared correctly the first time",
  "Guidance through the Tadbeer-channel process rather than an informal arrangement",
  "Clear answers on contract terms and sponsor obligations",
];

export default function UaeDomesticWorkerVisaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              UAE Visa Documentation
            </p>
            <h1 className="page-title mb-6">
              UAE Domestic <span style={{ color: "#155EEF" }}>Worker Visa</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              Sponsoring a domestic worker — a housemaid, nanny, driver, or caregiver — in the UAE runs through a distinct regulatory framework, separate from standard employment visas, built around government-authorized Tadbeer centers. This guide covers how sponsorship actually works, what your household needs to qualify, and the documents both sides need to get it right the first time.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                A UAE domestic worker visa is sponsored by a resident or citizen household, processed through a government-authorized Tadbeer center rather than an informal arrangement. Sponsors typically need to meet a minimum income and accommodation standard, and the process includes a formal employment contract, the worker's medical fitness clearance, and Emirates ID application. We help households prepare this documentation correctly.
              </p>
            </div>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about UAE domestic worker visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
              How Sponsorship Works
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 md:p-8 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFFFFF" }}
                  aria-hidden
                >
                  <item.icon className="w-6 h-6" style={{ color: "#155EEF" }} />
                </div>
                <h3 className="subsection-title mb-2" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              How the Process <span style={{ color: "#155EEF" }}>Actually Works</span>
            </h2>
            <p className="text-[#667085] leading-relaxed mb-4">
              Since UAE labour reforms brought domestic worker recruitment under formal oversight, the process runs through Tadbeer centers rather than the informal broker arrangements many households used previously. A Tadbeer center is licensed and regulated, meaning both the sponsoring household and the worker have a documented, enforceable relationship from day one — the contract terms, working conditions, and sponsor obligations are all on record with the relevant authority, not agreed verbally.
            </p>
            <p className="text-[#667085] leading-relaxed mb-4">
              In practice, this starts with the household confirming eligibility — meeting the current minimum income threshold and having accommodation suitable for a live-in or live-out arrangement, depending on the role. From there, the Tadbeer center coordinates the worker's medical fitness testing, prepares the formal employment contract with agreed terms, and processes the residency application through the standard visa steps: entry permit, medical clearance, and Emirates ID, followed by visa stamping. Throughout, the household's Emirates ID and income documentation anchor the sponsorship on the government's side, while the worker's passport, medical results, and signed contract anchor it on theirs.
            </p>
            <p className="text-[#667085] leading-relaxed">
              One detail worth knowing upfront: because this runs through a distinct regulatory track from standard MOHRE employment visas, the fee structure, contract templates, and renewal process are all specific to domestic worker sponsorship — assuming the same rules apply as a regular employment visa is a common and avoidable mistake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Documents You&apos;ll <span style={{ color: "#155EEF" }}>Need</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF" }}>
                <h3 className="subsection-title mb-3">As the sponsoring household</h3>
                <ul className="space-y-2">
                  {[
                    "Emirates ID copy",
                    "Salary certificate or income documentation",
                    "Tenancy contract showing suitable accommodation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#667085] text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF" }}>
                <h3 className="subsection-title mb-3">For the domestic worker</h3>
                <ul className="space-y-2">
                  {[
                    "Passport copy",
                    "Medical fitness test results",
                    "Signed employment contract",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#667085] text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 bg-white border-l-4"
            style={{ borderColor: "#D4183D" }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#D4183D" }} aria-hidden />
              <div>
                <h3 className="subsection-title mb-2">
                  Avoid Informal Arrangements
                </h3>
                <p className="text-[#667085] leading-relaxed">
                  Sponsoring a domestic worker outside the Tadbeer or MOHRE channel — through informal private arrangements — leaves both the household and the worker without proper legal protection, and can create serious status problems later. Processing sponsorship through the correct government channel from the start is what protects both sides.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contract terms */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3">
              What a Proper Contract Covers
            </h2>
            <p className="text-[#667085] leading-relaxed">
              A Tadbeer-processed employment contract sets out the agreed role, working hours, days off, salary, and accommodation arrangements in writing, giving both sides a clear reference point rather than a verbal understanding that can be remembered differently later. This matters as much for the sponsoring household as for the worker — a documented contract is what you point to if a dispute ever comes up, and it's the basis the relevant authority uses if a complaint or renewal question arises. We help households prepare a contract that reflects what's actually agreed, rather than a generic template that doesn't match the real arrangement.
            </p>
            <p className="text-[#667085] leading-relaxed mt-4">
              If a disagreement does come up during employment — over working conditions, pay, or notice — having gone through the proper channel means there's an actual process to resolve it through MOHRE or the relevant labour authority, rather than an informal dispute with no clear path forward. This is, in practice, the single biggest advantage of sponsoring through Tadbeer rather than privately: it's not just about the initial paperwork, it's about having recourse for the entire length of the employment relationship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="section-title mb-6">
              How Travelaxis <span style={{ color: "#155EEF" }}>Helps</span>
            </h2>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                  <span className="text-[#667085]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="section-title mb-4">
              Frequently Asked <span style={{ color: "#155EEF" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {uaeDomesticWorkerVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E4E7EC]">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#1D2939" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#667085] text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6 text-center">
              Related <span style={{ color: "#155EEF" }}>Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/services/uae-employment-visa", label: "UAE Employment & Labour Visa" },
                { href: "/blog/family-sponsorship-income-requirements-uae", label: "UAE Family Visa" },
                { href: "/services/visa-services", label: "UAE Visa Documentation & Consultancy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition-shadow bg-white font-semibold"
                  style={{ color: "#1D2939" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Sponsoring a Domestic Worker?</h2>
          <p className="text-white/90 mb-4 max-w-2xl mx-auto">
            We&apos;ll confirm your household's eligibility and walk you through the Tadbeer-channel process.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about UAE domestic worker visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
