import RedirectStub, { redirectMetadata } from "@/components/RedirectStub";

export const metadata = redirectMetadata("/");

export default function Page() {
  return <RedirectStub targetPath="/" label="Travelaxis Home" />;
}
