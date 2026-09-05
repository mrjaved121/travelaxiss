"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Flag,
  Snowflake,
  Sun,
  Plane,
  Globe2,
  MessageCircle,
  Search,
  ClipboardList,
  FileCheck2,
  Send,
  Building2,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GuideCard from "@/components/GuideCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";
import { visitVisaFaqs } from "@/components/data/visitVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const shortDisclaimer =
  "Travelaxis provides visa application assistance. Visa decisions are made solely by the relevant government authority.";

const heroBenefits = ["Requirements Guidance", "Document Preparation", "Application Support"];

const POPULAR_SEARCHES = ["UK", "USA", "Canada", "Schengen", "Australia", "Japan"];

/** Keyword → destination page. Countries without a dedicated page route to their region overview. */
const DESTINATION_MAP: Record<string, string> = {
  uk: "/visit-visa/uk",
  "united kingdom": "/visit-visa/uk",
  england: "/visit-visa/uk",
  usa: "/visit-visa/usa",
  us: "/visit-visa/usa",
  "united states": "/visit-visa/usa",
  america: "/visit-visa/usa",
  canada: "/visit-visa/canada",
  australia: "/visit-visa/australia",
  uae: "/visit-visa/uae",
  dubai: "/visit-visa/uae",
  "united arab emirates": "/visit-visa/uae",
  schengen: "/visit-visa/europe",
  europe: "/visit-visa/europe",
  france: "/visit-visa/europe",
  italy: "/visit-visa/europe",
  spain: "/visit-visa/europe",
  germany: "/visit-visa/europe",
  switzerland: "/visit-visa/europe",
  "saudi arabia": "/visit-visa/middle-east",
  saudi: "/visit-visa/middle-east",
  japan: "/visit-visa/asia",
  china: "/visit-visa/asia",
  indonesia: "/visit-visa/asia",
  bali: "/visit-visa/asia",
  turkey: "/visit-visa/asia",
  singapore: "/visit-visa/asia",
  asia: "/visit-visa/asia",
  "new zealand": "/visit-visa/oceania",
  oceania: "/visit-visa/oceania",
  "south africa": "/visit-visa/africa",
  africa: "/visit-visa/africa",
};

function DestinationFinder() {
  const router = useRouter();
  const inputId = useId();
  const listId = useId();
  const [value, setValue] = useState("");
  const [notFound, setNotFound] = useState(false);

  const go = (query: string) => {
    const match = DESTINATION_MAP[query.trim().toLowerCase()];
    if (match) {
      setNotFound(false);
      router.push(match);
    } else {
      setNotFound(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    go(value);
  };

  return (
    <div className="mb-8 max-w-md">
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputId} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
          Where do you want to travel?
        </label>
        <div className="flex gap-2">
          <input
            id={inputId}
            type="text"
            list={listId}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setNotFound(false);
            }}
            placeholder="Search UK, USA, Canada, Schengen…"
            className="flex-1 rounded-xl border border-[#E4E7EC] bg-white px-4 py-3 text-[#1D2939] placeholder:text-[#667085] focus:outline-none focus:ring-2 transition-shadow"
          />
          <datalist id={listId}>
            {Object.keys(DESTINATION_MAP).map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
          <button
            type="submit"
            className="px-5 py-3 rounded-xl font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
          >
            Go
          </button>
        </div>
      </form>
      {notFound && (
        <p className="text-sm text-[#667085] mt-2">
          We don&apos;t have a dedicated page for that yet —{" "}
          <a href="#requirements-form" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
            tell us in the form below
          </a>{" "}
          and we&apos;ll check.
        </p>
      )}
      <div className="flex flex-wrap gap-x-1.5 gap-y-2 mt-3 text-sm">
        {POPULAR_SEARCHES.map((name, i) => (
          <span key={name}>
            <button
              type="button"
              onClick={() => {
                setValue(name);
                go(name);
              }}
              className="font-semibold underline-offset-2 hover:underline"
              style={{ color: "#155EEF" }}
            >
              {name}
            </button>
            {i < POPULAR_SEARCHES.length - 1 && <span className="text-[#667085]"> · </span>}
          </span>
        ))}
      </div>
    </div>
  );
}

