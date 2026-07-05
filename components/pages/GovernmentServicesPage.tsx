"use client";

import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Sparkles,
  FileCheck,
  Building2,
  Package,
  Headphones,
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
    title: "Strong Government Network",
    body: "We coordinate directly with relevant authorities for faster approvals.",
  },
  {
    title: "Faster Processing",
    body: "We reduce delays by handling documentation and submissions correctly.",
  },
  {
    title: "Error-Free Documentation",
    body: "Avoid rejection due to incomplete or incorrect submissions.",
  },
  {
    title: "End-to-End Support",
    body: "We manage the entire process from start to finish.",
  },
];

const keyServices: {
  title: string;
  description: string;
  items: string[];
  icon: typeof FileCheck;
}[] = [
  {
    title: "Government Approvals Management",
    description:
      "We handle all necessary approvals required to start and operate your business.",
    items: [
      "Initial approvals",
      "Activity-based approvals",
      "Special permits",
    ],
    icon: FileCheck,
  },
  {
    title: "Dubai Chamber Registration",
    description:
      "Register your business with the Chamber of Commerce to operate legally and access business opportunities.",
    items: [
      "Membership registration",
      "Certificate issuance",
      "Renewal support",
    ],
    icon: Building2,
  },
  {
    title: "Customs Registration & Code",
    description:
      "Essential for import/export businesses operating in the UAE.",
    items: [
      "Customs code registration",
      "Import/export approval",
      "Trade compliance support",
    ],
    icon: Package,
  },
  {
    title: "Government Liaison Services",
    description:
      "We act as your representative to manage communication with authorities.",
    items: ["Document submission", "Follow-ups", "Approval tracking"],
    icon: Headphones,
  },
];

const processSteps = [
  {
    step: "Step 1: Requirement Analysis",
    text: "We understand your business and required approvals.",
  },
  {
    step: "Step 2: Document Preparation",
    text: "We prepare all required documents accurately.",
  },
  {
    step: "Step 3: Submission to Authorities",
    text: "We submit your application to the relevant departments.",
  },
  {
    step: "Step 4: Follow-Up & Coordination",
    text: "We track progress and handle queries.",
  },
  {
    step: "Step 5: Approval Completion",
    text: "Your approvals are completed successfully.",
  },
];

const professionalBenefits = [
  "Faster approvals",
  "Reduced delays",
  "Error-free process",
  "Full compliance",
  "Peace of mind",
];

const whoNeeds = [
  "New businesses",
  "Import/export companies",
  "Expanding businesses",
  "Investors",
];

const mistakes = [
  "Incorrect documentation",
  "Missing approvals",
  "Delayed submissions",
  "Lack of follow-up",
];

const faqs = [
  {
    q: "What are government services in UAE?",
    a: "They include approvals, registrations, and compliance processes required to operate a business.",
  },
  {
    q: "Do I need Dubai Chamber registration?",
    a: "Yes, it is required for most businesses to operate and access key services.",
  },
  {
    q: "What is a customs code?",
    a: "It is required for import and export activities and links your business to UAE customs.",
  },
  {
    q: "How long do approvals take?",
    a: "It depends on the business type, activity, and the approvals required from each authority.",
  },
];

const packages = [
  {
    name: "Standard Government Services",
    tagline: "Best for regular business needs.",
    features: [
      "Basic approval processing",
      "Document submission",
      "Regular updates",
      "Compliance monitoring",
    ],
    highlighted: false,
  },
  {
    name: "Priority Government Services",
    tagline: "For faster and premium service.",
    features: [
      "Priority approvals",
      "Dedicated account manager",
      "Faster processing",
      "Premium support",
    ],
    highlighted: true,
  },
];

