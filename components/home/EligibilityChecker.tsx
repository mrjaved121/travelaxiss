"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/seo/analytics";
import { WHATSAPP_NUMBER } from "@/components/home/contact";

const DESTINATIONS = [
  "Dubai / UAE",
  "United Kingdom",
  "United States",
  "Schengen / Europe",
  "Canada",
  "Australia",
  "New Zealand",
  "Asia",
  "Middle East",
  "Other",
];
const PURPOSES = ["Tourism", "Visiting family or friends", "Business visit", "Medical visit", "Other"];
const NATIONALITIES = ["Pakistani", "UAE resident", "Indian", "Other"];

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function SelectField({ id, label, placeholder, value, options, onChange }: FieldProps) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-12 w-full appearance-none rounded-xl border border-line bg-white pl-4 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-blue/40 ${
            value ? "text-navy" : "text-slate"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate" aria-hidden />
      </div>
    </div>
  );
}

/**
 * "Check your eligibility" bar. Static site with no backend, so the answers are sent
 * to WhatsApp as a pre-filled message. Keeps the #check-requirements anchor that the
 * header and the mobile bottom bar link to.
 */
export default function EligibilityChecker() {
  const idPrefix = useId();
  const [destination, setDestination] = useState("");
  const [purpose, setPurpose] = useState("");
  const [nationality, setNationality] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent("whatsapp_click", { page: "homepage_eligibility", destination, purpose, nationality });
    const parts = [
      `Hello Travelaxis, I'd like to check my visit visa options.`,
      `Destination: ${destination || "Not sure yet"}`,
      `Purpose: ${purpose || "Not sure yet"}`,
      `Nationality: ${nationality || "Not given"}`,
    ];
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      id="check-requirements"
      onSubmit={handleSubmit}
      aria-labelledby={`${idPrefix}-title`}
      className="scroll-mt-28 rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-50 via-[#EAF8F6] to-teal-50 p-5 shadow-[var(--card-shadow)] sm:p-7"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <h2
          id={`${idPrefix}-title`}
          className="shrink-0 text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy lg:w-44 lg:border-r lg:border-teal-100 lg:pr-6"
        >
          Check your eligibility
        </h2>
        <div className="flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <SelectField
              id={`${idPrefix}-destination`}
              label="Destination"
              placeholder="Select destination"
              value={destination}
              options={DESTINATIONS}
              onChange={setDestination}
            />
            <SelectField
              id={`${idPrefix}-purpose`}
              label="Visa purpose"
              placeholder="Select purpose"
              value={purpose}
              options={PURPOSES}
              onChange={setPurpose}
            />
            <SelectField
              id={`${idPrefix}-nationality`}
              label="Nationality"
              placeholder="Select nationality"
              value={nationality}
              options={NATIONALITIES}
              onChange={setNationality}
            />
            <button
              type="submit"
              className="btn inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-md"
            >
              Check eligibility
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
          <p className="mt-3 text-sm italic text-slate">
            Preliminary guidance only. This is not a visa guarantee. We reply on WhatsApp.
          </p>
        </div>
      </div>
    </form>
  );
}
