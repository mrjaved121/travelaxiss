import type { Metadata } from "next";
import JobSeekerVisaPage from "@/components/pages/JobSeekerVisaPage";
import { jobSeekerFaqs } from "@/components/data/jobSeekerVisa";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Job Seeker Visa from Pakistan & India – UAE, Germany, More",
  description:
    "Job seeker visa documentation for Pakistani and Indian applicants: UAE (60/90/120 days), Germany Opportunity Card, Austria and Sweden, from official sources.",
  keywords: [
    "job seeker visa from pakistan",
    "job seeker visa from india",
    "uae job seeker visa",
    "germany opportunity card pakistan",
    "austria job seeker visa",
    "sweden job seeker visa",
  ],
  alternates: {
    canonical: `${SITE_URL}/job-seeker-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/job-seeker-visa/`,
    title: "Job Seeker Visa from Pakistan & India | Travelaxis",
    description: "UAE, Germany, Austria and Sweden job seeker visa documentation, checked against official sources.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Job Seeker Visa", path: "/job-seeker-visa" }]),
          serviceJsonLd({
            name: "Job Seeker Visa Documentation",
            description: "Documentation support for UAE, Germany, Austria and Sweden job seeker visas for applicants from Pakistan and India.",
            path: "/job-seeker-visa",
            serviceType: "Job seeker visa documentation",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: jobSeekerFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <JobSeekerVisaPage />
    </>
  );
}
