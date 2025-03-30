import { useMemo } from "react";

import { fakerDE as faker } from "@faker-js/faker";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

import { Client } from "../shared/service";

async function fetch(api: Client, { name }: { name: string }) {
  return api.demo.predictNationality(name);
}

// https://tanstack.com/query/latest/docs/framework/react/guides/query-options
const options = (...args: Parameters<typeof fetch>) =>
  queryOptions({
    queryKey: ["demo-predict-nationality", args[1]],
    queryFn: () => fetch(...args),
    retry: 0,
    staleTime: Infinity, // Prevents auto-loading when navigating back
  });

export const Route = createFileRoute("/_group/item2")({
  component: RouteComponent,
  validateSearch: zodValidator(
    z.object({
      name: z.string().optional(),
    })
  ),
  loaderDeps: ({ search }) => search,
  async loader({ context: { queryClient, api }, deps }) {
    if (deps.name) {
      // a different way to get data in loader
      // https://tanstack.com/query/latest/docs/framework/react/typescript#typing-query-options
      // const data = queryClient.getQueryData(options(api, { name: deps.name }).queryKey)
      queryClient.ensureQueryData(options(api, { name: deps.name }));
    }
  },
});

function RouteComponent() {
  const search = Route.useSearch();
  const { api } = Route.useRouteContext();

  const name = useMemo(
    () => search.name ?? faker.person.firstName(),
    [search.name]
  );

  const query = useQuery(options(api, { name }));

  const navigate = useNavigate();

  const { data, error } = query;
  const loading = query.status === "pending";

  const predictNationality = loading ? (
    "loading"
  ) : error ? (
    <span className="text-red-400">{String(error)}</span>
  ) : !data ? null : (
    <pre>{JSON.stringify(data, null, 3)}</pre>
  );

  return (
    <div>
      <button
        onClick={() =>
          navigate({
            to: "/",
          })
        }
        className="block w-fit bg-black text-white"
      >
        Back to Home
      </button>
      Hello "/item2"!
      <br />
      <br />
      <button
        className="bg-blue-400 text-white"
        onClick={() =>
          navigate({
            to: ".",
            search: {
              name: faker.person.firstName(),
            },
          })
        }
      >
        Click me to random generate a new name in url path search
      </button>
      <br />
      <br />
      <h3 className="text-xl">Demo api with url path search controlled</h3>
      {predictNationality}
    </div>
  );
}
