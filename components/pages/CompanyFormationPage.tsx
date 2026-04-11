'use client';

import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Lightbulb,
  ClipboardList,
  PlusCircle,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";

export default function CompanyFormationPage() {
  const features = [
    "Mainland Company Setup",
    "Freezone Registration",
    "Offshore Incorporation",
    "License Processing",
    "Regulatory Compliance",
  ];

  const journeySteps = [
    {
      label: "Idea",
      description: "Define your business goals and the right path forward.",
      icon: Lightbulb,
    },
    {
      label: "Planning",
      description: "Structure, jurisdiction, and documentation mapped out clearly.",
      icon: ClipboardList,
    },
    {
      label: "License",
      description: "Applications, approvals, and registration handled end to end.",
      icon: PlusCircle,
    },
    {
      label: "Launch",
      description: "Go live with compliance in place and ongoing support available.",
      icon: Rocket,
    },
  ];

  const packages = [
    {
      name: "Standard Formation",
      duration: "7–10 Working Days",
      description: "Complete business formation with standard processing timelines.",
      features: [
        "Business license processing",
        "Registration with authorities",
        "Initial documentation",
        "Compliance setup",
      ],
    },
    {
      name: "Express Formation",
      duration: "3–5 Working Days",
      description: "Fast-track formation for urgent business requirements.",
      features: [
        "Priority processing",
        "Expedited approvals",
        "Dedicated support team",
        "Same services as standard",
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
              Company <span style={{ color: '#C9A24A' }}>Formation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We provide end-to-end support for establishing businesses across mainland, freezone, and offshore jurisdictions.
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
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              From Concept to <span style={{ color: '#C9A24A' }}>Launch</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Travelaxis provides complete business setup solutions, guiding you through each step with clarity and precision.
              Our experts manage all requirements and help you choose the best structure and jurisdiction for your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center text-center rounded-xl p-6 md:p-8 border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#C9A24A' }}
                >
                  <step.icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  {step.label}
                </h3>
                <p className="text-sm text-gray-400 leading-snug">{step.description}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Packages */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#111111' }}>
              Choose Your <span style={{ color: '#C9A24A' }}>Package</span>
            </h2>
            <p className="text-lg text-gray-600">Select the formation package that best suits your timeline.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg p-8 shadow-sm ${pkg.highlighted ? 'ring-2' : ''}`}
                style={pkg.highlighted ? { borderColor: '#C9A24A' } : {}}
              >
                {pkg.highlighted && (
                  <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: '#C9A24A', color: '#111111' }}>
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#111111' }}>
                  {pkg.name}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: '#C9A24A' }} />
                  <span className="font-semibold" style={{ color: '#C9A24A' }}>{pkg.duration}</span>
                </div>
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
                  Get Started
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
              Ready to Form Your <span style={{ color: '#C9A24A' }}>Company?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Contact our team to discuss your business formation requirements.
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
