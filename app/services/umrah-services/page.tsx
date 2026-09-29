import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/visit-visa/middle-east/");

export default function Page() {
  return <RedirectStub targetPath="/visit-visa/middle-east/" label="Middle East Visit Visas" />;
}
