import classNames from "classnames";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import type { FC, HTMLAttributes } from "react";

import { SidebarContext } from "./SidebarContext";

import "./Sidebar.scss";

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ children, className, isCollapsed, ...rest }) => {
  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        className={classNames(
          "sidebar",
          {
            "sidebar--collapsed": isCollapsed,
          },
          className
        )}
        {...rest}
      >
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: "leave" }, overflow: { x: "hidden" } }}
          className="sidebar__content"
        >
          {children}
        </OverlayScrollbarsComponent>
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
