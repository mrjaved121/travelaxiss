'use client';

import Link from "next/link";
import { Building2, FileText, Scale, HeadphonesIcon, Plane, Globe2, Moon, Stamp, Landmark, Snowflake, Sun, Flag, RefreshCw, Briefcase, Home, PiggyBank, Clock, Shield, Target } from "lucide-react";
import { motion } from "motion/react";
import GuideCard from "@/components/GuideCard";

const services = [
  {
    title: "Company Formation",
    category: "Business Setup",
    description: "Comprehensive formation services for mainland, freezone, and offshore business structures.",
    icon: Building2,
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    category: "Approvals",
    description: "Streamlined government approvals and regulatory coordination through expert handling.",
    icon: FileText,
    link: "/services/government-services",
  },
  {
    title: "Legal Documentation",
    category: "Compliance",
    description: "Professional preparation and attestation of corporate and legal documents.",
    icon: Scale,
    link: "/services/legal-documentation",
  },
  {
    title: "Business Support Services",
    category: "Ongoing Support",
    description: "Ongoing support services including trademark registration, ISO certification, and operational assistance.",
    icon: HeadphonesIcon,
    link: "/services/business-support",
  },
  {
    title: "UAE Visa Documentation & Consultancy",
    category: "Visa Services",
    description:
      "Investor, employment, and family categories, visit permits, renewals, and cancellations—documentation preparation, application guidance, and submission coordination through official channels.",
    icon: Plane,
    link: "/services/visa-services",
  },
  {
    title: "International Visa Documentation",
    category: "Global Visas",
    description:
      "Documentation support for Saudi Arabia, Europe, USA, Schengen, and other African and Asian destinations, for UAE residents traveling or relocating abroad.",
    icon: Globe2,
    link: "/services/international-visas",
  },
  {
    title: "Umrah Services",
    category: "Pilgrimage Travel",
    description:
      "Umrah visa processing, flight booking, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE.",
    icon: Moon,
    link: "/services/umrah-services",
  },
  {
    title: "UAE Document Attestation",
    category: "Attestation",
    description:
      "Degree, marriage, birth, and experience certificate attestation from Pakistan — the full HEC/IBCC, MOFA, UAE Embassy, and MOFAIC chain.",
    icon: Stamp,
    link: "/services/attestation",
  },
  {
    title: "UK Visa from Pakistan",
    category: "UK Visas",
    description:
      "Skilled Worker, Student, Visit, and Family/Spouse visa documentation for Pakistani applicants, submitted through UKVI's official channels.",
    icon: Landmark,
    link: "/services/uk-visa-from-pakistan",
  },
  {
    title: "Canada Visa from Pakistan",
    category: "Canada Visas",
    description:
      "Study permit, work permit, visit visa, and spouse open work permit documentation for Pakistani applicants, submitted through IRCC.",
    icon: Snowflake,
    link: "/services/canada-visa-from-pakistan",
  },
  {
    title: "Australia Visa from Pakistan",
    category: "Australia Visas",
    description:
      "Visitor, Student, and Partner/Family visa documentation for Pakistani applicants, submitted through the Department of Home Affairs.",
    icon: Sun,
    link: "/services/australia-visa-from-pakistan",
  },
  {
    title: "USA Visa from Pakistan",
    category: "USA Visas",
    description:
      "B1/B2 visitor and F1 student visa documentation for Pakistani applicants, including DS-160 review and Embassy Islamabad interview preparation.",
    icon: Flag,
    link: "/services/usa-visa-from-pakistan",
  },
  {
    title: "UAE Visit & Tourist Visa",
    category: "Visit Visas",
    description:
      "14/30/60/90-day visit and tourist visa documentation, covering airline, hotel, tour operator, and resident sponsor routes.",
    icon: Plane,
    link: "/services/uae-visit-visa",
  },
  {
    title: "UAE Visa Extension & Renewal",
    category: "Extension & Renewal",
    description:
      "Visit visa extension, residence visa renewal, and status change — clearly explained, with documents and timelines.",
    icon: RefreshCw,
    link: "/services/uae-visa-extension-renewal",
  },
  {
    title: "UAE Employment & Labour Visa",
    category: "Employment Visas",
    description:
      "Work permit, medical, Emirates ID, and visa stamping documentation — plus who legally pays for what.",
    icon: Briefcase,
    link: "/services/uae-employment-visa",
  },
  {
    title: "UAE Domestic Worker Visa",
    category: "Domestic Worker",
    description:
      "Tadbeer-channel sponsorship documentation for households sponsoring a domestic worker in the UAE.",
    icon: Home,
    link: "/services/uae-domestic-worker-visa",
  },
  {
    title: "UAE Retirement Visa",
    category: "Retirement",
    description:
      "Documentation support for the property, savings, and income routes to UAE retirement residency.",
    icon: PiggyBank,
    link: "/services/uae-retirement-visa",
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
            className="min-w-0"
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

      {/* Service Cards */}
      <section className="py-20 bg-white" aria-labelledby="services-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-overview-heading" className="sr-only">
            Service overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <GuideCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.link}
                badge={service.category}
                ariaLabel={`Learn more about ${service.title}`}
                delay={index * 0.1}
                className={
                  index === services.length - 1 && services.length % 3 === 1
                    ? "md:col-start-1 lg:col-start-2"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Advantages */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
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
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D63E0' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
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
