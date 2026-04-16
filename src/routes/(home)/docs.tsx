import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)/docs")({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Hello "/(home)/test"!</div>;
}
