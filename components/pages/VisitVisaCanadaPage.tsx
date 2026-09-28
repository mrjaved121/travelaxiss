"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";
import GovernmentFeesSection from "@/components/GovernmentFeesSection";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const quickFacts = [
  { label: "Visa type", value: "Visitor visa (TRV)" },
  { label: "Application", value: "Online, via IRCC" },
  { label: "Biometrics", value: "Required, at a visa application centre" },
  { label: "Decision made by", value: "Immigration, Refugees and Citizenship Canada (IRCC)" },
];

const documents = [
  "Passport with valid pages",
  "Recent passport-size photograph",
  "Financial evidence",
  "Travel purpose statement",
  "Invitation letter, where relevant to a family visit",
];

const canadaGuides: { title: string; description: string; href: string }[] = [
  {
    title: "Canada Visitor Visa Refusal Reasons for Pakistani Applicants",
    description: "IRCC's leave-on-time test, how to read your refusal letter, and when reapplying makes sense.",
    href: "/blog/canada-visitor-visa-refusal-reasons-pakistani-applicants",
  },
  {
    title: "Cover Letter for a Visit Visa: Free Sample & Template",
    description: "A copy-paste cover letter sample and template, plus the mistakes that get letters rejected.",
    href: "/blog/cover-letter-for-visit-visa-sample-pakistan",
  },
];

const IRCC_FEES_HREF = "https://ircc.canada.ca/english/information/fees/fees.asp";

const fees = [
  { item: "Visitor visa (single or multiple entry) — per person", amount: "CAD 100" },
  { item: "Visitor visa — family of 5 or more applying together (maximum)", amount: "CAD 500" },
  { item: "Biometrics — per person", amount: "CAD 85" },
  { item: "Biometrics — family of 2 or more applying together (maximum)", amount: "CAD 170" },
];

const faqs = [
  {
    q: "What is the Canada visit visa fee from Pakistan?",
    a: "IRCC charges CAD 100 per person for a visitor visa (the same fee for single or multiple entry) plus CAD 85 per person for biometrics, so most single applicants pay CAD 185 in government fees. Families applying together pay at most CAD 500 for the visas and CAD 170 for biometrics. Fees are paid online to IRCC in Canadian dollars; our own service fee is quoted separately.",
  },
  {
    q: "How do I apply for a Canada visit visa from Pakistan?",
    a: "You submit an online application through IRCC with a passport, financial evidence, and a travel purpose statement, then complete biometrics at a visa application centre in Pakistan. We help prepare and check every document beforehand.",
  },
  {
    q: "How long does a Canada visit visa from Pakistan take?",
    a: "IRCC-published guide times vary by visa office volume and document completeness. We give you a realistic estimate once we review your case.",
  },
  {
    q: "Does Travelaxis guarantee my Canada visa will be approved?",
    a: "No consultancy can guarantee approval — the decision rests entirely with IRCC. We help ensure your application is complete and correctly documented.",
  },
];

export default function VisitVisaCanadaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs
              trail={[
                { name: "Visit Visa Services", href: "/visit-visa" },
                { name: "North America", href: "/visit-visa/north-america" },
                { name: "Canada" },
              ]}
            />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Canada Visit Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#667085] mb-8 leading-relaxed">
              Understand the Canada visitor visa (TRV) process, the official IRCC fee, common document
              requirements, and the steps involved in preparing an application from Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#requirements-form"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>Check Canada Requirements</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about Canada visit visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl p-4 text-center" style={{ backgroundColor: "#F5F8FF" }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#155EEF" }}>
                  {fact.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "#1D2939" }}>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">Documents You&apos;ll Need</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {documents.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-[#667085] text-sm bg-white rounded-xl p-4" style={{ border: "1px solid var(--card-line)" }}>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#667085] mt-6">
            Requirements are set by{" "}
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
              IRCC
            </a>{" "}
            and reviewed periodically — we confirm the current list for your specific case.
          </p>
        </div>
      </section>

      <GovernmentFeesSection
        heading="Canada Visit Visa Fee from Pakistan"
        intro="These are the government fees IRCC publishes for a visitor visa. They are paid online to IRCC in Canadian dollars when you submit the application, and are the same whichever entry type IRCC decides to issue."
        rows={fees}
        note="A single applicant usually pays CAD 185 in government fees (visa plus biometrics). The fee is not refunded if the visa is refused. Our service fee is separate and quoted after we review your case."
        sourceLabel="IRCC fee list"
        sourceHref={IRCC_FEES_HREF}
      />

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Canada" heading="Get Help With Your Canada Visitor Visa Application" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E4E7EC]">
                  <AccordionTrigger className="text-left text-base font-bold py-5 hover:no-underline" style={{ color: "#1D2939" }}>
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

      {/* Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6 text-center">Canada Visa Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {canadaGuides.map((guide) => (
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

      {/* Related */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6 text-center">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/visit-visa/north-america", label: "Explore North America Visit Visas" },
              { href: "/services/canada-visa-from-pakistan", label: "Canada Study Permit Documentation" },
              { href: "/services/attestation", label: "UAE Document Attestation" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl p-4 text-center card-hover bg-white font-semibold"
                style={{ color: "#1D2939", border: "1px solid var(--card-line)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
