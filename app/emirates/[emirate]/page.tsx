import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

// Retired location pages: each old URL redirects to the homepage.
const SLUGS = ["abu-dhabi","ajman","fujairah","ras-al-khaimah","sharjah","umm-al-quwain"];

export function generateStaticParams() {
  return SLUGS.map((emirate) => ({ emirate }));
}

export const metadata = redirectMetadata("/");

export default function Page() {
  return <RedirectStub targetPath="/" label="Travelaxis Home" />;
}
