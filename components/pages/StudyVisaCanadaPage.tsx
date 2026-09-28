"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import InlineLinkList from "@/components/InlineLinkList";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";
import GovernmentFeesSection from "@/components/GovernmentFeesSection";
import CanadaHelpNotice, { CANADA_REP_FAQ } from "@/components/CanadaHelpNotice";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const quickFacts = [
  { label: "Visa type", value: "Study Permit" },
  { label: "Application", value: "Online, via IRCC" },
  { label: "Key requirement", value: "Letter of Acceptance from a DLI" },
  { label: "Decision made by", value: "Immigration, Refugees and Citizenship Canada (IRCC)" },
];

const documents = [
  "Letter of Acceptance from a Designated Learning Institution (DLI)",
  "Provincial or territorial attestation letter (PAL/TAL), in most cases",
  "Proof of funds for tuition and living costs",
  "Valid passport",
  "Recent passport-size photograph",
  "Medical exam and biometrics, where required",
];

const IRCC_FEES_HREF = "https://ircc.canada.ca/english/information/fees/fees.asp";
const IRCC_STUDY_DOCS_HREF =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html";

const fees = [
  { item: "Study permit (including extensions) — per person", amount: "CAD 150" },
  { item: "Biometrics — per person", amount: "CAD 85" },
  { item: "Biometrics — family of 2 or more applying together (maximum)", amount: "CAD 170" },
];

const faqs = [
  {
    q: "What does a Canada study visa cost from Pakistan?",
    a: "The IRCC government fees are CAD 150 for the study permit plus CAD 85 for biometrics, so CAD 235 for a single applicant. That is separate from your tuition deposit and the proof of funds IRCC expects you to show for tuition and living costs, which IRCC sets and updates on its own site.",
  },
  {
    q: "What documents do I need for a Canada study permit from Pakistan?",
    a: "A Letter of Acceptance from a Designated Learning Institution, in most cases a provincial or territorial attestation letter (PAL/TAL), proof of funds, a valid passport, and often a medical exam and biometrics. IRCC's study permit documents page lists what applies to your situation.",
  },
  {
    q: "Who is this route for?",
    a: "Applicants who already hold a Letter of Acceptance from a Designated Learning Institution (DLI) in Canada. Admission comes first, from the school; the study permit is applied for online with IRCC afterwards.",
  },
  CANADA_REP_FAQ,
];

export default function StudyVisaCanadaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs
              trail={[
                { name: "Study Visa", href: "/services/study-visa" },
                { name: "Canada" },
              ]}
            />
            <p className="eyebrow mb-3">Study Visa Services</p>
            <h1 className="page-title mb-6">
              Canada Study Permit <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#667085] mb-8 leading-relaxed">
              Already have a Letter of Acceptance? Here is what IRCC asks for, the official fees, and
              how to apply for a Canada study permit online from Pakistan. This page is general
              information — Travelaxis is not an authorized Canadian immigration representative.
            </p>
            <p className="text-sm text-[#667085] mb-8 leading-relaxed">
              We prepare study visa documentation for <InlineLinkList items={[{ label: "UK", href: "/study-visa/uk" }, { label: "USA", href: "/study-visa/usa" }, { label: "Australia", href: "/study-visa/australia" }]} />, or see our <Link href="/services/study-visa" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>full Study Visa guide</Link> for every destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#canada-help"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>What We Can Help With</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about Canada study permits (opens in a new tab)"
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
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#155EEF" }}>{fact.label}</p>
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
            — check the current list on IRCC&apos;s website before you apply.
          </p>
        </div>
      </section>

      <GovernmentFeesSection
        heading="Canada Study Visa Price from Pakistan: Government Fees"
        intro={
          <>
            The government part of the cost is small and fixed: these are the fees IRCC publishes for a
            study permit, paid online in Canadian dollars. The larger costs are your tuition and the funds
            you must show for living expenses, which IRCC sets on its{" "}
            <a href={IRCC_STUDY_DOCS_HREF} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
              study permit documents page
            </a>
            .
          </>
        }
        rows={fees}
        note="A single applicant pays CAD 235 in government fees (permit plus biometrics)."
        sourceLabel="IRCC fee list"
        sourceHref={IRCC_FEES_HREF}
      />

      <CanadaHelpNotice />

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Canada" heading="Ask About Translation or Travel Bookings for Canada" subheading="We can translate documents, book your flight, and help you scan, upload and navigate IRCC's online system. We don't advise on or complete your application." />
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

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6 text-center">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/visit-visa/canada", label: "Canada Visitor Visa" },
              { href: "/services/canada-visa-from-pakistan", label: "Canada Visa Overview" },
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
