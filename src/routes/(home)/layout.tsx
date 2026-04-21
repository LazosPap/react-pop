import { Outlet, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { LogoBucket } from "@/assets/svg";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { NAV_LINKS } from "@/constants";

export const Route = createFileRoute("/(home)")({
  component: HomeLayout
});

export function HomeLayout({ children }: { children?: ReactNode }) {
  return (
    <div>
      <div className="mx-auto flex min-h-screen flex-col">
        <Header logo={LogoBucket} navLinks={NAV_LINKS} />
        <main className="relative w-full grow pt-40">{children ?? <Outlet />}</main>
      </div>
      <Footer />
    </div>
  );
}
