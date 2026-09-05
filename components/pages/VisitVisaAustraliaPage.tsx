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
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const quickFacts = [
  { label: "Visa type", value: "Visitor visa (Subclass 600)" },
  { label: "Application", value: "Online, via ImmiAccount" },
  { label: "Biometrics", value: "May be required, depending on nationality" },
  { label: "Decision made by", value: "Department of Home Affairs" },
];

const documents = [
  "Valid passport",
  "Recent passport-size photograph",
  "Evidence of sufficient funds",
  "Genuine Temporary Entrant (GTE) statement",
  "Travel itinerary",
];

const faqs = [
  {
    q: "How do I apply for an Australia visitor visa from Pakistan?",
    a: "You apply online through ImmiAccount with a passport, financial evidence, and supporting statements about your intended visit. We help prepare each document before you submit.",
  },
  {
    q: "What is a Genuine Temporary Entrant (GTE) statement?",
    a: "It's a statement explaining your circumstances and intention to visit temporarily and return home, used by the Department of Home Affairs to assess visitor visa applications. We help you prepare this clearly.",
  },
  {
    q: "Does Travelaxis guarantee my Australia visa will be approved?",
    a: "No consultancy can guarantee approval — the decision rests with the Department of Home Affairs. We help ensure your application is complete and correctly documented.",
  },
];

export default function VisitVisaAustraliaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs
              trail={[
                { name: "Visit Visa Services", href: "/visit-visa" },
                { name: "Oceania", href: "/visit-visa/oceania" },
                { name: "Australia" },
              ]}
            />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Australia Visitor Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#667085] mb-8 leading-relaxed">
              Understand the Australia Visitor Visa (Subclass 600), common document requirements,
              and the steps involved in preparing an application from Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#requirements-form"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>Check Australia Requirements</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about Australia visit visas (opens in a new tab)"
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
            Requirements are set by the{" "}
            <a href="https://immi.homeaffairs.gov.au/" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
              Department of Home Affairs
            </a>{" "}
            and reviewed periodically — we confirm the current list for your specific case.
          </p>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Australia" heading="Get Help With Your Australia Visitor Visa Application" />
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
              { href: "/visit-visa/oceania", label: "Explore Oceania Visit Visas" },
              { href: "/services/australia-visa-from-pakistan", label: "Australia Student Visa Documentation" },
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
