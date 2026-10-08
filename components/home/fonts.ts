import { Fraunces } from "next/font/google";

/** Display serif used for home page headings (body text stays Manrope). */
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
