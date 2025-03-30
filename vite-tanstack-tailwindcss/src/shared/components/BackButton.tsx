import { useRouter } from "@tanstack/react-router";

import { memo } from "react";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.history.back()}
      className="block w-fit bg-black text-white"
    >
      Back
    </button>
  );
}

export default memo(BackButton);
