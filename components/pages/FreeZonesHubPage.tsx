'use client';

import { Landmark } from "lucide-react";
import { motion } from "motion/react";
import { freeZones } from "@/components/data/freeZones";
import GuideCard from "@/components/GuideCard";

export default function FreeZonesHubPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              UAE Free Zones
            </p>
            <h1 className="page-title mb-6">
              Free Zone Company <span style={{ color: '#155EEF' }}>Formation</span>
            </h1>
            <p className="text-lg text-[#667085]">
              Documentation support for company formation across the UAE&apos;s major free zones.
              We help you prepare and organize your application — licenses are issued directly by
              each free zone authority, not by us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zone cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {freeZones.map((zone, index) => (
              <GuideCard
                key={zone.slug}
                icon={Landmark}
                title={zone.name}
                description={zone.heroIntro}
                href={`/free-zones/${zone.slug}`}
                badge={zone.emirate}
                ariaLabel={`${zone.name} company formation`}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
