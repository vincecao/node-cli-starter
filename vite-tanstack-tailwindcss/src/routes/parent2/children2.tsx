import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/parent2/children2")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/parent2/children2"!</div>;
}
