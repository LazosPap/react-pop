import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Logo } from "@/assets/svg";
import { Header } from "@/components/layout/header";
import { NAVLINKS } from "@/constants";

export const Route = createFileRoute("/(home)")({
  component: HomeLayout
});

export function HomeLayout({ children }: { children?: ReactNode }) {
  const location = useLocation();

  const getActiveMenu = () => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/docs") return "Docs";

    return undefined;
  };
  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4">
      <Header logo={Logo} navLinks={NAVLINKS} activeMenu={getActiveMenu()} />

      <main className="w-full grow">{children ?? <Outlet />}</main>
    </div>
  );
}
