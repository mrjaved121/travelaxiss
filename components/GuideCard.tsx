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
      className={`relative group h-full flex flex-col rounded-2xl bg-white p-[26px] transition-all duration-200 hover:-translate-y-1 card-hover ${className}`}
      style={{ border: "1px solid var(--card-line)" }}
    >
      <Link href={href} className="absolute inset-0 z-10 rounded-2xl" aria-label={ariaLabel ?? `Read: ${title}`} />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div
          className="w-[46px] h-[46px] shrink-0 rounded-[11px] flex items-center justify-center"
          style={{ backgroundColor: "var(--card-icon-bg)" }}
          aria-hidden
        >
          <Icon className="w-[22px] h-[22px]" style={{ color: "var(--card-icon-fg)" }} />
        </div>
        {badge && (
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
            style={{ backgroundColor: "#F5F8FF", color: "#155EEF" }}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="subsection-title leading-snug mb-2">
        {title}
      </h3>

      <p className="text-[0.9rem] text-[#667085] leading-relaxed line-clamp-3 mb-4 flex-1">
        {description}
      </p>

      <div className="flex items-center gap-1.5 text-[0.9rem] font-semibold transition-all group-hover:gap-2.5" style={{ color: "var(--card-icon-fg)" }}>
        <span>{ctaLabel}</span>
        <ArrowUpRight className="w-4 h-4" aria-hidden />
      </div>
    </motion.div>
  );
}
