import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/visit-visa/");

export default function Page() {
  return <RedirectStub targetPath="/visit-visa/" label="Visit Visa Services" />;
}
