import classNames from "classnames";
import type { ButtonHTMLAttributes, FC } from "react";

import "./IconButton.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

const IconButton: FC<IconButtonProps> = ({ children, className, size = "medium", ...rest }) => {
  return (
    <button
      className={classNames(
        "icon-button",
        {
          [`icon-button--size-${size}`]: size,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
