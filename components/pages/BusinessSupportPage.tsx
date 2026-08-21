"use client";

import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Tag,
  Award,
  Landmark,
  ShieldCheck,
  Lightbulb,
  GitBranch,
  AlertTriangle,
  Rocket,
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
    title: "Complete Business Solutions",
    body: "We provide everything your business needs in one place.",
  },
  {
    title: "Expert Guidance",
    body: "Our team understands UAE business requirements.",
  },
  {
    title: "Fast Processing",
    body: "Quick approvals and efficient service delivery.",
  },
  {
    title: "Long-Term Support",
    body: "We support your business growth journey.",
  },
];

const keyServices: {
  title: string;
  description: string;
  items: string[];
  footnote?: string;
  icon: typeof Tag;
}[] = [
  {
    title: "Trademark Registration",
    description:
      "Protect your brand name and logo legally in the UAE.",
    items: [
      "Trademark application",
      "Brand protection",
      "Registration support",
    ],
    footnote: "Prevent others from copying your business identity.",
    icon: Tag,
  },
  {
    title: "ISO Certification Services",
    description:
      "Enhance your business credibility with international certifications.",
    items: [
      "ISO 9001 (Quality Management)",
      "ISO 14001 (Environmental)",
      "ISO 45001 (Safety)",
    ],
    footnote: "Build trust with clients and partners.",
    icon: Award,
  },
  {
    title: "Corporate Bank Account Opening",
    description:
      "We help you open a business bank account smoothly.",
    items: [
      "Bank selection",
      "Documentation support",
      "Application guidance",
    ],
    footnote: "Essential for business transactions.",
    icon: Landmark,
  },
  {
    title: "Compliance & Regulatory Support",
    description: "Stay compliant with UAE business laws.",
    items: [
      "License renewal support",
      "Compliance monitoring",
      "Regulatory updates",
    ],
    footnote: "Avoid penalties and legal issues.",
    icon: ShieldCheck,
  },
  {
    title: "Business Advisory Services",
    description: "Get expert advice to grow your business.",
    items: ["Business strategy", "Market guidance", "Growth planning"],
    icon: Lightbulb,
  },
];

const advancedServices = [
  {
    title: "Corporate Structuring",
    description: "Optimize your company structure for growth.",
    icon: GitBranch,
  },
  {
    title: "Risk Management",
    description: "Identify and reduce business risks.",
    icon: AlertTriangle,
  },
  {
    title: "Business Expansion Support",
    description: "Plan and execute business growth strategies.",
    icon: Rocket,
  },
];

const processSteps = [
  {
    step: "Step 1: Business Assessment",
    text: "We analyze your business needs.",
  },
  {
    step: "Step 2: Strategy Planning",
    text: "We create a customized plan.",
  },
  {
    step: "Step 3: Service Execution",
    text: "We implement required services.",
  },
  {
    step: "Step 4: Monitoring & Support",
    text: "We ensure ongoing compliance and growth.",
  },
];

const professionalBenefits = [
  "Protect your brand",
  "Improve business credibility",
  "Ensure legal compliance",
  "Save time & effort",
  "Scale faster",
];

const whoNeeds = [
  "Startups",
  "Small businesses",
  "Growing companies",
  "Investors",
];

const mistakes = [
  "Ignoring trademark protection",
  "Not maintaining compliance",
  "Poor financial setup",
  "No growth strategy",
];

const faqs = [
  {
    q: "What are business support services?",
    a: "They include services that help manage, protect, and grow your business.",
  },
  {
    q: "Is trademark registration necessary?",
    a: "Yes, it protects your brand legally.",
  },
  {
    q: "Why is ISO certification important?",
    a: "It builds trust and improves business quality.",
  },
  {
    q: "Can you help open a bank account?",
    a: "Yes, we provide complete support.",
  },
];

