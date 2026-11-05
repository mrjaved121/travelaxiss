"use client";

import Link from "next/link";
import { ChevronDown, Globe2 } from "lucide-react";
import { useId, useRef, useState } from "react";
import { newVisitVisaDestinations } from "@/lib/data/visit-visa-destinations";

const popularDestinations = [
  { name: "UAE", path: "/visit-visa/uae" },
  { name: "United Kingdom", path: "/visit-visa/uk" },
  { name: "United States", path: "/visit-visa/usa" },
  { name: "Schengen", path: "/visit-visa/schengen" },
  { name: "Canada", path: "/visit-visa/canada" },
  { name: "Australia", path: "/visit-visa/australia" },
];

const regions = [
  { name: "Europe & Schengen", path: "/visit-visa/europe", key: "Europe" },
  { name: "Asia", path: "/visit-visa/asia", key: "Asia" },
  { name: "Middle East", path: "/visit-visa/middle-east", key: "Middle East" },
  { name: "North America", path: "/visit-visa/north-america", key: "North America" },
  { name: "Oceania", path: "/visit-visa/oceania", key: "Oceania" },
  { name: "Africa", path: "/visit-visa/africa", key: "Africa" },
];

const countriesByRegion = regions.map((region) => ({
  ...region,
  countries: newVisitVisaDestinations.filter((destination) => destination.region === region.key),
}));

function DestinationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {countriesByRegion.map((region) => (
        <div key={region.key}>
          <Link
            href={region.path}
            onClick={onNavigate}
            className="mb-2.5 block text-sm font-bold text-[#0F2A43] hover:text-[#0A4D8C]"
          >
            {region.name}
          </Link>
          <ul className="space-y-1.5">
            {region.countries.slice(0, 8).map((country) => (
              <li key={country.slug}>
                <Link
                  href={`/visit-visa/${country.slug}`}
                  onClick={onNavigate}
                  className="block text-sm text-[#52606D] hover:text-[#0A4D8C]"
                >
                  {country.name}
                </Link>
              </li>
            ))}
            {region.countries.length > 8 ? (
              <li>
                <Link
                  href="/visit-visa/"
                  onClick={onNavigate}
                  className="block text-sm font-semibold text-[#0A4D8C] hover:underline"
                >
                  View all {region.name} →
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      ))}
    </>
  );
}

export function VisitVisaMegaMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerId = useId();

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <div className="relative" onMouseEnter={() => { cancelClose(); setOpen(true); }} onMouseLeave={scheduleClose}>
      <button
        id={triggerId}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="nav-link inline-flex items-center gap-1 rounded-sm transition-colors hover:text-[#0A4D8C]"
      >
        Visit Visas
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <div
        role="menu"
        aria-labelledby={triggerId}
        className={`absolute left-0 top-full z-50 pt-3 ${open ? "" : "hidden"}`}
      >
        <div className="w-[min(94vw,960px)] rounded-2xl border border-[#E6E1D8] bg-white p-6 shadow-xl">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1fr_1fr_1fr]">
            <div className="border-b border-[#E6E1D8] pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0A4D8C]">Popular destinations</p>
              <ul className="space-y-2.5">
                {popularDestinations.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} onClick={() => setOpen(false)} className="block text-sm font-semibold text-[#0F2A43] hover:text-[#0A4D8C]">
                      {item.name} Visit Visa
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/visit-visa/"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#0A4D8C] hover:underline"
              >
                <Globe2 className="size-4" aria-hidden />
                All destinations
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              <DestinationLinks onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileVisitVisaMenu({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="nav-link flex w-full items-center justify-between rounded-sm px-4 py-2 transition-colors hover:text-[#0A4D8C]"
      >
        Visit Visas
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open ? (
        <div id={panelId} className="space-y-5 px-8 pb-3 pt-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0A4D8C]">Popular destinations</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {popularDestinations.map((item) => (
                <Link key={item.path} href={item.path} onClick={onNavigate} className="text-sm text-[#52606D] hover:text-[#0A4D8C]">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {countriesByRegion.map((region) => (
              <details key={region.key} className="rounded-xl border border-[#E6E1D8] bg-white px-3 py-2">
                <summary className="cursor-pointer text-sm font-semibold text-[#0F2A43]">{region.name}</summary>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-2 pt-3">
                  {region.countries.map((country) => (
                    <Link key={country.slug} href={`/visit-visa/${country.slug}`} onClick={onNavigate} className="text-sm text-[#52606D] hover:text-[#0A4D8C]">
                      {country.name}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <Link href="/visit-visa/" onClick={onNavigate} className="inline-flex text-sm font-bold text-[#0A4D8C] hover:underline">
            View all destinations →
          </Link>
        </div>
      ) : null}
    </li>
  );
}
