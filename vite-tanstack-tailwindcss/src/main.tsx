import { ReactElement, StrictMode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { routeTree } from "./routeTree.gen.ts";
import { Client } from "./shared/service.ts";
import { TanStackRouterDevelopmentTools } from "./shared/utils/TanStackRouterDevelopmentTools.tsx";
import "./styles/tailwind.css";

const queryClient = new QueryClient();
const api = new Client();
const router = createRouter({ routeTree, context: { queryClient, api } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevelopmentTools
        router={router}
        initialIsOpen={false}
        position="bottom-left"
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
