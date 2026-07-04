'use client';

import Link from "next/link";
import { Building2, FileText, Scale, HeadphonesIcon, Plane, ArrowUpRight, Clock, Shield, Target } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Company Formation",
    category: "Business Setup",
    description: "Comprehensive formation services for mainland, freezone, and offshore business structures.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1706074740295-d7a79c079562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    category: "Approvals",
    description: "Streamlined government approvals and regulatory coordination through expert handling.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1596708896695-6b74d6baf6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/services/government-services",
  },
  {
    title: "Legal Documentation",
    category: "Compliance",
    description: "Professional preparation and attestation of corporate and legal documents.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1532995092664-7027dcede29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/services/legal-documentation",
  },
  {
    title: "Business Support Services",
    category: "Ongoing Support",
    description: "Ongoing support services including trademark registration, ISO certification, and operational assistance.",
    icon: HeadphonesIcon,
    image: "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/services/business-support",
  },
  {
    title: "UAE Visa Documentation & Consultancy",
    category: "Visa Services",
    description:
      "Investor, employment, and family categories, visit permits, renewals, and cancellations—documentation preparation, application guidance, and submission coordination through official channels.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1655722724451-0df658a2ab23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/services/visa-services",
  },
];

const advantages = [
  {
    icon: Clock,
    title: "Clear Timelines & Milestones",
    description: "Planned delivery dates with proactive follow-up—subject to authority processing times.",
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

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Our <span style={{ color: '#1D63E0' }}>Services</span>
            </h1>
            <p className="text-lg text-gray-600">
              We provide a full range of services designed to support businesses from setup to
              ongoing operations. Our services are structured to ensure compliance, efficiency,
              and long-term growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <img
              src="https://images.unsplash.com/photo-1596708896695-6b74d6baf6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Government office building in Dubai"
              className="relative w-full h-full object-cover rounded-[2rem] shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white" aria-labelledby="services-overview-heading">
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
                className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <div className="relative h-44">
                  <img src={service.image} alt="" role="presentation" className="w-full h-full object-cover" />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#1D63E0', color: '#FFFFFF' }}
                  >
                    {service.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF4FF' }} aria-hidden>
                    <service.icon className="w-6 h-6" style={{ color: '#1D63E0' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#0F1B2D' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                  <Link
                    href={service.link}
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-90"
                    style={{ backgroundColor: '#1D63E0', color: '#FFFFFF' }}
                  >
                    <ArrowUpRight className="w-5 h-5" aria-hidden />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Advantages */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0F1B2D' }}>
              Service <span style={{ color: '#1D63E0' }}>Advantages</span>
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
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                  <advantage.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1720722023444-d4e633a71126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          role="presentation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(29,99,224,0.85)' }} aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white/85 text-lg mb-8">
            Contact us today to learn more about how we can help your business succeed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Contact Travelaxis about our services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
