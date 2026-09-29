import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/visit-visa/uae/");

export default function Page() {
  return <RedirectStub targetPath="/visit-visa/uae/" label="Dubai Visit Visa from Pakistan" />;
}
