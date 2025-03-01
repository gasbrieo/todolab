import classNames from "classnames";
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
        {children}
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
