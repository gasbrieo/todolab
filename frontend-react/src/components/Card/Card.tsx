import classNames from "classnames";
import type { HTMLAttributes } from "react";

import "./Card.scss";

const Card = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames("card", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
