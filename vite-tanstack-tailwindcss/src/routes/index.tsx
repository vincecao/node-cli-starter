import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-2">
      <div>Home</div>
      <Link to="/test" className="block w-fit bg-black text-white">
        to singleFileRoute
      </Link>
      <Link to="/test" className="block w-fit bg-black text-white">
        to singleFileNestedRoute
      </Link>
      <Link to="/parent1/children" className="block w-fit bg-black text-white">
        to singleFolderRoute with ignored components folder
      </Link>
      <Link to="/parent2" className="block w-fit bg-black text-white">
        to singleFolderRoute with layout/index and its nest routes
      </Link>
      <Link to="/item1" className="block w-fit bg-black text-white">
        to singleFileRoute with hidden development group (example useQuery
        fetch)
      </Link>
      <Link to="/item2" className="block w-fit bg-black text-white">
        to singleFileRoute with hidden development group
      </Link>
    </div>
  );
}
