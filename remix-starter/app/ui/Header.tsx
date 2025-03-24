import type { ReactElement } from "react";
import classNames from "classnames";
import { NavLink } from "@remix-run/react";
import { LINKS } from "~/const";

function Navigation(): ReactElement {
  return (
    <>
      {LINKS.map((link) => {
        return (
          <NavLink
            className={({ isActive }) =>
              classNames("mx-2", {
                "text-gray-500 underline": isActive,
                "text-black": !isActive,
              })
            }
            to={link.href}
            key={link.name}
          >
            {link.name}
          </NavLink>
        );
      })}
    </>
  );
}

export default function Header(): ReactElement {
  return (
    <header>
      <h1>Title</h1>
      <Navigation />
    </header>
  );
}
