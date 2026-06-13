import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns a deterministic picsum.photos placeholder URL.
 * Swap this function's return value to a real image path when client
 * provides assets — no changes needed in components.
 */
export function placeholderImage(
  seed: string,
  width: number,
  height: number
): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
