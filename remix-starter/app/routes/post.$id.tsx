import { useParams } from "@remix-run/react";

export default function Post() {
  const { id } = useParams();
  return (
    <div>
      <p>Post {id}</p>
    </div>
  );
}
