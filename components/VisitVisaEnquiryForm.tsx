"use client";

import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "971589867555";

const APPLYING_FROM_OPTIONS = ["Pakistan", "UAE", "Other"];
const PURPOSE_OPTIONS = ["Tourism", "Family visit", "Business visit", "Other"];

const fieldClassName =
  "w-full rounded-xl border border-[#E4E7EC] bg-white px-4 py-3 text-[#1D2939] placeholder:text-[#667085] focus:outline-none focus:ring-2 transition-shadow";

/**
 * Compiles into a prefilled WhatsApp message on submit rather than posting anywhere —
 * this site is a static export with no backend/API routes to receive form submissions.
 */
export default function VisitVisaEnquiryForm({
  defaultDestination = "",
  heading = "Get Your Visit Visa Requirements",
  subheading = "Tell us your destination and travel plan. We'll help you understand the relevant application and document requirements.",
}: {
  defaultDestination?: string;
  heading?: string;
  subheading?: string;
}) {
  const idPrefix = useId();
  const [applyingFrom, setApplyingFrom] = useState(APPLYING_FROM_OPTIONS[0]);
  const [nationality, setNationality] = useState("");
  const [destination, setDestination] = useState(defaultDestination);
  const [travelMonth, setTravelMonth] = useState("");
  const [purpose, setPurpose] = useState(PURPOSE_OPTIONS[0]);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Hi, I'd like visit visa requirements${destination ? ` for ${destination}` : ""}.`,
      `Applying from: ${applyingFrom}`,
      nationality && `Passport nationality: ${nationality}`,
      travelMonth && `Intended travel month: ${travelMonth}`,
      `Travel purpose: ${purpose}`,
      `Name: ${name}`,
      whatsapp && `Contact number: ${whatsapp}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border" style={{ borderColor: "#E4E7EC" }}>
      <h2 className="section-title mb-2 text-center">{heading}</h2>
      <p className="text-[#667085] text-center mb-8 max-w-xl mx-auto">{subheading}</p>
      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
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
          <div>
            <label htmlFor={`${idPrefix}-nationality`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
              Passport nationality
            </label>
            <input
              id={`${idPrefix}-nationality`}
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="e.g. Pakistani"
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`${idPrefix}-destination`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
              Destination
            </label>
            <input
              id={`${idPrefix}-destination`}
              type="text"
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. UK, USA, Canada, Schengen…"
              className={fieldClassName}
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-travel-month`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
              Intended travel month
            </label>
            <input
              id={`${idPrefix}-travel-month`}
              type="text"
              value={travelMonth}
              onChange={(e) => setTravelMonth(e.target.value)}
              placeholder="e.g. December 2026"
              className={fieldClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-purpose`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
            Travel purpose
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
          <label htmlFor={`${idPrefix}-message`} className="block text-sm font-semibold mb-2" style={{ color: "#1D2939" }}>
            Message (optional)
          </label>
          <textarea
            id={`${idPrefix}-message`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Anything else that helps us prepare"
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
          <span>Request Requirements</span>
        </button>
        <p className="text-xs text-[#667085] text-center">
          By submitting, you agree to be contacted about your enquiry via WhatsApp. Visa
          outcomes are decided by the relevant government authority.
        </p>
      </form>
    </div>
  );
}
