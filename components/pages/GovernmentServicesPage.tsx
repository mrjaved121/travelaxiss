'use client';

import Link from "next/link";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function GovernmentServicesPage() {
  const features = [
    "Government Approvals Management",
    "Dubai Chamber Services",
    "Customs Support",
    "Multi-Authority Coordination",
    "Regulatory Compliance Monitoring",
  ];

  const packages = [
    {
      name: "Standard Government Relations",
      description: "Includes standard processing support for government approvals and documentation.",
      features: [
        "Standard processing timeline",
        "Basic coordination services",
        "Documentation support",
        "Compliance guidance",
      ],
    },
    {
      name: "Priority Government Relations",
      description: "Includes faster processing and priority handling with dedicated support.",
      features: [
        "Priority processing",
        "Faster approvals timeline",
        "Dedicated account manager",
        "24/7 status updates",
        "Premium support",
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
              Government <span style={{ color: '#C9A24A' }}>Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We handle government approvals, documentation processes, and coordination with relevant authorities.
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

      {/* Trust Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="w-16 h-16 mb-6" style={{ color: '#C9A24A' }} />
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#111111' }}>
                Expert Navigation of <span style={{ color: '#C9A24A' }}>Regulatory Processes</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our established relationships with government entities and deep understanding of regulatory requirements ensure smooth and efficient processing of all approvals.
              </p>
              <p className="text-lg text-gray-600">
                We coordinate with multiple authorities simultaneously, reducing delays and ensuring compliance at every step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2" style={{ color: '#C9A24A' }}>3.2x</div>
                <p className="text-gray-600">Higher Success Rate</p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-4" style={{ color: '#111111' }}>Our Advantage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                    <span className="text-gray-700">Faster approval timelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                    <span className="text-gray-700">Direct government contacts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                    <span className="text-gray-700">Comprehensive compliance</span>
                  </li>
                </ul>
              </div>
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
            <p className="text-lg text-gray-600">Choose the level of support that matches your requirements.</p>
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
                    <span className="text-sm font-semibold">Recommended</span>
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
                  Start Process
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
              Need Government <span style={{ color: '#C9A24A' }}>Approvals?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let our experts handle the complexities of government relations for you.
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
