"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileText,
  Scale,
  Award,
  Rocket,
  Briefcase,
  Building,
  Landmark,
  MapPin,
  Tag,
  Banknote,
  Plane,
  Globe2,
  Moon,
  Clock,
  Stamp,
  Snowflake,
  Sun,
  Flag,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { blogPostSummaries } from "@/components/data/blogIndex";
import { emirates } from "@/components/data/emirates";
import { dubaiAreas } from "@/components/data/dubaiAreas";
import { freeZones } from "@/components/data/freeZones";
import { homepageFaqs } from "@/lib/data/faqs";
import Testimonials from "@/components/Testimonials";

const services = [
  {
    title: "Company Formation",
    category: "Business Setup",
    description:
      "Mainland, freezone, and offshore company setup with full license processing support.",
    highlightBig: "5–10",
    highlightSmall: "Working Days",
    icon: Building2,
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    category: "Approvals",
    description:
      "We manage approvals, Dubai Chamber services, and multi-authority coordination for you.",
    highlightBig: "Multi-Authority",
    highlightSmall: "Coordination",
    icon: FileText,
    link: "/services/government-services",
  },
  {
    title: "Legal Documentation",
    category: "Compliance",
    description:
      "POA/MOA preparation, certificate attestation, and board resolutions handled end-to-end.",
    highlightBig: "Fast-Track",
    highlightSmall: "Available",
    icon: Scale,
    link: "/services/legal-documentation",
  },
  {
    title: "Trademark & IP",
    category: "Brand Protection",
    description:
      "Trademark registration and ISO certification support to protect and strengthen your brand.",
    highlightBig: "Trademark",
    highlightSmall: "& ISO Support",
    icon: Tag,
    link: "/services/business-support",
  },
  {
    title: "Banking & Compliance",
    category: "Business Support",
    description:
      "Corporate bank account opening and ongoing regulatory compliance monitoring.",
    highlightBig: "Account Setup",
    highlightSmall: "& Compliance",
    icon: Banknote,
    link: "/services/business-support",
  },
  {
    title: "UAE Visa Documentation",
    category: "Visa Services",
    description:
      "Investor, employment, family, and visit visa documentation, renewals, and cancellations.",
    highlightBig: "5",
    highlightSmall: "Visa Categories",
    icon: Plane,
    link: "/services/visa-services",
  },
  {
    title: "International Visa Documentation",
    category: "Global Visas",
    description:
      "Documentation support for Schengen Europe, the USA, UK, Saudi Arabia, Canada, Australia, and other African and Asian destinations.",
    highlightBig: "30+",
    highlightSmall: "Countries",
    icon: Globe2,
    link: "/services/international-visas",
  },
  {
    title: "Umrah Services",
    category: "Pilgrimage Travel",
    description:
      "Umrah visa processing, flight booking, hotel accommodation, and group travel coordination.",
    highlightBig: "Group & Individual",
    highlightSmall: "Packages",
    icon: Moon,
    link: "/services/umrah-services",
  },
];

const pakistanServices = [
  {
    title: "UAE Document Attestation",
    description: "HEC/IBCC, MOFA, UAE Embassy, and MOFAIC chain for degree, marriage, and experience certificates.",
    icon: Stamp,
    link: "/services/attestation",
  },
  {
    title: "UK Visa from Pakistan",
    description: "Skilled Worker, Student, Visit, and Family/Spouse visa documentation.",
    icon: Landmark,
    link: "/services/uk-visa-from-pakistan",
  },
  {
    title: "Canada Visa from Pakistan",
    description: "Study permit, work permit, visit visa, and spouse open work permit documentation.",
    icon: Snowflake,
    link: "/services/canada-visa-from-pakistan",
  },
  {
    title: "Australia Visa from Pakistan",
    description: "Visitor, Student, and Partner/Family visa documentation.",
    icon: Sun,
    link: "/services/australia-visa-from-pakistan",
  },
  {
    title: "USA Visa from Pakistan",
    description: "B1/B2 visitor and F1 student visa documentation, DS-160 review, and interview prep.",
    icon: Flag,
    link: "/services/usa-visa-from-pakistan",
  },
];

