import type { Link, LinkComponentProps } from "@tanstack/react-router";

export type NavLink = {
  label: string;
  to: LinkComponentProps<typeof Link>["to"];
};

export const NAVLINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Docs", to: "/docs" }
];