const destinations: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  {
    title: "UK Visit Visa",
    description: "Standard Visitor visa guidance for tourism, family visits, and permitted short stays.",
    icon: Landmark,
    href: "/visit-visa/uk",
  },
  {
    title: "USA Visit Visa",
    description: "B1/B2 Visitor Visa documentation and interview preparation.",
    icon: Flag,
    href: "/visit-visa/usa",
  },
  {
    title: "Canada Visitor Visa",
    description: "Visit visa documentation for tourism or family visits to Canada.",
    icon: Snowflake,
    href: "/visit-visa/canada",
  },
  {
    title: "Australia Visitor Visa",
    description: "Visitor Visa (Subclass 600) documentation for Australia.",
    icon: Sun,
    href: "/visit-visa/australia",
  },
  {
    title: "UAE Visit Visa",
    description: "Visit visa duration, sponsors, and document requirements for the UAE.",
    icon: Plane,
    href: "/visit-visa/uae",
  },
];

const regions: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  { title: "Europe", description: "UK and all 18 Schengen member states", icon: Landmark, href: "/visit-visa/europe" },
  { title: "North America", description: "USA and Canada", icon: Snowflake, href: "/visit-visa/north-america" },
  { title: "Middle East", description: "UAE and Saudi Arabia", icon: Building2, href: "/visit-visa/middle-east" },
  { title: "Asia", description: "Indonesia, China, Japan, Turkey, Singapore", icon: MapPin, href: "/visit-visa/asia" },
  { title: "Oceania", description: "Australia", icon: Sun, href: "/visit-visa/oceania" },
  { title: "Africa", description: "South Africa", icon: Globe2, href: "/visit-visa/africa" },
];

const howWeHelp: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Understand the requirements",
    description: "Destination-specific guidance on the information and documents typically needed.",
    icon: Search,
  },
  {
    title: "Prepare your documents",
    description: "Help organizing your application documents and supporting information.",
    icon: ClipboardList,
  },
  {
    title: "Complete your application",
    description: "Assistance preparing application information for the appropriate official channel.",
    icon: FileCheck2,
  },
  {
    title: "Stay organized for next steps",
    description: "Guidance on appointments, biometrics, or submission steps where applicable.",
    icon: Send,
  },
];

const howItWorks: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "Choose Your Destination", description: "Tell us where you plan to travel and your intended travel dates.", icon: Search },
  { number: "02", title: "Review Requirements", description: "We help identify the relevant application route and document checklist.", icon: ClipboardList },
  { number: "03", title: "Prepare Your Application", description: "Organize supporting documents and application information.", icon: FileCheck2 },
  { number: "04", title: "Proceed Through the Official Process", description: "Complete online, appointment, biometric, or submission steps as applicable.", icon: Send },
];

export default function VisitVisaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Visit Visa <span style={{ color: "#155EEF" }}>Services</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              Planning to travel from Pakistan? Explore destination-specific visit visa
              requirements and get help preparing your application.
            </p>
            <DestinationFinder />
            <div className="flex flex-wrap gap-2 mb-6">
              {heroBenefits.map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#FFFFFF", color: "#155EEF", border: "1px solid var(--card-line)" }}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#requirements-form"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>Check Requirements</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about visit visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4" style={{ borderColor: "#155EEF" }}>
              {shortDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-4">Popular Destinations</h2>
            <p className="text-[#667085]">
              Visit visa documentation for the destinations our clients ask about most.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((item, index) => (
              <GuideCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
                ctaLabel="View requirements"
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore by region */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <h2 className="section-title mb-4">Explore Visit Visas by Region</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  href={region.href}
                  className="block rounded-3xl p-6 bg-white card-hover h-full"
                  style={{ border: "1px solid var(--card-line)" }}
                >
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--card-icon-bg)" }}
                  >
                    <region.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                  </div>
                  <h3 className="subsection-title mb-1">{region.title}</h3>
                  <p className="text-sm text-[#667085] mb-3">{region.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#155EEF" }}>
                    Explore {region.title} visit visas
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="section-title mb-4">How We Help</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHelp.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 bg-white card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <h3 className="subsection-title mb-2">{item.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">How the Process Works</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm />
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
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {visitVisaFaqs.map((faq, i) => (
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

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Ready to Plan Your Visit?</h2>
          <p className="lead mb-6 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Tell us where you want to travel and get guidance on the relevant visa requirements
            and application steps.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {shortDisclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#requirements-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Check Requirements</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about visit visas (opens in a new tab)"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