const visaPills: { label: string; href: string }[] = [
  { label: "UAE Visit Visa", href: "/services/uae-visit-visa" },
  { label: "UAE Employment Visa", href: "/services/uae-employment-visa" },
  { label: "UAE Visa Extension & Renewal", href: "/services/uae-visa-extension-renewal" },
  { label: "UAE Family Visa", href: "/blog/family-sponsorship-income-requirements-uae" },
  { label: "Golden Visa UAE", href: "/blog/golden-visa-uae-guide" },
  { label: "Investor Visa UAE", href: "/blog/investor-visa-uae-guide" },
  { label: "Freelance Visa UAE", href: "/blog/freelance-visa-uae-guide" },
  { label: "UAE Student Visa", href: "/blog/uae-student-visa-guide" },
  { label: "UAE Domestic Worker Visa", href: "/services/uae-domestic-worker-visa" },
  { label: "UAE Retirement Visa", href: "/services/uae-retirement-visa" },
  { label: "UAE Document Attestation", href: "/services/attestation" },
  { label: "Umrah Visa", href: "/services/umrah-services" },
];

const featuredDubaiAreas = dubaiAreas.slice(0, 6);
const featuredFreeZones = freeZones.slice(0, 6);

const stats = [
  { icon: Award, value: "11+", label: "Years of Experience" },
  { icon: Briefcase, value: `${services.length}`, label: "Core Services" },
  { icon: Plane, value: "5", label: "Visa Categories" },
  { icon: Clock, value: "6", label: "Days a Week Open" },
];

const audiences = [
  {
    label: "Startups",
    description: "Right company structure and licensing from day one.",
    icon: Rocket,
  },
  {
    label: "Freelancers",
    description: "Freelance permits and visas for independent professionals.",
    icon: Briefcase,
  },
  {
    label: "SMEs",
    description: "Licensing, compliance, and support as your team grows.",
    icon: Building,
  },
  {
    label: "Corporates",
    description: "Multi-entity structuring and governance for established firms.",
    icon: Landmark,
  },
];

const latestPosts = blogPostSummaries.slice(0, 3);

const blogCategoryIcons: Record<string, typeof FileText> = {
  "Business Setup": Building2,
  "UAE Visa Documentation": Plane,
};

const WHATSAPP_NUMBER = "971589867555";

const SERVICE_TYPES = [
  "Company Formation",
  "Government Services",
  "Legal Documentation",
  "Business Support",
  "UAE Visa Documentation",
  "International Visa Documentation",
  "Umrah Services",
  "UAE Document Attestation",
  "UK Visa from Pakistan",
  "Canada Visa from Pakistan",
  "Australia Visa from Pakistan",
];

const CONTACT_METHODS = ["WhatsApp", "Phone Call", "Email"] as const;

