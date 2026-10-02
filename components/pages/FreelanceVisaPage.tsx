"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Laptop,
  Building2,
  Globe2,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  dubaiActivityGroups,
  dubaiCostRows,
  freelanceVisaFaqs,
  FREELANCE_SOURCE_GOFREELANCE,
  FREELANCE_SOURCE_TWOFOUR54,
  FREELANCE_SOURCE_MOHRE,
} from "@/components/data/freelanceVisaUae";

const WHATSAPP_HREF =
  "https://wa.me/971589867555?text=" + encodeURIComponent("Hi, I want a UAE freelance visa");
const linkClass = "font-semibold underline-offset-2 hover:underline";

const quickFacts = [
  { label: "Visa type", value: "Freelance permit + self-sponsored residence visa" },
  { label: "Where", value: "Dubai (GoFreelance/TECOM, IFZA, DMCC) or Abu Dhabi (twofour54, ADDED)" },
  { label: "Dubai permit from", value: "AED 7,500/year (GoFreelance)" },
  { label: "Residence visa", value: "1 or 2 years, no employer needed" },
];

const whatsIncluded = [
  "Freelance permit / licence application (Dubai or Abu Dhabi)",
  "Establishment Card registration",
  "Entry permit / status change (inside or outside the UAE)",
  "Medical fitness test booking",
  "Emirates ID registration & biometrics",
  "Residence visa application",
  "Bank account opening guidance",
];

const steps = [
  { title: "Free consultation", description: "We recommend the right emirate, free zone and activity for your field." },
  { title: "Permit & documents", description: "We apply for your freelance permit and Establishment Card." },
  { title: "Entry permit, medical & Emirates ID", description: "We guide you through each step and appointment." },
  { title: "Residence visa issued", description: "You're a legal UAE freelancer, ready to invoice clients." },
];

const guides = [
  {
    title: "Freelance Visa UAE – Complete Guide for Beginners",
    description: "Eligibility, benefits, license types, and the step-by-step process.",
    href: "/blog/freelance-visa-uae-guide",
  },
];

