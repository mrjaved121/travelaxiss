'use client';

import Link from "next/link";
import {
  ArrowRight,
  FileStack,
  Plane,
  Hotel,
  Users,
  Bus,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Umrah Visa Processing",
    description:
      "Documentation and application support for Umrah visas, arranged through licensed travel partners and official Saudi channels.",
    icon: FileStack,
  },
  {
    title: "Flight Booking & Reservations",
    description:
      "Return flight arrangements coordinated for individual pilgrims and groups traveling from the UAE.",
    icon: Plane,
  },
  {
    title: "Hotel & Accommodation",
    description:
      "Accommodation arrangements coordinated near Makkah and Madinah for the duration of your stay.",
    icon: Hotel,
  },
  {
    title: "Group & Family Packages",
    description:
      "Coordinated travel arrangements for families and groups traveling together, with a single point of contact throughout.",
    icon: Users,
  },
];

const travelOptions: {
  title: string;
  price: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "By Bus",
    price: "Starting from AED 1,199",
    description:
      "Comfortable coach travel to Makkah and Madinah — a lower-cost option for pilgrims traveling from the UAE.",
    icon: Bus,
  },
  {
    title: "By Air",
    price: "Starting from AED 1,999",
    description:
      "Direct or connecting flights to Jeddah or Madinah, coordinated for individual pilgrims and groups.",
    icon: Plane,
  },
];

const disclaimer =
  "We provide visa documentation assistance and travel coordination only. We are not a government or religious authority. All Umrah visas are processed through official Saudi authorities and licensed travel partners, subject to applicable rules and approvals.";

export default function UmrahServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              Umrah Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Umrah Visa &amp; Travel <span style={{ color: '#1D63E0' }}>Coordination</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Visa processing, flight booking, hotel arrangements, and group travel coordination
              for Umrah pilgrims traveling from the UAE — organized end-to-end so you can focus
              on your journey.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4" style={{ borderColor: "#1D63E0" }}>
              {disclaimer}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96 flex items-center justify-center"
          >
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <div className="absolute bottom-0 right-6 w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.08)' }} aria-hidden />
            <img
              src="/images/ummarah-visa.webp"
              alt=""
              role="presentation"
              width={640}
              height={427}
              className="relative w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20" style={{ backgroundColor: '#1D63E0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              What&apos;s Included
            </h2>
            <p className="text-lg text-white/75">
              A single point of contact for visa, travel, and accommodation coordination for your
              Umrah journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl p-6 md:p-8 text-center border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-hidden
                >
                  <item.icon className="w-7 h-7" style={{ color: '#1D63E0' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel options & pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              Travel Options
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
              Flight &amp; Bus Travel Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Whichever way you prefer to travel to Makkah and Madinah, we coordinate the booking
              end-to-end.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {travelOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-gray-100 shadow-sm p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#EEF4FF' }}
                  aria-hidden
                >
                  <option.icon className="w-7 h-7" style={{ color: '#1D63E0' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F1B2D' }}>
                  {option.title}
                </h3>
                <p className="text-2xl font-bold mb-3" style={{ color: '#1D63E0' }}>
                  {option.price}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Prices shown are indicative starting rates per person and vary by travel dates, group
            size, and availability. Confirm current pricing when booking.
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0F1B2D' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Planning Your Umrah Journey?</h2>
          <p className="text-lg text-white/85 mb-4">
            We&apos;ll walk through visa requirements, travel dates, and group or individual
            arrangements so nothing is left to chance.
          </p>
          <p className="text-sm text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Book an Umrah Travel Consultation
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
