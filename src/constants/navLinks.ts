import { GithubIcon, LinkedinIcon } from "lucide-react";

import type { NavLink, SocialLink } from "@/types/navLinks";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Docs", to: "/docs" }
];

export const FOOTER_LINKS: NavLink[] = [{ label: "Docs", to: "/docs" }];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/lazaros-papounidis/",
    label: "LinkedIn",
    icon: LinkedinIcon
  },
  {
    href: "https://github.com/LazosPap",
    label: "Github",
    icon: GithubIcon
  }
];
