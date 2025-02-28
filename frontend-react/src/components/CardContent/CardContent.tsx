import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./CardContent.scss";

const CardContent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
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
