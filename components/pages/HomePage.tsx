"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Clock,
  FileText,
  Globe2,
  Stamp,
  Award,
  Headset,
  ClipboardList,
  FileCheck2,
  Search,
  Send,
  ShieldCheck,
  MessageCircle,
  Check,
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

const WHATSAPP_HREF = "https://wa.me/971589867555";

const trustStrip: { label: string; icon: LucideIcon }[] = [
  { label: "Expert Guidance", icon: Award },
  { label: "Transparent Process", icon: ShieldCheck },
  { label: "Document Support", icon: FileText },
  { label: "Fast Response", icon: Headset },
];

const popularVisaServices: {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}[] = [
  {
    title: "UAE Visit Visa",
    description: "Single and multiple-entry visit visa documentation for tourism, family visits, and short business trips.",
    icon: Plane,
    link: "/services/uae-visit-visa",
  },
  {
    title: "Visa Extension & Renewal",
    description: "Extending a visit visa, renewing a residence visa, or handling a status change — clearly explained.",
    icon: Clock,
    link: "/services/uae-visa-extension-renewal",
  },
  {
    title: "UAE Visa Documentation",
    description: "Investor, employment, family, and visit visa documentation, renewals, and cancellations.",
    icon: FileText,
    link: "/services/visa-services",
  },
  {
    title: "International Visa Documentation",
    description: "Documentation support for the UK, USA, Canada, Australia, Schengen Europe, and beyond.",
    icon: Globe2,
    link: "/services/international-visas",
  },
  {
    title: "UAE Document Attestation",
    description: "Degree, marriage, and experience certificate attestation through the full official chain.",
    icon: Stamp,
    link: "/services/attestation",
  },
];

const whyBenefits: { title: string; description: string }[] = [
  {
    title: "Clear Documentation",
    description: "Every document checklist confirmed against your specific case, not a generic template.",
  },
  {
    title: "Transparent Process",
    description: "You know what's needed, what it costs, and what happens next at every stage.",
  },
  {
    title: "Dedicated Assistance",
    description: "One point of contact from your first message through to submission.",
  },
  {
    title: "Practical Application Support",
    description: "Hands-on help preparing and organizing your application, not just advice.",
  },
];

const howItWorks: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Tell Us Your Visa Need",
    description: "Share your destination and visa type so we understand your situation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Check Your Requirements",
    description: "We confirm the current documents and requirements for your case.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Prepare Your Documents",
    description: "We help you prepare and organize everything accurately.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Submit & Track",
    description: "Your application moves through the correct official channel, with updates along the way.",
    icon: Send,
  },
];

const destinationCodes: Record<string, string> = {
  uae: "AE",
  usa: "US",
  canada: "CA",
  uk: "UK",
  australia: "AU",
  germany: "DE",
};

