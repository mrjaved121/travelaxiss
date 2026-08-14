"use client";

import { useId, useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { motion } from "motion/react";

/** Al Qusais, Dubai — Google Maps embed iframe (no API key). */
const AL_QUSAIS_MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Al Qusais, Dubai, United Arab Emirates"
)}&hl=en&z=13&ie=UTF8&output=embed`;

const SERVICE_OPTIONS = [
  "Company Formation",
  "Government Services",
  "Legal Documentation",
  "UAE Visa Documentation",
  "Attestation",
  "UK / Canada / Australia Visa (Pakistan)",
  "Umrah Services",
  "Something else",
];

const fieldClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-shadow";

export default function ContactPage() {
  const mapSectionTitleId = useId();
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Enquiry: ${service} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone / WhatsApp / Email: ${contact}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:info@travelaxis.me?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#EEF4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#1D63E0' }}>
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F1B2D' }}>
              Connect <span style={{ color: '#1D63E0' }}>With Us</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Reach out for professional guidance on business setup, compliance, and UAE
              visa-related documentation support.
            </p>
            <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
              We provide documentation assistance and consultancy support only. We are not a
              government authority, employer, or recruitment agency, and we do not arrange jobs,
              sponsor employment, or guarantee visa approval. All visa applications are
              submitted through official UAE government channels or authorized entities,
              subject to applicable rules and approvals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96"
          >
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(29,99,224,0.12)' }} aria-hidden />
            <img
              src="/images/hero-image-travelaxis.webp"
              alt=""
              role="presentation"
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
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#0F1B2D' }}>
                Get in <span style={{ color: '#1D63E0' }}>Touch</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                    <Phone className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#0F1B2D' }}>Phone</h3>
                    <a href="tel:+971589867555" className="text-gray-600 hover:text-gray-900 transition-colors block">
                      +971 58 986 7555
                    </a>
                    <p className="text-gray-600">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                    <Mail className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#0F1B2D' }}>Email</h3>
                    <a href="mailto:info@travelaxis.me" className="text-gray-600 hover:text-gray-900 transition-colors block">
                      info@travelaxis.me
                    </a>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D63E0' }} aria-hidden>
                    <MapPin className="w-6 h-6" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#0F1B2D' }}>Address</h3>
                    <p className="text-gray-600">Al Qusais, Dubai, United Arab Emirates</p>
                    <p className="text-gray-600">Visit by appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: '#EEF4FF' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#0F1B2D' }}>Business Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: '#EEF4FF' }}>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#25D366' }} aria-hidden>
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1B2D' }}>
                    Chat with us on <span style={{ color: '#1D63E0' }}>WhatsApp</span>
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Get structured responses to your queries—including company setup and UAE visa documentation questions.
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl transition-all hover:opacity-90 font-semibold text-lg"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                  aria-label="Start a WhatsApp chat with Travelaxis (opens in a new tab)"
                >
                  <MessageCircle className="w-6 h-6" aria-hidden />
                  <span>Start WhatsApp Chat</span>
                </a>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Click to open WhatsApp and message us directly
                  </p>
                  <p className="text-sm font-semibold mt-2" style={{ color: '#0F1B2D' }}>
                    +971 58 986 7555
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: '#1D63E0' }}>
                <h3 className="font-semibold mb-3" style={{ color: '#FFFFFF' }}>
                  Why Contact Us?
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>✓ Quick response time</li>
                  <li>✓ Professional consultation</li>
                  <li>✓ Expert business guidance</li>
                  <li>✓ Transparent scope—consultancy and documentation support</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request a Callback Form */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
              Prefer not to WhatsApp right now?
            </h2>
            <p className="text-gray-600">
              Send us the details below and we'll get back to you by phone or email — no chat app required.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: "#0F1B2D" }}>
                Full name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={fieldClassName}
                style={{ ["--tw-ring-color" as string]: "#1D63E0" }}
              />
            </div>

            <div>
              <label htmlFor="contact-info" className="block text-sm font-semibold mb-2" style={{ color: "#0F1B2D" }}>
                Phone, WhatsApp, or email
              </label>
              <input
                id="contact-info"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="How should we reach you?"
                className={fieldClassName}
                style={{ ["--tw-ring-color" as string]: "#1D63E0" }}
              />
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-sm font-semibold mb-2" style={{ color: "#0F1B2D" }}>
                What do you need help with?
              </label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={fieldClassName}
                style={{ ["--tw-ring-color" as string]: "#1D63E0" }}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: "#0F1B2D" }}>
                A few details (optional)
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Anything that helps us prepare before we call you back"
                rows={4}
                className={fieldClassName}
                style={{ ["--tw-ring-color" as string]: "#1D63E0" }}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
            >
              <Send className="w-5 h-5" aria-hidden />
              <span>Send Enquiry</span>
            </button>
            <p className="text-xs text-gray-500 text-center">
              This opens your email app with your details pre-filled to info@travelaxis.me — nothing is sent automatically.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Map — Al Qusais, Dubai */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }} aria-labelledby={mapSectionTitleId}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center md:text-left"
          >
            <h2 id={mapSectionTitleId} className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#0F1B2D" }}>
              Find us in <span style={{ color: "#1D63E0" }}>Al Qusais</span>
            </h2>
            <p className="text-gray-600">
              Dubai, United Arab Emirates — visit by appointment
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-200"
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
          <p className="mt-4 text-center text-sm text-gray-500">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Al+Qusais+Dubai+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-2 hover:underline"
              style={{ color: "#1D63E0" }}
            >
              Open Al Qusais, Dubai in Google Maps (opens in a new tab)
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}