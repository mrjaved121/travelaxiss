'use client';

import { useState } from "react";
import Link from "next/link";
import { Plane, Globe2, MapPin, GraduationCap, Briefcase, Award, Landmark, Snowflake, Sun, Flag, Compass, Clock, Shield, Target, Laptop } from "lucide-react";
import { motion } from "motion/react";
import GuideCard from "@/components/GuideCard";

type Group = "All" | "Visit Visas" | "Study & Work" | "Country Guides";

const services: {
  title: string;
  category: string;
  group: Exclude<Group, "All">;
  description: string;
  icon: typeof Plane;
  link: string;
}[] = [
  {
    title: "Dubai Visit Visa from Pakistan",
    category: "UAE",
    group: "Visit Visas",
    description:
      "Dubai and UAE visit visa documents, sponsor routes, and what the price is made of — from our Lahore and Dubai offices.",
    icon: MapPin,
    link: "/visit-visa/uae",
  },
  {
    title: "Schengen & Germany Visit Visa",
    category: "Europe",
    group: "Visit Visas",
    description:
      "The Schengen application fee, which embassy to apply to, and the German Mission's document checklist for applicants from Pakistan.",
    icon: Globe2,
    link: "/visit-visa/schengen",
  },
  {
    title: "Visit Visas by Region",
    category: "All destinations",
    group: "Visit Visas",
    description:
      "Visit visa documentation for the UK, USA, Australia, Europe, Asia, Africa and the Middle East.",
    icon: Plane,
    link: "/visit-visa",
  },
  {
    title: "International Visa Documentation",
    category: "From the UAE",
    group: "Visit Visas",
    description:
      "Documentation support for Saudi Arabia, Europe, USA, Schengen, and other African and Asian destinations, for UAE residents traveling abroad.",
    icon: Globe2,
    link: "/services/international-visas",
  },
  {
    title: "Study Visa Documentation",
    category: "Students",
    group: "Study & Work",
    description:
      "Student visa documentation for the UK, USA, Australia and Germany once you hold an offer or admission.",
    icon: GraduationCap,
    link: "/services/study-visa",
  },
  {
    title: "Job Seeker Visa",
    category: "Pakistan & India",
    group: "Study & Work",
    description:
      "Job seeker visa documentation for the UAE (60/90/120 days), Germany's Opportunity Card, Austria and Sweden.",
    icon: Briefcase,
    link: "/job-seeker-visa",
  },
  {
    title: "UAE Golden Visa from Pakistan",
    category: "UAE",
    group: "Study & Work",
    description:
      "5 or 10-year UAE residence for investors, entrepreneurs, exceptional talent, outstanding students and humanitarian pioneers.",
    icon: Award,
    link: "/services/uae-golden-visa",
  },
  {
    title: "Freelance Visa in Dubai & the UAE",
    category: "UAE",
    group: "Study & Work",
    description:
      "A self-sponsored residence visa through a Dubai (GoFreelance) or Abu Dhabi (twofour54) freelance permit — no employer needed.",
    icon: Laptop,
    link: "/services/freelance-visa-dubai",
  },
  {
    title: "UK Visa from Pakistan",
    category: "UK Visas",
    group: "Country Guides",
    description:
      "Student, Visit, and Family/Spouse visa documentation for Pakistani applicants, submitted through UKVI's official channels.",
    icon: Landmark,
    link: "/services/uk-visa-from-pakistan",
  },
  {
    title: "USA Visa from Pakistan",
    category: "USA Visas",
    group: "Country Guides",
    description:
      "B1/B2 visitor and F1 student visa documentation for Pakistani applicants, including DS-160 review and Embassy Islamabad interview preparation.",
    icon: Flag,
    link: "/services/usa-visa-from-pakistan",
  },
  {
    title: "Australia Visa from Pakistan",
    category: "Australia Visas",
    group: "Country Guides",
    description:
      "Visitor, Student, and Partner/Family visa documentation for Pakistani applicants, submitted through the Department of Home Affairs.",
    icon: Sun,
    link: "/services/australia-visa-from-pakistan",
  },
  {
    title: "Germany Visa from Pakistan",
    category: "Germany Visas",
    group: "Country Guides",
    description:
      "Student/Ausbildung, Visit/Tourist (Schengen) and Family Reunification visa documentation for Pakistani applicants.",
    icon: Compass,
    link: "/services/germany-visa-from-pakistan",
  },
  {
    title: "Canada Visa from Pakistan",
    category: "Information guide",
    group: "Country Guides",
    description:
      "Official IRCC fees and requirements for Canada visit visas and study permits (information guide).",
    icon: Snowflake,
    link: "/services/canada-visa-from-pakistan",
  },
];

const GROUPS: Group[] = ["All", "Visit Visas", "Study & Work", "Country Guides"];

const advantages = [
  {
    icon: Clock,
    title: "Clear Requirements",
    description: "We confirm the documents for your destination and situation — not a generic checklist.",
  },
  {
    icon: Target,
    title: "Organised Applications",
    description: "Help preparing documents, financial evidence and bookings, step by step.",
  },
  {
    icon: Shield,
    title: "Official Channels Only",
    description: "Applications go through each country's official process. We never promise approval.",
  },
];

export default function ServicesPage() {
  const [activeGroup, setActiveGroup] = useState<Group>("All");
  const visibleServices =
    activeGroup === "All" ? services : services.filter((s) => s.group === activeGroup);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F7F3EC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#0A4D8C' }}>
              What We Offer
            </p>
            <h1 className="page-title mb-6">
              Our <span style={{ color: '#0A4D8C' }}>Services</span>
            </h1>
            <p className="lead text-[#52606D]">
              Visit and study visa documentation for applicants in Pakistan and the UAE — Dubai,
              the UK, USA, Schengen, Australia, Germany and more, submitted through each country&apos;s
              official process.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(10, 77, 140,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="Travelaxis visit and study visa documentation services"
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
                    ? { backgroundColor: "#0A4D8C", color: "#FFFFFF", borderColor: "#0A4D8C" }
                    : { backgroundColor: "#FFFFFF", color: "#0F2A43", borderColor: "var(--card-line)" }
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
      <section className="py-20" style={{ backgroundColor: '#F7F3EC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Service <span style={{ color: '#0A4D8C' }}>Advantages</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={false}
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
                <p className="text-[#52606D]">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0A4D8C' }}>
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Ready to Get Started?</h2>
          <p className="text-white/90 mb-8">
            Tell us where you are going and we&apos;ll confirm what your application needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-[#F5A524] text-[#3B2600] shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-md"
          >
            Contact Travelaxis about our services
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
