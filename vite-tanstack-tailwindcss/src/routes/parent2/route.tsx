import { Outlet, createFileRoute } from "@tanstack/react-router";

import BackButton from "../../shared/BackButton";

export const Route = createFileRoute("/parent2")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BackButton />
      This file is for layout
      <Outlet />
    </div>
  );
}
