/**
 * GA4 measurement ID. Unset in dev/preview builds so analytics never fires
 * against production data; set NEXT_PUBLIC_GA_MEASUREMENT_ID at build time
 * (static export bakes NEXT_PUBLIC_* vars into the JS bundle, so it must be
 * present when `next build` runs, not just at deploy/runtime).
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
