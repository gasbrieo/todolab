import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Topbar.scss";

const Topbar: FC<HTMLAttributes<HTMLHtmlElement>> = ({ children, className, ...rest }) => {
  return (
    <header
      className={classNames("topbar", className)}
      {...rest}
    >
      <div className="topbar__content">{children}</div>
    </header>
  );
};

export default Topbar;
