"use client";

import Link from "next/link";
import {
  ArrowRight,
  Plane,
  GraduationCap,
  Heart,
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
import { australiaVisaFaqs } from "@/components/data/australiaVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only, for Visitor, Student, and Partner/Family visa categories. We are not a MARA-registered migration agent and do not handle skilled-visa points assessments or lodge points-tested applications. All applications are submitted through the Department of Home Affairs' official channels, subject to their rules and approvals.";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Visitor Visa (Subclass 600)",
    description: "Tourism, business-visitor, and sponsored-family streams, with the right document set for each.",
    icon: Plane,
  },
  {
    title: "Student Visa (Subclass 500)",
    description: "Documentation for students holding a Confirmation of Enrolment from a registered Australian institution.",
    icon: GraduationCap,
  },
  {
    title: "Partner / Family Visa",
    description: "Evidence and documentation support for partners and family of Australian citizens, residents, or eligible visa holders.",
    icon: Heart,
  },
];

const timelineRows = [
  { doc: "Visitor Visa (600)", authority: "Department of Home Affairs", turnaround: "Often 2–6 weeks" },
  { doc: "Student Visa (500)", authority: "Department of Home Affairs, via your CoE", turnaround: "4–10 weeks, varies by intake" },
  { doc: "Partner / Family Visa", authority: "Department of Home Affairs", turnaround: "Several months to over a year, case-dependent" },
];

const howWeHelp = [
  "A document checklist reviewed with you before you submit anything",
  "Help organizing financial evidence, enrolment, and relationship documentation",
  "Coordination on attestation where your documents need it first",
  "Guidance through ImmiAccount submission and follow-up",
];

export default function AustraliaVisaFromPakistanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Australia Visa Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#0F1B2D" }}>
              Australia Visa <span style={{ color: "#1D63E0" }}>from Pakistan</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you&apos;re visiting family, starting a course, or joining a partner in Australia, an application from Pakistan comes down to a complete, correctly prepared document set submitted through the Department of Home Affairs. We handle the paperwork for Visitor, Student, and Partner/Family visas.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#1D63E0" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#1D63E0" }}>
                Quick answer
              </p>
              <p className="text-gray-700 leading-relaxed">
                An Australia visa from Pakistan is applied for online via ImmiAccount, through the{" "}
                <a
                  href="https://immi.homeaffairs.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: "#1D63E0" }}
                >
                  Department of Home Affairs
                </a>
                . Requirements depend on category — Visitor (subclass 600), Student (subclass 500), or Partner/Family. We prepare documentation for these categories; we don&apos;t handle skilled-visa points assessments or lodge points-tested applications, which require a MARA-registered agent.
              </p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#1D63E0" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
              >
                <span>Get a Free Australia Visa Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#1D63E0", color: "#1D63E0" }}
                aria-label="Chat with Travelaxis on WhatsApp about Australia visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: "#1D63E0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
              Australia Visa Categories We Support
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                  <item.icon className="w-6 h-6" style={{ color: "#1D63E0" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attestation note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border border-gray-100 shadow-sm"
            style={{ backgroundColor: "#EEF4FF" }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
              Partner and Some Student Applications Need Attested Documents Too
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Partner visa applications almost always require an attested marriage certificate, and some student visa categories request verified academic records. Where they do, the same HEC/IBCC &rarr; MOFA &rarr; Embassy chain applies as with UAE documents — we can run both processes for you in parallel.
            </p>
            <Link
              href="/services/attestation"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "#1D63E0" }}
            >
              <span>See how document attestation from Pakistan works</span>
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Timelines + pricing */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F1B2D" }}>
              Typical <span style={{ color: "#1D63E0" }}>Timelines</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 shadow-sm mb-4 max-w-4xl overflow-hidden bg-white"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-normal">Visa Category</TableHead>
                  <TableHead className="whitespace-normal">Processed By</TableHead>
                  <TableHead className="whitespace-normal">Typical Timeline*</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timelineRows.map((row) => (
                  <TableRow key={row.doc}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#0F1B2D" }}>
                      {row.doc}
                    </TableCell>
                    <TableCell className="whitespace-normal text-gray-600">{row.authority}</TableCell>
                    <TableCell className="whitespace-normal text-gray-600">{row.turnaround}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <p className="text-sm text-gray-500 max-w-4xl mb-12">
            *Department of Home Affairs-published guide times; actual decisions vary by individual case. We confirm a realistic timeline once we review your documents.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 max-w-4xl bg-white"
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
              What determines your total cost
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Australian government visa application charges are fixed and set directly by the Department of Home Affairs, varying by category. Our service fee is separate and depends on how much document preparation your case needs. We confirm both before you commit to anything.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis about Australia visa costs on WhatsApp (opens in a new tab)"
            >
              <span>Ask About Your Case</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </a>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0F1B2D" }}>
              How Travelaxis <span style={{ color: "#1D63E0" }}>Helps</span>
            </h2>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#1D63E0" }} aria-hidden />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F1B2D" }}>
              Frequently Asked <span style={{ color: "#1D63E0" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {australiaVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F1B2D" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
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
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0F1B2D" }}>
              Related <span style={{ color: "#1D63E0" }}>Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/services/attestation", label: "UAE Document Attestation from Pakistan" },
                { href: "/services/international-visas", label: "International Visa Documentation" },
                { href: "/pakistan", label: "UAE Services for Clients in Pakistan" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition-shadow bg-white font-semibold"
                  style={{ color: "#0F1B2D" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1D63E0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Australia Visa Application</h2>
          <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
            Tell us your category — visit, study, or partner — and we&apos;ll map out exactly what you need.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
            >
              <span>Get a Free Australia Visa Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#1D63E0" }}
              aria-label="Chat with Travelaxis on WhatsApp about Australia visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
