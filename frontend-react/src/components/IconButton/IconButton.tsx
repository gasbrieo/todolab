import classNames from "classnames";
import { type ButtonHTMLAttributes, forwardRef } from "react";

import "./IconButton.scss";

type IconButtonSize = "small" | "medium" | "large";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, className, size = "medium", ...rest }, ref) => {
  return (
    <button
      className={classNames(
        "icon-button",
        {
          [`icon-button--size-${size}`]: size,
        },
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

IconButton.displayName = "IconButton";

export default IconButton;
