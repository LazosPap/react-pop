import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/features/home/components";
import { HomeLayout } from "@/routes/(home)/layout";

export const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <HomeLayout>
      <Hero />
    </HomeLayout>
  );
}
