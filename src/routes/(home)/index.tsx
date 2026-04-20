import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/features/home/components";

export const Route = createFileRoute("/(home)/")({
  component: Index
});

function Index() {
  return <Hero />;
}
