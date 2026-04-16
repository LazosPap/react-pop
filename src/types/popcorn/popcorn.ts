import type { POPCORN_IDS } from "@/constants";

/** Single source of truth for all the popcorn's images. */
export type PopcornIds = (typeof POPCORN_IDS)[number];

/** Size of the popcorn. */
export type PopcornSizes = Record<PopcornIds, number>;

/** Options for the popcorn item to declare for the animation. */
export type PopcornItem = {
  id: PopcornIds;
  src: string;
  x: number;
  y: number;
  duration: number;
  rotation?: number;
};

/** Object array for the popcorn. */
export type Popcorn = {
  items: PopcornItem[];
};
