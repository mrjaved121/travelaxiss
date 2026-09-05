/**
 * GA4 measurement ID. Unset in dev/preview builds so analytics never fires
 * against production data; set NEXT_PUBLIC_GA_MEASUREMENT_ID at build time
 * (static export bakes NEXT_PUBLIC_* vars into the JS bundle, so it must be
 * present when `next build` runs, not just at deploy/runtime).
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Fires a GA4 custom event via the global gtag (loaded in app/layout.tsx when
 * GA_MEASUREMENT_ID is set). Safe to call unconditionally — a no-op when
 * analytics isn't loaded (dev/preview builds, or gtag blocked client-side).
 */
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
