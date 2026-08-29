"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle } from "lucide-react";

type Status = "idle" | "error" | "submitted";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Compact newsletter strip at the top of the footer. This is a static export with
 * no backend, so — like the Contact and Consultation forms — a valid submit
 * composes a pre-filled mailto: to info@travelaxis.me. Invalid input shows an
 * inline error; both states are announced through an aria-live region.
 */
export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const statusId = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    const subject = "Newsletter signup";
    const body = `Please add this address to the Travelaxis newsletter list:\n${email.trim()}`;
    window.location.href = `mailto:info@travelaxis.me?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("submitted");
  };

  return (
    <div style={{ backgroundColor: "#1D2939" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="lg:max-w-sm">
            <h3 className="subsection-title" style={{ color: "#FFFFFF" }}>
              Stay informed
            </h3>
            <p
              className="text-sm mt-1.5 leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.65)" }}
            >
              Visa updates and useful business setup insights, sent occasionally.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Newsletter signup"
            className="w-full lg:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2.5">
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="Your email address"
                aria-invalid={status === "error"}
                aria-describedby={status === "idle" ? undefined : statusId}
                className="h-12 sm:w-72 px-5 rounded-full bg-white text-[0.9375rem] text-[#1D2939] placeholder:text-[#667085]"
              />
              <button
                type="submit"
                className="btn h-12 px-7 rounded-full bg-white shrink-0 w-full sm:w-auto transition-opacity hover:opacity-90"
                style={{ color: "#155EEF" }}
              >
                Subscribe
              </button>
            </div>
            <p
              id={statusId}
              role="status"
              aria-live="polite"
              className="flex items-center gap-1.5 mt-2 text-sm min-h-[1.25rem]"
              style={{
                color: status === "error" ? "#FFFFFF" : "rgba(255, 255, 255, 0.65)",
              }}
            >
              {status === "error" && (
                <>
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden />
                  Enter a valid email address.
                </>
              )}
              {status === "submitted" &&
                "Opening your email app to confirm your request."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
