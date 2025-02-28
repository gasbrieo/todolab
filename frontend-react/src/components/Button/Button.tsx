import classNames from "classnames";
import { type ButtonHTMLAttributes, FC, ReactNode } from "react";

import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, className, icon, ...rest }) => {
  return (
    <button
      className={classNames("button", className)}
      {...rest}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children && <span className="button__text">{children}</span>}
    </button>
  );
};

export default Button;
