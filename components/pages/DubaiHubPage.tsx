'use client';

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { dubaiAreas } from "@/components/data/dubaiAreas";
import GuideCard from "@/components/GuideCard";

export default function DubaiHubPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              Areas We Serve
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Travelaxis <span style={{ color: '#1D63E0' }}>Across Dubai</span>
            </h1>
            <p className="text-lg text-gray-600">
              Our office is based in Al Qusais, Dubai — we support company formation, government
              services, legal documentation, and visa documentation for clients across Dubai,
              remotely or by appointment. Looking for another emirate? See our{" "}
              <Link href="/emirates" className="font-semibold" style={{ color: '#1D63E0' }}>
                UAE-wide coverage
              </Link>{" "}
              page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Area cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {dubaiAreas.map((area, index) => (
              <GuideCard
                key={area.slug}
                icon={MapPin}
                title={area.name}
                description={area.heroIntro}
                href={`/dubai/${area.slug}`}
                badge={area.isOffice ? "Our Office" : undefined}
                ariaLabel={`Business setup and visa documentation in ${area.name}`}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
