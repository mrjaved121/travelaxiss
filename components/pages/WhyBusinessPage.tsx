'use client';

import Link from "next/link";
import { Globe, TrendingUp, Building, Users, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Globe,
    title: "Strategic Location",
    description: "Access to key markets across the Middle East, Africa, and Asia with world-class infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Global Market Access",
    description: "Connect with international markets and leverage Dubai's position as a global business hub.",
  },
  {
    icon: Building,
    title: "Business-Friendly Policies",
    description: "Benefit from streamlined regulations, tax advantages, and supportive government initiatives.",
  },
  {
    icon: Users,
    title: "Diverse Workforce",
    description: "Access to a talented, multicultural workforce from around the world.",
  },
  {
    icon: Sparkles,
    title: "Growth Opportunities",
    description: "Thrive in a dynamic environment that encourages innovation and entrepreneurship.",
  },
];

const stats = [
  { value: "200+", label: "Nationalities Represented" },
  { value: "45+", label: "Free Zones Available" },
  { value: "100%", label: "Foreign Ownership Possible" },
];

export default function WhyBusinessPage() {
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
              Why the UAE
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              The Ultimate Business Destination for{" "}
              <span style={{ color: '#1D63E0' }}>Success</span>
            </h1>
            <p className="text-lg text-gray-600">
              The business environment offers strong opportunities for growth, global
              connectivity, and operational efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <div
              className="relative w-full h-full rounded-[2rem] shadow-xl flex items-center justify-center"
              style={{ backgroundColor: '#EEF4FF' }}
              aria-hidden
            >
              <Globe className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#1D63E0' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl p-8"
                style={{ backgroundColor: '#EEF4FF' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#1D63E0' }}>
                  <benefit.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl p-8"
                style={{ backgroundColor: '#EEF4FF' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#1D63E0' }}>
                  <benefit.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with diagonal accent */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div
          className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 -skew-y-3"
          style={{ backgroundColor: "#1D63E0" }}
          aria-hidden
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-white rounded-3xl shadow-xl p-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1D63E0' }}>{stat.value}</div>
                <p className="text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D63E0' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey</h2>
          <p className="text-white/90 text-lg mb-8">
            Let us help you establish your business in one of the world&apos;s most dynamic markets.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
