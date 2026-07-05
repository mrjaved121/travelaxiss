'use client';

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { blogPostSummaries } from "@/components/data/blogIndex";

export default function BlogPage() {
  const blogs = blogPostSummaries;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Latest <span style={{ color: '#1D63E0' }}>Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Expert guides and articles on business setup, company formation, and entrepreneurship in UAE
            </p>
            <p className="mt-4 font-semibold" style={{ color: '#1D63E0' }}>
              Showing all {blogs.length} articles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <Link
                  href={`/blog/${blog.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read full article: ${blog.title}`}
                />
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#1D63E0', color: '#FFFFFF' }}>
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" aria-hidden />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" aria-hidden />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-opacity-80 transition-colors" style={{ color: '#0F1B2D' }}>
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center space-x-2 font-semibold group-hover:underline"
                    style={{ color: '#1D63E0' }}
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D63E0' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Business?</h2>
          <p className="text-white/90 text-lg mb-8">
            Get expert guidance for your company formation in UAE
          </p>
          <a
            href="https://wa.me/971589867555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
            aria-label="Contact Travelaxis on WhatsApp about UAE company formation (opens in a new tab)"
          >
            Contact Us on WhatsApp
            <ArrowRight className="w-5 h-5" aria-hidden />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
