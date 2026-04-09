'use client';

import Link from "next/link";
import { CheckCircle, ArrowRight, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export default function LegalDocumentationPage() {
  const features = [
    "POA / MOA Preparation",
    "Legal Agreements Drafting",
    "Certificate Attestation",
    "Corporate Document Management",
    "Document Authentication Support",
  ];

  const packages = [
    {
      name: "Standard Documentation Services",
      description: "Basic document preparation and support for essential corporate needs.",
      features: [
        "Standard document preparation",
        "Basic attestation services",
        "Document verification",
        "Compliance review",
      ],
    },
    {
      name: "Premium Documentation Services",
      description: "Advanced document handling and consultation with dedicated support.",
      features: [
        "All standard services",
        "Priority processing",
        "Legal consultation included",
        "Dedicated document manager",
        "Express attestation",
        "Comprehensive review",
      ],
      highlighted: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111111' }}>
              Legal & <span style={{ color: '#C9A24A' }}>Documentation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We assist with preparing, managing, and processing corporate legal documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#111111' }}>
              Key <span style={{ color: '#C9A24A' }}>Features</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 rounded-lg shadow-sm"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#C9A24A' }} />
                <span className="text-lg" style={{ color: '#111111' }}>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Documentation Matters */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FileCheck className="w-16 h-16 mb-6" style={{ color: '#C9A24A' }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#111111' }}>
                Professional Document <span style={{ color: '#C9A24A' }}>Management</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Proper documentation is the foundation of business compliance and legal protection. Our team ensures every document meets regulatory standards and serves your business needs.
              </p>
              <p className="text-lg text-gray-600">
                From initial drafting to final attestation, we handle the entire documentation lifecycle with precision and care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#111111' }}>
                Document Types We Handle
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#111111' }}>Power of Attorney (POA)</p>
                    <p className="text-sm text-gray-600">Authorization documents for business representation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#111111' }}>Memorandum of Association</p>
                    <p className="text-sm text-gray-600">Company formation and structure documents</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#111111' }}>Legal Agreements</p>
                    <p className="text-sm text-gray-600">Contracts, partnerships, and commercial agreements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#111111' }}>Certificate Attestation</p>
                    <p className="text-sm text-gray-600">Authentication for official use</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#111111' }}>
              Service <span style={{ color: '#C9A24A' }}>Packages</span>
            </h2>
            <p className="text-lg text-gray-600">Select the documentation support level that fits your needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg p-8 shadow-sm ${pkg.highlighted ? 'ring-2' : ''}`}
                style={pkg.highlighted ? { backgroundColor: '#F5F5F5', borderColor: '#C9A24A' } : { backgroundColor: '#F5F5F5' }}
              >
                {pkg.highlighted && (
                  <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#C9A24A', color: '#111111' }}>
                    <span className="text-sm font-semibold">Most Comprehensive</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#111111' }}>
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-lg transition-all hover:opacity-90 font-semibold"
                  style={{ backgroundColor: '#C9A24A', color: '#111111' }}
                >
                  Get Started Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Need Legal <span style={{ color: '#C9A24A' }}>Documentation Support?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our experts are ready to assist with all your corporate documentation needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
