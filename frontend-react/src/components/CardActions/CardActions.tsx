import classNames from "classnames";
import type { HTMLAttributes } from "react";

import "./CardActions.scss";

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

const CardActions = ({ children, className, ...rest }: CardActionsProps) => {
  return (
    <div
      className={classNames("card-actions", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardActions;
