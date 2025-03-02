import classNames from "classnames";
import type { HTMLAttributes } from "react";

import "./CardContent.scss";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = ({ children, className, ...rest }: CardContentProps) => {
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
