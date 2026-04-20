import { Outlet, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { LogoBucket } from "@/assets/svg";
import { Header } from "@/components/layout/header";
import { NAVLINKS } from "@/constants";

export const Route = createFileRoute("/(home)")({
  component: HomeLayout
});

export function HomeLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Header logo={LogoBucket} navLinks={NAVLINKS} />
      <main className="w-full grow pt-40">{children ?? <Outlet />}</main>
    </div>
  );
}
