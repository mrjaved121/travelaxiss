"use client";

import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Building2,
  Globe2,
  Anchor,
  FileBadge,
  Shield,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide business setup documentation and consultancy support only. We are not a licensed tax advisory or law firm, a government authority, or a bank, and we do not guarantee licence approval, tax outcomes, or business results. Formation is completed through official UAE government and free zone channels, subject to their rules and approvals.";

const relatedServices = [
  { href: "/services/study-visa", label: "Study Visas" },
  { href: "/services/visit-visa", label: "Tourist & Visit Visas" },
  { href: "/services/visa-services", label: "UAE Residency Visas" },
  { href: "/services/attestation", label: "Document Services" },
];

const whyChooseUs = [
  {
    title: "Expert Guidance",
    body: "We help you select the right business structure based on your goals.",
  },
  {
    title: "Efficient Processing",
    body: "We keep your setup moving and reduce avoidable delays.",
  },
  {
    title: "Complete Transparency",
    body: "No hidden steps — everything is clear and easy to follow.",
  },
  {
    title: "End-to-End Support",
    body: "From idea to launch — we stay with you through the journey.",
  },
];

const formationServices: {
  title: string;
  description: string;
  listLabel: "Benefits" | "Includes";
  items: string[];
  icon: typeof Building2;
}[] = [
  {
    title: "Mainland Company Setup",
    description:
      "Start your business in the UAE mainland and operate freely across the country.",
    listLabel: "Benefits",
    items: [
      "Wide range of permitted business activities",
      "Access to UAE local market",
      "Eligible for government contracts",
    ],
    icon: Building2,
  },
  {
    title: "Freezone Company Formation",
    description:
      "Perfect for startups and international entrepreneurs who want a streamlined setup.",
    listLabel: "Benefits",
    items: [
      "100% foreign ownership",
      "Easy and fast setup",
      "No physical office required (in many cases)",
    ],
    icon: Globe2,
  },
  {
    title: "Offshore Company Setup",
    description:
      "Best for international business and asset management structures.",
    listLabel: "Benefits",
    items: [
      "UAE tax treatment, activity- and structure-dependent",
      "Confidential ownership structure, within UAE rules",
      "Global business operations",
    ],
    icon: Anchor,
  },
  {
    title: "Trade License Processing",
    description:
      "We handle the complete process of obtaining your UAE trade license.",
    listLabel: "Includes",
    items: [
      "Business activity selection",
      "License approval",
      "Documentation handling",
    ],
    icon: FileBadge,
  },
  {
    title: "Regulatory Compliance Support",
    description:
      "Ensure your business meets UAE legal requirements as they evolve.",
    listLabel: "Includes",
    items: [
      "Ongoing compliance support",
      "License renewals",
      "Regulatory updates",
    ],
    icon: Shield,
  },
];

const processSteps = [
  {
    step: "Step 1: Business Consultation",
    text: "We understand your business idea and goals.",
  },
  {
    step: "Step 2: Choose Business Structure",
    text: "Mainland, freezone, or offshore — aligned with your plan.",
  },
  {
    step: "Step 3: Documentation & Approval",
    text: "We prepare and submit all required documents.",
  },
  {
    step: "Step 4: Trade License Issuance",
    text: "Your business becomes officially registered.",
  },
  {
    step: "Step 5: Business Launch",
    text: "You are ready to operate in the UAE.",
  },
];

const uaeBenefits = [
  "Strong economy",
  "Tax advantages",
  "Global business hub",
  "Strategic location",
  "Business-friendly environment",
];

const whoBenefits = [
  "Entrepreneurs",
  "Startups",
  "Investors",
  "Freelancers",
  "International business owners",
];

