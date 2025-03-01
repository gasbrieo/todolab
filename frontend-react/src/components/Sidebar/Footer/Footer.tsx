import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Footer.scss";

const Footer: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("footer", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Footer;
