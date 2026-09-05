"use client";

import { motion } from "motion/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";

const countries = ["Indonesia (Bali)", "China", "Japan", "Turkey", "Singapore"];

export default function VisitVisaAsiaPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Breadcrumbs trail={[{ name: "Visit Visa Services", href: "/visit-visa" }, { name: "Asia" }]} />
            <p className="eyebrow mb-3">Visit Visa Services</p>
            <h1 className="page-title mb-6">
              Asia <span style={{ color: "#155EEF" }}>Visit Visas</span>
            </h1>
            <p className="lead text-[#667085] leading-relaxed">
              Documentation assistance for visit and business visa applications across Asian
              destination countries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#667085] mb-6">
            A snapshot of the Asian destinations we&apos;re most commonly asked about. Don&apos;t
            see yours listed — tell us in the form below and we&apos;ll check.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country) => (
              <div
                key={country}
                className="rounded-2xl px-4 py-3.5 text-center bg-white"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "#1D2939" }}>{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination="Asia" />
        </div>
      </section>
    </div>
  );
}
