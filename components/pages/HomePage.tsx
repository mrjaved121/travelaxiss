"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Plane,
  Building2,
  IdCard,
  Stamp,
  ShieldCheck,
  FileText,
  MapPin,
  Compass,
  MessageCircle,
  Globe2,
  HeadphonesIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageFaqs } from "@/lib/data/faqs";
import { destinations } from "@/components/data/destinations";
import { blogPostSummaries } from "@/components/data/blogIndex";
import { trackEvent } from "@/lib/seo/analytics";

const WHATSAPP_NUMBER = "971589867555";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

const disclosure =
  "We are a documentation and consultancy service, not a government authority. We do not issue visas or licences and cannot guarantee an outcome — decisions are made by the relevant authority.";

/** Non-numeric, verifiable trust signals only — offices are real (see Footer / schema.ts). */
const trustStrip: { label: string; icon: LucideIcon }[] = [
  { label: "Dubai & Lahore offices", icon: MapPin },
  { label: "Clear, transparent process", icon: ShieldCheck },
  { label: "Document preparation", icon: FileText },
  { label: "Visa & business services", icon: Compass },
];

const visaAssistanceServices: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  {
    title: "Visit Visa",
    description: "Visit and tourist visa document preparation for the UAE and other popular destinations.",
    icon: Plane,
    href: "/visit-visa",
  },
  {
    title: "Study Visa",
    description: "Student visa document preparation for the UK, USA, Canada, Australia, and Germany.",
    icon: GraduationCap,
    href: "/services/study-visa",
  },
  {
    title: "UAE Residency Support",
    description: "Documentation for investor, family, visit, and renewal visa categories in the UAE.",
    icon: IdCard,
    href: "/services/visa-services",
  },
  {
    title: "Document Attestation",
    description: "Certificate attestation and legal document preparation for visa and job applications.",
    icon: Stamp,
    href: "/services/attestation",
  },
];

const businessSetupServices: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  {
    title: "Company Formation",
    description: "Mainland, free zone, and offshore company setup and licensing support.",
    icon: Building2,
    href: "/services/company-formation",
  },
  {
    title: "Free Zones",
    description: "Compare and set up in the UAE's major free zones — IFZA, DMCC, Meydan, and more.",
    icon: Globe2,
    href: "/free-zones",
  },
  {
    title: "Business Support Services",
    description: "Trademark registration, ISO certification, and corporate bank account support.",
    icon: HeadphonesIcon,
    href: "/services/business-support",
  },
  {
    title: "Government Services",
    description: "Approvals, Dubai Chamber services, and multi-authority coordination.",
    icon: FileText,
    href: "/services/government-services",
  },
];

const whyValues: { title: string; description: string }[] = [
  {
    title: "Clear guidance",
    description:
      "We confirm the exact requirements for your destination and situation — not a generic checklist.",
  },
  {
    title: "Organised application support",
    description:
      "Help preparing documents, financial evidence, and appointment bookings, step by step.",
  },
  {
    title: "Support in Dubai and Pakistan",
    description:
      "One point of contact from our Dubai and Lahore offices, from your first message to submission.",
  },
];

const processSteps: { number: string; title: string; description: string }[] = [
  {
    number: "01",
    title: "Choose your path",
    description: "Visa assistance or UAE business setup — pick what matches your plans.",
  },
  {
    number: "02",
    title: "Understand the requirements",
    description: "We confirm the documents and steps for your specific case.",
  },
  {
    number: "03",
    title: "Prepare your application",
    description: "We help you get every document ready and correctly organised.",
  },
  {
    number: "04",
    title: "Move forward with support",
    description:
      "Your application goes through the official channel, and we keep you updated.",
  },
];

const NEED_OPTIONS = [
  { label: "Visa assistance", services: ["Visit Visa", "Study Visa", "UAE Residency Support", "Document Attestation"] },
  { label: "UAE business setup", services: ["Company Formation", "Free Zones", "Business Support", "Not sure yet"] },
];

const guideHighlights = blogPostSummaries.slice(0, 3);

