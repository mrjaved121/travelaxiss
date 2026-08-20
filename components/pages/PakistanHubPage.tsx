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
  Landmark,
  Snowflake,
  Sun,
  MessageCircle,
  Clock,
  Users,
  Wallet,
  GraduationCap,
  Flag,
  Compass,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import GuideCard from "@/components/GuideCard";

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
    title: "UAE Student Visa from Pakistan",
    category: "Student Visa",
    description:
      "University sponsorship, IBCC/HEC attestation of your certificates, required documents, and what happens after graduation.",
    icon: GraduationCap,
    link: "/blog/uae-student-visa-from-pakistan",
  },
  {
    title: "UAE Job Seeker Visa — Eligibility & Documents",
    category: "Work Visa",
    description:
      "Who qualifies for the Job Seeker entry permit, the full document checklist, and the Pakistan-specific attestation chain for your qualification tier.",
    icon: Briefcase,
    link: "/blog/job-seeker-visa-from-pakistan",
  },
  {
    title: "UAE Work Visa Documents Checklist",
    category: "Work Visa",
    description:
      "Everything Pakistani applicants need for an employer-sponsored work visa: GAMCA medical, BE&OE registration, and attestation by job category.",
    icon: Briefcase,
    link: "/blog/uae-work-visa-documents-checklist",
  },
  {
    title: "Dubai Visit Visa from Pakistan",
    category: "Visit Visa",
    description:
      "30/60/90-day visit visa durations, sponsor routes, documents, and the solvency proof that gets Pakistani applications approved.",
    icon: Plane,
    link: "/blog/dubai-visit-visa-from-pakistan",
  },
  {
    title: "UAE Family Visa from Pakistan",
    category: "Family Visa",
    description:
      "The minimum sponsor salary, required documents, and the Pakistan-specific attestation chain for marriage and birth certificates.",
    icon: Heart,
    link: "/blog/uae-family-visa-from-pakistan",
  },
  {
    title: "Start a Business in Dubai from Pakistan",
    category: "Business Setup",
    description:
      "Mainland vs freezone, power of attorney signing, State Bank remittance rules, and real setup costs for Pakistani founders.",
    icon: Building2,
    link: "/blog/start-business-in-dubai-from-pakistan",
  },
  {
    title: "Dubai Work Visa Price from Pakistan",
    category: "Work Visa",
    description:
      "What a legitimate work visa actually costs, who's supposed to pay for what, and the overcharging patterns to watch for.",
    icon: Wallet,
    link: "/blog/dubai-work-visa-price-from-pakistan",
  },
  {
    title: "Umrah Visa & Packages",
    category: "Pilgrimage Travel",
    description:
      "Visa processing, flight or bus transport, and hotel coordination near the Haram for pilgrims traveling from Pakistan via the UAE.",
    icon: Moon,
    link: "/services/umrah-services",
  },
  {
    title: "UK Visa from Pakistan",
    category: "UK Visas",
    description:
      "Skilled Worker, Student, Visit, and Family/Spouse visa documentation, submitted through UKVI's official channels.",
    icon: Landmark,
    link: "/services/uk-visa-from-pakistan",
  },
  {
    title: "Canada Visa from Pakistan",
    category: "Canada Visas",
    description:
      "Study permit, work permit, visit visa, and spouse open work permit documentation, submitted through IRCC.",
    icon: Snowflake,
    link: "/services/canada-visa-from-pakistan",
  },
  {
    title: "Australia Visa from Pakistan",
    category: "Australia Visas",
    description:
      "Visitor, Student, and Partner/Family visa documentation, submitted through the Department of Home Affairs.",
    icon: Sun,
    link: "/services/australia-visa-from-pakistan",
  },
  {
    title: "USA Visa from Pakistan",
    category: "USA Visas",
    description:
      "DS-160, the Embassy Islamabad interview, and B1/B2 visitor or F1 student documentation — what's in scope and what needs a US attorney.",
    icon: Flag,
    link: "/services/usa-visa-from-pakistan",
  },
  {
    title: "Germany Visa from Pakistan",
    category: "Germany Visas",
    description:
      "EU Blue Card, Job Seeker, Student/Ausbildung, and Family Reunification documentation, submitted through the German Mission's official process.",
    icon: Compass,
    link: "/services/germany-visa-from-pakistan",
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
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              For Clients in Pakistan
            </p>
            <h1 className="page-title mb-6">
              Visa &amp; Business Services for Clients <span style={{ color: "#155EEF" }}>in Pakistan</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Travelaxis supports Pakistani nationals with document attestation, UAE visa documentation, business setup, and visa documentation for the UK, Canada, and Australia — with offices in Dubai and Lahore. Start with the guide below that matches your situation, or message us directly for anything not covered yet.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {guides.map((guide, index) => (
              <GuideCard
                key={guide.title}
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
                href={guide.link}
                badge={guide.category}
                delay={index * 0.08}
              />
            ))}
          </div>
          <p className="text-center mt-12">
            <Link href="/services" className="font-semibold hover:underline" style={{ color: "#155EEF" }}>
              Browse our full range of UAE services
            </Link>
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
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
                  <item.icon className="w-7 h-7" style={{ color: "#155EEF" }} />
                </div>
                <h3 className="subsection-title mb-3" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title mb-4">
              Don&apos;t See Your Situation Above?
            </h2>
            <p className="lead text-[#667085] mb-8">
              Message us on WhatsApp and we&apos;ll tell you exactly what documents and steps apply to you.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
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
