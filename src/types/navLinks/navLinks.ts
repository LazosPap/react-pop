import type { Link, LinkComponentProps } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  to: LinkComponentProps<typeof Link>["to"];
};

export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};