const packages = [
  {
    name: "Essential Support Package",
    tagline: "Best for small businesses and startups.",
    features: [
      "Trademark support",
      "Basic compliance",
      "Business consultation",
    ],
    highlighted: false,
  },
  {
    name: "Premium Business Support Package",
    tagline: "For growing businesses.",
    features: [
      "Trademark registration",
      "ISO certification support",
      "Banking assistance",
      "Full compliance monitoring",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
];

export default function BusinessSupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <h1 className="page-title mb-6">
              Business Support Services in UAE –{" "}
              <span style={{ color: "#155EEF" }}>
                Grow, Protect & Scale Your Business
              </span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              Take your business to the next level with professional business
              support services in the UAE. We provide everything you need after
              company formation — from branding to compliance and growth
              support.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Trademark", "ISO", "Banking", "Compliance"].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#F5F8FF", color: "#155EEF" }}
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="text-[#1D2939] mb-8 font-medium">
              End-to-end business support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                Get Business Support
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center px-8 py-4 rounded-full border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#1D2939", color: "#1D2939" }}
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
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="UAE business support services: trademark registration, ISO certification, and compliance"
              width={640}
              height={427}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2
              className="section-title mb-6"
            >
              Complete Business Support Services in{" "}
              <span style={{ color: "#155EEF" }}>UAE</span>
            </h2>
            <p className="lead text-[#667085] mb-4 leading-relaxed">
              Starting a business is only the first step. To grow successfully,
              you need ongoing support, legal protection, and operational
              systems. Our{" "}
              <strong>business support services UAE</strong> cover{" "}
              <strong>trademark registration UAE</strong>,{" "}
              <strong>ISO certification UAE</strong>,{" "}
              <strong>bank account opening UAE</strong>, and{" "}
              <strong>business compliance UAE</strong> — so you can operate with
              confidence.
            </p>
            <p className="font-semibold mb-4" style={{ color: "#1D2939" }}>
              Our business support services help you:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Protect your brand",
                "Build credibility",
                "Manage compliance",
                "Scale your business",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                    style={{ color: "#155EEF" }}
                  />
                  <span className="text-[#667085]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#667085] font-medium">
              We provide complete solutions for long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 max-w-3xl"
          >
            <h2
              className="section-title mb-4"
            >
              Why Choose Our Business Support Services?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl p-6 md:p-8 bg-white card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl" aria-hidden>
                    ✅
                  </span>
                  <h3
                    className="subsection-title"
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#667085] leading-relaxed pl-9">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key services */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2
              className="section-title mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Services We <span style={{ color: "#FFFFFF" }}>Offer</span>
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
                  style={{ backgroundColor: "#155EEF" }}
                >
                  <svc.icon className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                </div>
                <h3
                  className="subsection-title mb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-white/75 mb-4 leading-relaxed">
                  {svc.description}
                </p>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-2 text-white/70"
                >
                  Includes
                </p>
                <ul className="space-y-2 mb-4">
                  {svc.items.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm text-white/90"
                    >
                      <span className="text-[#155EEF] mt-0.5">👉</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                {svc.footnote && (
                  <p className="text-sm text-white/75 italic border-t border-white/10 pt-4">
                    👉 {svc.footnote}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced support */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center max-w-3xl mx-auto"
          >
            <h2
              className="section-title mb-4"
            >
              Additional Business Support{" "}
              <span style={{ color: "#155EEF" }}>Services</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advancedServices.map((svc, index) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl p-8 card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <svc.icon className="w-6 h-6" style={{ color: "var(--card-icon-fg)" }} />
                </div>
                <h3
                  className="subsection-title mb-3"
                >
                  {svc.title}
                </h3>
                <p className="text-[#667085] leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2
              className="section-title mb-4"
            >
              How Our Business Support Process{" "}
              <span style={{ color: "#155EEF" }}>Works</span>
            </h2>
          </motion.div>
          <div className="space-y-4 max-w-4xl">
            {processSteps.map((s, index) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 rounded-3xl p-6 shadow-sm bg-white border border-[#E4E7EC]"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3
                    className="subsection-title mb-1"
                  >
                    {s.step}
                  </h3>
                  <p className="text-[#667085]">{s.text}</p>
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
              className="section-title mb-4"
            >
              Flexible Business Support{" "}
              <span style={{ color: "#155EEF" }}>Packages</span>
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
                    ? { borderColor: "#155EEF", backgroundColor: "#F5F8FF" }
                    : { backgroundColor: "#F5F8FF" }
                }
              >
                {pkg.highlighted && (
                  <div
                    className="inline-block px-4 py-1 rounded-full mb-4 text-sm font-semibold"
                    style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                  >
                    Premium
                  </div>
                )}
                <h3
                  className="subsection-title mb-2"
                >
                  {pkg.name}
                </h3>
                <p className="text-[#667085] mb-6">{pkg.tagline}</p>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#1D2939" }}
                >
                  Includes:
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#155EEF" }}
                      />
                      <span className="text-[#667085]">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-2xl transition-all hover:opacity-90 font-semibold"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  Get Business Support
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2
              className="section-title mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Benefits of Professional Business{" "}
              <span style={{ color: "#FFFFFF" }}>Support</span>
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
                <span className="text-white/90 font-medium capitalize">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2
              className="section-title mb-4"
            >
              Who Can Benefit from These Services?
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {whoNeeds.map((label) => (
              <span
                key={label}
                className="px-5 py-2 rounded-full font-semibold bg-white border border-[#E4E7EC] shadow-sm"
                style={{ color: "#1D2939" }}
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-center text-[#667085] font-medium">
            Every business needs support to grow.
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
              className="section-title mb-4"
            >
              Common Business Support{" "}
              <span style={{ color: "#155EEF" }}>Mistakes</span>
            </h2>
            <p className="lead text-[#667085]">
              These can slow your business growth.
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
                  backgroundColor: "#FFFFFF",
                  borderColor: "#1D2939",
                }}
              >
                <span style={{ color: "#1D2939" }}>❌</span>
                <span className="text-[#1D2939] font-semibold">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2
              className="section-title mb-4"
            >
              Frequently Asked{" "}
              <span style={{ color: "#155EEF" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="border-[#E4E7EC]"
                >
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#1D2939" }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-[#155EEF]">❓</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#667085] text-base leading-relaxed pl-8">
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
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
            <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>
              Grow Your Business with Expert Support
            </h2>
            <p className="lead mb-4" style={{ color: "rgba(255,255,255,0.9)" }}>
              Don&apos;t stop at company formation — take your business to the
              next level.
            </p>
            <p className="lead mb-10" style={{ color: "rgba(255,255,255,0.9)" }}>
              Contact us today for complete business support services in UAE. We
              help you grow, protect, and scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#FFFFFF", color: "#155EEF" }}
              >
                <span>Get Support Now</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold transition-all hover:bg-white hover:text-[#155EEF]"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
        </motion.div>
      </section>
    </div>
  );
}
