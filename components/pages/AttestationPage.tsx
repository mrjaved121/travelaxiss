"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Stamp,
  Users,
  Briefcase,
  ShieldCheck,
  FileCheck,
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
import { attestationFaqs } from "@/components/data/attestationFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. Attestation is issued by the relevant Pakistani and UAE government authorities; we do not control their processing times or approval decisions.";

const chainSteps = [
  {
    step: "Stage 1: HEC / IBCC verification in Pakistan",
    text: "University degrees are verified by the Higher Education Commission (HEC); matric and intermediate certificates go through IBCC instead. Other document types start with their own issuing authority — see \"Documents we handle\" below.",
  },
  {
    step: "Stage 2: MOFA attestation, Islamabad",
    text: "Once the origin-authority stamp is verified, Pakistan's Ministry of Foreign Affairs attests the document at federal level.",
  },
  {
    step: "Stage 3: UAE Embassy / Consulate attestation",
    text: "The UAE's diplomatic mission in Pakistan attests the document, confirming it is recognized for use in the UAE.",
  },
  {
    step: "Stage 4: MOFAIC attestation, UAE",
    text: "Once your document reaches the UAE, final attestation by the Ministry of Foreign Affairs & International Cooperation (MOFAIC) completes the chain — the document is now valid for employers, universities, and immigration in the UAE.",
  },
];

const documentTypes: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Educational Certificates",
    description: "Degrees and diplomas (HEC route) or matric/intermediate certificates (IBCC route).",
    icon: GraduationCap,
  },
  {
    title: "Marriage Certificates",
    description: "For UAE family and dependent visa sponsorship.",
    icon: Users,
  },
  {
    title: "Birth Certificates",
    description: "Commonly required alongside marriage certificates for family visas.",
    icon: FileCheck,
  },
  {
    title: "Experience & Employment Letters",
    description: "Attested via the relevant Chamber of Commerce & Industry.",
    icon: Briefcase,
  },
  {
    title: "Police Character Certificates",
    description: "Sometimes required for employment and long-term residency.",
    icon: ShieldCheck,
  },
  {
    title: "Other Personal & Commercial Documents",
    description: "Ask us if your document type isn't listed — most fit an existing chain.",
    icon: Stamp,
  },
];

const timelineRows = [
  { doc: "Degree / Diploma", authority: "HEC (universities) or IBCC (boards)", turnaround: "10–20 working days" },
  { doc: "Marriage Certificate", authority: "Union Council / NADRA", turnaround: "7–15 working days" },
  { doc: "Birth Certificate", authority: "Union Council / NADRA", turnaround: "7–15 working days" },
  { doc: "Experience Certificate", authority: "Chamber of Commerce & Industry", turnaround: "10–15 working days" },
];

const howWeHelp = [
  "A document checklist reviewed with you before you courier anything from Pakistan",
  "We coordinate directly with HEC/IBCC, MOFA, and the UAE Embassy on your behalf",
  "Status updates at each of the four stages",
  "One point of contact from Pakistan through to MOFAIC attestation in the UAE",
];

export default function AttestationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              UAE Attestation Services
            </p>
            <h1 className="page-title mb-6">
              UAE Document Attestation <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="text-lg text-[#667085] mb-6 leading-relaxed">
              UAE degree attestation, marriage certificate attestation, and experience letter attestation for Pakistani nationals all follow the same four-stage chain — HEC or IBCC, then MOFA Islamabad, then the UAE Embassy, then MOFAIC once your document reaches Dubai. We manage the process end to end and keep you updated at every stage.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                To use a Pakistani degree, marriage certificate, or experience letter in the UAE, it needs four stages of attestation: the relevant Pakistani issuing authority (HEC, IBCC, Union Council, or Chamber of Commerce) &rarr; MOFA Pakistan &rarr; UAE Embassy &rarr; MOFAIC in the UAE. Total time is usually a few weeks, depending on document type and city.
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
                <span>Get a Free Attestation Quote</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about attestation (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who needs this */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-8"
          >
            <h2 className="section-title mb-4">
              Who Needs UAE Attestation?
            </h2>
            <p className="lead mb-4">
              UAE authorities and employers only accept Pakistani documents once they&apos;ve completed the full attestation chain. This applies whether you&apos;re moving for work, sponsoring family, studying, or registering a business.
            </p>
            <p className="text-[#667085]">
              The same HEC/IBCC &rarr; MOFA stages are also the starting point for{" "}
              <Link href="/services/uk-visa-from-pakistan" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
                UK
              </Link>
              ,{" "}
              <Link href="/services/canada-visa-from-pakistan" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
                Canada
              </Link>
              , and{" "}
              <Link href="/services/australia-visa-from-pakistan" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
                Australia
              </Link>{" "}
              visa applications from Pakistan — only the final embassy stage differs by destination.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {[
              "UAE work visa applicants",
              "Family & dependent visa sponsors",
              "Students applying to UAE universities",
              "Business owners submitting Pakistani commercial documents",
            ].map((label) => (
              <span
                key={label}
                className="px-5 py-2 rounded-full font-semibold"
                style={{ backgroundColor: "#F5F8FF", color: "#155EEF" }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Attestation chain */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title mb-4">
              The 4-Stage Attestation <span style={{ color: "#155EEF" }}>Chain</span>
            </h2>
          </motion.div>
          <div className="space-y-4 max-w-4xl">
            {chainSteps.map((s, index) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 rounded-3xl p-6 shadow-sm bg-white"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="subsection-title mb-1">
                    {s.step}
                  </h3>
                  <p className="text-[#667085]">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents we handle */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
              Documents We Handle
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((item, index) => (
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

      {/* Timelines + pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="section-title mb-4">
              Typical <span style={{ color: "#155EEF" }}>Timelines</span>
            </h2>
            <p className="lead">
              Approximate turnaround for the first stage of the chain in Pakistan, before the document moves to MOFA, the UAE Embassy, and MOFAIC.
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
                  <TableHead className="whitespace-normal">Document Type</TableHead>
                  <TableHead className="whitespace-normal">Starting Authority</TableHead>
                  <TableHead className="whitespace-normal">Typical Turnaround*</TableHead>
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
            *Per stage in Pakistan; total time depends on document type, city, and each authority&apos;s current workload. We confirm a realistic end-to-end timeline once we review your documents.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 max-w-4xl"
            style={{ backgroundColor: "#F5F8FF" }}
          >
            <h3 className="subsection-title mb-3">
              What determines your total cost
            </h3>
            <p className="text-[#667085] leading-relaxed mb-4">
              Attestation cost is government and embassy fees — which vary by document type and change periodically — plus our service fee. Because government fees shift, we confirm current charges before you commit to anything.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis for current attestation charges on WhatsApp (opens in a new tab)"
            >
              <span>Ask for Current Charges</span>
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
              {attestationFaqs.map((faq, i) => (
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
                { href: "/services/visa-services", label: "UAE Visa Documentation & Consultancy" },
                { href: "/pakistan", label: "UAE Services for Clients in Pakistan" },
                { href: "/contact", label: "Contact Travelaxis" },
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
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>
            Start Your Attestation Today
          </h2>
          <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
            Send us your document details and we&apos;ll map out the exact chain, timeline, and charges for your case.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Get a Free Attestation Quote</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about attestation (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
