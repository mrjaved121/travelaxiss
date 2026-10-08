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
import { schengenVisitVisaFaqs } from "@/components/data/schengenVisitVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";
const EU_APPLY_HREF =
  "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy/applying-schengen-visa_en";
const DE_SHORT_STAY_HREF = "https://pakistan.diplo.de/pk-en/service/visa-shortterm-1673126";
const DE_FEES_HREF = "https://pakistan.diplo.de/pk-en/service/2208622-2208622";

const linkClass = "font-semibold underline-offset-2 hover:underline";

const quickFacts = [
  { label: "Length of stay", value: "Up to 90 days in any 180-day period" },
  { label: "Visa fee", value: "Set by the Schengen visa code, reduced for children" },
  { label: "Processing", value: "Usually about 14–15 days" },
  { label: "Apply", value: "No earlier than 6 months, at least 15 days before travel" },
];

const whereToApply = [
  "Visiting one Schengen country: apply to that country's embassy or consulate.",
  "Visiting several: apply to the country where you will spend the longest time.",
  "Equal time in each: apply to the country you will enter first.",
  "Apply in the country where you legally live, so Pakistani residents apply in Pakistan and UAE residents usually apply in the UAE.",
];

const germanyDocuments = [
  "Current passport, valid at least 3 months after the visa ends and signed by you, plus all previous passports and visas",
  "Videx online application form, printed and signed",
  "Two biometric passport photos, not older than 6 months",
  "Travel medical insurance meeting the German Mission's minimum cover requirement for all Schengen countries",
  "Hotel bookings and itinerary for the whole stay (tourists), or an invitation from your host (family and friend visits)",
  "Confirmed return flight reservation",
  "Employment or university letter and NOC for the trip",
  "Copies of any previous visa refusals, which must be disclosed",
  "CNIC copy, plus NADRA FRC and, where relevant, marriage or birth certificates",
  "Signed lists of your children and of relatives living abroad",
  "Bank statements for the last 6 months and salary slips for the last 3 months",
  "Printout of your appointment email",
];

const applySteps = [
  {
    title: "Free consultation",
    text: "Message us on WhatsApp. We look at your trip, confirm which embassy you should apply to, and flag anything that could weaken your file.",
  },
  {
    title: "Document preparation",
    text: "We compile and review your complete file against the German Mission's checklist: insurance, bank statements, itinerary, bookings or invitation, and your employer or university letter.",
  },
  {
    title: "Free appointment registration",
    text: "We guide you through registering on the waiting list of the Embassy in Islamabad or the Consulate General in Karachi. Registration is free and done directly with the Mission. We never charge for or sell the appointment itself.",
  },
  {
    title: "You submit in person",
    text: "You attend your appointment to submit the file and give biometrics (unless you gave them at a Schengen mission in the last 59 months). The embassy makes the decision.",
  },
];

const fees = [
  "Schengen short-stay visa (type C) — adults",
  "Schengen short-stay visa — children aged 6 to 12 (reduced)",
];

const otherCountries = [
  "France", "Italy", "Spain", "Switzerland", "Netherlands", "Portugal", "Czech Republic", "Austria",
  "Greece", "Belgium", "Croatia", "Sweden", "Lithuania", "Iceland", "Finland", "Denmark", "Hungary",
];

const guides: { title: string; description: string; href: string }[] = [
  {
    title: "The EU's New Border System (EES): What Pakistani Travelers Need to Know",
    description: "The new biometric border check, live since April 2026 — what it collects, who it affects, and what changes at the border.",
    href: "/blog/eu-entry-exit-system-ees-pakistan-travelers",
  },
  {
    title: "Schengen Visa Rejection Reasons for Pakistani Applicants",
    description: "All 11 official refusal codes, how much bank balance you need, and how to reapply after a rejection.",
    href: "/blog/schengen-visa-rejection-reasons-pakistani-applicants",
  },
  {
    title: "Cover Letter for a Visit Visa: Free Sample & Template",
    description: "A copy-paste cover letter sample and template, plus the mistakes that get letters rejected.",
    href: "/blog/cover-letter-for-visit-visa-sample-pakistan",
  },
];

