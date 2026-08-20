'use client';

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { emirates } from "@/components/data/emirates";
import GuideCard from "@/components/GuideCard";

export default function EmiratesHubPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EAF1FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              UAE-Wide Coverage
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#071A2B' }}>
              Travelaxis <span style={{ color: '#155EEF' }}>Across the UAE</span>
            </h1>
            <p className="text-lg text-gray-600">
              Our office is based in Al Qusais, Dubai — we support company formation, government
              services, legal documentation, and visa documentation for clients across every
              emirate, remotely or by appointment. See our{" "}
              <Link href="/dubai" className="font-semibold" style={{ color: '#155EEF' }}>
                Dubai area pages
              </Link>{" "}
              for Dubai-specific detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emirate cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {emirates.map((emirate, index) => (
              <GuideCard
                key={emirate.slug}
                icon={MapPin}
                title={emirate.name}
                description={emirate.heroIntro}
                href={`/emirates/${emirate.slug}`}
                ariaLabel={`Business setup and visa documentation in ${emirate.name}`}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
