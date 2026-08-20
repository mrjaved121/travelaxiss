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
import { uaeVisitVisaFaqs } from "@/components/data/uaeVisitVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not GDRFA, ICP, an airline, or a hotel, and we do not guarantee visa approval. All visit visas are issued through official UAE government channels or authorized sponsors, subject to their rules and approvals.";

const durationRows = [
  { type: "14-Day Visit Visa", entry: "Single entry", use: "Short trips and quick business visits" },
  { type: "30-Day Visit Visa", entry: "Single or multiple entry", use: "Tourism, family visits, initial business exploration" },
  { type: "60-Day Visit Visa", entry: "Single entry, sometimes extendable", use: "Longer personal or business stays" },
  { type: "90-Day Visit Visa", entry: "Multiple entry", use: "Extended family visits, ongoing business dealings" },
];

const sponsors: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Airlines",
    description: "Many airlines flying into the UAE can sponsor a visit visa as part of your ticket booking, which is often the fastest route for travelers with no UAE-based contact.",
    icon: Plane,
  },
  {
    title: "Hotels",
    description: "UAE hotels can sponsor a visit visa tied to your stay, a common option when booking accommodation directly through a hotel or an authorized travel agent.",
    icon: Hotel,
  },
  {
    title: "Tour Operators & Typing Centers",
    description: "Licensed tour operators and government-authorized typing centers process visit visa applications on behalf of travelers who don't have an airline, hotel, or personal sponsor.",
    icon: Building2,
  },
  {
    title: "UAE Resident or Citizen Sponsors",
    description: "A UAE resident or citizen can personally sponsor a visitor — typically a relative or friend — using their Emirates ID and supporting income or tenancy documents.",
    icon: Users,
  },
];

const howWeHelp = [
  "A document checklist matched to your specific sponsor route before you apply",
  "Guidance on which visa duration and entry type actually fits your travel plans",
  "Coordination with your sponsor's documentation where needed",
  "Clear answers on extension and status-change options for your situation",
];

export default function UaeVisitVisaPage() {
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
              UAE Visit &amp; <span style={{ color: "#155EEF" }}>Tourist Visa</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              A UAE visit visa is usually the fastest visa to arrange, but the sponsor route you choose — airline, hotel, tour operator, or a UAE-based resident — changes which documents you need and how quickly your application moves. This guide covers every duration option, every sponsor route, and what actually determines your cost and timeline, so you can apply with the right paperwork the first time instead of discovering a gap midway through.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                UAE visit visas are issued in 14, 30, 60, and 90-day durations, with single or multiple entry depending on the option and your nationality. You can be sponsored by an airline, a hotel, a licensed tour operator, or a UAE resident or citizen. Documents typically include a passport valid for 6+ months, a photo, proof of funds, and a confirmed return ticket. We prepare the documentation for whichever route fits your trip.
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
                <span>Get a Free Visit Visa Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about UAE visit visas (opens in a new tab)"
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
              Visit Visa <span style={{ color: "#155EEF" }}>Duration Options</span>
            </h2>
            <p className="lead text-[#667085]">
              Four duration bands cover most visit visa needs, and the entry type — single or multiple — affects both cost and flexibility if you plan to leave and re-enter the UAE during your trip.
            </p>
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
          <p className="text-sm text-[#667085] max-w-4xl mb-10">
            Eligibility for each duration and entry type varies by nationality and sponsor route, and rules are reviewed periodically by UAE immigration authorities. We confirm what's currently available to you before you apply.
          </p>
          <div className="max-w-4xl">
            <h3 className="subsection-title mb-3">
              Choosing the Right Duration for Your Trip
            </h3>
            <p className="text-[#667085] leading-relaxed">
              A shorter single-entry visa is usually the cheaper, faster option if your trip has a fixed, short window — a family visit, a single round of business meetings, a holiday. Multiple-entry visas make more sense if you expect to leave and re-enter the UAE during your visit, for example combining Dubai with a side trip elsewhere in the region, or if your business dealings are likely to stretch across several separate visits rather than one continuous stay. Picking the wrong entry type is a common, avoidable cost — travelers who choose single-entry and then need to leave and return mid-trip often end up applying for a second visa entirely, rather than simply choosing multiple-entry from the start.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
              Who Can Sponsor Your Visit Visa
            </h2>
            <p className="text-lg text-white/75">
              Your sponsor route determines which documents you need and often how quickly your application moves.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((item, index) => (
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
              Regardless of sponsor route, most applications share a common core of documents. Sponsored applications add a second layer specific to your sponsor.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF" }}>
                <h3 className="subsection-title mb-3">For every application</h3>
                <ul className="space-y-2">
                  {[
                    "Passport with at least 6 months' validity",
                    "Recent passport-size photograph",
                    "Confirmed return flight ticket",
                    "Proof of accommodation",
                    "Proof of sufficient funds",
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
                    "Sponsor's Emirates ID copy",
                    "Sponsor's tenancy contract or salary certificate",
                    "Relationship documents, where relevant",
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

      {/* Extension note */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border border-[#E4E7EC] shadow-sm bg-white"
          >
            <h2 className="section-title mb-3">
              Already in the UAE and Need More Time?
            </h2>
            <p className="text-[#667085] leading-relaxed mb-4">
              Some visit visa categories can be{" "}
              <Link href="/services/uae-visa-extension-renewal" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
                extended from inside the UAE
              </Link>
              , and in some cases a visit visa can convert to a residence visa without leaving the country — for example after a job offer or marriage. Rules vary by visa category and change periodically, so confirm your specific case before your current visa expires.
            </p>
            <Link
              href="/services/uae-visa-extension-renewal"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "#155EEF" }}
            >
              <span>See how extension and status change work</span>
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-20 bg-white">
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
              Visit visa pricing depends on duration, single vs. multiple entry, and your sponsor route — an airline- or hotel-sponsored visa is often bundled differently than one arranged through a tour operator or personal sponsor. Government fees are reviewed periodically, so rather than quote a number that may be outdated, we confirm current pricing for your exact requirements before you commit to anything.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis about UAE visit visa pricing on WhatsApp (opens in a new tab)"
            >
              <span>Ask About Current Pricing</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
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
      <section className="py-20 bg-white">
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
              {uaeVisitVisaFaqs.map((faq, i) => (
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
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
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
                { href: "/services/uae-visa-extension-renewal", label: "UAE Visa Extension & Renewal" },
                { href: "/services/visa-services", label: "UAE Visa Documentation & Consultancy" },
                { href: "/services/international-visas", label: "International Visa Documentation" },
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
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Plan Your UAE Visit Today</h2>
          <p className="lead mb-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Tell us your travel dates and sponsor route, and we&apos;ll confirm exactly what you need.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Get a Free Visit Visa Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about UAE visit visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
