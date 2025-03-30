import { createFileRoute } from "@tanstack/react-router";

import BackButton from "../shared/components/BackButton";
import { Client } from "../shared/service";

async function fetch(api: Client) {
  return api.demo.catFacts();
}

export const Route = createFileRoute("/_group/item1")({
  component: RouteComponent,
  async loader({ context }) {
    return { facts: await fetch(context.api) };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div>
      <BackButton />
      Hello "/item1"!
      <br />
      <br />
      <h3 className="text-xl">Demo api with basic router loader</h3>
      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
}
