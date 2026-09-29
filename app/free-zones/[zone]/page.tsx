import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

// Retired location pages: each old URL redirects to the homepage.
const SLUGS = ["difc","dmcc","dubai-south","ifza","jafza","meydan-free-zone","rakez","shams"];

export function generateStaticParams() {
  return SLUGS.map((zone) => ({ zone }));
}

export const metadata = redirectMetadata("/");

export default function Page() {
  return <RedirectStub targetPath="/" label="Travelaxis Home" />;
}
