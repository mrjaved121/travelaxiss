"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

type GuideCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
  ctaLabel?: string;
  ariaLabel?: string;
  delay?: number;
  /** Extra classes merged onto the card wrapper, e.g. for grid-position overrides. */
  className?: string;
};

/** Shared icon + title + description + CTA card used across hub/listing pages (Pakistan, Services, Dubai, Emirates, Free Zones). */
export default function GuideCard({
  icon: Icon,
  title,
  description,
  href,
  badge,
  ctaLabel = "Read Guide",
  ariaLabel,
  delay = 0,
  className = "",
}: GuideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`relative group h-full flex flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-lg hover:border-[#1D63E0]/30 hover:-translate-y-0.5 ${className}`}
    >
      <Link href={href} className="absolute inset-0 z-10 rounded-3xl" aria-label={ariaLabel ?? `Read: ${title}`} />

      <div className="flex items-start justify-between gap-3 mb-5">
        <div
          className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#1D63E0" }}
          aria-hidden
        >
          <Icon className="w-7 h-7" style={{ color: "#FFFFFF" }} />
        </div>
        {badge && (
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
            style={{ backgroundColor: "#EEF4FF", color: "#1D63E0" }}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold leading-snug mb-2" style={{ color: "#0F1B2D" }}>
        {title}
      </h3>

      <p className="text-base text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-1">
        {description}
      </p>

      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        <span className="text-sm font-semibold" style={{ color: "#1D63E0" }}>
          {ctaLabel}
        </span>
        <ArrowUpRight
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: "#1D63E0" }}
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
