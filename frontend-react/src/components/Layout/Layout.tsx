import { useState, type FC } from "react";
import { Outlet } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

import Icon from "../Icon/Icon";
import Sidebar from "../Sidebar";
import Menu from "../Sidebar/Menu";
import MenuLink from "../Sidebar/MenuLink";
import Topbar from "../Topbar";

import "./Layout.scss";
import Logo from "../Sidebar/Logo/Logo";

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
          <MenuLink icon={<Icon name="ArrowLeftRight" />}>Payment</MenuLink>
          <MenuLink icon={<Icon name="Users" />}>Customers</MenuLink>
          <MenuLink icon={<Icon name="MessageSquareDot" />}>Message</MenuLink>
        </Menu>
        <Menu subHeading="Tools">
          <MenuLink icon={<Icon name="ShoppingBag" />}>Product</MenuLink>
          <MenuLink icon={<Icon name="FileText" />}>Invoice</MenuLink>
          <MenuLink icon={<Icon name="ChartLine" />}>Analytics</MenuLink>
          <MenuLink icon={<Icon name="Sparkles" />}>Automation</MenuLink>
        </Menu>
        <Menu subHeading="Support">
          <MenuLink icon={<Icon name="Settings" />}>Settings</MenuLink>
          <MenuLink icon={<Icon name="ShieldAlert" />}>Security</MenuLink>
          <MenuLink icon={<Icon name="CircleHelp" />}>Help</MenuLink>
        </Menu>
      </Sidebar>
      <div className="layout__wrapper">
        <Topbar>
          <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
          <button onClick={handleLogout}>Logout</button>
        </Topbar>
        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
