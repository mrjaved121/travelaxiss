"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { destinations } from "@/components/data/destinations";

export default function DestinationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Destinations</p>
            <h1 className="mb-6" style={{ color: "#071A2B" }}>
              Explore the World <span style={{ color: "#155EEF" }}>With Confidence.</span>
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Discover popular destinations and explore potential visa pathways for your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destination grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  href={destination.href}
                  className="group relative flex flex-col justify-end h-72 rounded-2xl overflow-hidden card-hover"
                  style={{
                    border: "1px solid var(--card-line)",
                    background: "linear-gradient(150deg, #071A2B 0%, #0E2545 55%, #155EEF 130%)",
                  }}
                  aria-label={`Explore ${destination.name} pathways`}
                >
                  {!destination.ready && (
                    <span
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10"
                      style={{ backgroundColor: "#C9A45C", color: "#071A2B" }}
                    >
                      Coming soon
                    </span>
                  )}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(0deg, rgba(7,26,43,0.85) 0%, rgba(7,26,43,0.1) 60%)" }}
                    aria-hidden
                  />
                  <div className="relative z-[1] p-6 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                      <MapPin className="w-4 h-4" aria-hidden />
                      <span>{destination.pathways.join(" · ")}</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                      {destination.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                      {destination.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#C9A45C" }}>
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-note text-center mt-10 max-w-2xl mx-auto">
            Travelaxis provides documentation, consultancy, and application support — not
            government decisions. Final visa and immigration outcomes are determined by the
            relevant authorities.
          </p>
        </div>
      </section>
    </div>
  );
}
