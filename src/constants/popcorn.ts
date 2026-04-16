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
import type { Popcorn, PopcornSizes } from "@/types/popcorn";

/** Put the id names for the images to assign them for the type "PopcornIds". */
export const POPCORN_IDS = [
  "popcorn_left",
  "popcorn_left_two",
  "popcorn_left_three",
  "popcorn_middle",
  "popcorn_middle_two",
  "popcorn_right",
  "popcorn_right_two",
  "popcorn_right_three"
] as const;

/** Put the number size for the popcorn. */
export const POPCORN_SIZES: PopcornSizes = {
  popcorn_left: 17,
  popcorn_left_two: 15,
  popcorn_left_three: 10,
  popcorn_middle: 15,
  popcorn_middle_two: 15,
  popcorn_right: 10,
  popcorn_right_two: 12,
  popcorn_right_three: 13
};

/** Object array for all the options of the popcorn animation. */
export const POPCORN: Popcorn = {
  items: [
    {
      id: "popcorn_left",
      src: PopcornLeft,
      x: -35,
      y: -45,
      duration: 1
    },
    {
      id: "popcorn_left_two",
      src: PopcornLeftTwo,
      x: -50,
      y: -10,
      duration: 1
    },
    {
      id: "popcorn_left_three",
      src: PopcornLeftThree,
      x: -39,
      y: -25,
      duration: 1
    },
    {
      id: "popcorn_middle",
      src: PopcornMiddle,
      x: -10,
      y: -50,
      duration: 1.1
    },
    {
      id: "popcorn_middle_two",
      src: PopcornMiddleTwo,
      x: 10,
      y: -50,
      duration: 1
    },
    {
      id: "popcorn_right",
      src: PopcornRight,
      x: 35,
      y: -38,
      duration: 1.2
    },
    {
      id: "popcorn_right_two",
      src: PopcornRightTwo,
      x: 50,
      y: -20,
      duration: 1
    },
    {
      id: "popcorn_right_three",
      src: PopcornRightThree,
      x: 25,
      y: -55,
      rotation: 15,
      duration: 1.1
    }
  ]
};
