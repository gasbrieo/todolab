import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./CardContent.scss";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent: FC<CardContentProps> = ({ children, className, ...rest }) => {
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
