import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

// Retired location pages: each old URL redirects to the homepage.
const SLUGS = ["al-qusais","bur-dubai","business-bay","deira","jlt"];

export function generateStaticParams() {
  return SLUGS.map((area) => ({ area }));
}

export const metadata = redirectMetadata("/");

export default function Page() {
  return <RedirectStub targetPath="/" label="Travelaxis Home" />;
}
