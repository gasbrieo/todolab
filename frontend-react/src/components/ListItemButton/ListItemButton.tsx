import classNames from "classnames";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import "./ListItemButton.scss";

const ListItemButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ children, className, ...rest }, ref) => {
  return (
    <button
      className={classNames("list-item-button", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

export default ListItemButton;