export default function FreelanceVisaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Services", href: "/services" }, { name: "Freelance Visa" }]} />
            <p className="eyebrow mb-3">Freelance Visa Documentation</p>
            <h1 className="page-title mb-6">
              Freelance Visa in Dubai <span style={{ color: "#155EEF" }}>&amp; the UAE</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              A freelance permit lets you work for yourself in the UAE and sponsor your own
              residence visa — no company or employer needed. It&apos;s available in Dubai
              through GoFreelance (TECOM) and other free zones, and in Abu Dhabi through
              twofour54 and ADDED. We handle the permit, Establishment Card, medical, Emirates
              ID and residence visa for you.
            </p>
            <p className="text-sm text-[#667085] mb-6">
              Last updated October 2026 · Checked against gofreelance.ae and twofour54.com
            </p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              We provide documentation assistance and consultancy support only. We are not
              GoFreelance, twofour54, ADDED, or MOHRE, and we do not guarantee approval. Permits
              and visas are issued through the relevant free zone or government authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cost"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>See the Cost</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about a UAE freelance visa (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl p-4 text-center" style={{ backgroundColor: "#F5F8FF" }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#155EEF" }}>
                  {fact.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "#1D2939" }}>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-4">What Is a UAE Freelance Visa?</h2>
          <p className="text-[#667085] leading-relaxed">
            A UAE freelance visa is a residence visa obtained through a freelance permit — a
            licence that lets you work independently in an approved activity without a company
            or employer sponsor. Once you hold the permit, you can legally invoice clients, open
            a bank account, and sponsor your own stay in the UAE. It suits consultants,
            developers, designers, marketers, educators and other independent professionals.
          </p>
        </div>
      </section>

      {/* Where to get one */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">Where Can You Get a Freelance Visa in the UAE?</h2>
          <p className="text-[#667085] leading-relaxed mb-6">
            Freelance permits are issued by individual free zones and government departments —
            there&apos;s no single UAE-wide freelance visa.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
              <Laptop className="w-6 h-6 mb-3" style={{ color: "#155EEF" }} aria-hidden />
              <h3 className="subsection-title mb-2">Dubai</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                GoFreelance (TECOM — Dubai Media City, Internet City, Design District and
                Knowledge Park) is the main route. Other Dubai free zones, including IFZA and
                DMCC, also offer their own freelance packages.
              </p>
            </div>
            <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
              <Building2 className="w-6 h-6 mb-3" style={{ color: "#155EEF" }} aria-hidden />
              <h3 className="subsection-title mb-2">Abu Dhabi</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                twofour54 issues a Sole Proprietor freelance permit for media, creative and tech
                fields, and ADDED offers a mainland freelance licence for other activities.
              </p>
            </div>
            <div className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
              <Globe2 className="w-6 h-6 mb-3" style={{ color: "#155EEF" }} aria-hidden />
              <h3 className="subsection-title mb-2">UAE-wide</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                MOHRE also runs a federal freelance/self-employment permit route alongside the
                free-zone options above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section id="cost" className="py-16 scroll-mt-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-3">How Much Does a Freelance Visa Cost in Dubai?</h2>
          <p className="text-[#667085] leading-relaxed mb-6">
            GoFreelance, the TECOM-backed Dubai freelance platform, publishes its own fees: the
            freelance package starts from AED 7,500 a year, and the residence visa and
            Establishment Card are priced separately.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E4E7EC] shadow-sm mb-4 overflow-hidden bg-white"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-normal">Item</TableHead>
                  <TableHead className="whitespace-normal">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dubaiCostRows.map((row) => (
                  <TableRow key={row.item}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#1D2939" }}>
                      {row.item}
                    </TableCell>
                    <TableCell className="whitespace-normal text-[#667085]">{row.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <p className="text-sm text-[#667085] mb-2">
            Source:{" "}
            <a href={FREELANCE_SOURCE_GOFREELANCE} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
              GoFreelance (TECOM)
            </a>
            . Visa and Establishment Card fees are marked subject to change; health insurance and
            the medical fitness test are required but priced separately.
          </p>
          <p className="text-sm text-[#667085]">
            Abu Dhabi (twofour54, ADDED) and other Dubai free zones (IFZA, DMCC) don&apos;t
            currently publish a public fee schedule — message us on WhatsApp and we&apos;ll
            confirm the current cost for your activity and emirate.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">What&apos;s Included When You Apply With Travelaxis</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#667085] text-sm rounded-xl p-4" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
            style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
            aria-label="Get a fixed quote for a UAE freelance visa on WhatsApp (opens in a new tab)"
          >
            <span>Get a Fixed Quote on WhatsApp</span>
            <ArrowRight className="w-5 h-5" aria-hidden />
          </a>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-4">Who Is Eligible for a UAE Freelance Visa?</h2>
          <p className="text-[#667085] leading-relaxed mb-4">
            GoFreelance groups eligible Dubai activities into four categories: <strong>Tech</strong>{" "}
            (software, web and IT), <strong>Media</strong> (content, photography, production),{" "}
            <strong>Education</strong> (training and consulting) and <strong>Design</strong>{" "}
            (fashion, interior, graphic and product design). Abu Dhabi&apos;s twofour54 route
            focuses on media, creative and tech fields.
          </p>
          <p className="text-[#667085] leading-relaxed">
            Typical documents: a valid passport, a passport photo, a CV, and — for Abu Dhabi or
            creative categories — a portfolio or professional references. The visa stage also
            needs a UAE phone number and valid health insurance.
          </p>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">How to Get a Freelance Visa With Travelaxis</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl p-6" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                  Step {i + 1}
                </p>
                <h3 className="subsection-title mb-2">{step.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abu Dhabi */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-4">Does Abu Dhabi Offer a Freelance Visa?</h2>
          <p className="text-[#667085] leading-relaxed mb-4">
            Yes. twofour54 issues a &ldquo;Sole Proprietor License&rdquo; for freelancers in media,
            entertainment and gaming, and also guides successful applicants through the residency
            application. ADDED separately offers a mainland freelance licence for other
            professional activities. Abu Dhabi can be a good fit for eligible creative and tech
            fields, but like Dubai, the exact current fee depends on your category.
          </p>
          <p className="text-sm text-[#667085]">
            Source:{" "}
            <a href={FREELANCE_SOURCE_TWOFOUR54} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
              twofour54 — freelance work permit
            </a>
            {" "}· Federal route:{" "}
            <a href={FREELANCE_SOURCE_MOHRE} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
              MOHRE
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {freelanceVisaFaqs.map((faq, i) => (
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
        </div>
      </section>

      {/* Guides */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6 text-center">Freelance Visa Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-start gap-4 rounded-3xl p-6 card-hover bg-white"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#155EEF" }} aria-hidden>
                  <BookOpen className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                </div>
                <div className="flex-1">
                  <h3 className="subsection-title mb-1">{guide.title}</h3>
                  <p className="text-sm text-[#667085]">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/uae" className="font-semibold hover:underline" style={{ color: "#155EEF" }}>
              See all UAE visa services
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
