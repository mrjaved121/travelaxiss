import { motion as motionBase } from "@motionone/react";
import type { ComponentType, ReactNode } from "react";

/**
 * @motionone/react typings infer `unknown` for element props under React 19, which drops `children`.
 * Runtime behavior is correct; this widens types so pages type-check.
 */
export const motion = motionBase as Record<
  string,
  ComponentType<{ children?: ReactNode; [key: string]: unknown }>
>;
