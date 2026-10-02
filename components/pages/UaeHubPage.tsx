"use client";

import Link from "next/link";
import { Plane, Briefcase, Award, Laptop, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideCard from "@/components/GuideCard";
import { uaeHubFaqs } from "@/components/data/uaeHubFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const routes = [
  {
    title: "UAE Visit Visa",
    description:
      "Visiting as a tourist or to see family. 30, 60 or 90-day durations, sponsor routes, documents, and what the price is made of.",
    icon: Plane,
    href: "/visit-visa/uae",
    badge: "Short stay",
  },
  {
    title: "UAE Job Seeker Visa",
    description:
      "Travelling to the UAE to look for work in person. 60, 90 or 120-day options, plus Germany, Austria and Sweden job seeker routes.",
    icon: Briefcase,
    href: "/job-seeker-visa",
    badge: "Job search",
  },
  {
    title: "UAE Golden Visa",
    description:
      "5 or 10-year UAE residence for investors, entrepreneurs, exceptional talent, outstanding students and humanitarian pioneers.",
    icon: Award,
    href: "/services/uae-golden-visa",
    badge: "Long-term residence",
  },
  {
    title: "Freelance Visa",
    description:
      "Working for yourself in the UAE. A GoFreelance (Dubai) or twofour54 (Abu Dhabi) permit lets you sponsor your own residence visa — no employer needed.",
    icon: Laptop,
    href: "/services/freelance-visa-dubai",
    badge: "Self-employed",
  },
];

export default function UaeHubPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "UAE Visa Services" }]} />
            <p className="eyebrow mb-3">UAE Visa Services</p>
            <h1 className="page-title mb-6">
              Which UAE Visa <span style={{ color: "#155EEF" }}>Is Right for You?</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Travelaxis offers documentation support for four UAE routes from our Dubai and
              Lahore offices: the visit visa, the job seeker visa, the Golden Visa, and the
              freelance visa. We don&apos;t offer UAE business setup, government/PRO services,
              document attestation, or Umrah services — pick the route below that matches your
              situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-white" aria-labelledby="uae-routes-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="uae-routes-heading" className="sr-only">
            UAE visa routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {routes.map((route, index) => (
              <GuideCard
                key={route.href}
                icon={route.icon}
                title={route.title}
                description={route.description}
                href={route.href}
                badge={route.badge}
                ctaLabel="See Requirements"
                delay={index * 0.08}
              />
            ))}
          </div>
          <p className="text-center mt-12">
            <Link href="/pakistan" className="font-semibold hover:underline" style={{ color: "#155EEF" }}>
              See our other visa guides for clients in Pakistan
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]">
            <Accordion type="single" collapsible className="w-full">
              {uaeHubFaqs.map((faq, i) => (
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

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>
            Not Sure Which Route Fits?
          </h2>
          <p className="text-white/90 mb-8">
            Message us on WhatsApp and we&apos;ll tell you exactly which UAE visa fits your
            situation.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            aria-label="Chat with Travelaxis on WhatsApp about UAE visa services (opens in a new tab)"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
