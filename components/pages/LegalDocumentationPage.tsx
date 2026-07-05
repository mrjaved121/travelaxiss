"use client";

import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  ScrollText,
  FilePenLine,
  Stamp,
  Building2,
  ShieldCheck,
  Languages,
  Scale,
  FileSignature,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const whyChooseUs = [
  {
    title: "Expert Legal Knowledge",
    body: "We understand UAE legal requirements and documentation standards.",
  },
  {
    title: "Error-Free Documentation",
    body: "We ensure all documents are prepared accurately.",
  },
  {
    title: "Fast Processing",
    body: "Quick turnaround with minimal unnecessary delays.",
  },
  {
    title: "Complete Confidentiality",
    body: "Your documents are handled securely and professionally.",
  },
];

const keyServices: {
  title: string;
  description: string;
  items: string[];
  icon: typeof ScrollText;
}[] = [
  {
    title: "MOA & POA Preparation",
    description:
      "We prepare Memorandum of Association (MOA) and Power of Attorney (POA) documents for your business.",
    items: [
      "Company agreements",
      "Legal authorization documents",
      "Ownership structuring",
    ],
    icon: ScrollText,
  },
  {
    title: "Legal Agreements Drafting",
    description:
      "We create legally sound agreements for your business operations.",
    items: [
      "Partnership agreements",
      "Service contracts",
      "Employment agreements",
    ],
    icon: FilePenLine,
  },
  {
    title: "Certificate Attestation Services",
    description:
      "Ensure your documents are officially recognized in UAE and internationally.",
    items: [
      "Educational certificates",
      "Business documents",
      "Personal documents",
    ],
    icon: Stamp,
  },
  {
    title: "Corporate Document Management",
    description: "We handle all corporate legal documentation.",
    items: [
      "Board resolutions",
      "Shareholder documents",
      "Company records",
    ],
    icon: Building2,
  },
  {
    title: "Document Authentication Support",
    description: "We assist with document verification and approvals.",
    items: [
      "Embassy attestation",
      "Ministry approvals",
      "Legal validation",
    ],
    icon: ShieldCheck,
  },
];

const processSteps = [
  {
    step: "Step 1: Requirement Understanding",
    text: "We analyze your documentation needs.",
  },
  {
    step: "Step 2: Drafting & Preparation",
    text: "We prepare all required documents.",
  },
  {
    step: "Step 3: Review & Approval",
    text: "You review documents before finalization.",
  },
  {
    step: "Step 4: Attestation / Notarization",
    text: "We process official approvals.",
  },
  {
    step: "Step 5: Final Delivery",
    text: "You receive fully completed documents.",
  },
];

const professionalBenefits = [
  "Avoid legal issues",
  "Ensure compliance",
  "Save time",
  "Protect your business",
  "Improve credibility",
];

const whoNeeds = [
  "New businesses",
  "Established companies",
  "Investors",
  "International clients",
];

const mistakes = [
  "Incorrect drafting",
  "Missing approvals",
  "Using non-compliant formats",
  "Delayed attestation",
];

const faqs = [
  {
    q: "What is MOA in UAE?",
    a: "MOA is a legal document that defines company ownership and structure.",
  },
  {
    q: "What is POA?",
    a: "POA allows someone to act on your behalf legally.",
  },
  {
    q: "Is document attestation required in UAE?",
    a: "Yes, for many legal and business processes.",
  },
  {
    q: "How long does attestation take?",
    a: "It depends on document type and authority.",
  },
];

const packages = [
  {
    name: "Standard Documentation Services",
    tagline: "Ideal for basic legal needs.",
    features: [
      "MOA / POA preparation",
      "Legal document drafting",
      "Basic verification support",
    ],
    highlighted: false,
  },
  {
    name: "Premium Documentation Services",
    tagline: "For advanced legal support.",
    features: [
      "Priority document processing",
      "Full attestation services",
      "Contract review",
      "Dedicated legal support",
    ],
    highlighted: true,
  },
];

