"use client";

import Link from "next/link";
import { ArrowRight, Flag, Snowflake } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

const countries: { title: string; description: string; icon: LucideIcon; href: string }[] = [
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
];

export default function VisitVisaNorthAmericaPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services", href: "/visit-visa" }, { name: "North America" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              North America <span style={{ color: "#155EEF" }}>Visit Visas</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Visit visa documentation for the USA and Canada, submitted through each country&apos;s
              own official process.
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
          <VisitVisaEnquiryForm defaultDestination="North America" />
        </div>
      </section>
    </div>
  );
}
