'use client';

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { dubaiAreas } from "@/components/data/dubaiAreas";

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
              remotely or by appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Area cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dubaiAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="relative group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white p-6"
              >
                <Link href={`/dubai/${area.slug}`} className="absolute inset-0 z-10" aria-label={`Business setup and visa documentation in ${area.name}`} />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                    <MapPin className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                  </div>
                  {area.isOffice && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: '#EEF4FF', color: '#1D63E0' }}
                    >
                      Our Office
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-3" style={{ color: '#0F1B2D' }}>
                  {area.name}
                </h2>
                <p className="text-gray-600 text-sm mb-6">{area.heroIntro}</p>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all group-hover:opacity-90"
                  style={{ backgroundColor: '#1D63E0', color: '#FFFFFF' }}
                >
                  <ArrowUpRight className="w-5 h-5" aria-hidden />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
