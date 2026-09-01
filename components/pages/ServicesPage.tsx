'use client';

import { useState } from "react";
import Link from "next/link";
import { Building2, FileText, Scale, HeadphonesIcon, Plane, Globe2, Moon, Stamp, Landmark, Snowflake, Sun, Flag, Compass, RefreshCw, PiggyBank, Clock, Shield, Target } from "lucide-react";
import { motion } from "motion/react";
import GuideCard from "@/components/GuideCard";

type Group = "All" | "Business Setup" | "UAE Visas" | "International Visas" | "Documentation";

const services: {
  title: string;
  category: string;
  group: Exclude<Group, "All">;
  description: string;
  icon: typeof Building2;
  link: string;
}[] = [
  {
    title: "Company Formation",
    category: "Business Setup",
    group: "Business Setup",
    description: "Comprehensive formation services for mainland, freezone, and offshore business structures.",
    icon: Building2,
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    category: "Approvals",
    group: "Business Setup",
    description: "Streamlined government approvals and regulatory coordination through expert handling.",
    icon: FileText,
    link: "/services/government-services",
  },
  {
    title: "Legal Documentation",
    category: "Compliance",
    group: "Documentation",
    description: "Professional preparation and attestation of corporate and legal documents.",
    icon: Scale,
    link: "/services/legal-documentation",
  },
  {
    title: "Business Support Services",
    category: "Ongoing Support",
    group: "Business Setup",
    description: "Ongoing support services including trademark registration, ISO certification, and operational assistance.",
    icon: HeadphonesIcon,
    link: "/services/business-support",
  },
  {
    title: "UAE Visa Documentation & Consultancy",
    category: "Visa Services",
    group: "UAE Visas",
    description:
      "Investor and family categories, visit permits, renewals, and cancellations—documentation preparation, application guidance, and submission coordination through official channels.",
    icon: Plane,
    link: "/services/visa-services",
  },
  {
    title: "International Visa Documentation",
    category: "Global Visas",
    group: "International Visas",
    description:
      "Documentation support for Saudi Arabia, Europe, USA, Schengen, and other African and Asian destinations, for UAE residents traveling or relocating abroad.",
    icon: Globe2,
    link: "/services/international-visas",
  },
  {
    title: "Umrah Services",
    category: "Pilgrimage Travel",
    group: "International Visas",
    description:
      "Umrah visa processing, flight booking, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE.",
    icon: Moon,
    link: "/services/umrah-services",
  },
  {
    title: "UAE Document Attestation",
    category: "Attestation",
    group: "Documentation",
    description:
      "Degree, marriage, birth, and experience certificate attestation from Pakistan — the full HEC/IBCC, MOFA, UAE Embassy, and MOFAIC chain.",
    icon: Stamp,
    link: "/services/attestation",
  },
  {
    title: "UK Visa from Pakistan",
    category: "UK Visas",
    group: "International Visas",
    description:
      "Student, Visit, and Family/Spouse visa documentation for Pakistani applicants, submitted through UKVI's official channels.",
    icon: Landmark,
    link: "/services/uk-visa-from-pakistan",
  },
  {
    title: "Canada Visa from Pakistan",
    category: "Canada Visas",
    group: "International Visas",
    description:
      "Study permit and visit visa documentation for Pakistani applicants, submitted through IRCC.",
    icon: Snowflake,
    link: "/services/canada-visa-from-pakistan",
  },
  {
    title: "Australia Visa from Pakistan",
    category: "Australia Visas",
    group: "International Visas",
    description:
      "Visitor, Student, and Partner/Family visa documentation for Pakistani applicants, submitted through the Department of Home Affairs.",
    icon: Sun,
    link: "/services/australia-visa-from-pakistan",
  },
  {
    title: "USA Visa from Pakistan",
    category: "USA Visas",
    group: "International Visas",
    description:
      "B1/B2 visitor and F1 student visa documentation for Pakistani applicants, including DS-160 review and Embassy Islamabad interview preparation.",
    icon: Flag,
    link: "/services/usa-visa-from-pakistan",
  },
  {
    title: "Germany Visa from Pakistan",
    category: "Germany Visas",
    group: "International Visas",
    description:
      "Student/Ausbildung and Family Reunification visa documentation for Pakistani applicants.",
    icon: Compass,
    link: "/services/germany-visa-from-pakistan",
  },
  {
    title: "UAE Visit & Tourist Visa",
    category: "Visit Visas",
    group: "UAE Visas",
    description:
      "14/30/60/90-day visit and tourist visa documentation, covering airline, hotel, tour operator, and resident sponsor routes.",
    icon: Plane,
    link: "/services/uae-visit-visa",
  },
  {
    title: "UAE Visa Extension & Renewal",
    category: "Extension & Renewal",
    group: "UAE Visas",
    description:
      "Visit visa extension, residence visa renewal, and status change — clearly explained, with documents and timelines.",
    icon: RefreshCw,
    link: "/services/uae-visa-extension-renewal",
  },
  {
    title: "UAE Retirement Visa",
    category: "Retirement",
    group: "UAE Visas",
    description:
      "Documentation support for the property, savings, and income routes to UAE retirement residency.",
    icon: PiggyBank,
    link: "/services/uae-retirement-visa",
  },
];

const GROUPS: Group[] = ["All", "Business Setup", "UAE Visas", "International Visas", "Documentation"];

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
  const [activeGroup, setActiveGroup] = useState<Group>("All");
  const visibleServices =
    activeGroup === "All" ? services : services.filter((s) => s.group === activeGroup);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              What We Offer
            </p>
            <h1 className="page-title mb-6">
              Our <span style={{ color: '#155EEF' }}>Services</span>
            </h1>
            <p className="lead text-[#667085]">
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
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="Travelaxis UAE business setup, visa documentation, and government services"
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

          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter services by category">
            {GROUPS.map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => setActiveGroup(group)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all"
                style={
                  activeGroup === group
                    ? { backgroundColor: "#155EEF", color: "#FFFFFF", borderColor: "#155EEF" }
                    : { backgroundColor: "#FFFFFF", color: "#1D2939", borderColor: "var(--card-line)" }
                }
                aria-pressed={activeGroup === group}
              >
                {group}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {visibleServices.map((service, index) => (
              <GuideCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.link}
                badge={service.category}
                ariaLabel={`Learn more about ${service.title}`}
                delay={index * 0.06}
                className={
                  index === visibleServices.length - 1 && visibleServices.length % 3 === 1
                    ? "md:col-start-1 lg:col-start-2"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Advantages */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Service <span style={{ color: '#155EEF' }}>Advantages</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div className="w-[46px] h-[46px] rounded-[11px] flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: "var(--card-icon-bg)" }} aria-hidden>
                  <advantage.icon className="w-7 h-7" style={{ color: "var(--card-icon-fg)" }} />
                </div>
                <h3 className="subsection-title mb-4">
                  {advantage.title}
                </h3>
                <p className="text-[#667085]">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#155EEF' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Ready to Get Started?</h2>
          <p className="text-white/90 mb-8">
            Contact us today to learn more about how we can help your business succeed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
          >
            Contact Travelaxis about our services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
