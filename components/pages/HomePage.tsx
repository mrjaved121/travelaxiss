'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle, Building2, FileText, Scale, HeadphonesIcon, Star } from "lucide-react";
import { motion } from "motion/react";
export default function HomePage() {
  const services = [
    {
      title: "Company Formation Solutions",
      description: "We help you set up your business in the right way with full support.",
      includes: [
        "Mainland Company Setup",
        "Freezone Registration",
        "Offshore Company Setup",
        "License Processing",
      ],
      icon: Building2,
      link: "/services/company-formation",
    },
    {
      title: "Government Relations Suite",
      description: "We manage government work so you don't have to worry.",
      includes: [
        "Government Approvals",
        "Dubai Chamber Services",
        "Multi-Authority Coordination",
      ],
      icon: FileText,
      link: "/services/government-services",
    },
    {
      title: "Legal Documentation Suite",
      description: "We prepare and handle all important documents for your business.",
      includes: [
        "POA / MOA Preparation",
        "Certificate Attestation",
        "Legal Agreements",
        "Board Resolutions",
      ],
      icon: Scale,
      link: "/services/legal-documentation",
    },
  ];

  const testimonials = [
    {
      name: "Ali Hashim",
      role: "Founder",
      content: "Their service was smooth and professional. Everything was handled properly, and we had no problems.",
    },
    {
      name: "Rajesh Patel",
      role: "Managing Director",
      content: "They explained everything clearly and supported us at every step. The whole process became easy because of them.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#111111' }}>
              We help you build a strong and{" "}
              <span style={{ color: '#C9A24A' }}>successful future</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Simple, clear, and professional support for your business journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="relative overflow-hidden"
        style={{ minHeight: '350px' }}
      >
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGNpdHlzY2FwZSUyMHNreWxpbmUlMjBsdXh1cnl8ZW58MXx8fHwxNzc1Njk0NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dubai Luxury Skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Very light overlay for text readability - 80% transparent (20% opacity) */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center py-16 md:py-20" style={{ minHeight: '350px' }}>
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-semibold text-center italic"
            style={{ color: '#C9A24A', textShadow: '3px 3px 10px rgba(0,0,0,0.95)' }}
          >
            "Success comes from always aiming higher and never settling for less."
          </motion.blockquote>
        </div>
      </section>

      {/* Trust Metric */}
      <section className="py-12" style={{ backgroundColor: '#C9A24A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#111111' }}>
              3.2x
            </div>
            <p className="text-lg md:text-xl" style={{ color: '#111111' }}>
              Better success rate in approvals and processes
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111111' }}>
              We help businesses grow with the{" "}
              <span style={{ color: '#C9A24A' }}>right direction</span>.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Our goal is to support businesses from the beginning to success.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              We guide our clients with clear steps, proper planning, and the right advice.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on understanding your needs and helping you move forward without confusion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-lg"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#C9A24A' }}>11</div>
              <p className="text-lg" style={{ color: '#111111' }}>Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-lg"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#C9A24A' }}>1789</div>
              <p className="text-lg" style={{ color: '#111111' }}>Happy Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111111' }}>
              We help businesses{" "}
              <span style={{ color: '#C9A24A' }}>move forward and grow</span>.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Starting and running a business needs the right support.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make the process simple and easy so you can focus on your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#C9A24A' }}>
                  <service.icon className="w-7 h-7" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111111' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <p className="font-semibold mb-3" style={{ color: '#111111' }}>Includes:</p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center space-x-2 font-semibold transition-opacity hover:opacity-70"
                  style={{ color: '#C9A24A' }}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111111' }}>
                Helping you succeed with{" "}
                <span style={{ color: '#C9A24A' }}>experience and smart solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We work as your partner, not just a service provider.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We guide you at every step and make sure everything is done properly.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our focus is to make your journey simple, fast, and stress-free.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 font-semibold"
                style={{ backgroundColor: '#C9A24A', color: '#111111' }}
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <Star className="w-12 h-12 mb-4" style={{ color: '#C9A24A' }} />
              <blockquote className="text-lg italic text-gray-700">
                "Working with this team was a great experience. They guided us clearly and helped us move forward with confidence."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#111111' }}>
              Client Stories: <span style={{ color: '#C9A24A' }}>What People Say About Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#C9A24A' }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold" style={{ color: '#111111' }}>{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Start Your <span style={{ color: '#C9A24A' }}>Journey Today</span>
            </h2>
            <p className="text-lg text-gray-400 mb-4">
              Take the first step with the right support and guidance.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              We are here to help you at every stage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}