import classNames from "classnames";
import { useMemo, type HTMLAttributes } from "react";

import { SidebarContext } from "./SidebarContext";

import "./Sidebar.scss";

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean;
}

const Sidebar = ({ children, className, isCollapsed, ...rest }: SidebarProps) => {
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
        {children}
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
