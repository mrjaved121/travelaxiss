/**
 * Google Tag Manager container, loaded on every page from app/layout.tsx.
 * GA4 (G-2D4KDQ84XX) is configured inside the container, so the site never
 * loads gtag.js directly: doing both would count every page view twice.
 */
export const GTM_ID = "GTM-PK45Z389";

/**
 * Pushes a custom event to the GTM dataLayer. Safe to call unconditionally.
 *
 * The published container already sends `whatsapp_click`, `phone_click` and
 * `email_click` to GA4 from its own link-click triggers (any click on a
 * wa.me / tel: / mailto: link), so these pushes are NOT forwarded to GA4 on
 * their own and cannot double count (the dataLayer event name is prefixed
 * with `site_` so it can never collide with those tags). They exist so a Custom Event trigger can
 * be added in GTM later for actions that are not link clicks (for example the
 * homepage eligibility form, which opens WhatsApp with window.open).
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: `site_${name}`, ...params });
}
