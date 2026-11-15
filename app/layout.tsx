import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyCta from "@/components/MobileStickyCta";
import SkipToContent from "@/components/SkipToContent";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  titleTemplate,
} from "@/lib/seo/site";
import { GTM_ID } from "@/lib/seo/analytics";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: titleTemplate,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "visa consultancy UAE",
    "UAE visa documentation",
    "visa application support UAE",
    "visit visa documentation",
    "study visa documentation",
    "dubai visit visa from pakistan",
    "Travelaxis",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
  // No title/description here: Next.js falls back to each page's own
  // openGraph (or title/description) per-segment, so hardcoding them on the
  // root layout was overriding every child page's Twitter card with the
  // homepage's values instead.
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <SkipToContent />
        <ScrollToTop />
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4D8C]"
        >
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCta />
        {/* Google Tag Manager — the standard container snippet. GA4 (G-2D4KDQ84XX)
            is configured inside this container, so no direct gtag.js is loaded here
            (that would count every page view twice). */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
