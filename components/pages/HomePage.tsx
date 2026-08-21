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
  MapPin,
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
import { homepageFaqs } from "@/lib/data/faqs";
import { destinations } from "@/components/data/destinations";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const trustStrip: { label: string; icon: LucideIcon }[] = [
  { label: "11+ Years Experience", icon: Award },
  { label: "Visa Documentation", icon: FileText },
  { label: "Application Support", icon: Headset },
  { label: "Dubai & Pakistan", icon: MapPin },
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

const whyBenefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Clear Documentation",
    description: "Every document checklist confirmed against your specific case, not a generic template.",
    icon: FileCheck2,
  },
  {
    title: "Transparent Process",
    description: "You know what's needed, what it costs, and what happens next at every stage.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Assistance",
    description: "One point of contact from your first message through to submission.",
    icon: Headset,
  },
  {
    title: "Practical Application Support",
    description: "Hands-on help preparing and organizing your application, not just advice.",
    icon: ClipboardList,
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

const pakistanDestinations: { title: string; link: string }[] = [
  { title: "UAE Document Attestation", link: "/services/attestation" },
  { title: "UK Visa from Pakistan", link: "/services/uk-visa-from-pakistan" },
  { title: "USA Visa from Pakistan", link: "/services/usa-visa-from-pakistan" },
  { title: "Canada Visa from Pakistan", link: "/services/canada-visa-from-pakistan" },
  { title: "Australia Visa from Pakistan", link: "/services/australia-visa-from-pakistan" },
  { title: "Germany Visa from Pakistan", link: "/services/germany-visa-from-pakistan" },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
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
            <p className="lead mb-8 max-w-xl">
              From visit visas and multiple-entry visas to visa documentation and application
              support, Travelaxis helps you prepare the right documents and navigate the process
              with clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/visa-finder"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
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
          </motion.div>

          {/* Not a motion.div: this holds the LCP image, and an initial-opacity-0
              mount animation delays when Chrome counts it as painted until Motion
              hydrates and runs the transition. */}
          <div className="relative h-80 md:h-[26rem]">
            <div
              className="absolute -top-8 -right-8 w-56 h-56 rounded-full"
              style={{ backgroundColor: "rgba(21, 94, 239,0.12)" }}
              aria-hidden
            />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="UAE visa documentation and application support in Dubai"
              width={640}
              height={427}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 bg-white border-b" style={{ borderColor: "#E4E7EC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStrip.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 text-center md:text-left">
                <item.icon className="w-5 h-5 shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Visa Services */}
      <section className="py-20 md:py-28 bg-white">
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
                className="relative group rounded-2xl bg-white p-7 transition-all duration-200 hover:-translate-y-1 card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <Link
                  href={service.link}
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`Explore ${service.title}`}
                />
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <service.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <h3 className="subsection-title mb-2">{service.title}</h3>
                <p className="text-[#667085] text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "#155EEF" }}>
                  Explore
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
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
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-72 md:h-96 order-2 lg:order-1"
          >
            <div
              className="absolute inset-0 rounded-[3rem] flex items-center justify-center"
              style={{ backgroundColor: "#FFFFFF" }}
              aria-hidden
            >
              <ShieldCheck className="w-28 h-28 md:w-36 md:h-36" style={{ color: "#155EEF" }} />
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
              We prepare accurate documentation, explain your options in plain language, and
              support you through submission — so you always know what&apos;s happening and what
              comes next.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyBenefits.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "#1D2939" }}>
                      {item.title}
                    </p>
                    <p className="text-sm text-[#667085] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">A Simple Visa Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl bg-white p-6 card-hover text-center"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <step.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: "#155EEF" }}>
                  {step.number}
                </p>
                <h3 className="subsection-title mb-1">{step.title}</h3>
                <p className="text-sm text-[#667085]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
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
                  className="group relative flex flex-col justify-between h-full rounded-2xl bg-white p-6 card-hover transition-all duration-200 hover:-translate-y-1"
                  style={{ border: "1px solid var(--card-line)" }}
                >
                  <div>
                    <h3 className="subsection-title mb-2">{destination.name}</h3>
                    <p className="text-sm text-[#667085]">{destination.pathways.join(" · ")}</p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold mt-4"
                    style={{ color: "#155EEF" }}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {pakistanDestinations.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="flex items-center justify-between gap-2 rounded-xl px-4 py-3.5 bg-white transition-colors hover:opacity-80"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <span className="text-sm font-semibold" style={{ color: "#1D2939" }}>
                  {item.title}
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0" style={{ color: "#155EEF" }} aria-hidden />
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>
          <div className="rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC] bg-white">
            <Accordion type="single" collapsible className="w-full">
              {homepageFaqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`} className="border-[#E4E7EC]">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
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
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
            Ready to Start Your Visa Application?
          </h2>
          <p className="text-white/85 max-w-xl mx-auto mb-10">
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
