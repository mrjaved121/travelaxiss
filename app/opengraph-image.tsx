import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DEFAULT_TITLE, SITE_NAME } from "@/lib/seo/site";

export const dynamic = "force-static";
export const alt = `${SITE_NAME} — UAE Business Setup & Visa Documentation Support`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/travelaxis-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #EEF4FF 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(29,99,224,0.12)",
            display: "flex",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og rendering, not a browser DOM img */}
        <img src={logoSrc} width={340} height={91} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#0F1B2D",
            maxWidth: 900,
          }}
        >
          {DEFAULT_TITLE.split("|")[0].trim()}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            fontWeight: 600,
            color: "#1D63E0",
          }}
        >
          Company Formation &nbsp;•&nbsp; Government Services &nbsp;•&nbsp; Legal Documentation
        </div>
      </div>
    ),
    { ...size },
  );
}
