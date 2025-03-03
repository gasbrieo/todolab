import classNames from "classnames";
import type { HTMLAttributes } from "react";

import "./CardActions.scss";

const CardActions = ({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
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
