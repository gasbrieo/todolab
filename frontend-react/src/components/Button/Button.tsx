import classNames from "classnames";
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";

import "./Button.scss";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "text" | "contained" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: ReactNode;
  size?: ButtonSize;
  startIcon?: ReactNode;
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, endIcon, size = "medium", startIcon, variant = "text", ...rest }, ref) => {
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
      ref={ref}
      {...rest}
    >
      {startIcon && <span className="button__icon button__icon--start">{startIcon}</span>}
      {children}
      {endIcon && <span className="button__icon button__icon--end">{endIcon}</span>}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
