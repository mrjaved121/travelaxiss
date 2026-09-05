"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Landmark, Snowflake, Building2, MapPin, Sun, Globe2, IdCard } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

type FilterKey = "visit" | "study" | "residency";

const filters: { key: FilterKey; label: string }[] = [
  { key: "visit", label: "Visit Visa" },
  { key: "study", label: "Study Visa" },
  { key: "residency", label: "UAE Residency" },
];

const visitRegions: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  { title: "Europe", description: "UK and all 18 Schengen member states", icon: Landmark, href: "/visit-visa/europe" },
  { title: "North America", description: "USA and Canada", icon: Snowflake, href: "/visit-visa/north-america" },
  { title: "Middle East", description: "UAE and Saudi Arabia", icon: Building2, href: "/visit-visa/middle-east" },
  { title: "Asia", description: "Indonesia, China, Japan, Turkey, Singapore", icon: MapPin, href: "/visit-visa/asia" },
  { title: "Oceania", description: "Australia", icon: Sun, href: "/visit-visa/oceania" },
  { title: "Africa", description: "South Africa", icon: Globe2, href: "/visit-visa/africa" },
];

const studyCountries: { title: string; description: string; icon: LucideIcon; href: string }[] = [
  { title: "UK", description: "Student Visa documentation for admitted students with a CAS.", icon: Landmark, href: "/study-visa/uk" },
  { title: "USA", description: "F1 Student Visa documentation, DS-160 review, and interview prep.", icon: Sun, href: "/study-visa/usa" },
  { title: "Canada", description: "Study Permit documentation for a Letter of Acceptance.", icon: Snowflake, href: "/study-visa/canada" },
  { title: "Australia", description: "Student Visa (Subclass 500) documentation.", icon: Sun, href: "/study-visa/australia" },
  { title: "Germany", description: "Student/Ausbildung Visa documentation.", icon: Globe2, href: "/services/germany-visa-from-pakistan" },
];

export default function DestinationsPage() {
  const [active, setActive] = useState<FilterKey>("visit");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Destinations</p>
            <h1 className="page-title mb-6">
              Explore Visa <span style={{ color: "#155EEF" }}>Destinations</span>
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Find visa application support by region and travel purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b" style={{ borderColor: "#E4E7EC" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter destinations by visa type">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActive(filter.key)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all"
                style={
                  active === filter.key
                    ? { backgroundColor: "#155EEF", color: "#FFFFFF", borderColor: "#155EEF" }
                    : { backgroundColor: "#FFFFFF", color: "#1D2939", borderColor: "var(--card-line)" }
                }
                aria-pressed={active === filter.key}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Visa: regions */}
      {active === "visit" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="section-title mb-3">Visit Visas by Region</h2>
              <p className="text-[#667085]">
                Each region opens onto the countries we support most, with a direct link to
                requirements and an enquiry form.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitRegions.map((region, index) => (
                <motion.div
                  key={region.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={region.href}
                    className="block rounded-3xl p-6 bg-white card-hover h-full"
                    style={{ border: "1px solid var(--card-line)" }}
                  >
                    <div className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4" style={{ backgroundColor: "var(--card-icon-bg)" }}>
                      <region.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                    </div>
                    <h3 className="subsection-title mb-1">{region.title}</h3>
                    <p className="text-sm text-[#667085] mb-3">{region.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#155EEF" }}>
                      Explore {region.title} visit visas
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Study Visa: countries */}
      {active === "study" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="section-title mb-3">Study Visa Destinations</h2>
              <p className="text-[#667085]">
                Student visa document preparation for the destinations our clients ask about most.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyCountries.map((country, index) => (
                <motion.div
                  key={country.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={country.href}
                    className="block rounded-3xl p-6 bg-white card-hover h-full"
                    style={{ border: "1px solid var(--card-line)" }}
                  >
                    <div className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4" style={{ backgroundColor: "var(--card-icon-bg)" }}>
                      <country.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                    </div>
                    <h3 className="subsection-title mb-1">{country.title}</h3>
                    <p className="text-sm text-[#667085] mb-3">{country.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#155EEF" }}>
                      View requirements
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* UAE Residency */}
      {active === "residency" && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-3">UAE Residency Support</h2>
            <p className="text-[#667085] mb-8">
              UAE residency isn&apos;t organised by travel destination — it covers investor,
              family, visit, and renewal categories within the UAE itself.
            </p>
            <Link
              href="/services/visa-services"
              className="inline-flex items-center justify-center gap-3 rounded-3xl p-6 bg-white card-hover max-w-sm mx-auto"
              style={{ border: "1px solid var(--card-line)" }}
            >
              <IdCard className="w-6 h-6" style={{ color: "#155EEF" }} aria-hidden />
              <span className="font-semibold" style={{ color: "#1D2939" }}>
                See UAE Residency Support
              </span>
              <ArrowRight className="w-4 h-4" style={{ color: "#155EEF" }} aria-hidden />
            </Link>
          </div>
        </section>
      )}

      <section className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-note text-center max-w-2xl mx-auto">
            Travelaxis provides documentation, consultancy, and application support — not
            government decisions. Final visa and immigration outcomes are determined by the
            relevant authorities.
          </p>
        </div>
      </section>
    </div>
  );
}
