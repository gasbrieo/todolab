import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./CardActions.scss";

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

const CardActions: FC<CardActionsProps> = ({ children, className, ...rest }) => {
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
