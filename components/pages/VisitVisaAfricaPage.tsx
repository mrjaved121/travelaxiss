"use client";

import { motion } from "motion/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

export default function VisitVisaAfricaPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services", href: "/visit-visa" }, { name: "Africa" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Africa <span style={{ color: "#155EEF" }}>Visit Visas</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Visit visa documentation support for African destination countries, most commonly
              South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl px-4 py-3.5 text-center bg-white max-w-xs"
            style={{ border: "1px solid var(--card-line)" }}
          >
            <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>South Africa</p>
          </div>
          <p className="text-sm text-[#667085] mt-6">
            Planning to visit elsewhere in Africa? Tell us in the form below and we&apos;ll check
            what we can help with.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Africa" />
        </div>
      </section>
    </div>
  );
}
