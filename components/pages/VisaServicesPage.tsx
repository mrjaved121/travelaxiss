'use client';

import Link from "next/link";
import {
  ArrowRight,
  CircleDollarSign,
  Briefcase,
  Users,
  Plane,
  FileStack,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export default function VisaServicesPage() {
  const visaTypes: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: "Investor / Partner Visas",
      description: "For business owners and investors setting up a company.",
      icon: CircleDollarSign,
    },
    {
      title: "Employment Visas",
      description: "For individuals sponsored by a UAE-based employer.",
      icon: Briefcase,
    },
    {
      title: "Family Sponsorship Visas",
      description: "To bring your spouse, children, and parents to the UAE.",
      icon: Users,
    },
    {
      title: "Visit & Tourist Visas",
      description: "For short-term business trips or tourism.",
      icon: Plane,
    },
    {
      title: "Visa Renewals & Cancellations",
      description: "Efficient handling of all renewals and exit formalities.",
      icon: FileStack,
    },
  ];

  return (
    <div>
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111111' }}>
              Visa <span style={{ color: '#C9A24A' }}>Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              End-to-end UAE visa consultancy—from eligibility and documentation to submission, renewals, and cancellations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              We Handle All <span style={{ color: '#C9A24A' }}>Visa Types</span>
            </h2>
            <p className="text-lg text-gray-400">
              Structured support for the visa categories most businesses and families need in the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl p-6 md:p-8 text-center border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#C9A24A' }}
                >
                  <item.icon className="w-7 h-7" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-8">
              Not sure which visa fits your situation? We&apos;ll review your case and recommend the right category and timeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Discuss Your Visa Needs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
