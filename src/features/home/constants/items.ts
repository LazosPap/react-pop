import { LogoBucket, Wave } from "@/assets/svg";
import {
  PopcornLeft,
  PopcornLeftThree,
  PopcornLeftTwo,
  PopcornMiddle,
  PopcornMiddleTwo,
  PopcornRight,
  PopcornRightThree,
  PopcornRightTwo
} from "@/assets/svg/popcorn";
import type { ArrangementMode, ArrangementsType, ImageMap, ItemSizes } from "@/features/home/types";

/** Source of truth the Image id's so we can use them for the the assing of the Image Map. */
export const IMAGE_IDS = [
  "react",
  "wave",
  "wave_left",
  "popcorn_left",
  "popcorn_left_two",
  "popcorn_left_three",
  "popcorn_middle",
  "popcorn_middle_two",
  "popcorn_right",
  "popcorn_right_two",
  "popcorn_right_three"
] as const;

export const MODES: ArrangementMode[] = ["START", "CHAOS"];

/** Object that holds all the images. */
export const IMAGE_MAP: ImageMap = {
  react: LogoBucket,
  wave: Wave,
  wave_left: Wave,
  popcorn_left: PopcornLeft,
  popcorn_left_two: PopcornLeftTwo,
  popcorn_left_three: PopcornLeftThree,
  popcorn_middle: PopcornMiddle,
  popcorn_middle_two: PopcornMiddleTwo,
  popcorn_right: PopcornRight,
  popcorn_right_two: PopcornRightTwo,
  popcorn_right_three: PopcornRightThree
};

/** Declare the size of the images. */
export const ITEM_SIZES: ItemSizes = {
  react: 325,
  wave: 1870.4,
  wave_left: 1080,
  popcorn_left: 30,
  popcorn_left_two: 28,
  popcorn_left_three: 25,
  popcorn_middle: 32,
  popcorn_middle_two: 30,
  popcorn_right: 32,
  popcorn_right_two: 30,
  popcorn_right_three: 35
};

/** Different button modes for the GSAP animations. */
export const ARRANGEMENTS: ArrangementsType = {
  START: {
    header: {
      x: 50,
      y: 47.5,
      center: true
    },
    items: [
      { id: "react", x: -2.5, y: -2.5, rotation: -15, opacity: 1 },
      { id: "wave", x: 0, y: -75, rotation: 0, opacity: 1 },
      { id: "wave_left", x: -38, y: -20, rotation: 90, opacity: 0 },
      { id: "popcorn_left", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_left_two", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_left_three", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_middle", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_middle_two", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_right", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_right_two", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_right_three", x: 5, y: 6, rotation: 0, opacity: 0 }
    ]
  },
  CHAOS: {
    header: {
      x: 90,
      y: 17.5,
      center: false
    },
    items: [
      { id: "react", x: 76.5, y: 37.5, rotation: 30, opacity: 1 },
      { id: "wave", x: -15, y: -50, rotation: 0, opacity: 0 },
      { id: "wave_left", x: -17, y: -25, rotation: 90, opacity: 1 },
      { id: "popcorn_left", x: 87.5, y: 40, rotation: 20, opacity: 1, zIndex: -1 },
      { id: "popcorn_left_two", x: 90, y: 40, rotation: 40, opacity: 1, zIndex: -1 },
      { id: "popcorn_left_three", x: 85, y: 42, rotation: 30, opacity: 1, zIndex: -1 },
      { id: "popcorn_middle", x: 92, y: 42, rotation: 10, opacity: 1, zIndex: -1 },
      { id: "popcorn_middle_two", x: 92, y: 44, rotation: 5, opacity: 1, zIndex: -1 },
      { id: "popcorn_right", x: 95, y: 46, rotation: 123, opacity: 1, zIndex: -1 },
      { id: "popcorn_right_two", x: 97, y: 48, rotation: 50, opacity: 1, zIndex: -1 },
      { id: "popcorn_right_three", x: 98, y: 55, rotation: 20, opacity: 1, zIndex: -1 }
    ]
  }
};
