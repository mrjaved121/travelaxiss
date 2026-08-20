"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Stethoscope,
  IdCard,
  Stamp,
  CheckCircle,
  AlertTriangle,
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
import { uaeEmploymentVisaFaqs } from "@/components/data/uaeEmploymentVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not MOHRE, an employer, or a recruitment agency, and we do not source jobs, arrange sponsorship, or guarantee visa approval. All employment visas are issued through official UAE government channels, sponsored by a licensed employer.";

const steps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Work Permit / Labor Quota",
    description: "Your employer applies to MOHRE for government approval to employ you, confirming there's an available quota for the role.",
    icon: FileText,
  },
  {
    title: "Medical Fitness Test",
    description: "Once you're in the UAE, a mandatory blood test and chest X-ray confirm you're medically fit for residency.",
    icon: Stethoscope,
  },
  {
    title: "Emirates ID Application",
    description: "Your national ID card application is submitted, required for all UAE residents to access services.",
    icon: IdCard,
  },
  {
    title: "Visa Stamping",
    description: "The final residence visa is stamped in your passport, completing the process and making your status official.",
    icon: Stamp,
  },
];

const costRows = [
  ["Work Permit / Labor Card", "Government approval to employ a foreign worker", "Employer, by UAE labor law"],
  ["Medical Fitness Test", "Blood test and chest X-ray for residency clearance", "Employer, in most cases"],
  ["Emirates ID", "National ID card required for all UAE residents", "Employer, in most cases"],
  ["Health Insurance", "Mandatory medical cover under UAE law", "Employer, by law in Dubai and most emirates"],
  ["Visa Stamping", "Final residence visa stamp in your passport", "Employer, in most cases"],
];

const howWeHelp = [
  "A document checklist reviewed with you before anything is submitted",
  "Coordination on attestation where your role requires it",
  "Clear explanation of what your employer is legally responsible for paying",
  "Status updates through each stage, from work permit to final stamping",
];

export default function UaeEmploymentVisaPage() {
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
              UAE Employment &amp; <span style={{ color: "#155EEF" }}>Labour Visa</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              &quot;Employment visa&quot; and &quot;labour visa&quot; describe the same MOHRE-administered process, just used differently depending on the role — one term leans white-collar, the other blue-collar, but the government system behind both is identical. This guide covers the full process, who legally pays for what, and the age and requirement questions that come up most.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                A UAE employment or labour visa combines an MOHRE work permit with a residence visa, sponsored by your employer. The process runs through a work permit, medical fitness test, Emirates ID, and visa stamping. Under UAE law, the employer — not you — is legally responsible for these costs. We help prepare the documentation your employer's application needs.
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
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about UAE employment visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title mb-4">
              The Process, <span style={{ color: "#155EEF" }}>Step by Step</span>
            </h2>
            <p className="lead text-[#667085] max-w-3xl">
              Each stage below depends on the one before it — you can't apply for your Emirates ID before your medical test clears, and the medical test itself only happens once you're in the UAE on the entry permit generated by the work permit stage. Knowing the order helps you plan around it: most of the waiting happens between stages, not during them, so a realistic total timeline is really the sum of each stage's processing time plus your employer's own internal turnaround at each step.
            </p>
          </motion.div>
          <div className="space-y-4 max-w-4xl">
            {steps.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 rounded-2xl p-6 bg-white card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="flex-shrink-0 w-[46px] h-[46px] rounded-[11px] flex items-center justify-center font-bold"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <s.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <div>
                  <h3 className="subsection-title mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[#667085]">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who pays */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="section-title mb-4">
              Who Legally Pays for <span style={{ color: "#155EEF" }}>What</span>
            </h2>
            <p className="lead text-[#667085]">
              This is the single most common source of confusion — and exploitation by unlicensed agents.
            </p>
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
                  <TableHead className="whitespace-normal">Cost Component</TableHead>
                  <TableHead className="whitespace-normal">What It Covers</TableHead>
                  <TableHead className="whitespace-normal">Who Pays</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costRows.map((row) => (
                  <TableRow key={row[0]}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#1D2939" }}>
                      {row[0]}
                    </TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row[1]}</TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row[2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <div className="max-w-4xl rounded-3xl p-6 bg-white border-l-4" style={{ borderColor: "#D4183D" }}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D4183D" }} aria-hidden />
              <p className="text-[#667085] text-sm">
                Red flag: being asked to personally pay the labor permit fee, or being pressured to pay before your documents are verified. Costs you may legitimately cover yourself include your own travel, document attestation, and personal preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age & requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-3">
              Age Limits &amp; Requirements
            </h2>
            <p className="text-[#667085] leading-relaxed mb-4">
              Age limits mainly come up for certain blue-collar labour categories, and MOHRE reviews these requirements periodically. Older applicants can often still qualify, typically subject to medical fitness and the specific role in question — we don&apos;t assume a fixed cutoff applies to your case and confirm the current position before you plan around it. General requirements across most employment categories include a valid passport, a signed offer letter, and — for many skilled-category roles —{" "}
              <Link href="/services/attestation" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
                attested educational or experience certificates
              </Link>
              .
            </p>
            <p className="text-[#667085] leading-relaxed">
              Sponsorship also means your employer takes on formal responsibility for your residency while you're employed with them — it's what links your Emirates ID and visa status to that specific company. If your employment ends, whether by resignation, termination, or contract expiry, your visa status is directly affected and generally needs to be resolved within a defined window: transferred to a new sponsor, converted to another visa category if you're eligible, or your exit processed. Understanding this connection between sponsorship and status early avoids scrambling to figure it out at the point your employment actually changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">
              Documents You&apos;ll <span style={{ color: "#155EEF" }}>Need</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6 bg-white">
                <h3 className="subsection-title mb-3">From you</h3>
                <ul className="space-y-2">
                  {[
                    "Passport copy with at least 6 months' validity",
                    "Recent passport-size photographs",
                    "Attested educational or experience certificates, for many skilled-category roles",
                    "Your signed offer letter or employment contract",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#667085] text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-6 bg-white">
                <h3 className="subsection-title mb-3">From your employer</h3>
                <ul className="space-y-2">
                  {[
                    "Copy of the company's UAE trade license",
                    "Labor quota approval for the role",
                    "Proof of mandatory health insurance arrangement",
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

      {/* Common mistakes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">
              Common Mistakes
            </h2>
            <div className="space-y-3">
              {[
                "Paying visa costs that the employer should be covering",
                "Sending unattested certificates for a skilled-category role",
                "Not confirming whether the sponsor is mainland or free zone before accepting",
                "Assuming an age cutoff applies without checking the current position for your role",
              ].map((m) => (
                <div key={m} className="flex items-center gap-3 p-4 rounded-lg border-l-4" style={{ backgroundColor: "#F5F8FF", borderColor: "#D4183D" }}>
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: "#D4183D" }} aria-hidden />
                  <span className="text-[#667085] text-sm font-medium">{m}</span>
                </div>
              ))}
            </div>
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
                  <span className="text-lg text-[#667085]">{item}</span>
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
              {uaeEmploymentVisaFaqs.map((faq, i) => (
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
                { href: "/services/attestation", label: "UAE Document Attestation from Pakistan" },
                { href: "/services/uae-domestic-worker-visa", label: "UAE Domestic Worker Visa" },
                { href: "/services/visa-services", label: "UAE Visa Documentation & Consultancy" },
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
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Have a UAE Job Offer in Hand?</h2>
          <p className="text-white/90 mb-4 max-w-2xl mx-auto">
            Send us your offer letter and we&apos;ll map out exactly what your employer needs from you.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about UAE employment visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
