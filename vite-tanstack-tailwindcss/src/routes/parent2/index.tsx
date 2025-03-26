import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/parent2/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-2">
      <div>Hello "/parent2/"!</div>
      <Link to="/parent2/children1" className="block w-fit bg-black text-white">
        to children 1
      </Link>
      <Link to="/parent2/children2" className="block w-fit bg-black text-white">
        to children 2
      </Link>
    </div>
  );
}
