import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Logo.scss";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

const Logo: FC<LogoProps> = ({ className, name, ...rest }) => {
  return (
    <div
      className={classNames("logo", className)}
      {...rest}
    >
      <div className="logo__content">
        <img
          src="/vite.svg"
          alt="Logo"
          className="logo__icon"
        />
        <span className="logo__label">{name}</span>
      </div>
    </div>
  );
};

export default Logo;
