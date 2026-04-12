'use client';

import Link from "next/link";
import { Building2, FileText, Scale, HeadphonesIcon, Plane, ArrowRight, Clock, Shield, Target } from "lucide-react";
import { motion } from "motion/react";
export default function ServicesPage() {
  const services = [
    {
      title: "Company Formation",
      description: "Comprehensive formation services for mainland, freezone, and offshore business structures.",
      icon: Building2,
      link: "/services/company-formation",
    },
    {
      title: "Government Services",
      description: "Streamlined government approvals and regulatory coordination through expert handling.",
      icon: FileText,
      link: "/services/government-services",
    },
    {
      title: "Legal Documentation",
      description: "Professional preparation and attestation of corporate and legal documents.",
      icon: Scale,
      link: "/services/legal-documentation",
    },
    {
      title: "Business Support Services",
      description: "Ongoing support services including trademark registration, ISO certification, and operational assistance.",
      icon: HeadphonesIcon,
      link: "/services/business-support",
    },
    {
      title: "UAE Visa Documentation & Consultancy",
      description:
        "Investor, employment, and family categories, visit permits, renewals, and cancellations—documentation preparation, application guidance, and submission coordination through official channels.",
      icon: Plane,
      link: "/services/visa-services",
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Clear Timelines & Milestones",
      description:
        "Planned delivery dates with proactive follow-up—subject to authority processing times.",
    },
    {
      icon: Target,
      title: "Tailored and Scalable Services",
      description: "Customized solutions that grow with your business needs.",
    },
    {
      icon: Shield,
      title: "Expert Regulatory Support",
      description: "Professional guidance through complex regulatory landscapes.",
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111111' }}>
              Our <span style={{ color: '#C9A24A' }}>Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We provide a full range of services designed to support businesses from setup to ongoing operations. Our services are structured to ensure compliance, efficiency, and long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }} aria-labelledby="services-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-overview-heading" className="sr-only">
            Service overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#C9A24A' }} aria-hidden>
                  <service.icon className="w-7 h-7" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#111111' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center space-x-2 font-semibold transition-opacity hover:opacity-70"
                  style={{ color: '#C9A24A' }}
                >
                  <span>{`Learn more about ${service.title}`}</span>
                  <ArrowRight className="w-5 h-5" aria-hidden />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Advantages */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111111' }}>
              Service <span style={{ color: '#C9A24A' }}>Advantages</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#C9A24A' }} aria-hidden>
                  <advantage.icon className="w-7 h-7" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111111' }}>
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
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
              Ready to <span style={{ color: '#C9A24A' }}>Get Started?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Contact us today to learn more about how we can help your business succeed.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Contact Travelaxis about our services</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}