export default function GovernmentServicesPage() {
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
              Government Services in UAE –{" "}
              <span style={{ color: "#1D63E0" }}>
                Fast Approvals & Hassle-Free Processing
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Simplify your business journey in the UAE with expert government
              services. We handle approvals, documentation, and regulatory
              processes so you can focus on growing your business.
            </p>
            <ul className="space-y-2 mb-8 text-lg text-gray-800">
              {[
                "Fast processing",
                "Expert liaison support",
                "Complete compliance management",
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
                Start Your Process
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
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <div
              className="relative w-full h-full rounded-[2rem] shadow-xl flex items-center justify-center"
              style={{ backgroundColor: '#EEF4FF' }}
              aria-hidden
            >
              <Building2 className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#1D63E0' }} />
            </div>
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
              Complete Government Services for Businesses in{" "}
              <span style={{ color: "#1D63E0" }}>UAE</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Navigating government processes in the UAE can be complex and
              time-consuming. Our team ensures smooth coordination with all
              relevant authorities to complete your{" "}
              <strong>government approvals UAE</strong> and{" "}
              <strong>business approvals UAE</strong> efficiently — including{" "}
              <strong>Dubai Chamber registration UAE</strong>,{" "}
              <strong>customs registration UAE</strong>, and{" "}
              <strong>government approvals Dubai</strong> where your activity
              requires them.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We manage every step of the process, ensuring full compliance with
              UAE regulations.
            </p>
            <p className="font-semibold mb-4" style={{ color: "#0F1B2D" }}>
              Our services include:
            </p>
            <ul className="space-y-3">
              {[
                "Government approvals",
                "Chamber of Commerce registration",
                "Customs clearance setup",
                "Regulatory coordination",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                    style={{ color: "#1D63E0" }}
                  />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
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
              Why Choose Our Government Services?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Working with UAE government departments requires experience and
              proper knowledge. Our team ensures that your business processes
              move forward without unnecessary delays.
            </p>
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

      {/* Key services */}
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
              Government Services We{" "}
              <span style={{ color: "#FFFFFF" }}>Offer</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
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
              Step-by-Step Government Approval{" "}
              <span style={{ color: "#1D63E0" }}>Process</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              A clear path from requirements to completed approvals.
            </p>
          </motion.div>
          <div className="space-y-4 max-w-4xl">
            {processSteps.map((s, index) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 rounded-3xl p-6 shadow-sm"
                style={{ backgroundColor: "#EEF4FF" }}
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

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: "#0F1B2D" }}
            >
              How Long Do Government Approvals{" "}
              <span style={{ color: "#1D63E0" }}>Take?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-3xl p-6 bg-white shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-6 h-6" style={{ color: "#1D63E0" }} />
                  <h3 className="text-xl font-bold" style={{ color: "#0F1B2D" }}>
                    Standard processing
                  </h3>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  Depends on approval type
                </p>
                <p className="text-gray-600 text-sm">
                  Each authority sets its own timeline based on your activity
                  and file completeness.
                </p>
              </div>
              <div className="rounded-3xl p-6 bg-white shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6" style={{ color: "#1D63E0" }} />
                  <h3 className="text-xl font-bold" style={{ color: "#0F1B2D" }}>
                    Priority processing
                  </h3>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  Faster handling available
                </p>
                <p className="text-gray-600 text-sm">
                  Where eligible, we prioritize submissions and follow-ups.
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              Time varies based on business activity and authority requirements.
            </p>
          </motion.div>
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
              Flexible Government Service{" "}
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
                    Priority
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
                  Start Process
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of professional services */}
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
              Benefits of Using Professional Government{" "}
              <span style={{ color: "#FFFFFF" }}>Services</span>
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
              Who Needs These Services?
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
            Every business requires government approvals at some stage.
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
              Common Mistakes in Government{" "}
              <span style={{ color: "#1D63E0" }}>Processing</span>
            </h2>
            <p className="text-lg text-gray-700">
              These mistakes can delay your business operations.
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
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1D63E0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Government Approvals Done Fast
            </h2>
            <p className="text-white/90 text-lg mb-4">
              Don&apos;t let complex procedures slow down your business.
            </p>
            <p className="text-white/90 text-lg mb-10">
              Contact us today for fast and reliable government services in UAE.
              We handle everything while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#FFFFFF", color: "#1D63E0" }}
              >
                <span>Start Process</span>
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
