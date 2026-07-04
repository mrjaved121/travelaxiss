'use client';

import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown, Search } from "lucide-react";
import { motion } from "motion/react";
import { useId, useState } from "react";
import { faqItems as faqs } from "@/lib/data/faqs";

export default function FAQPage() {
  const searchFieldId = useId();
  const categoryGroupLabelId = useId();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Business Setup", "Freezone", "UAE Visa Documentation", "Documentation", "General", "Why Choose Us"];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (stableIndex: number) => {
    setOpenIndex((prev) => (prev === stableIndex ? null : stableIndex));
  };

  return (
    <div>
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
              <HelpCircle className="w-8 h-8" style={{ color: '#FFFFFF' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Frequently Asked <span style={{ color: '#1D63E0' }}>Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Clear answers about our consultancy and documentation support—including how UAE visa-related assistance works.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8" style={{ backgroundColor: "#FFFFFF" }} aria-label="Disclaimer">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center leading-relaxed border border-gray-200 rounded-2xl p-4 bg-gray-50">
            We provide documentation assistance and consultancy support only. We are not a government authority and do not issue visas directly. All visa applications are submitted through official UAE government channels or authorized entities, subject to applicable rules and approvals.
          </p>
        </div>
      </section>

      <section
        className="py-20 pt-0"
        style={{ backgroundColor: '#FFFFFF' }}
        aria-labelledby="faq-browse-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-browse-heading" className="sr-only">
            Search, filter, and browse questions
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <label htmlFor={searchFieldId} className="block text-center text-sm font-semibold mb-3" style={{ color: '#0F1B2D' }}>
              Search frequently asked questions
            </label>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" aria-hidden />
              <input
                id={searchFieldId}
                type="search"
                name="faq-search"
                placeholder="e.g. company formation, visa documentation"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-opacity-50 focus:outline-none transition-colors"
                style={{ borderColor: searchQuery ? '#1D63E0' : undefined }}
                autoComplete="off"
                aria-describedby={`${searchFieldId}-hint`}
              />
              <p id={`${searchFieldId}-hint`} className="sr-only">
                Filters the list below as you type. Results update automatically.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <p id={categoryGroupLabelId} className="text-center text-sm font-semibold mb-3" style={{ color: '#0F1B2D' }}>
              Filter by topic
            </p>
            <div className="flex flex-wrap justify-center gap-3" role="group" aria-labelledby={categoryGroupLabelId}>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-2 rounded-full font-semibold transition-all"
                  style={{
                    backgroundColor: selectedCategory === category ? '#1D63E0' : '#EEF4FF',
                    color: selectedCategory === category ? '#0F1B2D' : '#666666',
                  }}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                  {selectedCategory === category ? <span className="sr-only"> (selected)</span> : null}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
              role="status"
            >
              <p className="text-xl text-gray-500">No questions found. Try a different search term or category.</p>
            </motion.div>
          ) : (
            <ul className="space-y-4 list-none p-0 m-0">
              {filteredFAQs.map((faq) => {
                const stableIndex = faqs.indexOf(faq);
                const isOpen = openIndex === stableIndex;
                const headId = `faq-head-${stableIndex}`;
                const panelId = `faq-panel-${stableIndex}`;

                return (
                  <motion.li
                    key={`${stableIndex}-${faq.question}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(stableIndex * 0.02, 0.4) }}
                    className="rounded-2xl overflow-hidden shadow-sm border-2 transition-all"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      borderColor: isOpen ? '#1D63E0' : '#EEF4FF'
                    }}
                  >
                    <div
                      className="flex items-stretch justify-between gap-2"
                      style={{ backgroundColor: isOpen ? '#EEF4FF' : 'transparent' }}
                    >
                      <h3 id={headId} className="m-0 flex-1 min-w-0 text-lg font-bold" style={{ color: '#0F1B2D' }}>
                        <button
                          type="button"
                          onClick={() => toggleFAQ(stableIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-opacity-50 transition-colors gap-4"
                          style={{ backgroundColor: 'transparent' }}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                        >
                          <span className="flex-1 pr-2">
                            <span className="block">{faq.question}</span>
                            {faq.category ? (
                              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#EEF4FF', color: '#1D63E0' }}>
                                {faq.category}
                              </span>
                            ) : null}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                            aria-hidden
                          >
                            <ChevronDown className="w-6 h-6" style={{ color: '#1D63E0' }} />
                          </motion.span>
                        </button>
                      </h3>
                    </div>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headId}
                      hidden={!isOpen}
                      className="px-6 pb-6 pt-2 border-t border-gray-100"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
            aria-live="polite"
          >
            <p className="text-gray-500">
              Showing <span className="font-semibold" style={{ color: '#1D63E0' }}>{filteredFAQs.length}</span> of <span className="font-semibold">{faqs.length}</span> questions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#0F1B2D' }}>
              Related <span style={{ color: '#1D63E0' }}>Topics</span>
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0 m-0">
              {[
                "Business Setup in UAE",
                "Company Formation Dubai",
                "Freezone Business UAE",
                "UAE visa documentation & consultancy",
                "Mainland Company Setup",
                "Business Consultancy UAE",
                "Dubai Trade License",
                "Corporate Services UAE"
              ].map((topic, index) => (
                <motion.li
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <p className="text-sm font-semibold" style={{ color: '#0F1B2D' }}>
                    {topic}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1706074740295-d7a79c079562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-white/85 text-lg mb-8">
            Our team is ready to provide personalized answers to your specific inquiries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
          >
            Contact Travelaxis for personalized answers
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
