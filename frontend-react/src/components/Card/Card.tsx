import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Card.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ children, className, ...rest }) => {
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
