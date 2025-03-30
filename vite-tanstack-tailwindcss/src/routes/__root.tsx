import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import { Client } from "../shared/service";

interface RootRouterContext {
  queryClient: QueryClient;
  api: Client;
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
