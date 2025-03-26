// import { queryOptions, useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import BackButton from "../shared/BackButton";

/**
export async function fetch(params) {
  return
}

export const options = (
  ...args: Parameters<typeof fetch>
) =>
  queryOptions({
    queryKey: ["key", args[0]],
    queryFn: () => fetch(...args),
  });
*/

export const Route = createFileRoute("/_group/item1")({
  component: RouteComponent,
  validateSearch: zodValidator(
    z.object({
      user: z.string().optional(),
    })
  ),
  loaderDeps: ({ search }) => search,
  async loader({ context, deps }) {
    console.log(deps.user); // type safe
    // context.queryClient.ensureQueryData(options(...))
  },
});

function RouteComponent() {
  /*
	const query = useQuery(options(...));
	const {data, error} = query.data;
	const loading = query.status === "pending";
  */

  return (
    <div>
      <BackButton />
      Hello "/item1"!
    </div>
  );
}
