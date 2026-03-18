import { createFileRoute } from "@tanstack/react-router";

import { HomeLayout } from "@/routes/(home)/layout";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

function RouteComponent() {
  return <HomeLayout />;
}
