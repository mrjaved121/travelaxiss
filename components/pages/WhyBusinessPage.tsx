'use client';

import Link from "next/link";
import { Globe, TrendingUp, Building, Users, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function WhyBusinessPage() {
  const benefits = [
    {
      icon: Globe,
      title: "Strategic Location",
      description: "Access to key markets across the Middle East, Africa, and Asia with world-class infrastructure.",
    },
    {
      icon: TrendingUp,
      title: "Global Market Access",
      description: "Connect with international markets and leverage Dubai's position as a global business hub.",
    },
    {
      icon: Building,
      title: "Business-Friendly Policies",
      description: "Benefit from streamlined regulations, tax advantages, and supportive government initiatives.",
    },
    {
      icon: Users,
      title: "Diverse Workforce",
      description: "Access to a talented, multicultural workforce from around the world.",
    },
    {
      icon: Sparkles,
      title: "Growth Opportunities",
      description: "Thrive in a dynamic environment that encourages innovation and entrepreneurship.",
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
              The Ultimate Business Destination for{" "}
              <span style={{ color: '#C9A24A' }}>Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              The business environment offers strong opportunities for growth, global connectivity, and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg p-8 shadow-sm"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#C9A24A' }}>
                  <benefit.icon className="w-7 h-7" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111111' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg p-8 shadow-sm"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#C9A24A' }}>
                  <benefit.icon className="w-7 h-7" style={{ color: '#111111' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#111111' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#C9A24A' }}>200+</div>
              <p className="text-gray-400">Nationalities Represented</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#C9A24A' }}>45+</div>
              <p className="text-gray-400">Free Zones Available</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#C9A24A' }}>100%</div>
              <p className="text-gray-400">Foreign Ownership Possible</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#111111' }}>
              Start Your <span style={{ color: '#C9A24A' }}>Journey</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you establish your business in one of the world's most dynamic markets.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all hover:opacity-90 text-lg font-semibold"
              style={{ backgroundColor: '#C9A24A', color: '#111111' }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
