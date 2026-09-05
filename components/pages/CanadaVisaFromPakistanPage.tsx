"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Plane,
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
import { canadaVisaFaqs } from "@/components/data/canadaVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only, for study permits and visit visas. We are not a CICC-licensed Canadian immigration consultant and do not file Express Entry, Provincial Nominee, or other regulated permanent-residence applications. All applications are submitted through IRCC's official channels, subject to their rules and approvals.";

const routeCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  cta: string;
}[] = [
  {
    title: "Visit Visa",
    description: "Tourist, family-visit, and business-visit applications, with a clear document checklist.",
    icon: Plane,
    href: "/visit-visa/canada",
    cta: "See Canada Visit Visa requirements",
  },
  {
    title: "Study Permit",
    description: "Documentation for students admitted to a Designated Learning Institution (DLI) in Canada.",
    icon: GraduationCap,
    href: "/study-visa/canada",
    cta: "See Canada Study Permit requirements",
  },
];

const timelineRows = [
  { doc: "Visit Visa", authority: "IRCC", turnaround: "Often 3–6 weeks" },
  { doc: "Study Permit", authority: "IRCC, via your DLI acceptance", turnaround: "4–12 weeks, varies by intake" },
];

const howWeHelp = [
  "A document checklist reviewed with you before you submit anything",
  "Help organizing proof of funds and acceptance letters",
  "Coordination on attestation where your documents need it first",
  "Biometric appointment scheduling support in Pakistan",
];


export default function CanadaVisaFromPakistanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              Canada Visa Documentation
            </p>
            <h1 className="page-title mb-6">
              Canada Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              A Canada visa application from Pakistan starts with the right documents submitted correctly through IRCC. Pick your route below — Visit or Study — for a dedicated document checklist and application support.
            </p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#routes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                <span>Choose My Route</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about Canada visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Route cards */}
      <section id="routes" className="py-20 scroll-mt-24" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
              Which Canada Visa Do You Need?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {routeCards.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 md:p-8 border border-white/10 block transition-colors hover:bg-white/[0.08]"
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
                <p className="text-sm text-white/75 leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                  {item.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </span>
              </motion.a>
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
            className="rounded-3xl p-8 border border-[#E4E7EC] shadow-sm"
            style={{ backgroundColor: "#F5F8FF" }}
          >
            <h3 className="subsection-title mb-3">
              Some Canada Applications Need Attested Documents Too
            </h3>
            <p className="text-[#667085] leading-relaxed mb-4">
              Some study permit applications may require attested educational certificates. Where they do, the{" "}
              <Link href="/services/attestation" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
                same HEC/IBCC &rarr; MOFA &rarr; Embassy attestation chain
              </Link>{" "}
              applies as with UAE documents — we can run both processes for you in parallel.
            </p>
            <Link
              href="/services/attestation"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "#155EEF" }}
            >
              <span>See how document attestation from Pakistan works</span>
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Timelines + pricing */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="section-title mb-4">
              Compare <span style={{ color: "#155EEF" }}>Timelines by Route</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E4E7EC] shadow-sm mb-4 max-w-4xl overflow-hidden bg-white"
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
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#1D2939" }}>
                      {row.doc}
                    </TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row.authority}</TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row.turnaround}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <p className="text-sm text-[#667085] max-w-4xl mb-12">
            *IRCC-published guide times; actual decisions vary by visa office volume and document completeness. We confirm a realistic timeline once we review your case.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 max-w-4xl bg-white"
          >
            <h3 className="subsection-title mb-3">
              What determines your total cost
            </h3>
            <p className="text-[#667085] leading-relaxed mb-4">
              IRCC government fees are fixed and set directly by Canadian authorities, varying by permit type. Our service fee is separate and depends on how much document preparation your case needs. We confirm both before you commit to anything.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis about Canada visa costs on WhatsApp (opens in a new tab)"
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
              {canadaVisaFaqs.map((faq, i) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/visit-visa/canada", label: "Canada Visit Visa" },
                { href: "/study-visa/canada", label: "Canada Study Permit" },
                { href: "/services/attestation", label: "UAE Document Attestation from Pakistan" },
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
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Start Your Canada Visa Application</h2>
          <p className="lead mb-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Tell us your category — study or visit — and we&apos;ll map out exactly what you need.
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
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about Canada visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
