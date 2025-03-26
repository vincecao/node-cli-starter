import React from "react";

export const TanStackRouterDevelopmentTools =
  import.meta.env.MODE === "production"
    ? (): null => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((result) => ({
          default: result.TanStackRouterDevtools,
        }))
      );
