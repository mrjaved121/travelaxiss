"use client";

import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { motion } from "motion/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

export default function VisitVisaOceaniaPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services", href: "/visit-visa" }, { name: "Oceania" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Oceania <span style={{ color: "#155EEF" }}>Visit Visas</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Visit visa documentation for Australia, submitted through the Department of Home
              Affairs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/visit-visa/australia"
            className="block rounded-3xl p-6 bg-white card-hover max-w-md"
            style={{ border: "1px solid var(--card-line)" }}
          >
            <div
              className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--card-icon-bg)" }}
            >
              <Sun className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
            </div>
            <h3 className="subsection-title mb-1">Australia Visitor Visa</h3>
            <p className="text-sm text-[#667085] mb-3">Visitor Visa (Subclass 600) documentation for Australia.</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#155EEF" }}>
              View requirements
              <ArrowRight className="w-4 h-4" aria-hidden />
            </span>
          </Link>
          <p className="text-sm text-[#667085] mt-6">
            Planning to visit New Zealand or elsewhere in the region? Tell us in the form below
            and we&apos;ll check what we can help with.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Oceania" />
        </div>
      </section>
    </div>
  );
}
