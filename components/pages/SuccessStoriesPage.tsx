"use client";

import Link from "next/link";
import { Star, MessageCircle, ArrowRight, FileCheck2, ClipboardList, Send } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { testimonials } from "@/components/data/testimonials";

const journeyStages: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "A reviewed, complete file",
    description:
      "Every case starts the same way regardless of service — we go through your specific requirements together and build a document checklist before anything is submitted.",
    icon: ClipboardList,
  },
  {
    title: "Issues caught before submission",
    description:
      "Bank statements, attestation chains, sponsor documents — we flag the details that commonly cause delays or refusals while there's still time to fix them.",
    icon: FileCheck2,
  },
  {
    title: "Submission through the official channel",
    description:
      "Your file goes to the relevant government authority or free zone — GDRFA, ICP, DED, a specific free zone, or an embassy/consulate — with us keeping you updated on status.",
    icon: Send,
  },
];

export default function SuccessStoriesPage() {
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Success Stories</p>
            <h1 className="page-title mb-6">
              Real Journeys. <span style={{ color: "#155EEF" }}>Real Destinations.</span>
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Genuine client stories only — we publish a story here once the client has
              given us permission to share it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What a journey with us looks like */}
      <section className="py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="section-title mb-4">What a Journey With Us Looks Like</h2>
            <p className="text-[#667085] leading-relaxed">
              Every client's situation is different, but the underlying process stays the same
              across visa documentation and business setup cases.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-6 bg-white card-hover"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--card-icon-bg)" }}
                >
                  <stage.icon className="w-5 h-5" style={{ color: "var(--card-icon-fg)" }} aria-hidden />
                </div>
                <h3 className="subsection-title mb-2">{stage.title}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-[#667085] text-center mt-10 max-w-2xl mx-auto leading-relaxed">
            We provide documentation assistance and consultancy support only. We do not guarantee
            approval — final decisions rest with the relevant government authority or institution.
          </p>
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
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="rounded-2xl p-10 card-hover"
              style={{ border: "1px solid var(--card-line)" }}
            >
              <h2 className="section-title mb-4">
                We&apos;re gathering our first published stories
              </h2>
              <p className="text-[#667085] mb-8 leading-relaxed">
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
                  style={{ borderColor: "#1D2939", color: "#1D2939" }}
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
