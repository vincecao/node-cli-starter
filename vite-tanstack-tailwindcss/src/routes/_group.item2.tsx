import { createFileRoute } from "@tanstack/react-router";

import BackButton from "../shared/BackButton";

export const Route = createFileRoute("/_group/item2")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BackButton />
      Hello "/item2"!
    </div>
  );
}
