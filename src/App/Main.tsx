import React, { memo } from "react";
import type { PropsWithChildren, ReactElement } from "react";

function Main({ children }: PropsWithChildren<unknown>): ReactElement {
  return <main>{children}</main>;
}

export default memo(Main);
