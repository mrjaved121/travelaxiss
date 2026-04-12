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
      description:
        "Documentation and application support for business owners and investors establishing a company.",
      icon: CircleDollarSign,
    },
    {
      title: "Employment Visas",
      description:
        "Guidance and paperwork support for individuals sponsored by a UAE-based employer.",
      icon: Briefcase,
    },
    {
      title: "Family Sponsorship Visas",
      description:
        "Assistance with documentation for sponsoring spouse, children, and parents in the UAE.",
      icon: Users,
    },
    {
      title: "Visit & Tourist Visas",
      description:
        "Support with visit and tourist visa documentation for short-term business or leisure travel.",
      icon: Plane,
    },
    {
      title: "Visa Renewals & Cancellations",
      description:
        "Renewal documentation support and cancellation-related formalities coordinated through official channels.",
      icon: FileStack,
    },
  ];

  const disclaimer =
    "We provide documentation assistance and consultancy support only. We are not a government authority and do not issue visas directly. All visa applications are submitted through official UAE government channels or authorized entities, subject to applicable rules and approvals.";

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
              UAE Visa <span style={{ color: '#C9A24A' }}>Documentation &amp; Consultancy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              End-to-end UAE visa documentation and consultancy support—from eligibility review and paperwork to application guidance, renewals, and cancellation assistance.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4" style={{ borderColor: "#C9A24A" }}>
              {disclaimer}
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
              Support Across Major <span style={{ color: '#C9A24A' }}>UAE Visa Categories</span>
            </h2>
            <p className="text-lg text-gray-400">
              Structured documentation and guidance for the visa categories most businesses and families need in the UAE.
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
                  aria-hidden
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

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }} aria-labelledby="visa-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="visa-cta-heading" className="sr-only">
              Next steps for UAE visa documentation support
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Not sure which category fits? We&apos;ll review your situation, outline documentation requirements, realistic timelines, and next steps for official submission.
            </p>
            <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              {disclaimer}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Book a Visa Documentation Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
