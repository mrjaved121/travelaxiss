"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileText,
  Scale,
  Star,
  Award,
  Users,
  TrendingUp,
  ThumbsUp,
  Rocket,
  Briefcase,
  Building,
  Landmark,
  MapPin,
  Tag,
  Banknote,
  Plane,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { blogPostSummaries } from "@/components/data/blogIndex";

const services = [
  {
    title: "Company Formation",
    category: "Business Setup",
    description:
      "Mainland, freezone, and offshore company setup with full license processing support.",
    highlightBig: "5–10",
    highlightSmall: "Working Days",
    icon: Building2,
    link: "/services/company-formation",
  },
  {
    title: "Government Services",
    category: "Approvals",
    description:
      "We manage approvals, Dubai Chamber services, and multi-authority coordination for you.",
    highlightBig: "Multi-Authority",
    highlightSmall: "Coordination",
    icon: FileText,
    link: "/services/government-services",
  },
  {
    title: "Legal Documentation",
    category: "Compliance",
    description:
      "POA/MOA preparation, certificate attestation, and board resolutions handled end-to-end.",
    highlightBig: "Fast-Track",
    highlightSmall: "Available",
    icon: Scale,
    link: "/services/legal-documentation",
  },
  {
    title: "Trademark & IP",
    category: "Brand Protection",
    description:
      "Trademark registration and ISO certification support to protect and strengthen your brand.",
    highlightBig: "Trademark",
    highlightSmall: "& ISO Support",
    icon: Tag,
    link: "/services/business-support",
  },
  {
    title: "Banking & Compliance",
    category: "Business Support",
    description:
      "Corporate bank account opening and ongoing regulatory compliance monitoring.",
    highlightBig: "Account Setup",
    highlightSmall: "& Compliance",
    icon: Banknote,
    link: "/services/business-support",
  },
  {
    title: "UAE Visa Documentation",
    category: "Visa Services",
    description:
      "Investor, employment, family, and visit visa documentation, renewals, and cancellations.",
    highlightBig: "5",
    highlightSmall: "Visa Categories",
    icon: Plane,
    link: "/services/visa-services",
  },
];

const stats = [
  { icon: Award, value: "11+", label: "Years of Experience" },
  { icon: Users, value: "1,789+", label: "Happy Clients" },
  { icon: TrendingUp, value: "3.2x", label: "Better Success Rate" },
  { icon: ThumbsUp, value: "4.8★", label: "Client Rating" },
];

const audiences = [
  {
    label: "Startups",
    description: "Right company structure and licensing from day one.",
    icon: Rocket,
  },
  {
    label: "Freelancers",
    description: "Freelance permits and visas for independent professionals.",
    icon: Briefcase,
  },
  {
    label: "SMEs",
    description: "Licensing, compliance, and support as your team grows.",
    icon: Building,
  },
  {
    label: "Corporates",
    description: "Multi-entity structuring and governance for established firms.",
    icon: Landmark,
  },
];

const testimonials = [
  {
    name: "Ali Hashim",
    role: "Founder",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=400",
    content:
      "Their service was smooth and professional. Everything was handled properly, and we had no problems from day one to the final approval.",
  },
  {
    name: "Rajesh Patel",
    role: "Managing Director",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=400",
    content:
      "They explained everything clearly and supported us at every step. The whole process became easy because of them.",
  },
];

