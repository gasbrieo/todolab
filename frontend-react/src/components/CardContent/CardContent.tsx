import classNames from "classnames";
import type { HTMLAttributes } from "react";

import "./CardContent.scss";

const CardContent = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames("card-content", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardContent;