const faqs = [
  {
    q: "How can I start a company in UAE?",
    a: "You need to choose a business type, submit the right documents, and obtain a trade license. We guide you through each step.",
  },
  {
    q: "Can foreigners open a company in UAE?",
    a: "Yes. Foreigners can own and operate businesses in the UAE, including in many freezones with full foreign ownership.",
  },
  {
    q: "Which is better: mainland or freezone?",
    a: "It depends on your business goals, target market, and whether you need to trade directly with the UAE mainland. We help you compare options.",
  },
  {
    q: "Do I need an office?",
    a: "It depends on your license type and jurisdiction. Some freezones allow flexible or shared office arrangements.",
  },
];

const packages = [
  {
    name: "Standard Company Formation",
    tagline: "Best for startups and small businesses.",
    features: [
      "Complete documentation",
      "Trade license processing",
      "Government approvals",
      "Basic compliance setup",
    ],
    footnote: "Ideal for budget-friendly setup",
    highlighted: false,
  },
  {
    name: "Express Company Formation",
    tagline: "For a quicker launch.",
    features: [
      "Priority processing",
      "Priority government coordination",
      "Dedicated support",
      "Premium assistance",
    ],
    footnote: "Ideal for time-sensitive business setup",
    highlighted: true,
  },
];

export default function CompanyFormationPage() {
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
            <Breadcrumbs trail={[{ name: "Services", href: "/services" }, { name: "Business & Investment" }]} />
            <h1 className="page-title mb-6">
              Company Formation in UAE – Start Your Business with{" "}
              <span style={{ color: "#155EEF" }}>Confidence</span>
            </h1>
            <p className="lead text-[#667085] mb-4 leading-relaxed">
              Start your business in the UAE with a simple and stress-free
              process. We help entrepreneurs, startups, and investors set up
              companies with complete documentation support and fast approvals.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Mainland", "Freezone", "Offshore"].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#F5F8FF", color: "#155EEF" }}
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="text-[#667085] mb-4 font-medium">
              Guidance from start to finish.
            </p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                Get a Free Quote
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
              alt="UAE company formation: mainland, freezone, and offshore business setup"
              width={640}
              height={427}
              className="absolute inset-0 w-full h-full object-contain"
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
              className="section-title mb-6"
            >
              Complete Company Formation Services in{" "}
              <span style={{ color: "#155EEF" }}>UAE</span>
            </h2>
            <p className="lead text-[#667085] mb-4 leading-relaxed">
              We provide complete business setup solutions in the UAE — from{" "}
              <strong>company formation UAE</strong> and{" "}
              <strong>business setup UAE</strong> to{" "}
              <strong>UAE company registration</strong> and{" "}
              <strong>trade license UAE</strong> support — helping you turn your
              idea into a legally established company.
            </p>
            <p className="text-[#667085] mb-8 leading-relaxed">
              From choosing the right structure to getting your trade license,
              our team handles everything with accuracy and speed. If you want
              to <strong>start a business in Dubai</strong> or elsewhere in the
              Emirates, we map the right path for you.
            </p>
            <p className="font-semibold mb-4" style={{ color: "#1D2939" }}>
              We help you:
            </p>
            <ul className="space-y-3">
              {[
                "Choose the right business structure",
                "Complete legal documentation",
                "Get government approvals",
                "Launch your business smoothly",
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
              Why Choose Our Company Formation Services?
            </h2>
            <p className="lead text-[#667085] leading-relaxed">
              Starting a business in the UAE involves multiple steps, approvals,
              and legal requirements. Our experts simplify the entire process
              for you.
            </p>
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
                  <CheckCircle
                    className="w-6 h-6 shrink-0 mt-0.5"
                    style={{ color: "#155EEF" }}
                    aria-hidden
                  />
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

      {/* Services we offer */}
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
              Business Setup Services We{" "}
              <span style={{ color: "#FFFFFF" }}>Offer</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formationServices.map((svc, index) => (
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
                  {svc.listLabel}
                </p>
                <ul className="space-y-2">
                  {svc.items.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm text-white/90"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-white/90" aria-hidden />
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
              className="section-title mb-4"
            >
              Step-by-Step Company Formation Process in{" "}
              <span style={{ color: "#155EEF" }}>UAE</span>
            </h2>
            <p className="lead text-[#667085] max-w-3xl">
              We follow a simple and structured process to set up your business.
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
                style={{ backgroundColor: "#F5F8FF" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="subsection-title mb-1">
                    {s.step}
                  </h3>
                  <p className="text-[#667085]">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2
              className="section-title mb-8"
            >
              How Long Does Company Formation{" "}
              <span style={{ color: "#155EEF" }}>Take?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-2xl p-6 bg-white card-hover transition-all duration-200 hover:-translate-y-1" style={{ border: "1px solid var(--card-line)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-6 h-6" style={{ color: "#155EEF" }} />
                  <h3 className="subsection-title">
                    Standard process
                  </h3>
                </div>
                <p className="text-2xl font-bold mb-1" style={{ color: "#155EEF" }}>
                  5–10 working days
                </p>
                <p className="text-[#667085] text-sm">
                  Typical timeline for many setups once documents are complete.
                </p>
              </div>
              <div className="rounded-2xl p-6 bg-white card-hover transition-all duration-200 hover:-translate-y-1" style={{ border: "1px solid var(--card-line)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6" style={{ color: "#155EEF" }} />
                  <h3 className="subsection-title">
                    Express setup
                  </h3>
                </div>
                <p className="font-semibold text-[#1D2939] mb-1">
                  Priority handling available
                </p>
                <p className="text-[#667085] text-sm">
                  For eligible cases when urgency and completeness align.
                </p>
              </div>
            </div>
            <p className="text-[#667085] italic">
              Time depends on approvals, activity type, and jurisdiction.
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
              className="section-title mb-4"
            >
              Flexible Business Setup{" "}
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
                    Fast track
                  </div>
                )}
                <h3
                  className="subsection-title mb-2"
                >
                  {pkg.name}
                </h3>
                <p className="text-[#667085] mb-6">{pkg.tagline}</p>
                <p className="text-sm font-semibold mb-3" style={{ color: "#1D2939" }}>
                  Includes:
                </p>
                <ul className="space-y-3 mb-6">
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
                <p className="text-sm text-[#667085] mb-6 italic">
                  {pkg.footnote}
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-2xl transition-all hover:opacity-90 font-semibold"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UAE */}
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
              Why Start a Business in{" "}
              <span style={{ color: "#FFFFFF" }}>UAE?</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {uaeBenefits.map((b, index) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="flex items-center gap-3 rounded-2xl px-4 py-4 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <CheckCircle className="w-5 h-5 shrink-0 text-white/90" aria-hidden />
                <span className="text-white/90 font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who benefits */}
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
              Who Can Benefit from Company Formation?
            </h2>
            <p className="lead text-[#667085] max-w-2xl mx-auto">
              UAE offers opportunities for many types of founders and owners.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {whoBenefits.map((label) => (
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
            UAE offers opportunities for everyone — we tailor the route to your profile.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2
              className="section-title mb-4"
            >
              Frequently Asked <span style={{ color: "#155EEF" }}>Questions</span>
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E4E7EC]">
                <AccordionTrigger className="text-left text-base font-bold py-5 hover:no-underline" style={{ color: "#1D2939" }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#667085] text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related services */}
      <RelatedLinks links={relatedServices} />

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>
            Start Your Business in UAE Today
          </h2>
          <p className="lead mb-4" style={{ color: "rgba(255,255,255,0.9)" }}>Ready to launch your business?</p>
          <p className="lead mb-10" style={{ color: "rgba(255,255,255,0.9)" }}>
            Contact us today for expert company formation services. We make the
            process simple, clear, and well-organised.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#FFFFFF", color: "#155EEF" }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold transition-all hover:bg-white hover:text-[#155EEF]"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
