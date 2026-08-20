"use client";

import { useId, useState, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const DESTINATION_OPTIONS = [
  "UAE",
  "USA",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "Not sure yet",
];

const GOAL_OPTIONS = [
  "Study",
  "Work",
  "Visit",
  "Immigration",
  "Business & Investment",
  "Family",
];

const fieldClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-shadow";

export default function ConsultationPage() {
  const headingId = useId();
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [residence, setResidence] = useState("");
  const [destination, setDestination] = useState(DESTINATION_OPTIONS[0]);
  const [goal, setGoal] = useState(GOAL_OPTIONS[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Consultation request: ${destination} — ${goal}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${contact}`,
      `Country of residence: ${residence}`,
      `Destination: ${destination}`,
      `Visa goal: ${goal}`,
      `Preferred consultation date: ${date || "Not specified"}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:info@travelaxis.me?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Book a Consultation</p>
            <h1 className="mb-6" style={{ color: "#071A2B" }}>
              Let&apos;s Talk About <span style={{ color: "#155EEF" }}>Your Journey</span>
            </h1>
            <p className="lead max-w-2xl mx-auto">
              Tell us about your plans and we&apos;ll help you understand the next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white" aria-labelledby={headingId}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id={headingId} className="sr-only">
            Consultation request form
          </h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 md:p-8 space-y-5 card-hover"
            style={{ border: "1px solid var(--card-line)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c-name" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                  Full name
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={fieldClassName}
                  style={{ ["--tw-ring-color" as string]: "#155EEF" }}
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={fieldClassName}
                  style={{ ["--tw-ring-color" as string]: "#155EEF" }}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c-contact" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                  Phone / WhatsApp
                </label>
                <input
                  id="c-contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="How should we reach you?"
                  className={fieldClassName}
                  style={{ ["--tw-ring-color" as string]: "#155EEF" }}
                />
              </div>
              <div>
                <label htmlFor="c-residence" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                  Country of residence
                </label>
                <input
                  id="c-residence"
                  type="text"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  placeholder="e.g. Pakistan"
                  className={fieldClassName}
                  style={{ ["--tw-ring-color" as string]: "#155EEF" }}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="c-destination" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                  Destination
                </label>
                <select
                  id="c-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={fieldClassName}
                  style={{ ["--tw-ring-color" as string]: "#155EEF" }}
                >
                  {DESTINATION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="c-goal" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                  Visa goal
                </label>
                <select
                  id="c-goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className={fieldClassName}
                  style={{ ["--tw-ring-color" as string]: "#155EEF" }}
                >
                  {GOAL_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="c-date" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                Preferred consultation date
              </label>
              <input
                id="c-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={fieldClassName}
                style={{ ["--tw-ring-color" as string]: "#155EEF" }}
              />
            </div>

            <div>
              <label htmlFor="c-message" className="block text-sm font-semibold mb-2" style={{ color: "#071A2B" }}>
                Message
              </label>
              <textarea
                id="c-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a bit about your profile and plans"
                rows={4}
                className={fieldClassName}
                style={{ ["--tw-ring-color" as string]: "#155EEF" }}
              />
            </div>

            <button
              type="submit"
              className="btn w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
            >
              <Send className="w-5 h-5" aria-hidden />
              <span>Request Consultation</span>
            </button>
            <p className="text-note text-center">
              This opens your email app with your details pre-filled to info@travelaxis.me — nothing is sent automatically.
            </p>
          </motion.form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-3">Prefer to talk now?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#25D366", color: "#FFFFFF" }}
              aria-label="Start a WhatsApp chat with Travelaxis (opens in a new tab)"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
