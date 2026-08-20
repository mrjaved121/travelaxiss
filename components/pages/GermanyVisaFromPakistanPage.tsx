"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Search,
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
import { germanyVisaFaqs } from "@/components/data/germanyVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not the German Federal Foreign Office, a German employer, or a recruitment agency, and we do not arrange job offers, sponsorship, or guarantee visa approval. All applications are submitted through the German Mission's official channels, subject to their rules and approvals.";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "EU Blue Card",
    description: "Document preparation for university graduates with a qualifying job offer meeting Germany's salary threshold.",
    icon: Briefcase,
  },
  {
    title: "Job Seeker Visa",
    description: "Documentation support for qualified professionals travelling to Germany to search for work in person.",
    icon: Search,
  },
  {
    title: "Student Visa",
    description: "Documentation for applicants admitted to a German university or an accredited Ausbildung (vocational training) program.",
    icon: GraduationCap,
  },
  {
    title: "Family Reunification",
    description: "Documentation for joining a spouse, partner, or family member already resident in Germany.",
    icon: Heart,
  },
];

const howWeHelp = [
  "A document checklist reviewed with you before you submit anything",
  "Help preparing academic, employment, and financial supporting documents",
  "Coordination on attestation where your documents need it first",
  "Appointment scheduling support at your local visa application centre",
];

export default function GermanyVisaFromPakistanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Germany Visa Documentation</p>
            <h1 className="mb-6" style={{ color: "#071A2B" }}>
              Germany Visa <span style={{ color: "#155EEF" }}>from Pakistan</span>
            </h1>
            <p className="lead mb-6">
              Whether you have a German job offer, a university or Ausbildung place, a family
              member to join, or you&apos;re exploring the Job Seeker Visa, a Germany
              application from Pakistan comes down to complete, correctly prepared documents
              submitted through the German Mission&apos;s official process. We handle the
              paperwork so you don&apos;t have to figure it out alone.
            </p>
            <div className="rounded-2xl p-6 mb-8 card-hover" style={{ borderLeft: "4px solid #155EEF", backgroundColor: "#FFFFFF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-gray-700 leading-relaxed">
                A Germany visa from Pakistan is applied for through the German Mission&apos;s
                official visa process, typically via an authorized visa application centre in
                Pakistan. Requirements depend on category — EU Blue Card, Job Seeker, Student,
                Ausbildung, or Family Reunification — but all need a valid passport,
                category-specific supporting documents, and often attested academic or civil
                certificates. We don&apos;t arrange job offers or university admission; we
                prepare the documentation for an application you already have grounds to make.
              </p>
            </div>
            <p className="text-note border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consultation"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                <span>Get a Free Germany Visa Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about Germany visas (opens in a new tab)"
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
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#FFFFFF" }}>
              Germany Pathways We Support
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Attestation note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 card-hover"
            style={{ backgroundColor: "#EAF1FF" }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#071A2B" }}>
              Germany Applications Often Need Attested Documents
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Student, Ausbildung, and some work-category applications commonly require attested
              academic or civil certificates. Where they do, the{" "}
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

      {/* How we help */}
      <section className="py-20" style={{ backgroundColor: "#EAF1FF" }}>
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
      <section className="py-20 bg-white">
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
          <div className="rounded-2xl px-4 md:px-8 py-2 card-hover" style={{ backgroundColor: "#EAF1FF" }}>
            <Accordion type="single" collapsible className="w-full">
              {germanyVisaFaqs.map((faq, i) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/services/attestation", label: "UAE Document Attestation from Pakistan" },
                { href: "/services/international-visas", label: "International Visa Documentation" },
                { href: "/destinations", label: "Explore All Destinations" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl p-4 text-center card-hover bg-white font-semibold"
                  style={{ color: "#071A2B", border: "1px solid var(--card-line)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#071A2B" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <div className="w-16 h-[3px] mx-auto mb-8" style={{ backgroundColor: "#C9A45C" }} aria-hidden />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Germany Application</h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto">
            Tell us your pathway — Blue Card, Job Seeker, Student, Ausbildung, or Family — and
            we&apos;ll map out exactly what you need.
          </p>
          <p className="text-sm text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/consultation"
              className="btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-[#071A2B]"
            >
              <span>Get a Free Germany Visa Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about Germany visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
