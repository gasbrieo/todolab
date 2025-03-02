import classNames from "classnames";
import type { HTMLAttributes } from "react";

import "./Card.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, className, ...rest }: CardProps) => {
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
