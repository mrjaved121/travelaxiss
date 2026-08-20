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
        backgroundColor: selected ? "#EAF1FF" : "#FFFFFF",
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
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-3">Visa Finder</p>
            <h1 className="mb-4" style={{ color: "#071A2B" }}>
              Find Your Potential <span style={{ color: "#155EEF" }}>Visa Pathway</span>
            </h1>
            <p className="lead max-w-xl mx-auto">
              Answer a few simple questions and discover which visa pathways may be worth
              exploring for your profile.
            </p>
          </motion.div>
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
                  <span className="text-sm text-gray-500">{STEP_LABELS[step]}</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
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
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        What&apos;s your goal?
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {GOALS.map(({ key, label, icon: Icon }) => (
                          <OptionCard key={key} selected={answers.goal === key} onClick={() => select("goal", key)}>
                            <Icon className="w-6 h-6 mb-3" style={{ color: "#155EEF" }} aria-hidden />
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        Where would you like to go?
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {DESTINATIONS.map(({ key, label }) => (
                          <OptionCard
                            key={key}
                            selected={answers.destination === key}
                            onClick={() => select("destination", key)}
                          >
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        What&apos;s your highest level of education?
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {EDUCATION_LEVELS.map((label) => (
                          <OptionCard key={label} selected={answers.education === label} onClick={() => select("education", label)}>
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        How much work experience do you have?
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {EXPERIENCE_LEVELS.map((label) => (
                          <OptionCard key={label} selected={answers.experience === label} onClick={() => select("experience", label)}>
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        What&apos;s your age range?
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {AGE_BANDS.map((label) => (
                          <OptionCard key={label} selected={answers.age === label} onClick={() => select("age", label)}>
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div>
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        How would you rate your English (or the destination language)?
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {LANGUAGE_LEVELS.map((label) => (
                          <OptionCard key={label} selected={answers.language === label} onClick={() => select("language", label)}>
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
                              {label}
                            </span>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 6 && (
                    <div>
                      <h2 className="text-xl font-bold mb-6" style={{ color: "#071A2B" }}>
                        What&apos;s your budget flexibility?
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {BUDGET_BANDS.map((label) => (
                          <OptionCard key={label} selected={answers.budget === label} onClick={() => select("budget", label)}>
                            <span className="font-semibold" style={{ color: "#071A2B" }}>
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
                  style={{ color: "#475467" }}
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden />
                  Back
                </button>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#071A2B" }}>
                Your Potential Pathways
              </h2>
              <p className="text-gray-600 mb-8">
                Based on your answers, here&apos;s a starting point for your research.
              </p>

              <div className="rounded-2xl p-6 md:p-8 card-hover mb-6" style={{ border: "1px solid var(--card-line)" }}>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: "#EAF1FF", color: "#155EEF" }}
                >
                  Potential match
                </span>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#071A2B" }}>
                  {matchedDestination?.name ?? "Your destination"} —{" "}
                  {pathwayLabel ?? "Visa pathway"}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You told us your goal is <strong>{answers.goal}</strong>, with{" "}
                  <strong>{answers.education?.toLowerCase()}</strong> education and{" "}
                  <strong>{answers.experience}</strong> of work experience. This combination is
                  typically a starting point for exploring {pathwayLabel ?? "this pathway"} — the
                  category most people with a similar goal and destination begin researching.
                </p>
                <div className="rounded-xl p-4" style={{ backgroundColor: "#EAF1FF" }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#071A2B" }}>
                    Important considerations
                  </p>
                  <p className="text-sm text-gray-600">
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
                    style={{ borderColor: "#071A2B", color: "#071A2B" }}
                  >
                    Learn more about {matchedDestination.name}
                  </Link>
                )}
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold"
                  style={{ color: "#475467" }}
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
