import { format, isValid, parse } from "date-fns";

const DISPLAY_FORMAT = "MMMM d, yyyy";
const ISO_DAY = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Parse blog `date` strings from `blogContent` / `blogIndex` (e.g. "April 9, 2026")
 * into ISO calendar dates for schema.org and sitemap.
 */
export function blogDisplayDateToIso(display: string): string {
  const parsed = parse(display.trim(), DISPLAY_FORMAT, new Date());
  if (!isValid(parsed)) {
    return format(new Date(), "yyyy-MM-dd");
  }
  return format(parsed, "yyyy-MM-dd");
}

export function blogDisplayDateToDate(display: string): Date {
  const iso = blogDisplayDateToIso(display);
  return new Date(`${iso}T12:00:00.000Z`);
}

/** For optional `dateModifiedIso` fields stored as yyyy-MM-dd */
export function blogIsoDayToDate(isoDay: string): Date {
  const trimmed = isoDay.trim();
  if (!ISO_DAY.test(trimmed)) {
    return blogDisplayDateToDate(trimmed);
  }
  return new Date(`${trimmed}T12:00:00.000Z`);
}

/** Formats a `dateModifiedIso` (yyyy-MM-dd) value for reader-facing display, e.g. "April 9, 2026". */
export function blogIsoDayToDisplay(isoDay: string): string {
  return format(blogIsoDayToDate(isoDay), DISPLAY_FORMAT);
}
