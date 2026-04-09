import type { Metadata } from "next";
import WhyBusinessPage from "@/components/pages/WhyBusinessPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Why Start a Business in UAE",
  description:
    "Discover why Dubai and the UAE are a strategic choice for company formation: location, infrastructure, tax environment, and global market access.",
  alternates: {
    canonical: `${SITE_URL}/why-business`,
  },
  openGraph: {
    title: "Why Start a Business in UAE | Travelaxis",
    description:
      "Strategic advantages of setting up your business in Dubai and the UAE.",
    url: `${SITE_URL}/why-business`,
  },
};

export default function Page() {
  return <WhyBusinessPage />;
}
