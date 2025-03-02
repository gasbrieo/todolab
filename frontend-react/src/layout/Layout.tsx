import { Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/Sidebar";
import Menu from "@/components/Sidebar/Menu";
import MenuLink from "@/components/Sidebar/MenuLink";
import Navigation from "@/components/Sidebar/Navigation";
import Icon from "@/components/Icon";
import { useSidebarStore } from "@/stores/sidebarStore";

import "./Layout.scss";

const Layout = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  return (
    <div className="layout">
      <Sidebar isCollapsed={isCollapsed}>
        <Navigation>
          <Menu>
            <MenuLink
              to="/dashboard"
              icon={<Icon name="LayoutDashboard" />}
            >
              Dashboard
            </MenuLink>
            <MenuLink
              to="/todos"
              icon={<Icon name="ListTodo" />}
            >
              Todos
            </MenuLink>
          </Menu>
        </Navigation>
      </Sidebar>
      <div className="layout__wrapper">
        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
