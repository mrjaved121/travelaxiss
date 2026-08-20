"use client";

import Link from "next/link";
import { Star, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "@/components/data/testimonials";

export default function SuccessStoriesPage() {
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Success Stories</p>
            <h1 className="mb-6" style={{ color: "#071A2B" }}>
              Real Journeys. <span style={{ color: "#155EEF" }}>Real Destinations.</span>
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Genuine client stories only — we publish a story here once the client has
              given us permission to share it.
            </p>
          </motion.div>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${testimonial.date}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-6 card-hover flex flex-col"
                  style={{ border: "1px solid var(--card-line)" }}
                >
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{
                          color: i < testimonial.rating ? "#C9A45C" : "#E4E7EC",
                          fill: i < testimonial.rating ? "#C9A45C" : "none",
                        }}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold" style={{ color: "#071A2B" }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.context}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="rounded-2xl p-10 card-hover"
              style={{ border: "1px solid var(--card-line)" }}
            >
              <h2 className="mb-4" style={{ color: "#071A2B" }}>
                We&apos;re gathering our first published stories
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We only publish a success story once a client has given us permission to
                share it, so this page is still empty. In the meantime, you&apos;re welcome
                to speak with our team directly about what a journey with Travelaxis looks
                like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/consultation"
                  className="btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 transition-all hover:opacity-90"
                  style={{ borderColor: "#071A2B", color: "#071A2B" }}
                  aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
