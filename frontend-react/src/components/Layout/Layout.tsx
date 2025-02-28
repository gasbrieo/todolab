import { useState, type FC } from "react";
import { Outlet } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

import Button from "../Button";
import Icon from "../Icon";
import Sidebar from "../Sidebar";
import Logo from "../Sidebar/Logo";
import Menu from "../Sidebar/Menu";
import MenuLink from "../Sidebar/MenuLink";
import Topbar from "../Topbar";

import "./Layout.scss";

const Layout: FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => setIsCollapsed((prev) => !prev);
  const handleLogout = () => logout();

  return (
    <div className="layout">
      <Sidebar isCollapsed={isCollapsed}>
        <Logo name="TodoLab" />
        <Menu subHeading="General">
          <MenuLink
            to="/dashboard"
            icon={<Icon name="LayoutDashboard" />}
          >
            Dashboard
          </MenuLink>
        </Menu>
      </Sidebar>
      <div className="layout__wrapper">
        <Topbar>
          <Button
            icon={<Icon name="Menu" />}
            data-testid="Topbar_ToggleSidebarButton"
            onClick={handleToggleSidebar}
          />
          <Button
            icon={<Icon name="LogOut" />}
            data-testid="Topbar_LogoutButton"
            onClick={handleLogout}
          />
        </Topbar>
        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
