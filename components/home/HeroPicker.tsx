"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { trackEvent } from "@/lib/seo/analytics";
import { WHATSAPP_NUMBER } from "@/components/home/contact";

const DESTINATION_OPTIONS = [
  "Dubai / UAE",
  "United Kingdom",
  "USA",
  "Schengen / Europe",
  "Canada",
  "Australia",
  "Asia",
  "Middle East",
  "Other",
];

/** Hero "where are you travelling?" picker — the site's single requirements-check entry point (#check-requirements). */
export default function HeroPicker() {
  const idPrefix = useId();
  const [destination, setDestination] = useState(DESTINATION_OPTIONS[0]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackEvent("whatsapp_click", { page: "homepage_hero_picker", destination });
    const text = `Hello Travelaxis, I'm planning a trip to ${destination}. Please send me the visit visa document checklist.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      id="check-requirements"
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-xl scroll-mt-28 rounded-2xl bg-white p-3 shadow-lg"
      aria-label="Check visit visa requirements"
    >
      <label htmlFor={`${idPrefix}-destination`} className="mb-2 block px-1 text-sm font-semibold text-[#0F2A43]">
        Where are you travelling?
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <MapPin className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#0A4D8C]" aria-hidden />
          <select
            id={`${idPrefix}-destination`}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-14 w-full appearance-none rounded-xl border border-[#E6E1D8] bg-[#F7F3EC] pl-12 pr-10 text-base font-semibold text-[#0F2A43] focus:outline-none focus:ring-2 focus:ring-[#0A4D8C]/40"
          >
            {DESTINATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === "Other" ? "Other destination" : option}
              </option>
            ))}
          </select>
          <ArrowRight className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 rotate-90 text-[#52606D]" aria-hidden />
        </div>
        <button
          type="submit"
          className="btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#F5A524] px-6 text-base text-[#3B2600] transition-[filter] hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5A524]/40 sm:w-auto"
        >
          Get my checklist
          <ArrowRight className="size-5" aria-hidden />
        </button>
      </div>
      <p className="px-1 pt-3 text-sm text-[#3E4C5A]">Free document checklist on WhatsApp, usually within working hours.</p>
    </form>
  );
}
