import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

import "./Sidebar.scss";

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ children, className, isCollapsed, ...rest }) => {
  return (
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
      <div className="sidebar__content">{children}</div>
    </aside>
  );
};

export default Sidebar;
