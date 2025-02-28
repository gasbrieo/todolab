import classNames from "classnames";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { type FC, type HTMLAttributes, useMemo } from "react";

import { SidebarContext } from "./SidebarContext";

import "./Sidebar.scss";

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ children, className, isCollapsed, ...rest }) => {
  const contextValue = useMemo(() => ({ isCollapsed }), [isCollapsed]);

  return (
    <SidebarContext.Provider value={contextValue}>
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
