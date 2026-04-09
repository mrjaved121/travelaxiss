'use client';

import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { faqItems as faqs } from "@/lib/data/faqs";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Business Setup", "Freezone", "Visa Services", "Documentation", "General", "Why Choose Us"];

  // Filter FAQs based on category and search
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#C9A24A' }}>
              <HelpCircle className="w-8 h-8" style={{ color: '#111111' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111111' }}>
              Frequently Asked <span style={{ color: '#C9A24A' }}>Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-opacity-50 focus:outline-none transition-colors"
                style={{ borderColor: searchQuery ? '#C9A24A' : undefined }}
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-2 rounded-full font-semibold transition-all"
                  style={{
                    backgroundColor: selectedCategory === category ? '#C9A24A' : '#F5F5F5',
                    color: selectedCategory === category ? '#111111' : '#666666',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-500">No questions found. Try a different search term or category.</p>
              </motion.div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg overflow-hidden shadow-sm border-2 transition-all"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    borderColor: openIndex === index ? '#C9A24A' : '#F5F5F5'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-opacity-50 transition-colors"
                    style={{ backgroundColor: openIndex === index ? '#F5F5F5' : 'transparent' }}
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-lg" style={{ color: '#111111' }}>
                        {faq.question}
                      </h3>
                      {faq.category && (
                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#F5F5F5', color: '#C9A24A' }}>
                          {faq.category}
                        </span>
                      )}
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6" style={{ color: '#C9A24A' }} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>

          {/* FAQ Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500">
              Showing <span className="font-semibold" style={{ color: '#C9A24A' }}>{filteredFAQs.length}</span> of <span className="font-semibold">{faqs.length}</span> questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Topics - SEO Boost */}
      <section className="py-16" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#111111' }}>
              Related <span style={{ color: '#C9A24A' }}>Topics</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Business Setup in UAE",
                "Company Formation Dubai",
                "Freezone Business UAE",
                "UAE Visa Services",
                "Mainland Company Setup",
                "Business Consultancy UAE",
                "Dubai Trade License",
                "Corporate Services UAE"
              ].map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <p className="text-sm font-semibold" style={{ color: '#111111' }}>
                    {topic}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Still Have <span style={{ color: '#C9A24A' }}>Questions?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our team is ready to provide personalized answers to your specific inquiries.
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