export default function VisitVisaSchengenPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs
              trail={[
                { name: "Visit Visa Services", href: "/visit-visa" },
                { name: "Europe", href: "/visit-visa/europe" },
                { name: "Schengen" },
              ]}
            />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Germany &amp; Schengen Visit Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              A Germany visit visa is a Schengen short-stay visa: one visa that covers tourism, family
              visits and business trips of up to 90 days across the Schengen Area. This page covers the
              official fee, where to apply, how appointments work at the German Missions in Pakistan, and
              the documents they ask for.
            </p>
            <p className="text-sm text-[#667085] mb-6">
              Last updated September 2026 · Checked against the European Commission and the German
              Missions in Pakistan
            </p>
            <div className="rounded-2xl p-6 mb-8" style={{ borderLeft: "4px solid #155EEF", backgroundColor: "#FFFFFF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                Apply to the embassy of your main destination. For Germany, register (free) on the waiting
                list of the Embassy in Islamabad or the Consulate General in Karachi, then attend your
                appointment with the full document set. The visa fee is charged in PKR at the current
                exchange rate on the day you pay, and a decision usually takes about 14 days. The decision
                is made only by the embassy; we help you prepare a complete, consistent file.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#requirements-form"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>Check Schengen Requirements</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about Schengen visit visas (opens in a new tab)"
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

      {/* Where to apply */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-3">Schengen Visa from Pakistan: Which Embassy to Apply To</h2>
          <p className="text-[#667085] leading-relaxed mb-6">
            There is no single &quot;Schengen embassy&quot;. The Schengen Area has 29 member countries, and the
            rules decide which one handles your application:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {whereToApply.map((rule) => (
              <li key={rule} className="text-[#667085] text-sm bg-white rounded-xl p-4" style={{ border: "1px solid var(--card-line)" }}>
                {rule}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#667085] mt-6">
            Source:{" "}
            <a href={EU_APPLY_HREF} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
              European Commission — Applying for a Schengen visa
            </a>
            .
          </p>
        </div>
      </section>

      {/* Germany process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-3">Germany Visit Visa from Pakistan: How Appointments Work</h2>
          <div className="space-y-4 text-[#667085] leading-relaxed">
            <p>
              The German Missions in Pakistan take short-stay applications themselves. Applicants from
              Islamabad Capital Territory, Punjab, Khyber Pakhtunkhwa and Azad Jammu &amp; Kashmir apply to
              the <strong style={{ color: "#1D2939" }}>Embassy in Islamabad</strong>; applicants from Sindh and
              Balochistan apply to the <strong style={{ color: "#1D2939" }}>Consulate General in Karachi</strong>.
            </p>
            <p>
              Both run a <strong style={{ color: "#1D2939" }}>waiting list</strong>: you register online, receive a
              waiting-list number by email, and are given an appointment later in order of registration.
              Registration is free, and only one registration per person is allowed. The German Mission
              warns that anyone who asks for money to register you or promises a faster appointment is a
              fraudster. We do not sell appointments.
            </p>
            <p>
              You fill in the application on the Videx online form and bring the signed printout. If your
              biometrics were taken at any Schengen mission in the last 59 months, you can say so when you
              register and may not need to appear in person. Note that Pakistani passports must be signed,
              because the Mission cannot put a visa in an unsigned passport.
            </p>
            <p>
              If a German visa is refused, the old remonstration (objection) procedure is no longer
              available: it ended on 1 July 2025. Your refusal letter states the legal remedy that remains open; if
              the file was weak, a new, stronger application is usually the faster route.
            </p>
          </div>
          <p className="text-sm text-[#667085] mt-6">
            Source:{" "}
            <a href={DE_SHORT_STAY_HREF} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
              German Missions in Pakistan — Short-term / Schengen visa
            </a>
            .
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-3">Germany Visit Visa Requirements for Pakistani Applicants</h2>
          <p className="text-[#667085] leading-relaxed mb-6">
            The German Missions ask for these documents, in this order, for tourist and family or friend
            visits. A missing document can lead to an immediate refusal, and copies must be A4.
          </p>
          <ol className="grid sm:grid-cols-2 gap-3">
            {germanyDocuments.map((doc, i) => (
              <li key={doc} className="flex items-start gap-3 text-[#667085] text-sm bg-white rounded-xl p-4" style={{ border: "1px solid var(--card-line)" }}>
                <span className="font-semibold flex-shrink-0" style={{ color: "#155EEF" }}>{i + 1}.</span>
                <span>{doc}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-[#667085] mt-6 leading-relaxed">
            For a family visit, your host in Germany can provide a formal letter of obligation
            (Verpflichtungserklärung) from their local Foreigners Office, or an informal signed invitation
            with copies of their passport, residence permit and registration. Other Schengen countries
            publish their own checklists, which we confirm for your case.
          </p>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">How to Apply with Travelaxis</h2>
          <ol className="grid sm:grid-cols-2 gap-4">
            {applySteps.map((step, i) => (
              <li key={step.title} className="rounded-2xl p-5" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#155EEF" }}>Step {i + 1}</p>
                <h3 className="subsection-title mb-2">{step.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GovernmentFeesSection
        className="bg-[#F5F8FF]"
        heading="Schengen Visa Fee from Pakistan"
        intro="The Schengen visa fee is the same for every member country. At the German Embassy and Consulate General in Pakistan it is charged in PKR at the current exchange rate and paid in cash at the counter."
        items={fees}
        note="Countries that use an external visa service centre may add a service charge on top, and the fee can be waived for some categories of applicant. Our own service fee is separate and quoted after we review your case."
        sourceLabel="German Missions in Pakistan — visa fees"
        sourceHref={DE_FEES_HREF}
      />

      {/* Other countries */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-2">Other Schengen Countries We Support</h2>
          <p className="text-[#667085] mb-6">
            Alongside Germany, we prepare visit visa documentation for these Schengen countries. See{" "}
            <Link href="/visit-visa/europe" className={linkClass} style={{ color: "#155EEF" }}>
              all Europe visit visas
            </Link>
            , including the UK.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCountries.map((name) => (
              <div key={name} className="rounded-2xl px-4 py-3 text-center bg-white" style={{ border: "1px solid var(--card-line)" }}>
                <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Germany / Schengen" heading="Get Help With Your Schengen Visit Visa Application" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {schengenVisitVisaFaqs.map((faq, i) => (
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
          <h2 className="section-title mb-6 text-center">Schengen Visa Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guides.map((guide) => (
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
              { href: "/services/germany-visa-from-pakistan", label: "Germany Visa from Pakistan" },
              { href: "/visit-visa/uk", label: "UK Visit Visa from Pakistan" },
              { href: "/visit-visa/europe", label: "Europe Visit Visas" },
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
