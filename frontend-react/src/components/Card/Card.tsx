import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Card.scss";

const Card: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
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
