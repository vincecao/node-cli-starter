import React, { memo } from "react";
import type { ReactElement } from "react";

interface HeaderProps {}

function Header({}: HeaderProps): ReactElement {
  return <header className="z-header">Header</header>;
}

export default memo(Header);
