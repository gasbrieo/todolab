import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./CardActions.scss";

const CardActions: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
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
