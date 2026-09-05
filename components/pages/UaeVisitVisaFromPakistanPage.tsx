"use client";

import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Hotel,
  Building2,
  Users,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { uaeVisitVisaFromPakistanFaqs } from "@/components/data/uaeVisitVisaFromPakistanFaqs";

const WHATSAPP_PREFILL = "https://wa.me/971589867555?text=" + encodeURIComponent(
  "Hi, I want a Dubai visit visa from Pakistan"
);

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not GDRFA, ICP, an airline, or a hotel, and we do not guarantee visa approval. All visit visas are issued through official UAE government channels or authorized sponsors, subject to their rules and approvals.";

const durationRows = [
  { type: "30-Day Visit Visa", entry: "Single or multiple entry", use: "Most common option for tourism and family visits" },
  { type: "60-Day Visit Visa", entry: "Single or multiple entry", use: "Longer family visits or ongoing business dealings" },
  { type: "90-Day Visit Visa", entry: "Sometimes available, extendable", use: "Extended stays, depending on profile and sponsor route" },
];

const routes: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Individual UAE Resident Sponsor",
    description: "A friend or relative with UAE residency can sponsor you directly, often with more flexibility on duration — but the sponsor takes on responsibility for your compliance with the visa terms.",
    icon: Users,
  },
  {
    title: "Tour Operator or Travel Agency",
    description: "The most common route for applicants without a UAE-based contact. Licensed operators process the visa with their own fee structure and timeline.",
    icon: Building2,
  },
  {
    title: "Hotel or Airline-Linked Visa",
    description: "Some UAE hotels and airlines bundle visa processing with a booking — simple for straightforward tourism trips, less flexible if your plans change.",
    icon: Hotel,
  },
];

const howWeHelp = [
  "A document checklist matched to your sponsor route before you apply",
  "Bank statement and financial proof review — a common cause of delay for Pakistani applicants",
  "Coordination with your sponsor's documentation where needed",
  "One point of contact from Lahore through to your visa being issued",
];

export default function UaeVisitVisaFromPakistanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              UAE Visa Documentation for Pakistan
            </p>
            <h1 className="page-title mb-6">
              Dubai / UAE Visit Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              A Dubai visit visa is the standard route for Pakistani nationals traveling for tourism, to see family, or to explore business opportunities. Pakistani applicants tend to face closer scrutiny on solvency proof than some other nationalities, so document quality is what separates a smooth approval from a delay. We handle preparation from our Lahore office, with the UAE side coordinated through Dubai.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                Pakistani nationals commonly get 30-day or 60-day Dubai visit visas, single or multiple entry, with a 90-day option sometimes available. You can apply through a licensed tour operator (no UAE contact needed), a hotel or airline booking, or an individual UAE resident sponsor. You'll need a passport valid 6+ months, a recent photo, a confirmed return ticket, and financial proof — typically 3–6 months of bank statements. We review your documents, including the bank-statement details that commonly cause delays, before submission.
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
                <span>Check Requirements</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_PREFILL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about a Dubai visit visa from Pakistan (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Duration options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="section-title mb-4">
              Visit Visa <span style={{ color: "#155EEF" }}>Durations for Pakistani Applicants</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E4E7EC] shadow-sm mb-4 max-w-4xl overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-normal">Visa Type</TableHead>
                  <TableHead className="whitespace-normal">Entry Type</TableHead>
                  <TableHead className="whitespace-normal">Common Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {durationRows.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#1D2939" }}>
                      {row.type}
                    </TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row.entry}</TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <p className="text-sm text-[#667085] max-w-4xl">
            Which duration and entry type you're eligible for depends on your sponsor route and travel history, and rules are reviewed periodically by{" "}
            <a href="https://gdrfad.gov.ae" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
              GDRFA
            </a>{" "}
            and{" "}
            <a href="https://icp.gov.ae/en/" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
              ICP
            </a>
            . We confirm what's currently available to you before you apply.
          </p>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
              Three Ways to Apply From Pakistan
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.75)" }}>
              Your route determines which documents you need and how much flexibility you have.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {routes.map((item, index) => (
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

      {/* Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Documents You&apos;ll <span style={{ color: "#155EEF" }}>Need</span>
            </h2>
            <p className="lead text-[#667085] leading-relaxed mb-6">
              Most applications share a common core. Sponsored applications add a second layer of documents specific to your sponsor.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF" }}>
                <h3 className="subsection-title mb-3">For every application</h3>
                <ul className="space-y-2">
                  {[
                    "Passport with at least 6 months' validity and blank pages",
                    "Recent passport-size photograph on a white background",
                    "Confirmed return or onward flight itinerary",
                    "Proof of accommodation",
                    "3–6 months of bank statements, plus a salary certificate",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#667085] text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF" }}>
                <h3 className="subsection-title mb-3">If sponsored by a UAE resident</h3>
                <ul className="space-y-2">
                  {[
                    "Sponsor's Emirates ID and UAE residence visa copy",
                    "Relationship proof, attested where required",
                    "No-objection or invitation letter, where applicable",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#667085] text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl p-6 mt-6 border-l-4" style={{ borderColor: "#155EEF", backgroundColor: "#F5F8FF" }}>
              <p className="text-sm text-[#667085] leading-relaxed">
                <strong style={{ color: "#1D2939" }}>Why bank statements matter more than most applicants expect:</strong>{" "}
                reviewers look for steady balances and regular activity over several months — a large deposit made shortly before applying reads very differently to a reviewer than a consistent balance. We check this before you submit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3">
              What Determines Your Cost
            </h2>
            <p className="text-[#667085] leading-relaxed mb-4">
              Pricing depends on duration, single vs. multiple entry, and your route — a tour-operator or hotel/airline-linked visa usually bundles a service fee into the published price, while individual sponsorship can involve separate government fees. Government fees are reviewed periodically, so rather than quote a PKR figure that may already be outdated, we confirm current pricing for your exact route on WhatsApp or during a free consultation.
            </p>
            <a
              href={WHATSAPP_PREFILL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis about Dubai visit visa pricing from Pakistan on WhatsApp (opens in a new tab)"
            >
              <span>Ask About Current PKR Pricing</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Travelaxis for Pakistan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="section-title mb-4">
              Why Pakistani Clients <span style={{ color: "#155EEF" }}>Work With Us</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Lahore & Dubai Offices", description: "A staffed Lahore office for document review, with the UAE side coordinated directly through our Dubai team." },
              { icon: Clock, title: "Realistic Timelines", description: "We tell you what to expect before you send us anything, and flag anything likely to slow your case down." },
              { icon: ShieldCheck, title: "Document Review That Catches Issues Early", description: "We check bank statements and sponsor documents against what reviewers actually look for, before submission." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl p-6 text-center"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "#F5F8FF" }}
                  aria-hidden
                >
                  <item.icon className="w-6 h-6" style={{ color: "#155EEF" }} />
                </div>
                <h3 className="subsection-title mb-2">{item.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <ul className="max-w-3xl mx-auto mt-10 space-y-3">
            {howWeHelp.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                <span className="text-[#667085]">{item}</span>
              </li>
            ))}
          </ul>
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
              {uaeVisitVisaFromPakistanFaqs.map((faq, i) => (
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
          <p className="text-xs text-[#667085] mt-6 text-center">
            Guidance reviewed against GDRFA/ICP rules as of September 2026 — requirements change periodically, so we confirm current specifics before you apply.
          </p>
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
                { href: "/blog/dubai-visit-visa-from-pakistan", label: "Full Guide: Dubai Visit Visa Documents & Refusal Causes" },
                { href: "/services/uae-visit-visa", label: "UAE Visit & Tourist Visa (All Nationalities)" },
                { href: "/pakistan", label: "UAE Services for Clients in Pakistan" },
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
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Start Your Dubai Visit Visa From Pakistan</h2>
          <p className="lead mb-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Message us your travel dates and city — Lahore, Karachi, Islamabad, or anywhere else — and we&apos;ll confirm exactly what you need.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Check Requirements</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_PREFILL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about a Dubai visit visa from Pakistan (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
