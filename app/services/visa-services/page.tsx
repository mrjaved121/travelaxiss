import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/services/uae-golden-visa/");

export default function Page() {
  return <RedirectStub targetPath="/services/uae-golden-visa/" label="UAE Golden Visa from Pakistan" />;
}
