import React, { memo } from "react";
import type { ReactElement } from "react";

interface FooterProps {}

function Footer({}: FooterProps): ReactElement {
  return <footer className="z-footer">Footer</footer>;
}

export default memo(Footer);