const latestPosts = blogPostSummaries.slice(0, 3);

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-28 md:pt-20 md:pb-32" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-4" style={{ color: "#1D63E0" }}>
              Business Setup &amp; Visa Consultancy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#0F1B2D" }}>
              Choose Travelaxis To{" "}
              <span style={{ color: "#1D63E0" }}>Build Your Business</span>
            </h1>
            <p className="text-lg mb-8 max-w-xl text-gray-600">
              Company formation, government approvals, and legal documentation —
              handled by a team that has guided 1,789+ clients through it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>

          {/* Not a motion.div: this holds the LCP image, and an initial-opacity-0
              mount animation delays when Chrome counts it as painted until Motion
              hydrates and runs the transition. */}
          <div className="relative h-80 md:h-[26rem]">
            <div
              className="absolute -top-8 -right-8 w-56 h-56 rounded-full"
              style={{ backgroundColor: "rgba(29,99,224,0.12)" }}
              aria-hidden
            />
            <svg
              className="absolute top-6 left-0 w-16 h-16 hidden md:block"
              viewBox="0 0 64 64"
              fill="none"
              stroke="#1D63E0"
              strokeWidth="2"
              strokeDasharray="4 5"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 40 C 16 8, 48 8, 60 24" />
            </svg>
            <img
              src="https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt="Dubai skyline"
              width={760}
              height={638}
              fetchPriority="high"
              className="absolute top-0 right-0 w-3/4 h-3/4 object-cover rounded-[2rem] shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1720722023444-d4e633a71126?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt="Business consultation meeting in Dubai"
              className="absolute bottom-0 left-0 w-3/5 h-3/5 object-cover rounded-[2rem] shadow-xl border-4 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1734456061630-87babdefd904?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt="Dubai downtown skyscrapers"
              className="hidden md:block absolute bottom-6 right-0 w-28 h-28 object-cover rounded-full shadow-xl border-4 border-white"
            />
            <div
              className="absolute top-[45%] left-[18%] -translate-y-1/2 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center shadow-lg"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              <MapPin className="w-5 h-5 mb-0.5" aria-hidden />
              <span className="text-xs font-bold leading-tight px-1">11+ Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation-style inquiry bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 md:-mt-16 relative z-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-semibold" style={{ color: "#0F1B2D" }}>
              Service Type*
            </span>
            <select className="h-11 rounded-full border border-gray-200 px-4 outline-none focus-visible:ring-2" style={{ color: "#0F1B2D" }}>
              <option>Company Formation</option>
              <option>Government Services</option>
              <option>Legal Documentation</option>
              <option>Business Support</option>
              <option>UAE Visa Documentation</option>
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-semibold" style={{ color: "#0F1B2D" }}>
              Preferred Contact*
            </span>
            <select className="h-11 rounded-full border border-gray-200 px-4 outline-none focus-visible:ring-2" style={{ color: "#0F1B2D" }}>
              <option>WhatsApp</option>
              <option>Phone Call</option>
              <option>Email</option>
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-semibold" style={{ color: "#0F1B2D" }}>
              Phone Number*
            </span>
            <input
              type="tel"
              placeholder="+971"
              className="h-11 rounded-full border border-gray-200 px-4 outline-none focus-visible:ring-2"
              style={{ color: "#0F1B2D" }}
            />
          </label>
          <button
            type="submit"
            className="h-11 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
          >
            Get Free Quote
          </button>
        </motion.form>
      </div>

      {/* About snapshot */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-72 md:h-96 overflow-visible"
          >
            <div
              className="absolute inset-0 rounded-[3rem]"
              style={{ backgroundColor: "#EEF4FF" }}
              aria-hidden
            />
            <img
              src="https://images.unsplash.com/photo-1700041654199-7cbf9ba06eeb?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt="Travelaxis consultancy team at work"
              className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover rounded-[2.5rem] shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1706074740295-d7a79c079562?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt="Dubai freezone office"
              className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 object-cover rounded-full shadow-xl border-4 border-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Get to Know Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0F1B2D" }}>
              More About Travelaxis
            </h2>
            <p className="text-gray-600 mb-4">
              Our goal is to support businesses from the beginning to success, guiding
              clients with clear steps, proper planning, and the right advice.
            </p>
            <p className="text-gray-600 mb-6">
              We focus on understanding your needs and helping you move forward
              without confusion.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Mainland & freezone company formation",
                "Government & Dubai Chamber coordination",
                "UAE visa documentation support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              Read More
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <p
              className="font-script text-3xl mb-1"
              style={{ color: "#1D63E0" }}
            >
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Popular Services For Business
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group min-w-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <Link
                  href={service.link}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${service.title} details`}
                />
                <div className="p-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#1D63E0" }}
                  >
                    <service.icon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#0F1B2D" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                      Dubai, UAE
                    </span>
                    <span>{service.category}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="leading-tight" style={{ color: "#0F1B2D" }}>
                      <span className="text-2xl font-bold">{service.highlightBig}</span>
                      <span className="text-sm text-gray-500">/{service.highlightSmall}</span>
                    </p>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-all group-hover:opacity-90 shrink-0"
                      style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
                    >
                      <ArrowUpRight className="w-5 h-5" aria-hidden />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat row with diagonal accent */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div
          className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 -skew-y-3"
          style={{ backgroundColor: "#1D63E0" }}
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-xl p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#1D63E0" }}
                >
                  <stat.icon className="w-7 h-7 text-white" aria-hidden />
                </div>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "#0F1B2D" }}>
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Get Plans For Your Family
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Solutions That Fit Your Business Stage
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {audiences.map((a, index) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="min-w-0 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-6 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#1D63E0" }}
                >
                  <a.icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <p className="font-bold mb-1" style={{ color: "#0F1B2D" }}>
                  {a.label}
                </p>
                <p className="text-sm text-gray-600">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EEF4FF" }}>
            <img
              key={testimonial.avatar}
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
            />
            <div>
              <div className="flex items-center gap-1 mb-4" role="img" aria-label="Rating: 5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#1D63E0" }} aria-hidden />
                ))}
              </div>
              <p className="text-lg italic mb-6" style={{ color: "#0F1B2D" }}>
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <p className="font-semibold" style={{ color: "#0F1B2D" }}>
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-pressed={activeTestimonial === index}
                className="rounded-full overflow-hidden transition-all"
                style={{
                  width: activeTestimonial === index ? "3.5rem" : "3rem",
                  height: activeTestimonial === index ? "3.5rem" : "3rem",
                  outline: activeTestimonial === index ? "3px solid #1D63E0" : "none",
                  outlineOffset: "2px",
                }}
              >
                <img src={t.avatar} alt="" role="presentation" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-[2.5rem] overflow-hidden py-20 md:py-28"
          >
            <img
              src="https://images.unsplash.com/photo-1734456061630-87babdefd904?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=760"
              alt=""
              role="presentation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(29,99,224,0.85)" }} aria-hidden />
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Are You Ready To Start? Remember Us!!
              </h2>
              <p className="text-white/85 text-lg mb-8">
                Take the first step with the right support and guidance — we&apos;re here
                to help you at every stage of your business journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
                style={{ color: "#1D63E0" }}
              >
                Book Now
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 -z-0"
          style={{
            backgroundColor: "#1D63E0",
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-script text-3xl mb-1" style={{ color: "#1D63E0" }}>
              latest News
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0F1B2D" }}>
              Read Latest Blogs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group min-w-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read full article: ${post.title}`}
                />
                <div className="relative h-44">
                  <img src={post.image} alt="" role="presentation" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: "#0F1B2D" }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                    style={{ color: "#1D63E0" }}
                  >
                    Read More <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
