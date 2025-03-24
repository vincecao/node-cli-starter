import React, { memo } from "react";
import type { ReactElement } from "react";
import { Link, useRouteError } from "react-router-dom";

interface ErrorPageProps {}

function ErrorPage({}: ErrorPageProps): ReactElement | null {
  const error = useRouteError() as any;
  if (!error) return null;

  return (
    <div data-testid="error-page-div">
      <h1>Opps</h1>
      <p className="mb-10">
        Something wrong: <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="underline">
        Go back
      </Link>
    </div>
  );
}

export default memo(ErrorPage);
