"use client";

import Link from "next/link";
import {
  ArrowRight,
  Plane,
  GraduationCap,
  CheckCircle,
  MessageCircle,
  AlertTriangle,
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
import { usaVisaFaqs } from "@/components/data/usaVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only, for B1/B2 visitor and F1 student visa categories. We are not a US immigration attorney or accredited representative and don't file USCIS petitions (H-1B, family-based I-130) or represent you before US authorities. All applications are submitted through the US Department of State's official channels, and the final decision rests entirely with the consular officer.";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "B1/B2 Visitor Visa",
    description: "Tourism, visiting family, or short business trips — the most common category for Pakistani applicants.",
    icon: Plane,
  },
  {
    title: "F1 Student Visa",
    description: "For applicants holding a Form I-20 from a SEVP-certified US school, after paying the SEVIS I-901 fee.",
    icon: GraduationCap,
  },
];

const outOfScope = [
  "H-1B and other employment-based petitions — filed by your US employer with USCIS, often subject to an annual lottery",
  "Family-based immigrant visas — require a US citizen or resident relative to file Form I-130 with USCIS",
  "Diversity Visa (DV) lottery filings — eligibility is set and revised by the US State Department directly",
];

const timelineRows = [
  { doc: "DS-160 + Fee Payment", authority: "US Department of State", turnaround: "Same day, online" },
  { doc: "Interview Appointment", authority: "Embassy Islamabad / Consulate", turnaround: "Varies by post and season" },
  { doc: "Decision", authority: "Consular Officer", turnaround: "Often given at the interview itself" },
  { doc: "Administrative Processing (if applied)", authority: "US Department of State", turnaround: "Weeks to months, unpredictable" },
];

const howWeHelp = [
  "Organizing a complete, consistent B1/B2 or F1 document file before your interview",
  "Reviewing your DS-160 details against your supporting documents for consistency",
  "Guidance on the kind of ties-to-Pakistan evidence that strengthens a file",
  "Preparation for what the interview at Embassy Islamabad or your consulate typically covers",
];

export default function UsaVisaFromPakistanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              USA Visa Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#071A2B" }}>
              USA Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A US visa application from Pakistan works differently from a UAE, UK, or Canada application — there&apos;s no formal attestation chain for most categories. Instead, it centers on the DS-160 form, a fee payment, and an in-person interview at the US Embassy in Islamabad or a consulate in Karachi, Lahore, or Peshawar. We prepare documentation for B1/B2 visitor and F1 student visa applicants.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-gray-700 leading-relaxed">
                A US visa from Pakistan is applied for online through the{" "}
                <a
                  href="https://travel.state.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: "#155EEF" }}
                >
                  US Department of State&apos;s
                </a>{" "}
                DS-160 system, followed by an in-person interview at{" "}
                <a
                  href="https://pk.usembassy.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: "#155EEF" }}
                >
                  the US Embassy in Islamabad
                </a>{" "}
                or a consulate, where a consular officer decides on the spot in most cases. We prepare documentation for B1/B2 and F1 applicants; we don&apos;t file H-1B, family-based, or Diversity Visa petitions, which require a US immigration attorney.
              </p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                <span>Get a Free USA Visa Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about USA visas (opens in a new tab)"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
              USA Visa Categories We Support
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                <h3 className="text-lg font-bold mb-2" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Out of scope note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border border-gray-100 shadow-sm"
            style={{ backgroundColor: "#EAF1FF" }}
          >
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#155EEF" }} aria-hidden />
              <h2 className="text-2xl font-bold" style={{ color: "#071A2B" }}>
                What&apos;s Outside Document-Preparation Scope
              </h2>
            </div>
            <ul className="space-y-2 mb-4">
              {outOfScope.map((item) => (
                <li key={item} className="text-gray-600 leading-relaxed pl-9">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We can help with document organization once you&apos;re already at the consular processing stage of one of these routes, but the petition-filing stage itself requires a US immigration attorney.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timelines + pricing */}
      <section className="py-20" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#071A2B" }}>
              Typical <span style={{ color: "#155EEF" }}>Process Timeline</span>
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
                  <TableHead className="whitespace-normal">Stage</TableHead>
                  <TableHead className="whitespace-normal">Handled By</TableHead>
                  <TableHead className="whitespace-normal">Typical Timeline*</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timelineRows.map((row) => (
                  <TableRow key={row.doc}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#071A2B" }}>
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
            *Based on the US Department of State&apos;s published process; actual wait times vary by post, season, and individual case. We confirm a realistic timeline once we review your situation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 max-w-4xl bg-white"
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: "#071A2B" }}>
              What determines your total cost
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The MRV visa application fee and, for F1 applicants, the SEVIS I-901 fee are fixed and set directly by the US government. Our service fee is separate and depends on how much document preparation and interview-readiness support your case needs. We confirm both before you commit to anything.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis about USA visa costs on WhatsApp (opens in a new tab)"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#071A2B" }}>
              How Travelaxis <span style={{ color: "#155EEF" }}>Helps</span>
            </h2>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#071A2B" }}>
              Frequently Asked <span style={{ color: "#155EEF" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {usaVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#071A2B" }}
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
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#071A2B" }}>
              Related <span style={{ color: "#155EEF" }}>Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/blog/usa-visa-from-pakistan", label: "Full USA Visa Guide (Deep Dive)" },
                { href: "/services/uk-visa-from-pakistan", label: "UK Visa from Pakistan" },
                { href: "/services/canada-visa-from-pakistan", label: "Canada Visa from Pakistan" },
                { href: "/services/australia-visa-from-pakistan", label: "Australia Visa from Pakistan" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition-shadow bg-white font-semibold"
                  style={{ color: "#071A2B" }}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your USA Visa Application</h2>
          <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
            Tell us your category — B1/B2 visitor or F1 student — and we&apos;ll map out exactly what your file needs before your interview.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Get a Free USA Visa Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about USA visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