function QualificationForm() {
  const idPrefix = useId();
  const [needIndex, setNeedIndex] = useState(0);
  const [service, setService] = useState(NEED_OPTIONS[0].services[0]);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const need = NEED_OPTIONS[needIndex];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like help with ${need.label.toLowerCase()}.`,
      `Service: ${service}`,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClassName =
    "w-full rounded-xl border border-[#E4E7EC] bg-white px-4 py-3 text-[#1D2939] placeholder:text-[#667085] focus:outline-none focus:ring-2 transition-shadow";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm space-y-5" style={{ border: "1px solid var(--card-line)" }}>
      <div>
        <span className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>I&apos;m looking for</span>
        <div className="grid grid-cols-2 gap-3">
          {NEED_OPTIONS.map((option, index) => (
            <button
              key={option.label}
              type="button"
              onClick={() => {
                setNeedIndex(index);
                setService(option.services[0]);
              }}
              className="px-4 py-3 rounded-xl text-sm font-semibold transition-all"
              style={
                needIndex === index
                  ? { backgroundColor: "#155EEF", color: "#FFFFFF" }
                  : { backgroundColor: "#F5F8FF", color: "#1D2939", border: "1px solid var(--card-line)" }
              }
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-service`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
          Service
        </label>
        <select
          id={`${idPrefix}-service`}
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClassName}
        >
          {need.services.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-whatsapp`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
            WhatsApp number
          </label>
          <input
            id={`${idPrefix}-whatsapp`}
            type="tel"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+92…"
            className={fieldClassName}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all hover:opacity-90"
        style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
      >
        <span>Check Requirements</span>
        <ArrowRight className="w-5 h-5" aria-hidden />
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F8FF 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Travelaxis</p>
            <h1 id="hero-heading" className="hero-title mb-6">
              Clear support for your{" "}
              <span style={{ color: "#155EEF" }}>next application</span>
            </h1>
            <p className="lead mb-8 max-w-2xl mx-auto">
              Explore visa application assistance, document preparation, and UAE business setup
              support from Travelaxis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="#visa-assistance" className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary" style={{ color: "#FFFFFF" }}>
                Check Requirements
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a href="#business-setup" className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white" style={{ borderColor: "#E4E7EC", color: "#1D2939" }}>
                Discuss My Business Setup
              </a>
            </div>
            <p className="text-sm text-[#667085] leading-relaxed max-w-2xl mx-auto border-l-4 pl-4 text-left" style={{ borderColor: "#155EEF" }}>
              {disclosure}
            </p>
          </motion.div>
        </div>

        {/* Two-path selector */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid sm:grid-cols-2 gap-6">
            <a href="#visa-assistance" className="block rounded-3xl p-8 bg-white card-hover" style={{ border: "1px solid var(--card-line)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--card-icon-bg)" }} aria-hidden>
                <Plane className="w-6 h-6" style={{ color: "var(--card-icon-fg)" }} />
              </div>
              <h2 className="subsection-title mb-2">I need visa assistance</h2>
              <p className="text-sm text-[#667085]">Visit visa, study visa, UAE residency, document attestation.</p>
            </a>
            <a href="#business-setup" className="block rounded-3xl p-8 bg-white card-hover" style={{ border: "1px solid var(--card-line)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--card-icon-bg)" }} aria-hidden>
                <Building2 className="w-6 h-6" style={{ color: "var(--card-icon-fg)" }} />
              </div>
              <h2 className="subsection-title mb-2">I want to set up a UAE business</h2>
              <p className="text-sm text-[#667085]">Mainland, free zone, offshore, and licensing support.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section
        aria-label="What Travelaxis offers"
        className="border-y"
        style={{ backgroundColor: "#F5F8FF", borderColor: "#E4E7EC" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 list-none p-0 m-0">
            {trustStrip.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <item.icon
                  className="w-[18px] h-[18px] shrink-0"
                  style={{ color: "#155EEF" }}
                  aria-hidden
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#1D2939" }}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visa Assistance */}
      <section
        id="visa-assistance"
        aria-labelledby="visa-assistance-heading"
        className="py-20 md:py-28 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12 md:mb-14"
          >
            <p className="eyebrow mb-3">Path 1</p>
            <h2 id="visa-assistance-heading" className="section-title mb-4">
              Visa Assistance
            </h2>
            <p className="lead">
              Document preparation and application support for visit, study, UAE residency, and
              attestation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaAssistanceServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="relative group h-full flex flex-col rounded-2xl bg-white p-6 transition-all duration-200 hover:-translate-y-1 card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <Link
                  href={service.href}
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`Explore ${service.title}`}
                />
                <div
                  className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                  aria-hidden
                >
                  <service.icon
                    className="w-[22px] h-[22px]"
                    style={{ color: "var(--card-icon-fg)" }}
                  />
                </div>
                <h3 className="subsection-title leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-[0.9375rem] text-[#667085] leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                  style={{ color: "#155EEF" }}
                >
                  Explore
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Setup */}
      <section
        id="business-setup"
        aria-labelledby="business-setup-heading"
        className="py-20 md:py-28 border-t scroll-mt-24"
        style={{ backgroundColor: "#F5F8FF", borderColor: "#E4E7EC" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12 md:mb-14"
          >
            <p className="eyebrow mb-3">Path 2</p>
            <h2 id="business-setup-heading" className="section-title mb-4">
              UAE Business Setup
            </h2>
            <p className="lead">
              Company formation, free zone setup, and ongoing business support from our Dubai
              office.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSetupServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="relative group h-full flex flex-col rounded-2xl bg-white p-6 transition-all duration-200 hover:-translate-y-1 card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <Link
                  href={service.href}
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`Explore ${service.title}`}
                />
                <div
                  className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                  aria-hidden
                >
                  <service.icon
                    className="w-[22px] h-[22px]"
                    style={{ color: "var(--card-icon-fg)" }}
                  />
                </div>
                <h3 className="subsection-title leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-[0.9375rem] text-[#667085] leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                  style={{ color: "#155EEF" }}
                >
                  Explore
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section
        aria-labelledby="destinations-heading"
        className="py-20 md:py-24 border-t bg-white"
        style={{ borderColor: "#E4E7EC" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <p className="eyebrow mb-3">Popular destinations</p>
            <h2 id="destinations-heading" className="section-title mb-4">
              Where our clients are heading
            </h2>
            <p className="lead">
              Visa document support for the destinations we are asked about most.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {destinations.map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white transition-all hover:-translate-y-0.5 hover:shadow-md card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <span
                  className="font-semibold text-[0.9375rem]"
                  style={{ color: "#1D2939" }}
                >
                  {item.name}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#155EEF" }}
                  aria-hidden
                />
              </Link>
            ))}
          </div>

          <p className="mt-8">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 font-semibold"
              style={{ color: "#155EEF" }}
            >
              Explore all destinations
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* Why Travelaxis */}
      <section
        aria-labelledby="why-heading"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F5F8FF" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">Why Travelaxis</p>
            <h2 id="why-heading" className="section-title mb-4">
              A calmer way through the paperwork
            </h2>
            <p className="lead">
              We are not a government office and we do not decide applications.
              We help you prepare a complete, well-organised application and
              understand each step before you take it.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="space-y-4 list-none p-0 m-0"
          >
            {whyValues.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl bg-white p-6"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <h3 className="h4-title mb-1.5">{value.title}</h3>
                <p className="text-[0.9375rem] text-[#667085] leading-relaxed">
                  {value.description}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Process */}
      <section
        aria-labelledby="process-heading"
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12 md:mb-14"
          >
            <p className="eyebrow mb-3">How it works</p>
            <h2 id="process-heading" className="section-title">
              A simple, four-step process
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{
                top: "21px",
                height: "2px",
                backgroundColor: "rgba(21, 94, 239, 0.2)",
              }}
              aria-hidden
            />
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative"
              >
                <div
                  className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center mb-5 bg-white"
                  style={{ border: "2px solid #155EEF" }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#155EEF" }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="h4-title mb-2">{step.title}</h3>
                <p className="text-[0.9375rem] text-[#667085] leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Short qualification form */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="eyebrow mb-3">Get started</p>
            <h2 className="section-title mb-4">Tell Us What You Need</h2>
            <p className="text-[#667085]">
              A couple of questions, then we&apos;ll take it from there on WhatsApp.
            </p>
          </motion.div>
          <QualificationForm />
        </div>
      </section>

      {/* Useful guides */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <p className="eyebrow mb-3">Resources</p>
            <h2 className="section-title mb-4">Useful Guides</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {guideHighlights.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block rounded-2xl p-6 bg-white card-hover h-full"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                  {post.category}
                </p>
                <h3 className="subsection-title mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-[#667085] line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-semibold"
              style={{ color: "#155EEF" }}
            >
              Browse all guides
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#F5F8FF" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="eyebrow mb-3">FAQ</p>
            <h2 id="faq-heading" className="section-title">
              Frequently asked questions
            </h2>
          </motion.div>
          <div className="rounded-3xl px-4 md:px-8 py-2 shadow-sm border bg-white" style={{ borderColor: "#E4E7EC" }}>
            <Accordion type="single" collapsible className="w-full">
              {homepageFaqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
                  className="border-[#E4E7EC]"
                >
                  <AccordionTrigger
                    className="text-left text-base md:text-lg font-bold py-5 hover:no-underline"
                    style={{ color: "#1D2939" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#667085] text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <p className="mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 font-semibold"
              style={{ color: "#155EEF" }}
            >
              See all frequently asked questions
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-[22px] px-6 py-12 md:px-12 md:py-14 text-center shadow-sm"
            style={{ border: "1px solid #E4E7EC", backgroundColor: "#F5F8FF" }}
          >
            <span
              className="block w-10 h-1 rounded-full mx-auto mb-6"
              style={{ backgroundColor: "#155EEF" }}
              aria-hidden
            />
            <p className="eyebrow mb-3">Travelaxis Support</p>
            <h2 id="cta-heading" className="section-title mb-4">
              Not sure where to begin?
            </h2>
            <p className="lead max-w-md mx-auto mb-9">
              Choose your path above, or message us directly and we&apos;ll point you the right way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#visa-assistance" className="btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary transition-all hover:bg-primary-hover shadow-sm hover:shadow-md" style={{ color: "#FFFFFF" }}>
                Check Requirements
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { page: "homepage_final_cta" })}
                className="btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white transition-colors hover:bg-[#F5F8FF]"
                style={{ color: "#1D2939", border: "1px solid #E4E7EC" }}
                aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
