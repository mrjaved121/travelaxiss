import {
  GraduationCap,
  Plane,
  Home,
  Users,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type GoalKey = "study" | "visit" | "immigration" | "family" | "business";
export type DestinationKey = "uae" | "usa" | "canada" | "uk" | "australia" | "germany";

export const GOALS: { key: GoalKey; label: string; icon: LucideIcon }[] = [
  { key: "study", label: "Study", icon: GraduationCap },
  { key: "visit", label: "Visit", icon: Plane },
  { key: "immigration", label: "Immigration", icon: Home },
  { key: "family", label: "Family", icon: Users },
  { key: "business", label: "Business", icon: Landmark },
];

export const DESTINATIONS: { key: DestinationKey; label: string }[] = [
  { key: "uae", label: "United Arab Emirates" },
  { key: "usa", label: "United States" },
  { key: "canada", label: "Canada" },
  { key: "uk", label: "United Kingdom" },
  { key: "australia", label: "Australia" },
  { key: "germany", label: "Germany" },
];

export const EDUCATION_LEVELS = [
  "High school",
  "Diploma / vocational",
  "Bachelor's degree",
  "Master's degree or higher",
];

export const EXPERIENCE_LEVELS = ["0-1 years", "2-5 years", "6-10 years", "10+ years"];

export const AGE_BANDS = ["18-25", "26-35", "36-45", "46+"];

export const LANGUAGE_LEVELS = ["Basic", "Intermediate", "Advanced / fluent", "Native"];

export const BUDGET_BANDS = ["Limited", "Moderate", "Flexible", "Not a constraint right now"];

/** Known, publicly documented visa/pathway category names — not Travelaxis-specific claims. */
export const PATHWAY_LABELS: Record<DestinationKey, Partial<Record<GoalKey, string>>> = {
  uae: {
    study: "UAE student visa sponsorship",
    visit: "UAE visit visa",
    immigration: "UAE Golden Visa / long-term residence",
    family: "UAE family / dependent visa",
    business: "UAE company formation & investor visa",
  },
  usa: {
    study: "US F-1 student visa",
    visit: "US B1/B2 visitor visa",
    immigration: "US employment or family-based immigrant visa",
    family: "US family sponsorship visa",
    business: "US investor/business visa categories (e.g. E-2, EB-5)",
  },
  canada: {
    study: "Canada study permit",
    visit: "Canada visitor visa",
    immigration: "Canada Express Entry / permanent residence programs",
    family: "Canada family sponsorship",
    business: "Canada start-up / business immigration streams",
  },
  uk: {
    study: "UK Student visa",
    visit: "UK Standard Visitor visa",
    immigration: "UK long-term settlement pathways",
    family: "UK family visa",
    business: "UK Innovator Founder / business visa categories",
  },
  australia: {
    study: "Australia student visa",
    visit: "Australia visitor visa",
    immigration: "Australia skilled migration (points-based)",
    family: "Australia family/partner visa",
    business: "Australia business innovation & investment visa",
  },
  germany: {
    study: "Germany student visa",
    visit: "Germany Schengen visitor visa",
    immigration: "Germany long-term residence pathways",
    family: "Germany family reunification visa",
    business: "Germany self-employment / freelance visa",
  },
};
