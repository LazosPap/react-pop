import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(documentation)/docs")({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/(home)/test"!</div>;
}
