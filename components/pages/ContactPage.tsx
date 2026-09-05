"use client";

import { useId, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

/** Al Qusais, Dubai — Google Maps embed iframe (no API key). */
const AL_QUSAIS_MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Al Qusais, Dubai, United Arab Emirates"
)}&hl=en&z=13&ie=UTF8&output=embed`;

const WHATSAPP_NUMBER = "971589867555";

const SERVICE_OPTIONS: { label: string; isVisa: boolean }[] = [
  { label: "Visit Visa", isVisa: true },
  { label: "Study Visa", isVisa: true },
  { label: "UAE Residency Support", isVisa: true },
  { label: "Document Attestation", isVisa: true },
  { label: "Company Formation", isVisa: false },
  { label: "Something else", isVisa: false },
];

const APPLYING_FROM_OPTIONS = ["Pakistan", "UAE", "Other"];
const PURPOSE_OPTIONS = ["Tourism", "Study", "Family visit", "Business visit", "Other"];

const fieldClassName =
  "w-full rounded-xl border border-[#E4E7EC] bg-white px-4 py-3 text-[#1D2939] placeholder:text-[#667085] focus:outline-none focus:ring-2 transition-shadow";

export default function ContactPage() {
  const idPrefix = useId();
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;
  const searchParams = useSearchParams();
  const prefillService = searchParams?.get("service");

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [applyingFrom, setApplyingFrom] = useState(APPLYING_FROM_OPTIONS[0]);
  const [service, setService] = useState(
    SERVICE_OPTIONS.find((s) => s.label === prefillService)?.label ?? SERVICE_OPTIONS[0].label
  );
  const [destination, setDestination] = useState("");
  const [purpose, setPurpose] = useState(PURPOSE_OPTIONS[0]);
  const [month, setMonth] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedService = SERVICE_OPTIONS.find((s) => s.label === service) ?? SERVICE_OPTIONS[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Hi, I have an enquiry for Travelaxis.`,
      `Service needed: ${service}`,
      `Applying from: ${applyingFrom}`,
      selectedService.isVisa && destination && `Destination: ${destination}`,
      selectedService.isVisa && `Purpose: ${purpose}`,
      month && `${selectedService.isVisa ? "Travel month" : "Preferred start month"}: ${month}`,
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              Get In Touch
            </p>
            <h1 className="page-title mb-6">
              Connect <span style={{ color: '#155EEF' }}>With Us</span>
            </h1>
            <p className="lead mb-6">
              Tell us what you need and we&apos;ll route your enquiry to the right place — visa
              documentation or UAE business setup.
            </p>
            <p className="text-sm text-[#667085] max-w-lg leading-relaxed border-l-4 pl-4" style={{ borderColor: "#155EEF" }}>
              Service scope: documentation assistance and consultancy support only. We do not
              guarantee visa approval or business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt="Contact Travelaxis UAE visa documentation and business setup consultancy"
              width={640}
              height={427}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="section-title mb-8">
                Get in <span style={{ color: '#155EEF' }}>Touch</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#155EEF' }} aria-hidden>
                    <Phone className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="subsection-title mb-1">Phone</h3>
                    <a href="tel:+971589867555" className="text-[#667085] hover:text-[#155EEF] transition-colors block">
                      +971 58 986 7555
                    </a>
                    <p className="text-[#667085]">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#155EEF' }} aria-hidden>
                    <Mail className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="subsection-title mb-1">Email</h3>
                    <a href="mailto:info@travelaxis.me" className="text-[#667085] hover:text-[#155EEF] transition-colors block">
                      info@travelaxis.me
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#155EEF' }} aria-hidden>
                    <MapPin className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="subsection-title mb-1">Dubai Office</h3>
                    <p className="text-[#667085]">Al Qusais, Dubai, United Arab Emirates</p>
                    <p className="text-[#667085]">Visit by appointment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#155EEF' }} aria-hidden>
                    <MapPin className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="subsection-title mb-1">Lahore Office</h3>
                    <p className="text-[#667085]">DHA Phase 8, Lahore, Pakistan</p>
                    <p className="text-[#667085]">Visit by appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#F5F8FF' }}>
                <h3 className="subsection-title mb-2">Business Hours</h3>
                <div className="space-y-1 text-[#667085]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Enquiry form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {submitted ? (
                <div className="rounded-3xl p-8 text-center shadow-sm h-full flex flex-col items-center justify-center" style={{ backgroundColor: '#F5F8FF' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#155EEF' }} aria-hidden>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="subsection-title mb-3">Thank you</h3>
                  <p className="text-[#667085] mb-6 max-w-sm">
                    Your enquiry has been received. A Travelaxis team member will review your
                    requested service and contact details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold"
                    style={{ color: '#155EEF' }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-sm space-y-5"
                  style={{ border: "1px solid var(--card-line)" }}
                >
                  <h2 className="section-title mb-2">Send an Enquiry</h2>

                  <div>
                    <label htmlFor={`${idPrefix}-service`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                      What do you need help with?
                    </label>
                    <select
                      id={`${idPrefix}-service`}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={fieldClassName}
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option.label} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={`${idPrefix}-name`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                        Name
                      </label>
                      <input
                        id={`${idPrefix}-name`}
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={fieldClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor={`${idPrefix}-whatsapp`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                        WhatsApp number
                      </label>
                      <input
                        id={`${idPrefix}-whatsapp`}
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+92…"
                        className={fieldClassName}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={`${idPrefix}-applying-from`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                      Applying from
                    </label>
                    <select
                      id={`${idPrefix}-applying-from`}
                      value={applyingFrom}
                      onChange={(e) => setApplyingFrom(e.target.value)}
                      className={fieldClassName}
                    >
                      {APPLYING_FROM_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {selectedService.isVisa && (
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor={`${idPrefix}-destination`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                          Destination
                        </label>
                        <input
                          id={`${idPrefix}-destination`}
                          type="text"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="e.g. UK, USA, Canada…"
                          className={fieldClassName}
                        />
                      </div>
                      <div>
                        <label htmlFor={`${idPrefix}-purpose`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                          Purpose
                        </label>
                        <select
                          id={`${idPrefix}-purpose`}
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          className={fieldClassName}
                        >
                          {PURPOSE_OPTIONS.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor={`${idPrefix}-month`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                      {selectedService.isVisa ? "Travel month" : "Desired start month"}
                    </label>
                    <input
                      id={`${idPrefix}-month`}
                      type="text"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      placeholder="e.g. December 2026"
                      className={fieldClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor={`${idPrefix}-message`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
                      Message (optional)
                    </label>
                    <textarea
                      id={`${idPrefix}-message`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Anything that helps us prepare"
                      rows={3}
                      className={fieldClassName}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all hover:opacity-90"
                    style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                  >
                    <Send className="w-5 h-5" aria-hidden />
                    <span>Send Enquiry</span>
                  </button>
                  <p className="text-xs text-[#667085] text-center">
                    This opens WhatsApp with your details pre-filled so our team can follow up directly.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp direct option */}
      <section className="py-16" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#25D366' }} aria-hidden>
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="subsection-title mb-3">Prefer to chat directly?</h2>
          <p className="text-[#667085] mb-6">
            Message us on WhatsApp any time — no form required.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all hover:opacity-90"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            aria-label="Start a WhatsApp chat with Travelaxis (opens in a new tab)"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      </section>

      {/* Map — Al Qusais, Dubai */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center md:text-left"
          >
            <h2 className="section-title mb-2">
              Find us in <span style={{ color: "#155EEF" }}>Al Qusais</span>
            </h2>
            <p className="text-[#667085]">
              Dubai, United Arab Emirates — visit by appointment
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-lg border border-[#E4E7EC] bg-[#F5F8FF]"
          >
            <div className="relative w-full aspect-[16/10] min-h-[280px] md:min-h-[420px]">
              <iframe
                title="Google Map — Al Qusais, Dubai, United Arab Emirates"
                src={AL_QUSAIS_MAP_EMBED_SRC}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
          <p className="mt-4 text-center text-sm text-[#667085]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Al+Qusais+Dubai+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-2 hover:underline"
              style={{ color: "#155EEF" }}
            >
              Open Al Qusais, Dubai in Google Maps (opens in a new tab)
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
