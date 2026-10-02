"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";
import { jobSeekerCountries, jobSeekerFaqs } from "@/components/data/jobSeekerVisa";

const WHATSAPP_HREF = "https://wa.me/971589867555";
const linkClass = "font-semibold underline-offset-2 hover:underline";

const guides = [
  {
    title: "UAE Job-Seeker Visa from Pakistan",
    description: "Eligibility, the 60/90/120-day options, documents and the Pakistan attestation chain.",
    href: "/blog/job-seeker-visa-from-pakistan",
  },
  {
    title: "UAE Job Seeker Visa – Eligibility & Document Checklist",
    description: "The official conditions and what to prepare before you travel.",
    href: "/blog/job-seeker-visa-uae-documents-guide",
  },
];

export default function JobSeekerVisaPage() {
  const open = jobSeekerCountries.filter((c) => c.status === "open");
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Job Seeker Visa" }]} />
            <p className="eyebrow mb-3">Job Seeker Visa Documentation</p>
            <h1 className="page-title mb-6">
              Job Seeker Visa <span style={{ color: "#155EEF" }}>from Pakistan &amp; India</span>
            </h1>
            <p className="lead text-[#667085] mb-6 leading-relaxed">
              A job seeker visa lets you travel to look for work before you have an offer. We prepare the
              documentation for the UAE, Germany, Austria and Sweden job seeker routes for applicants from
              Pakistan and India — checked against each country&apos;s official rules.
            </p>
            <p className="text-sm text-[#667085] mb-6">
              Last updated September 2026 · Checked against official government sources
            </p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              We are a documentation and consultancy service, not a recruitment agency or employer. We
              don&apos;t find jobs, and the visa decision is made only by the country you apply to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#countries"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:bg-primary-hover shadow-md hover:shadow-lg bg-primary"
                style={{ color: "#FFFFFF" }}
              >
                <span>Compare Countries</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90 bg-white"
                style={{ borderColor: "#E4E7EC", color: "#1D2939" }}
                aria-label="Chat with Travelaxis on WhatsApp about job seeker visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#155EEF" }} aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">Job Seeker Visas at a Glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {open.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="rounded-2xl p-5 card-hover block"
                style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#155EEF" }}>{c.country}</p>
                <p className="text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>{c.name}</p>
                <p className="text-sm text-[#667085]">{c.facts[0].value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="py-16 scroll-mt-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {jobSeekerCountries.map((c) => (
            <article
              key={c.slug}
              id={c.slug}
              className="rounded-3xl p-6 md:p-8 bg-white scroll-mt-24"
              style={{ border: "1px solid var(--card-line)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: c.status === "open" ? "#155EEF" : "#667085" }}>
                {c.country}
              </p>
              <h2 className="subsection-title mb-3">{c.name}</h2>
              <p className="text-[#667085] leading-relaxed mb-5">{c.summary}</p>
              <dl className="grid sm:grid-cols-2 gap-3 mb-5">
                {c.facts.map((f) => (
                  <div key={f.label} className="rounded-xl p-4" style={{ backgroundColor: "#F5F8FF" }}>
                    <dt className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#155EEF" }}>{f.label}</dt>
                    <dd className="text-sm" style={{ color: "#1D2939" }}>{f.value}</dd>
                  </div>
                ))}
              </dl>
              {c.documents && (
                <>
                  <h3 className="text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>Documents</h3>
                  <ul className="space-y-2 mb-5">
                    {c.documents.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[#667085]">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {c.notes?.map((n) => (
                <p key={n} className="text-sm text-[#667085] leading-relaxed mb-3">{n}</p>
              ))}
              {c.slug === "germany" && (
                <p className="text-sm text-[#667085] leading-relaxed mb-3">
                  Official self-check:{" "}
                  <a href="https://www.make-it-in-germany.com/en/visa-residence/opportunity-card/self-check" target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
                    Make it in Germany — Opportunity Card
                  </a>
                  .
                </p>
              )}
              <p className="text-sm text-[#667085]">
                Source:{" "}
                <a href={c.source.href} target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "#155EEF" }}>
                  {c.source.label}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How we help */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">How Travelaxis Helps</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Checking which country's conditions you actually meet before you spend money",
              "A document checklist built from the official page for your chosen country",
              "Organising your degree, experience and financial documents so they are consistent",
              "Guidance on where and how to submit — online, at an embassy or through the official portal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl p-5" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                <span className="text-sm text-[#667085]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="requirements-form" className="py-20 scroll-mt-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm
            defaultDestination="Job seeker visa"
            heading="Get Help With Your Job Seeker Visa Documents"
            subheading="Tell us your degree, experience and which country you are considering. We'll check the official conditions with you."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {jobSeekerFaqs.map((faq, i) => (
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
          <h2 className="section-title mb-6 text-center">Job Seeker Visa Guides</h2>
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
