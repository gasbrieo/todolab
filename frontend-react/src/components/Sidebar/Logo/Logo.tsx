import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Logo.scss";
import Typography from "@/components/Typography";

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
        <Typography
          variant="h6"
          className="logo__text"
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default Logo;
