import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Contact Us - Dubai Business Consultancy",
  description:
    "Contact Travelaxis for professional business setup and visa consultancy in Dubai, UAE. Reach us via WhatsApp, phone, or email. Mon–Fri 9AM–6PM.",
  keywords: [
    "contact visa consultancy UAE",
    "Dubai business setup contact",
    "Travelaxis contact",
    "business consultancy Dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Travelaxis | Dubai",
    description:
      "Get in touch for UAE business setup and visa consultancy support.",
    url: `${SITE_URL}/contact`,
  },
};

export default function Page() {
  return <ContactPage />;
}
