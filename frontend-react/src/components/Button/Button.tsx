import classNames from "classnames";
import { type ButtonHTMLAttributes, FC, ReactNode } from "react";

import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: ReactNode;
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  variant?: "text" | "contained" | "outlined";
}

const Button: FC<ButtonProps> = ({ children, className, endIcon, size = "medium", startIcon, variant = "text", ...rest }) => {
  return (
    <button
      className={classNames(
        "button",
        {
          [`button--variant-${variant}`]: variant,
          [`button--size-${size}`]: size,
        },
        className
      )}
      {...rest}
    >
      {startIcon && <span className="button__icon button__icon--start">{startIcon}</span>}
      {children}
      {endIcon && <span className="button__icon button__icon--end">{endIcon}</span>}
    </button>
  );
};

export default Button;
