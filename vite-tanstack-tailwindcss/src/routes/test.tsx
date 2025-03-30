import { createFileRoute } from "@tanstack/react-router";

import BackButton from "../shared/components/BackButton";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BackButton />
      Hello "/test"!
    </div>
  );
}
