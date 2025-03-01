import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Typography.scss";

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption";
}

const Typography: FC<TypographyProps> = ({ children, className, variant = "body2", ...rest }) => {
  return (
    <p
      className={classNames(
        "typography",
        {
          [`typography--variant-${variant}`]: variant,
        },
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Typography;
