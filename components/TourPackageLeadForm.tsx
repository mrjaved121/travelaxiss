"use client";

import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { formAttractionChoices } from "@/components/data/uaeTourPackage";

const WHATSAPP_NUMBER = "971589867555";

const TRAVELER_OPTIONS = ["Just me", "Couple", "Family", "Private group"];

const fieldClassName =
  "w-full rounded-xl border border-[#E6E1D8] bg-white px-4 py-3 text-[#0F2A43] placeholder:text-[#94A3B0] focus:outline-none focus:ring-2 focus:ring-[#0A4D8C]/40 transition-shadow";

/**
 * Compiles into a prefilled WhatsApp message on submit rather than posting
 * anywhere — this is a static export with no backend to receive submissions,
 * same pattern as VisitVisaEnquiryForm and the contact page form.
 */
export default function TourPackageLeadForm({ heading = "Get Your Custom Quote" }: { heading?: string }) {
  const idPrefix = useId();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [travelers, setTravelers] = useState(TRAVELER_OPTIONS[0]);
  const [attractions, setAttractions] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleAttraction = (name: string) => {
    setAttractions((prev) => (prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      "Hi, I'd like a quote for the UAE visit visa + tour package.",
      `Name: ${name}`,
      `WhatsApp: ${whatsapp}`,
      `Travelers: ${travelers}`,
      travelMonth && `Travel month: ${travelMonth}`,
      attractions.length > 0 && `Interested in: ${attractions.join(", ")}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center shadow-sm border" style={{ borderColor: "#E6E1D8" }}>
        <h3 className="subsection-title mb-3">Thank you</h3>
        <p className="text-[#52606D] max-w-sm mx-auto mb-6">
          We&apos;ve opened WhatsApp with your details. Send the message and our team will follow up with your
          custom quote.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="text-sm font-semibold" style={{ color: "#0A4D8C" }}>
          Request another quote
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border" style={{ borderColor: "#E6E1D8" }}>
      <h2 className="section-title mb-2 text-center">{heading}</h2>
      <p className="text-[#52606D] text-center mb-8 max-w-xl mx-auto">
        Tell us a bit about your trip and we&apos;ll put together a package and price for you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`${idPrefix}-name`} className="block text-sm font-semibold mb-2" style={{ color: "#0F2A43" }}>
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
            <label htmlFor={`${idPrefix}-whatsapp`} className="block text-sm font-semibold mb-2" style={{ color: "#0F2A43" }}>
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

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor={`${idPrefix}-travelers`} className="block text-sm font-semibold mb-2" style={{ color: "#0F2A43" }}>
              Who&apos;s travelling?
            </label>
            <select
              id={`${idPrefix}-travelers`}
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className={fieldClassName}
            >
              {TRAVELER_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${idPrefix}-month`} className="block text-sm font-semibold mb-2" style={{ color: "#0F2A43" }}>
              Travel month
            </label>
            <input
              id={`${idPrefix}-month`}
              type="text"
              value={travelMonth}
              onChange={(e) => setTravelMonth(e.target.value)}
              placeholder="e.g. December 2026"
              className={fieldClassName}
            />
          </div>
        </div>

        <div>
          <span className="block text-sm font-semibold mb-2" style={{ color: "#0F2A43" }}>
            Attractions you&apos;re interested in (optional)
          </span>
          <div className="flex flex-wrap gap-2">
            {formAttractionChoices.map((name) => {
              const active = attractions.includes(name);
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleAttraction(name)}
                  aria-pressed={active}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border transition-colors"
                  style={
                    active
                      ? { backgroundColor: "#0A4D8C", color: "#FFFFFF", borderColor: "#0A4D8C" }
                      : { backgroundColor: "#F7F3EC", color: "#0F2A43", borderColor: "#E6E1D8" }
                  }
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-message`} className="block text-sm font-semibold mb-2" style={{ color: "#0F2A43" }}>
            Anything else we should know? (optional)
          </label>
          <textarea
            id={`${idPrefix}-message`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Budget range, specific dates, special occasions…"
            rows={3}
            className={fieldClassName}
          />
        </div>

        <button
          type="submit"
          className="btn w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:brightness-105"
          style={{ backgroundColor: "#F5A524", color: "#3B2600" }}
        >
          <Send className="w-5 h-5" aria-hidden />
          <span>Get My Custom Quote</span>
        </button>
        <p className="text-xs text-[#52606D] text-center">
          This opens WhatsApp with your details pre-filled so our team can follow up directly.
        </p>
      </form>
    </div>
  );
}
