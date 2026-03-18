import { Outlet, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";

export const Route = createFileRoute("/(home)")({
  component: HomeLayout
});

export function HomeLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4">
      <Header />

      <main className="w-full grow">{children ?? <Outlet />}</main>
    </div>
  );
}
