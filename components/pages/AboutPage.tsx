'use client';

import Link from "next/link";
import { ArrowRight, Target, Eye, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const values = [
    "Professional approach",
    "Experienced team",
    "Structured processes",
    "Reliable support",
    "Client-focused solutions",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Building Businesses, <span style={{ color: '#1D63E0' }}>Driving Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We help businesses establish and grow through structured support, clear communication, and regulatory awareness. Our work spans company formation, government-related coordination, and UAE visa documentation and application guidance—always aligned with official requirements and each client&apos;s goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#EEF4FF' }}
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                <Target className="w-7 h-7" style={{ color: '#FFFFFF' }} />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0F1B2D' }}>Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To deliver professional, structured services with accurate documentation, realistic timelines, and transparent expectations—so businesses can operate efficiently and grow with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#EEF4FF' }}
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                <Eye className="w-7 h-7" style={{ color: '#FFFFFF' }} />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0F1B2D' }}>Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be recognized as a trusted UAE consultancy partner for business formation and documentation-led visa support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Why <span style={{ color: '#1D63E0' }}>Choose Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#1D63E0' }} aria-hidden />
                <span className="text-lg" style={{ color: '#0F1B2D' }}>{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1D63E0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Ready to <span style={{ color: '#FFFFFF' }}>Get Started?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let us help you build your business with professional guidance and support.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#1D63E0', color: '#FFFFFF' }}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