export default function LegalDocumentationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#0F1B2D" }}
            >
              Legal Documentation Services in UAE –{" "}
              <span style={{ color: "#1D63E0" }}>
                Secure, Accurate & Compliant
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ensure your business operates with complete legal protection in the
              UAE. We provide professional legal documentation services,
              including agreements, attestation, and compliance support.
            </p>
            <ul className="space-y-2 mb-8 text-lg text-gray-800">
              {[
                "Fast processing",
                "Accurate documentation",
                "Full legal compliance",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="text-[#1D63E0]">👉</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full transition-all hover:opacity-90 text-lg font-semibold"
                style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
              >
                Get Legal Support
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 text-lg font-semibold"
                style={{ borderColor: "#0F1B2D", color: "#0F1B2D" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <img
              src="https://images.unsplash.com/photo-1532995092664-7027dcede29f?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt="Legal documents and business paperwork"
              className="relative w-full h-full object-cover rounded-[2rem] shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Service overview */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#0F1B2D" }}
            >
              Complete Legal Documentation Services in{" "}
              <span style={{ color: "#1D63E0" }}>UAE</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Legal documentation is a critical part of starting and running a
              business in the UAE. From contracts to attestations, every
              document must meet strict legal standards. Whether you need{" "}
              <strong>legal documentation UAE</strong>,{" "}
              <strong>MOA POA UAE</strong> support,{" "}
              <strong>certificate attestation UAE</strong>,{" "}
              <strong>legal translation UAE</strong>, or broader{" "}
              <strong>business legal services UAE</strong>, we align drafts and
              filings with applicable rules.
            </p>
            <p className="font-semibold mb-3" style={{ color: "#0F1B2D" }}>
              Our team ensures that all your documents are:
            </p>
            <ul className="space-y-2 mb-6">
              {["Legally valid", "Properly structured", "Fully compliant with UAE laws"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      style={{ color: "#1D63E0" }}
                    />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                )
              )}
            </ul>
            <p className="text-lg text-gray-700 font-medium">
              We handle everything so you don&apos;t face delays or legal
              issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 max-w-3xl"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Why Choose Our Legal Documentation Services?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 md:p-8 shadow-sm bg-white border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl" aria-hidden>
                    ✅
                  </span>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#0F1B2D" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed pl-9">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key legal services */}
      <section className="py-20" style={{ backgroundColor: "#1D63E0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Legal Documentation Services We{" "}
              <span style={{ color: "#FFFFFF" }}>Offer</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((svc, index) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl p-6 md:p-8 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#1D63E0" }}
                >
                  <svc.icon className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {svc.description}
                </p>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-2"
                  style={{ color: "#1D63E0" }}
                >
                  Includes
                </p>
                <ul className="space-y-2">
                  {svc.items.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-[#1D63E0] mt-0.5">👉</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced legal support */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center max-w-3xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Additional Legal Documentation{" "}
              <span style={{ color: "#1D63E0" }}>Services</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl p-8 shadow-sm border border-gray-100"
              style={{ backgroundColor: "#EEF4FF" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1D63E0" }}
              >
                <Scale className="w-6 h-6" style={{ color: "#FFFFFF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
                Contract Review & Analysis
              </h3>
              <p className="text-sm font-semibold mb-2 text-gray-600">
                We review your contracts to ensure:
              </p>
              <ul className="space-y-2 text-gray-700">
                {["Legal compliance", "Risk reduction", "Clear terms"].map(
                  (x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-[#1D63E0]">👉</span>
                      {x}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="rounded-3xl p-8 shadow-sm border border-gray-100"
              style={{ backgroundColor: "#EEF4FF" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1D63E0" }}
              >
                <FileSignature className="w-6 h-6" style={{ color: "#FFFFFF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
                Notarization Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We arrange notarization through authorized UAE legal authorities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-8 shadow-sm border border-gray-100"
              style={{ backgroundColor: "#EEF4FF" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#1D63E0" }}
              >
                <Languages className="w-6 h-6" style={{ color: "#FFFFFF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
                Legal Translation Services
              </h3>
              <p className="text-sm font-semibold mb-2 text-gray-600">
                Includes:
              </p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Arabic to English",
                  "English to Arabic",
                  "Official legal translations",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-[#1D63E0]">👉</span>
                    {x}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Step-by-Step Legal Documentation{" "}
              <span style={{ color: "#1D63E0" }}>Process</span>
            </h2>
          </motion.div>
          <div className="space-y-4 max-w-4xl">
            {processSteps.map((s, index) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 rounded-3xl p-6 shadow-sm bg-white border border-gray-100"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: "#0F1B2D" }}
                  >
                    {s.step}
                  </h3>
                  <p className="text-gray-700">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Flexible Legal Documentation{" "}
              <span style={{ color: "#1D63E0" }}>Packages</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-3xl p-8 shadow-sm ${
                  pkg.highlighted ? "ring-2" : ""
                }`}
                style={
                  pkg.highlighted
                    ? { borderColor: "#1D63E0", backgroundColor: "#FFFCF5" }
                    : { backgroundColor: "#EEF4FF" }
                }
              >
                {pkg.highlighted && (
                  <div
                    className="inline-block px-4 py-1 rounded-full mb-4 text-sm font-semibold"
                    style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                  >
                    Premium
                  </div>
                )}
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#0F1B2D" }}
                >
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.tagline}</p>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#0F1B2D" }}
                >
                  Includes:
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#1D63E0" }}
                      />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-2xl transition-all hover:opacity-90 font-semibold"
                  style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                >
                  Get Legal Support
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: "#1D63E0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Benefits of Professional Legal{" "}
              <span style={{ color: "#FFFFFF" }}>Documentation</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {professionalBenefits.map((b, index) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="flex items-center gap-3 rounded-2xl px-4 py-4 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-lg">✅</span>
                <span className="text-gray-200 font-medium capitalize">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Who Requires Legal Documentation Services?
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {whoNeeds.map((label) => (
              <span
                key={label}
                className="px-5 py-2 rounded-full font-semibold bg-white border border-gray-200 shadow-sm"
                style={{ color: "#0F1B2D" }}
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-700 font-medium">
            Every business requires legal documentation at some stage.
          </p>
        </div>
      </section>

      {/* Mistakes */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Common Legal Documentation{" "}
              <span style={{ color: "#1D63E0" }}>Mistakes</span>
            </h2>
            <p className="text-lg text-gray-700">
              These can cause serious business delays.
            </p>
          </motion.div>
          <div className="space-y-3">
            {mistakes.map((m, index) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 rounded-2xl border-l-4"
                style={{
                  backgroundColor: "#FEF3E7",
                  borderColor: "#E67E22",
                }}
              >
                <span style={{ color: "#E67E22" }}>❌</span>
                <span className="text-gray-800 font-semibold">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0F1B2D" }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#1D63E0" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="border-gray-200"
                >
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F1B2D" }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-[#1D63E0]">❓</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532995092664-7027dcede29f?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
          alt=""
          role="presentation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(29,99,224,0.85)" }} aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Business with Proper Legal Documentation
            </h2>
            <p className="text-white/85 text-lg mb-4">
              Don&apos;t risk your business with incomplete or incorrect
              documents.
            </p>
            <p className="text-white/85 text-lg mb-10">
              Contact us today for reliable legal documentation services in UAE.
              We ensure your documents are accurate, approved, and ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#FFFFFF", color: "#1D63E0" }}
              >
                <span>Get Legal Support</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold transition-all hover:bg-white hover:text-[#1D63E0]"
              >
                <span>WhatsApp Now</span>
              </a>
            </div>
        </motion.div>
      </section>
    </div>
  );
}
