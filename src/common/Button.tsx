import React, { memo } from "react";
import type { PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function Button(props: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <button
      {...props}
      type="button"
      className={classNames("common-button", props.className)}
    >
      {props.children}
    </button>
  );
}

export default memo(Button);
