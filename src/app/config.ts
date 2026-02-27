/**
 * Site base URL for absolute links (e.g. sharing, redirects).
 * Use these for links that must always go to the live site.
 */
export const SITE_URL = 'https://travelaxis.online';

export const ROUTES = {
  home: SITE_URL + '/',
  workVisa: SITE_URL + '/work-visa/',
  workPermit: SITE_URL + '/europe-work-permit/',
  privacyPolicy: SITE_URL + '/privacy-policy/',
  termsConditions: SITE_URL + '/terms-conditions/',
  disclaimer: SITE_URL + '/disclaimer/',
} as const;
