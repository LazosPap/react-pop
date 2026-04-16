import type { IMAGE_IDS } from "@/features/home/constants";

/** Expose the names of the image id's for the autocomplete. */
export type ImageId = (typeof IMAGE_IDS)[number];

/** Type safety for the map object we assing the images. */
export type ImageMap = Record<ImageId, string>;

/** Type safety for the dimensions of each image. */
export type ItemSizes = Record<ImageId, number>;

/** Mode for the buttons as union type for type safety. */
export type ArrangementMode = "START" | "CHAOS";

export type ArrangementsType = Record<ArrangementMode, Arrangement>;

/** Structure of the Arrangement item. */
export type ArrangementItem = {
  id: ImageId;
  x: number;
  y: number;
  rotation?: number;
  opacity?: number;
  zIndex?: number;
};

/** Structure of the Arrrangement object. */
export type Arrangement = {
  header: {
    x: number;
    y: number;
    center: boolean;
  };
  items: ArrangementItem[];
};
