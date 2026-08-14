'use client';

import Link from "next/link";
import { ArrowRight, Target, Eye, Clock, MessageCircle, Users, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

const howWeWork: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageCircle,
    title: "Start on WhatsApp",
    description: "Tell us what you need — company formation, a specific visa, or attestation — and we confirm the exact document checklist for your case.",
  },
  {
    icon: Clock,
    title: "Clear Timeline Upfront",
    description: "We tell you what each stage typically takes before you send us anything, so there are no surprises mid-process.",
  },
  {
    icon: MapPin,
    title: "Coordinated From Al Qusais, Dubai",
    description: "Our office is in Al Qusais — we coordinate directly with UAE authorities and free zones on your behalf, in person or remotely.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    description: "You deal with the same team from your first message through to final approval, not a rotating queue of agents.",
  },
];

export default function AboutPage() {
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
              About Travelaxis
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Building Businesses, <span style={{ color: '#1D63E0' }}>Driving Success</span>
            </h1>
            <p className="text-lg text-gray-600">
              We help businesses establish and grow through structured support, clear
              communication, and regulatory awareness. Our work spans company formation,
              government-related coordination, and UAE visa documentation and application
              guidance&mdash;always aligned with official requirements and each client&apos;s goals.
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-lg leading-relaxed">
              We provide documentation assistance and consultancy support only. We are not a
              government authority, employer, or recruitment agency, and we do not arrange jobs,
              sponsor employment, or guarantee visa or license approval. All applications are
              submitted through official UAE government channels, free zones, or authorized
              entities, subject to their own rules and approvals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt=""
              role="presentation"
              width={640}
              height={427}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-3xl"
              style={{ backgroundColor: '#EEF4FF' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                <Target className="w-7 h-7" style={{ color: '#FFFFFF' }} />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0F1B2D' }}>Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To deliver professional, structured services with accurate documentation,
                realistic timelines, and transparent expectations&mdash;so businesses can operate
                efficiently and grow with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-3xl"
              style={{ backgroundColor: '#EEF4FF' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                <Eye className="w-7 h-7" style={{ color: '#FFFFFF' }} />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0F1B2D' }}>Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be recognized as a trusted UAE consultancy partner for business formation and
                documentation-led visa support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              Why Travelaxis
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0F1B2D' }}>
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howWeWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                  <item.icon className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#0F1B2D' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Let us help you build your business with professional guidance and support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
