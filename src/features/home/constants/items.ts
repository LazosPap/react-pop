import { BrushCleaning, Coffee } from "lucide-react";

import { LogoBucket } from "@/assets/svg";
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
import { CinemaDrink, CinemaGlasses, CinemaTicket, WindowsError } from "@/assets/webp";
import type {
  ArrangementMode,
  ArrangementsType,
  ImageMap,
  ItemSizes,
  ModeIcons
} from "@/features/home/types";

/** Source of truth the Image id's so we can use them for the the assing of the Image Map. */
export const IMAGE_IDS = [
  "react",
  "popcorn_left",
  "popcorn_left_two",
  "popcorn_left_three",
  "popcorn_middle",
  "popcorn_middle_two",
  "popcorn_right",
  "popcorn_right_two",
  "popcorn_right_three",
  "windows_error",
  "cinema_drink",
  "cinema_glasses",
  "cinema_ticket",
  "cinema_ticket_2",
  "cinema_ticket_3"
] as const;

/** Button modes. */
export const MODES: ArrangementMode[] = ["START", "CHAOS"];

/** Icons for the mode buttons. */
export const MODE_ICONS: ModeIcons = {
  START: BrushCleaning,
  CHAOS: Coffee
};

/** Object that holds all the images. */
export const IMAGE_MAP: ImageMap = {
  react: LogoBucket,
  popcorn_left: PopcornLeft,
  popcorn_left_two: PopcornLeftTwo,
  popcorn_left_three: PopcornLeftThree,
  popcorn_middle: PopcornMiddle,
  popcorn_middle_two: PopcornMiddleTwo,
  popcorn_right: PopcornRight,
  popcorn_right_two: PopcornRightTwo,
  popcorn_right_three: PopcornRightThree,
  windows_error: WindowsError,
  cinema_drink: CinemaDrink,
  cinema_glasses: CinemaGlasses,
  cinema_ticket: CinemaTicket,
  cinema_ticket_2: CinemaTicket,
  cinema_ticket_3: CinemaTicket
};

/** Declare the size of the images. */
export const ITEM_SIZES: ItemSizes = {
  react: 325,
  popcorn_left: 30,
  popcorn_left_two: 28,
  popcorn_left_three: 25,
  popcorn_middle: 32,
  popcorn_middle_two: 30,
  popcorn_right: 32,
  popcorn_right_two: 30,
  popcorn_right_three: 35,
  windows_error: 300,
  cinema_drink: 200,
  cinema_glasses: 200,
  cinema_ticket: 400,
  cinema_ticket_2: 400,
  cinema_ticket_3: 400
};

/** Different button modes for the GSAP animations. */
export const ARRANGEMENTS: ArrangementsType = {
  START: {
    header: {
      x: 70,
      y: 30,
      center: true
    },
    items: [
      { id: "react", x: -2.5, y: -2.5, rotation: -15, opacity: 1 },
      { id: "popcorn_left", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_left_two", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_left_three", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_middle", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_middle_two", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_right", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_right_two", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "popcorn_right_three", x: 5, y: 6, rotation: 0, opacity: 0 },
      { id: "windows_error", x: 90, y: 30, rotation: 0, opacity: 1 },
      { id: "cinema_drink", x: 10, y: 40, rotation: 0, opacity: 1 },
      { id: "cinema_glasses", x: 60, y: -10, rotation: 0, opacity: 1 },
      { id: "cinema_ticket", x: 90, y: -10, rotation: 0, opacity: 1 },
      { id: "cinema_ticket_2", x: 90, y: -10, rotation: 0, opacity: 0 },
      { id: "cinema_ticket_3", x: 90, y: -10, rotation: 0, opacity: 0 }
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
      { id: "popcorn_left", x: 87.5, y: 40, rotation: 20, opacity: 1, zIndex: -1 },
      { id: "popcorn_left_two", x: 90, y: 40, rotation: 40, opacity: 1, zIndex: -1 },
      { id: "popcorn_left_three", x: 85, y: 42, rotation: 30, opacity: 1, zIndex: -1 },
      { id: "popcorn_middle", x: 92, y: 42, rotation: 10, opacity: 1, zIndex: -1 },
      { id: "popcorn_middle_two", x: 92, y: 44, rotation: 5, opacity: 1, zIndex: -1 },
      { id: "popcorn_right", x: 95, y: 46, rotation: 123, opacity: 1, zIndex: -1 },
      { id: "popcorn_right_two", x: 97, y: 48, rotation: 50, opacity: 1, zIndex: -1 },
      { id: "popcorn_right_three", x: 98, y: 55, rotation: 20, opacity: 1, zIndex: -1 },
      { id: "windows_error", x: 10, y: 35, rotation: -65, opacity: 1 },
      { id: "cinema_drink", x: 60, y: -10, rotation: -30, opacity: 1 },
      { id: "cinema_glasses", x: 10, y: -10, rotation: -30, opacity: 1 },
      { id: "cinema_ticket", x: 55, y: 20, rotation: 0, opacity: 1 },
      { id: "cinema_ticket_2", x: 55, y: 15, rotation: -10, opacity: 1, zIndex: -1 },
      { id: "cinema_ticket_3", x: 55, y: 10, rotation: -20, opacity: 1, zIndex: -2 }
    ]
  }
};
