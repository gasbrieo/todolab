import classNames from "classnames";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import type { FC, MenuHTMLAttributes } from "react";

import "./Navigation.scss";

const Navigation: FC<MenuHTMLAttributes<HTMLMenuElement>> = ({ children, className, ...rest }) => {
  return (
    <OverlayScrollbarsComponent
      options={{ scrollbars: { autoHide: "leave" }, overflow: { x: "hidden" } }}
      className={classNames("navigation", className)}
    >
      <nav {...rest}>{children}</nav>
    </OverlayScrollbarsComponent>
  );
};

export default Navigation;