export default function HomePage() {
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0]);
  const [preferredContact, setPreferredContact] = useState<(typeof CONTACT_METHODS)[number]>(
    CONTACT_METHODS[0]
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hi Travelaxis, I'm interested in ${serviceType}. My phone number is ${phoneNumber}. Preferred contact method: ${preferredContact}.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-28 md:pt-20 md:pb-32" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-4" style={{ color: "#1D63E0" }}>
              UAE Visa &amp; Business Setup Consultancy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#0F1B2D" }}>
              Your <span style={{ color: "#1D63E0" }}>UAE Visa</span>, Handled Start to Finish
            </h1>
            <p className="text-lg mb-8 max-w-xl text-gray-600">
              Visit, employment, family, investor, and golden visa documentation, plus company
              formation and government approvals — handled by a team with 11+ years of
              experience in the UAE.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>

          {/* Not a motion.div: this holds the LCP image, and an initial-opacity-0
              mount animation delays when Chrome counts it as painted until Motion
              hydrates and runs the transition. */}
          <div className="relative h-80 md:h-[26rem]">
            <div
              className="absolute -top-8 -right-8 w-56 h-56 rounded-full"
              style={{ backgroundColor: "rgba(29,99,224,0.12)" }}
              aria-hidden
            />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="Company formation and visa consultancy for UAE, USA, UK, and Australia"
              width={640}
              height={427}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div
              className="absolute bottom-2 left-2 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center shadow-lg"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              <MapPin className="w-5 h-5 mb-0.5" aria-hidden />
              <span className="text-xs font-bold leading-tight px-1">11+ Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation-style inquiry bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 md:-mt-16 relative z-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleInquirySubmit}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-semibold" style={{ color: "#0F1B2D" }}>
              Service Type*
            </span>
            <select
              required
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="h-11 rounded-full border border-gray-200 px-4 outline-none focus-visible:ring-2"
              style={{ color: "#0F1B2D" }}
            >
              {SERVICE_TYPES.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-semibold" style={{ color: "#0F1B2D" }}>
              Preferred Contact*
            </span>
            <select
              required
              value={preferredContact}
              onChange={(e) =>
                setPreferredContact(e.target.value as (typeof CONTACT_METHODS)[number])
              }
              className="h-11 rounded-full border border-gray-200 px-4 outline-none focus-visible:ring-2"
              style={{ color: "#0F1B2D" }}
            >
              {CONTACT_METHODS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-semibold" style={{ color: "#0F1B2D" }}>
              Phone Number*
            </span>
            <input
              type="tel"
              required
              placeholder="+971"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-11 rounded-full border border-gray-200 px-4 outline-none focus-visible:ring-2"
              style={{ color: "#0F1B2D" }}
            />
          </label>
          <button
            type="submit"
            className="h-11 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
          >
            Get Free Quote
          </button>
        </motion.form>
      </div>

      {/* Visa type pills */}
      <section className="pt-16 pb-4 md:pt-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#1D63E0" }}>
            Every UAE Visa Category, One Place
          </p>
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            aria-label="UAE visa categories"
            className="flex flex-wrap justify-center gap-3"
          >
            {visaPills.map((pill) => (
              <Link
                key={pill.href}
                href={pill.href}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
                style={{ backgroundColor: "#EEF4FF", color: "#1D63E0", borderColor: "transparent" }}
              >
                {pill.label}
              </Link>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* About snapshot */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-72 md:h-96 overflow-visible"
          >
            <div
              className="absolute inset-0 rounded-[3rem] flex items-center justify-center"
              style={{ backgroundColor: "#EEF4FF" }}
              aria-hidden
            >
              <Building2 className="w-32 h-32 md:w-40 md:h-40" style={{ color: "#1D63E0" }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Get to Know Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0F1B2D" }}>
              More About Travelaxis
            </h2>
            <p className="text-gray-600 mb-4">
              Our goal is to support businesses from the beginning to success, guiding
              clients with clear steps, proper planning, and the right advice.
            </p>
            <p className="text-gray-600 mb-6">
              We focus on understanding your needs and helping you move forward
              without confusion.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Mainland & freezone company formation",
                "Government & Dubai Chamber coordination",
                "UAE visa documentation support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              More About Us
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <p
              className="font-script text-3xl mb-1"
              style={{ color: "#1D63E0" }}
            >
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Popular Services For Business
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group min-w-0 h-full flex flex-col rounded-2xl bg-white p-[26px] transition-all duration-200 hover:-translate-y-1 card-hover${
                  index === services.length - 1 && services.length % 3 === 1
                    ? " sm:col-start-1 lg:col-start-2"
                    : ""
                }`}
                style={{ border: "1px solid var(--card-line)" }}
              >
                <Link
                  href={service.link}
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`View ${service.title} details`}
                />
                <div
                  className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <service.icon className="w-[22px] h-[22px]" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <h3 className="text-[1.15rem] font-bold leading-snug mb-2" style={{ color: "#0F1B2D" }}>
                  {service.title}
                </h3>
                <p className="text-[0.9rem] text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">{service.description}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                    Dubai, UAE
                  </span>
                  <span>{service.category}</span>
                </div>
                <div className="flex items-center justify-between gap-3 pt-4" style={{ borderTop: "1px solid var(--card-line)" }}>
                  <p className="leading-tight" style={{ color: "#0F1B2D" }}>
                    <span className="text-xl font-bold">{service.highlightBig}</span>
                    <span className="text-sm text-gray-500">/{service.highlightSmall}</span>
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold shrink-0 transition-all group-hover:gap-2.5" style={{ color: "var(--card-icon-fg)" }}>
                    View Details
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For clients in Pakistan */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              For Clients in Pakistan
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Document Attestation &amp; Visa Documentation From Pakistan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pakistanServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative group min-w-0 rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1 card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <Link
                  href={service.link}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${service.title} details`}
                />
                <div className="p-[26px]">
                  <div
                    className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--card-icon-bg)" }}
                  >
                    <service.icon className="w-[22px] h-[22px]" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                  </div>
                  <h3 className="text-[1.15rem] font-bold mb-2" style={{ color: "#0F1B2D" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[0.9rem] leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pakistan"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              See All Services for Clients in Pakistan
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Areas & Emirates We Serve */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Coverage Across the UAE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Areas &amp; Emirates We Serve
            </h2>
            <p className="text-gray-600 mt-4">
              Business setup, government coordination, and visa documentation support across all seven emirates, Dubai&apos;s free zones, and key business districts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white p-[26px]" style={{ border: "1px solid var(--card-line)" }}>
              <h3 className="font-bold mb-4" style={{ color: "#0F1B2D" }}>
                Emirates
              </h3>
              <ul className="space-y-2 list-none p-0 m-0 mb-5">
                {emirates.map((e) => (
                  <li key={e.slug}>
                    <Link href={`/emirates/${e.slug}`} className="text-sm text-gray-600 hover:text-[#1D63E0] transition-colors">
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/emirates" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#1D63E0" }}>
                All Emirates We Serve <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-[26px]" style={{ border: "1px solid var(--card-line)" }}>
              <h3 className="font-bold mb-4" style={{ color: "#0F1B2D" }}>
                Dubai Areas
              </h3>
              <ul className="space-y-2 list-none p-0 m-0 mb-5">
                {featuredDubaiAreas.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/dubai/${a.slug}`} className="text-sm text-gray-600 hover:text-[#1D63E0] transition-colors">
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/dubai" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#1D63E0" }}>
                All Dubai Areas <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-[26px]" style={{ border: "1px solid var(--card-line)" }}>
              <h3 className="font-bold mb-4" style={{ color: "#0F1B2D" }}>
                Free Zones
              </h3>
              <ul className="space-y-2 list-none p-0 m-0 mb-5">
                {featuredFreeZones.map((z) => (
                  <li key={z.slug}>
                    <Link href={`/free-zones/${z.slug}`} className="text-sm text-gray-600 hover:text-[#1D63E0] transition-colors">
                      {z.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/free-zones" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#1D63E0" }}>
                All UAE Free Zones <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stat row with diagonal accent */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div
          className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 -skew-y-3"
          style={{ backgroundColor: "#1D63E0" }}
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-xl p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#1D63E0" }}
                >
                  <stat.icon className="w-7 h-7 text-white" aria-hidden />
                </div>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "#0F1B2D" }}>
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Get Plans For Your Family
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Solutions That Fit Your Business Stage
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {audiences.map((a, index) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="min-w-0 rounded-2xl bg-white transition-all duration-200 hover:-translate-y-1 card-hover p-6 text-center"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <a.icon className="w-[22px] h-[22px]" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <p className="font-bold mb-1" style={{ color: "#0F1B2D" }}>
                  {a.label}
                </p>
                <p className="text-[0.9rem] text-gray-600">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100" style={{ backgroundColor: "#EEF4FF" }}>
            <Accordion type="single" collapsible className="w-full">
              {homepageFaqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F1B2D" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="font-semibold hover:underline" style={{ color: "#1D63E0" }}>
              See all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-[2.5rem] overflow-hidden py-20 md:py-28"
            style={{ backgroundColor: "#1D63E0" }}
          >
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Are You Ready To Start? Remember Us!!
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Take the first step with the right support and guidance — we&apos;re here
                to help you at every stage of your business journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
                style={{ color: "#1D63E0" }}
              >
                Book Now
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 -z-0"
          style={{
            backgroundColor: "#1D63E0",
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-script text-3xl mb-1" style={{ color: "#1D63E0" }}>
              latest News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Read Latest Blogs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group min-w-0 rounded-2xl overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1 card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read full article: ${post.title}`}
                />
                <div className="p-[26px]">
                  <div className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-4" style={{ backgroundColor: "var(--card-icon-bg)" }} aria-hidden>
                    {(() => {
                      const CategoryIcon = blogCategoryIcons[post.category] ?? FileText;
                      return <CategoryIcon className="w-[22px] h-[22px]" style={{ color: "var(--card-icon-fg)" }} />;
                    })()}
                  </div>
                  <h3 className="text-[1.15rem] font-bold mb-3 line-clamp-2" style={{ color: "#0F1B2D" }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-[0.9rem] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: "var(--card-icon-fg)" }}
                  >
                    Read More <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
