"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import {
  GOALS,
  DESTINATIONS,
  EDUCATION_LEVELS,
  EXPERIENCE_LEVELS,
  AGE_BANDS,
  LANGUAGE_LEVELS,
  BUDGET_BANDS,
  PATHWAY_LABELS,
  type GoalKey,
  type DestinationKey,
} from "@/components/data/visaFinderOptions";
import { destinations } from "@/components/data/destinations";

type Answers = {
  goal: GoalKey | null;
  destination: DestinationKey | null;
  education: string | null;
  experience: string | null;
  age: string | null;
  language: string | null;
  budget: string | null;
};

const EMPTY_ANSWERS: Answers = {
  goal: null,
  destination: null,
  education: null,
  experience: null,
  age: null,
  language: null,
  budget: null,
};

const STEP_LABELS = ["Goal", "Destination", "Education", "Experience", "Age", "Language", "Budget"];

const cardBase =
  "rounded-2xl p-5 text-left transition-all duration-200 hover:-translate-y-0.5 card-hover";

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cardBase}
      style={{
        border: selected ? "2px solid #155EEF" : "1px solid var(--card-line)",
        backgroundColor: selected ? "#F5F8FF" : "#FFFFFF",
      }}
    >
      {children}
    </button>
  );
}

export default function VisaFinderPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [complete, setComplete] = useState(false);

  const totalSteps = STEP_LABELS.length;

  const goNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setComplete(true);
    }
  };
  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };
  const reset = () => {
    setAnswers(EMPTY_ANSWERS);
    setStep(0);
    setComplete(false);
  };

  const select = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(goNext, 200);
  };

  const matchedDestination = destinations.find((d) => d.slug === answers.destination);
  const pathwayLabel =
    answers.destination && answers.goal
      ? PATHWAY_LABELS[answers.destination]?.[answers.goal]
      : undefined;

  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: "#F5F8FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Visa Finder</p>
            <h1 className="page-title mb-4">
              Find Your Potential <span style={{ color: "#155EEF" }}>Visa Pathway</span>
            </h1>
            <p className="lead max-w-xl mx-auto">
              Answer a few simple questions and discover which visa pathways may be worth
              exploring for your profile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white border-b" style={{ borderColor: "#E4E7EC" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#667085] leading-relaxed">
            <div>
              <h2 className="subsection-title mb-2">What this tool covers</h2>
              <p className="mb-2">
                We match your goal — Study, Visit, Immigration, Family, or Business — against
                six destinations: the UAE, USA, Canada, UK, Australia, and Germany. You&apos;ll
                also answer a few questions about your education, experience, age, language, and
                budget so the result reflects your actual profile rather than a generic checklist.
              </p>
              <p>
                The result names a general pathway category worth researching — it is not an
                eligibility determination, and no consultant can guarantee a government
                immigration decision.
              </p>
            </div>
            <div>
              <h2 className="subsection-title mb-2">Your answers and privacy</h2>
              <p>
                Your answers stay in your browser for this session only — nothing is submitted,
                stored, or sent anywhere unless you choose to continue to a consultation with us
                afterward. Refreshing or leaving the page clears everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!complete ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold" style={{ color: "#155EEF" }}>
                    {String(step + 1).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[#667085]">{STEP_LABELS[step]}</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#E4E7EC] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "#155EEF" }}
                    animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 0 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        What&apos;s your goal?
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {GOALS.map(({ key, label, icon: Icon }) => (
                          <OptionCard key={key} selected={answers.goal === key} onClick={() => select("goal", key)}>
                            <Icon className="w-6 h-6 mb-3" style={{ color: "#155EEF" }} aria-hidden />
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        Where would you like to go?
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {DESTINATIONS.map(({ key, label }) => (
                          <OptionCard
                            key={key}
                            selected={answers.destination === key}
                            onClick={() => select("destination", key)}
                          >
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        What&apos;s your highest level of education?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {EDUCATION_LEVELS.map((label) => (
                          <OptionCard key={label} selected={answers.education === label} onClick={() => select("education", label)}>
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        How much work experience do you have?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {EXPERIENCE_LEVELS.map((label) => (
                          <OptionCard key={label} selected={answers.experience === label} onClick={() => select("experience", label)}>
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        What&apos;s your age range?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {AGE_BANDS.map((label) => (
                          <OptionCard key={label} selected={answers.age === label} onClick={() => select("age", label)}>
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        How would you rate your English (or the destination language)?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {LANGUAGE_LEVELS.map((label) => (
                          <OptionCard key={label} selected={answers.language === label} onClick={() => select("language", label)}>
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 6 && (
                    <div>
                      <h3 className="subsection-title mb-6">
                        What&apos;s your budget flexibility?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {BUDGET_BANDS.map((label) => (
                          <OptionCard key={label} selected={answers.budget === label} onClick={() => select("budget", label)}>
                            <span className="font-semibold" style={{ color: "#1D2939" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold disabled:opacity-0"
                  style={{ color: "#667085" }}
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden />
                  Back
                </button>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="section-title mb-2">
                Your Potential Pathways
              </h2>
              <p className="text-[#667085] mb-8">
                Based on your answers, here&apos;s a starting point for your research.
              </p>

              <div className="rounded-2xl p-6 md:p-8 card-hover mb-6" style={{ border: "1px solid var(--card-line)" }}>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: "#F5F8FF", color: "#155EEF" }}
                >
                  Potential match
                </span>
                <h3 className="subsection-title mb-2">
                  {matchedDestination?.name ?? "Your destination"} —{" "}
                  {pathwayLabel ?? "Visa pathway"}
                </h3>
                <p className="text-[#667085] leading-relaxed mb-4">
                  You told us your goal is <strong>{answers.goal}</strong>, with{" "}
                  <strong>{answers.education?.toLowerCase()}</strong> education and{" "}
                  <strong>{answers.experience}</strong> of work experience. This combination is
                  typically a starting point for exploring {pathwayLabel ?? "this pathway"} — the
                  category most people with a similar goal and destination begin researching.
                </p>
                <div className="rounded-xl p-4" style={{ backgroundColor: "#F5F8FF" }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#1D2939" }}>
                    Important considerations
                  </p>
                  <p className="text-sm text-[#667085]">
                    This is a general starting point, not an eligibility determination. Specific
                    visa requirements vary by category and change periodically — confirm current
                    criteria with an advisor before applying. No consultant can guarantee a
                    government immigration decision.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
                >
                  <span>Get Expert Assessment</span>
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                {matchedDestination && matchedDestination.ready && (
                  <Link
                    href={matchedDestination.href}
                    className="btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 transition-all hover:opacity-90"
                    style={{ borderColor: "#1D2939", color: "#1D2939" }}
                  >
                    Learn more about {matchedDestination.name}
                  </Link>
                )}
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold"
                  style={{ color: "#667085" }}
                >
                  <RotateCcw className="w-4 h-4" aria-hidden />
                  Start over
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
