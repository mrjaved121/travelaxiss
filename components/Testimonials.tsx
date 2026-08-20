"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "./data/testimonials";

/** Renders nothing until real testimonials are added to components/data/testimonials.ts. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
            Client Feedback
          </p>
          <h2 className="section-title">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${testimonial.date}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{
                      color: i < testimonial.rating ? "#155EEF" : "#E4E7EC",
                      fill: i < testimonial.rating ? "#155EEF" : "none",
                    }}
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-[#667085] leading-relaxed mb-6 flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold" style={{ color: "#1D2939" }}>{testimonial.name}</p>
                <p className="text-sm text-[#667085]">{testimonial.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