const pakistanDestinations: { title: string; description: string; link: string }[] = [
  {
    title: "UAE Document Attestation",
    description: "HEC/IBCC, MOFA, UAE Embassy, and MOFAIC chain for degree, marriage, and experience certificates.",
    link: "/services/attestation",
  },
  {
    title: "UK Visa from Pakistan",
    description: "Skilled Worker, Student, Visit, and Family/Spouse visa documentation.",
    link: "/services/uk-visa-from-pakistan",
  },
  {
    title: "USA Visa from Pakistan",
    description: "B1/B2 visitor and F1 student visa documentation, DS-160 review, and interview prep.",
    link: "/services/usa-visa-from-pakistan",
  },
  {
    title: "Canada Visa from Pakistan",
    description: "Study permit, work permit, visit visa, and spouse open work permit documentation.",
    link: "/services/canada-visa-from-pakistan",
  },
  {
    title: "Australia Visa from Pakistan",
    description: "Visitor, Student, and Partner/Family visa documentation.",
    link: "/services/australia-visa-from-pakistan",
  },
  {
    title: "Germany Visa from Pakistan",
    description: "EU Blue Card, Job Seeker, Student/Ausbildung, and Family Reunification documentation.",
    link: "/services/germany-visa-from-pakistan",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F8FF 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <p className="eyebrow mb-4">UAE Visa Services in Dubai</p>
            <h1 className="hero-title mb-6">
              UAE Visa Services, <span style={{ color: "#155EEF" }}>Made Simple.</span>
            </h1>
            <p className="lead mb-8 max-w-[540px]" style={{ color: "#1D2939" }}>
              From visit visas and multiple-entry visas to visa documentation and application
              support, Travelaxis helps you prepare the right documents and navigate the process
              with clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/visa-finder"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                Check Visa Requirements
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {["Clear requirements", "Transparent process", "Application support"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#1D2939" }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Not a motion.div: this holds the LCP image, and an initial-opacity-0
              mount animation delays when Chrome counts it as painted until Motion
              hydrates and runs the transition. */}
          <div className="relative h-80 md:h-[36rem]">
            <div
              className="absolute -top-8 -right-8 w-56 h-56 rounded-full"
              style={{ backgroundColor: "rgba(21, 94, 239,0.12)" }}
              aria-hidden
            />
            <div
              className="absolute inset-x-4 bottom-6 top-16 md:top-20 rounded-[2.5rem]"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--card-line)" }}
              aria-hidden
            />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="UAE visa documentation and application support in Dubai"
              width={640}
              height={427}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-contain scale-110"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-9" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x-2" style={{ borderColor: "#E4E7EC" }}>
            {trustStrip.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3 py-3.5 md:py-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <item.icon className="w-[18px] h-[18px]" style={{ color: "#155EEF" }} aria-hidden />
                </div>
                <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Visa Services */}
      <section className="pt-20 md:pt-28 pb-[72px] md:pb-[104px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-4">Visa Services That Fit Your Journey</h2>
            <p className="text-[#667085]">
              Clear documentation and practical support for common UAE and international visa
              needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularVisaServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="relative group rounded-[24px] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 card-hover"
                style={{ border: "1.5px solid var(--card-line)" }}
              >
                <Link
                  href={service.link}
                  className="absolute inset-0 z-10 rounded-[24px]"
                  aria-label={`Explore ${service.title}`}
                />
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-3.5"
                  style={{ backgroundColor: "#F5F8FF" }}
                >
                  <service.icon className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                </div>
                <h3 className="subsection-title mb-2" style={{ fontWeight: 700 }}>{service.title}</h3>
                <p className="text-[#667085] text-[0.9375rem] leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold pt-3 border-t group-hover:underline" style={{ color: "#155EEF", borderColor: "var(--card-line)" }}>
                  Explore
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-[#667085] mt-10">
            Also need business setup or company formation?{" "}
            <Link href="/services/company-formation" className="font-semibold" style={{ color: "#155EEF" }}>
              Business Setup Services
              <ArrowRight className="w-3.5 h-3.5 inline ml-1" aria-hidden />
            </Link>
          </p>
        </div>
      </section>

      {/* Why Travelaxis */}
      <section className="pt-[72px] md:pt-[104px] pb-20 md:pb-28" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-72 md:h-96 order-2 lg:order-1"
          >
            <div
              className="absolute inset-0 rounded-[3rem] flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--card-line)",
                backgroundImage: "radial-gradient(rgba(21,94,239,0.14) 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            >
              <div className="relative w-44 h-44 md:w-52 md:h-52">
                <div
                  className="absolute top-0 left-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}
                >
                  <FileCheck2 className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#155EEF" }} />
                </div>
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "#155EEF" }}
                >
                  <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--card-line)" }}
                >
                  <Stamp className="w-7 h-7" style={{ color: "#155EEF" }} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-w-0 order-1 lg:order-2"
          >
            <p className="eyebrow mb-3">Why Travelaxis</p>
            <h2 className="section-title mb-6">
              Clear Guidance. Complete Documentation. Less Confusion.
            </h2>
            <p className="text-[#667085] mb-8">
              Avoid mistakes and delays with professional guidance at every stage of your visa
              application.
            </p>
            <div className="space-y-4">
              {whyBenefits.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                  <div>
                    <p className="text-base font-bold mb-0.5" style={{ color: "#1D2939" }}>
                      {item.title}
                    </p>
                    <p className="text-[0.9375rem] text-[#667085] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pt-20 md:pt-28 pb-[72px] md:pb-[104px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">A Simple Visa Process</h2>
          </motion.div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: "108px", height: "2px", backgroundColor: "rgba(21,94,239,0.25)" }}
              aria-hidden
            />
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-[24px] bg-white p-7 card-hover text-center"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <step.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <p className="text-4xl font-bold mb-3 tracking-tight" style={{ color: "#155EEF" }}>
                  {step.number}
                </p>
                <h3 className="subsection-title mb-2">{step.title}</h3>
                <p className="text-[0.9375rem] text-[#667085] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="pt-[72px] md:pt-[104px] pb-20 md:pb-28" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-4">Visa Services for Popular Destinations</h2>
            <p className="text-[#667085]">
              Documentation and consultancy support for the destinations our clients ask about
              most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  href={destination.href}
                  className="group relative flex flex-col justify-between h-full rounded-[24px] bg-white px-6 py-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    borderTop: "3px solid #155EEF",
                    borderRight: "1px solid var(--card-line)",
                    borderBottom: "1px solid var(--card-line)",
                    borderLeft: "1px solid var(--card-line)",
                  }}
                >
                  <div>
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mb-3"
                      style={{ backgroundColor: "#F5F8FF", color: "#155EEF" }}
                      aria-hidden
                    >
                      {destinationCodes[destination.slug]}
                    </span>
                    <h3 className="font-bold text-xl mb-2" style={{ color: "#1D2939" }}>
                      {destination.name}
                    </h3>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#667085" }}
                    >
                      {destination.pathways.join(" / ")}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-bold mt-4 pt-3 border-t"
                    style={{ color: "#155EEF", borderColor: "var(--card-line)" }}
                  >
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Documentation From Pakistan */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-4">Visa Documentation From Pakistan</h2>
            <p className="text-[#667085]">
              Professional documentation support for applicants preparing visa applications for
              major destinations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {pakistanDestinations.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="group relative flex flex-col rounded-[24px] px-6 py-7 bg-white transition-all hover:-translate-y-1 hover:shadow-md card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#F5F8FF" }}
                >
                  <FileCheck2 className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                </div>
                <span className="font-bold text-[1.0625rem] leading-snug mb-1.5" style={{ color: "#1D2939" }}>
                  {item.title}
                </span>
                <p className="text-sm text-[#667085] leading-relaxed mb-4 flex-1">{item.description}</p>
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#155EEF" }}
                  aria-hidden
                />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/pakistan"
              className="inline-flex items-center gap-1.5 font-semibold"
              style={{ color: "#155EEF" }}
            >
              View Visa Services From Pakistan
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>
          <div className="rounded-3xl px-4 md:px-10 py-2 shadow-sm border border-[#E4E7EC] bg-white">
            <Accordion type="single" collapsible className="w-full">
              {homepageFaqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`} className="border-[#E4E7EC]">
                  <AccordionTrigger
                    className="text-left text-lg font-bold py-6 hover:no-underline"
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
          <div className="text-center mt-8">
            <Link href="/faq" className="font-semibold hover:underline" style={{ color: "#155EEF" }}>
              See all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>
            Ready to Start Your Visa Application?
          </h2>
          <p className="text-white/85 text-[1.0625rem] max-w-xl mx-auto mb-12">
            Tell us your destination and visa type and we&apos;ll help you understand the
            documentation and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/visa-finder"
              className="btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
            >
              Check Visa Requirements
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white text-white transition-all hover:bg-white hover:text-[#155EEF]"
              aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
