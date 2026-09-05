"use client";

import Link from "next/link";
import { ArrowRight, Plane, Building2 } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

const countries: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  {
    title: "UAE Visit Visa",
    description: "Visit visa duration, sponsors, and document requirements for the UAE.",
    icon: Plane,
    href: "/visit-visa/uae",
  },
  {
    title: "Saudi Arabia Visa Documentation",
    description: "Visit and business visa documentation, submitted through official Saudi channels.",
    icon: Building2,
    href: "/services/international-visas#saudi-arabia",
  },
];

export default function VisitVisaMiddleEastPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services", href: "/visit-visa" }, { name: "Middle East" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Middle East <span style={{ color: "#155EEF" }}>Visit Visas</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Visit visa documentation for the UAE and Saudi Arabia, submitted through official
              channels.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {countries.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl p-6 bg-white card-hover block"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <h3 className="subsection-title mb-1">{item.title}</h3>
                <p className="text-sm text-[#667085] mb-3">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#155EEF" }}>
                  View requirements
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Middle East" />
        </div>
      </section>
    </div>
  );
}
