import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Curated Unsplash photo IDs for JB's Boat Repairs placeholders.
 * Swap any entry (or replace the whole function) when real client
 * photos are available — no changes needed in components.
 */
const UNSPLASH_SEED_MAP: Record<string, string> = {
  "jb-workshop": "1544551763-46a013bb70d5", // marina / harbor
  "jb-motor-repair": "1562814981-029001175685", // engine / motor
  "jb-electrical-systems": "1569101980855-b4e2d2c4e21f", // wiring / electronics
  "jb-fiberglass-hull-repair": "1519113464522-b0a7afeabde2", // boat hull
  "jb-general-maintenance": "1551131618-3f0a5cf594b4", // fishing rods in boat
  "jb-team": "1533473359331-0135ef1b58bf", // young man portrait
};

// Fallback pool — cycles through if seed isn't in the map
const FALLBACK_IDS = [
  "1544551763-46a013bb70d5",
  "1499336099440-dbd1b60ebbee",
  "1551131618-3f0a5cf594b4",
];

function getPhotoId(seed: string): string {
  if (UNSPLASH_SEED_MAP[seed]) return UNSPLASH_SEED_MAP[seed];
  // Simple deterministic fallback based on seed length
  return FALLBACK_IDS[seed.length % FALLBACK_IDS.length];
}

/**
 * Returns an Unsplash placeholder URL for the given seed and dimensions.
 * Replace this function's return value with a real image URL when
 * the client provides assets — no component changes required.
 */
export function placeholderImage(
  seed: string,
  width: number,
  height: number
): string {
  const id = getPhotoId(seed);
  return `https://images.unsplash.com/photo-${id}?w=${width}&h=${height}&fit=crop&auto=format`;
}
