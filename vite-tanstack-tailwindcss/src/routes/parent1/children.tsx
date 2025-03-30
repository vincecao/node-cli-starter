import { createFileRoute } from "@tanstack/react-router";

import BackButton from "../../shared/components/BackButton";
import Box from "./-components/Box";

export const Route = createFileRoute("/parent1/children")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BackButton />
      Hello "/parent/children"!
      <Box />
    </div>
  );
}
