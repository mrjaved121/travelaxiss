"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Stamp,
  Briefcase,
  Plane,
  Heart,
  Building2,
  Moon,
  MessageCircle,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const guides: {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  link: string;
}[] = [
  {
    title: "UAE Document Attestation from Pakistan",
    category: "Attestation",
    description:
      "Degree, marriage, birth, and experience certificate attestation — the full HEC/IBCC → MOFA → UAE Embassy → MOFAIC chain, timelines, and charges.",
    icon: Stamp,
    link: "/services/attestation",
  },
  {
    title: "UAE Job Seeker Visa — Eligibility & Documents",
    category: "Work Visa",
    description:
      "Who qualifies for the Job Seeker entry permit, the full document checklist, and the Pakistan-specific attestation chain for your qualification tier.",
    icon: Briefcase,
    link: "/blog/job-seeker-visa-uae-documents-guide-2026",
  },
  {
    title: "Visiting the UAE for Business",
    category: "Visit Visa",
    description:
      "Which visa to use when visiting from Pakistan to scout opportunities or meet partners, and the documents that support a smooth application.",
    icon: Plane,
    link: "/blog/business-exploration-visa-uae-guide-2026",
  },
  {
    title: "UAE Family Visa Income Requirements",
    category: "Family Visa",
    description:
      "The minimum sponsor salary, required documents, and the Pakistan-specific attestation chain for marriage and birth certificates.",
    icon: Heart,
    link: "/blog/family-sponsorship-income-requirements-uae-2026",
  },
  {
    title: "Company Formation in the UAE",
    category: "Business Setup",
    description:
      "Cost, process, and documents for founders based in Pakistan setting up a company in Dubai or a UAE freezone.",
    icon: Building2,
    link: "/blog/company-formation-uae-2026",
  },
  {
    title: "Umrah Visa & Packages",
    category: "Pilgrimage Travel",
    description:
      "Visa processing, flight or bus transport, and hotel coordination near the Haram for pilgrims traveling from Pakistan via the UAE.",
    icon: Moon,
    link: "/services/umrah-services",
  },
];

const whyUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Clock,
    title: "Clear Timelines",
    description: "We tell you what each stage typically takes before you send us anything.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "One point of contact from Pakistan through to final approval in the UAE.",
  },
  {
    icon: Users,
    title: "Dubai-Based Team",
    description: "We coordinate directly with UAE authorities on your behalf.",
  },
];

export default function PakistanHubPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              For Clients in Pakistan
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#0F1B2D" }}>
              UAE Services for Clients <span style={{ color: "#1D63E0" }}>in Pakistan</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Travelaxis is a Dubai-based consultancy supporting Pakistani nationals with document attestation, UAE visa documentation, and business setup. Start with the guide below that matches your situation, or message us directly for anything not covered yet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides grid */}
      <section className="py-20 bg-white" aria-labelledby="pakistan-guides-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pakistan-guides-heading" className="sr-only">
            Guides and services for clients in Pakistan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <Link
                  href={guide.link}
                  className="absolute inset-0 z-10"
                  aria-label={`Read: ${guide.title}`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1D63E0" }} aria-hidden>
                      <guide.icon className="w-7 h-7" style={{ color: "#FFFFFF" }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "#EEF4FF", color: "#1D63E0" }}
                    >
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{guide.description}</p>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all group-hover:opacity-90"
                    style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                  >
                    <ArrowUpRight className="w-5 h-5" aria-hidden />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12">
            <Link href="/services" className="font-semibold hover:underline" style={{ color: "#1D63E0" }}>
              Browse our full range of UAE services
            </Link>
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20" style={{ backgroundColor: "#1D63E0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
              Why Clients in Pakistan Work With Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl p-6 md:p-8 text-center border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: "#FFFFFF" }}
                  aria-hidden
                >
                  <item.icon className="w-7 h-7" style={{ color: "#1D63E0" }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0F1B2D" }}>
              Don&apos;t See Your Situation Above?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Message us on WhatsApp and we&apos;ll tell you exactly what documents and steps apply to you.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
              aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-5 h-5" aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
