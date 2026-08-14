export type Testimonial = {
  /** Client's name as they want it shown. Use a first name + last initial if they prefer partial anonymity. */
  name: string;
  /** e.g. "Software Engineer Golden Visa client" or "Company formation, IFZA" — what they came to us for. */
  context: string;
  quote: string;
  /** 1-5. Only include if the client actually gave a rating. */
  rating: number;
  /** ISO yyyy-MM-dd the testimonial was given, for schema.org datePublished. */
  date: string;
};

/**
 * Real client testimonials only — do not add placeholder or invented entries here.
 * This site previously shipped fabricated review-count JSON-LD and it was removed
 * as an SEO/trust risk (see git history, commit 421071f). Populate this array only
 * with testimonials the business has actual permission to publish (a WhatsApp message,
 * a Google review, a written quote), ideally with the source noted for your own records.
 */
export const testimonials: Testimonial[] = [];
