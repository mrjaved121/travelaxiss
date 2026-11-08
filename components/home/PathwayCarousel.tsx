"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export type Pathway = {
  tag: string;
  /** Pill colours for the tag: [background, text]. */
  tagTone: "teal" | "lilac" | "peach" | "blue";
  /** flagcdn.com code. */
  flag: string;
  title: string;
  description: string;
  href: string;
  image: string;
  /** Highlighted (teal-filled) card. */
  featured?: boolean;
};

const TAG_TONES: Record<Pathway["tagTone"], string> = {
  teal: "bg-teal-50 text-teal-700",
  lilac: "bg-lilac-50 text-[#5B3FC4]",
  peach: "bg-peach-50 text-[#B4461B]",
  blue: "bg-blue-50 text-blue-700",
};

const ARCH_TONES: Record<Pathway["tagTone"], string> = {
  teal: "bg-teal-100",
  lilac: "bg-lilac-50",
  peach: "bg-peach-50",
  blue: "bg-blue-50",
};

/** Horizontal, swipeable row of visa cards with prev/next buttons (scroll-snap, no library). */
export default function PathwayCarousel({ items }: { items: Pathway[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative -mb-6">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        className="absolute -left-3 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-navy shadow-md transition-colors hover:bg-surface-soft md:grid lg:-left-5"
        aria-label="Previous visa"
      >
        <ChevronLeft className="size-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        className="absolute -right-3 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-teal-700 text-white shadow-md transition-colors hover:bg-teal-800 md:grid lg:-right-5"
        aria-label="Next visa"
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>

      <ul
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-10 pt-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:px-1 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const featured = item.featured;
          return (
            <li key={item.href} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3rem)/4)]">
              <article
                className={`flex h-full flex-col rounded-2xl p-4 transition-all hover:-translate-y-1 ${
                  featured
                    ? "bg-teal-700 text-white shadow-[0_18px_40px_rgba(25,182,163,0.28)]"
                    : "card-hover border border-line bg-white shadow-[var(--card-shadow)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      featured ? "bg-white/15 text-white" : TAG_TONES[item.tagTone]
                    }`}
                  >
                    {item.tag}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://flagcdn.com/${item.flag}.svg`}
                    alt=""
                    width={28}
                    height={28}
                    loading="lazy"
                    className="size-7 rounded-full object-cover ring-2 ring-white"
                  />
                </div>

                <div
                  className={`relative mx-auto mt-4 h-28 w-40 overflow-hidden rounded-t-full ${
                    featured ? "bg-white/15" : ARCH_TONES[item.tagTone]
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt=""
                    width={320}
                    height={224}
                    loading="lazy"
                    className="absolute inset-x-3 bottom-0 top-3 h-[calc(100%-0.75rem)] w-[calc(100%-1.5rem)] rounded-t-full object-cover"
                  />
                </div>

                <h3 className={`mt-4 text-center text-lg font-bold ${featured ? "text-white" : "text-navy"}`}>
                  {item.title}
                </h3>
                <p
                  className={`mt-1.5 flex-1 text-center text-sm leading-relaxed ${
                    featured ? "text-white/90" : "text-slate"
                  }`}
                >
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className={`btn mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 transition-colors ${
                    featured
                      ? "bg-white text-teal-800 hover:bg-teal-50"
                      : "border border-line bg-white text-navy hover:bg-surface-soft"
                  }`}
                >
                  {featured ? "Start application" : "Explore details"}
                  <ArrowRight className="size-4" aria-hidden />
                  <span className="sr-only">: {item.title}</span>
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
