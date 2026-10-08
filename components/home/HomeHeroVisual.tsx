import { CheckCircle2, Clock3, Plane } from "lucide-react";
import { fraunces } from "./fonts";

const OCEAN = "#0A4D8C";
const INK = "#0F2A43";
const GOLD = "#F5A524";
const SAND = "#F7F3EC";

/** Decorative barcode made of bars of varying width. */
function Barcode() {
  const bars = [2, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 3, 2, 1, 1, 2];
  return (
    <div className="flex h-10 shrink-0 items-stretch gap-[2px]" aria-hidden="true">
      {bars.map((w, i) => (
        <span key={i} style={{ width: w * 2, backgroundColor: INK }} />
      ))}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#52606D]">{label}</p>
      <p className="mt-0.5 text-sm font-semibold" style={{ color: INK }}>
        {value}
      </p>
    </div>
  );
}

/**
 * Hero illustration: a "document pass" styled like a boarding pass, with a second
 * pass tucked behind it. Purely illustrative — an example, not a real application.
 */
export default function HomeHeroVisual() {
  return (
    <figure
      role="img"
      aria-label="Illustration: an example document checklist styled as a boarding pass from Lahore to London"
      className="relative mx-auto w-full max-w-[480px] pb-4 pt-12"
    >
      {/* Back pass */}
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-40 rotate-[-5deg] rounded-2xl border border-white/25 bg-white/10 px-6 py-4"
      >
        <div className="flex items-center justify-between text-white/85">
          <span className="text-xs font-bold tracking-[0.14em]">LHE → DXB · DUBAI</span>
          <span className="text-xs">Visit visa</span>
        </div>
      </div>

      {/* Main pass */}
      <div aria-hidden="true" className="relative overflow-hidden rounded-2xl bg-white text-left shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3 text-white" style={{ backgroundColor: INK }}>
          <span className="text-xs font-bold tracking-[0.16em]">TRAVELAXIS · DOCUMENT PASS</span>
          <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: GOLD, color: "#3B2600" }}>
            EXAMPLE
          </span>
        </div>

        <div className="px-6 pb-5 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <p className={`${fraunces.className} text-4xl font-semibold leading-none`} style={{ color: OCEAN }}>
                LHE
              </p>
              <p className="mt-1 text-xs text-[#52606D]">Lahore</p>
            </div>
            <div className="relative mx-4 flex-1">
              <div className="border-t-2 border-dashed border-[#B9D7EE]" />
              <span
                className="absolute left-1/2 top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white"
                style={{ color: OCEAN }}
              >
                <Plane className="size-5 rotate-45" />
              </span>
            </div>
            <div className="text-right">
              <p className={`${fraunces.className} text-4xl font-semibold leading-none`} style={{ color: OCEAN }}>
                LHR
              </p>
              <p className="mt-1 text-xs text-[#52606D]">London</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Field label="Visa" value="UK Visit" />
            <Field label="Applicant" value="You" />
            <Field label="Support" value="Travelaxis" />
          </div>
        </div>

        {/* Perforation with notches */}
        <div className="relative h-0">
          <span className="absolute -left-3 -top-3 size-6 rounded-full" style={{ backgroundColor: OCEAN }} />
          <span className="absolute -right-3 -top-3 size-6 rounded-full" style={{ backgroundColor: OCEAN }} />
          <div className="mx-5 border-t-2 border-dashed border-[#E9E1D3]" />
        </div>

        <div className="flex items-end justify-between gap-4 px-6 pb-6 pt-5" style={{ backgroundColor: SAND }}>
          <ul className="space-y-2 text-sm" style={{ color: INK }}>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600" /> Passport and photos
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600" /> Bank statement
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="size-4 text-amber-600" /> Appointment booking
            </li>
          </ul>
          <Barcode />
        </div>
      </div>
    </figure>
  );
}
