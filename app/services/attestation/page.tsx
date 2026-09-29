import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/services/");

export default function Page() {
  return <RedirectStub targetPath="/services/" label="Our Visa Services" />;
}
