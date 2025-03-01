import { useState, type FC } from "react";
import { Outlet } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

import Button from "../Button";
import Icon from "../Icon";
import IconButton from "../IconButton";
import Sidebar from "../Sidebar";
import Account from "../Sidebar/Account";
import Divider from "../Sidebar/Divider";
import Footer from "../Sidebar/Footer";
import Logo from "../Sidebar/Logo";
import Menu from "../Sidebar/Menu";
import Navigation from "../Sidebar/Navigation";
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
        <Navigation>
          <Menu subHeading="General">
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
        <Footer>
          <Menu>
            <Divider />
            <Account
              name="TodoLab"
              email="todolab@email.com"
              avatarUrl="vite.svg"
            />
          </Menu>
        </Footer>
      </Sidebar>
      <div className="layout__wrapper">
        <Topbar>
          <IconButton
            data-testid="Topbar_ToggleSidebarButton"
            onClick={handleToggleSidebar}
          >
            <Icon name="Menu" />
          </IconButton>
          <Button
            variant="outlined"
            startIcon={<Icon name="LogOut" />}
            data-testid="Topbar_LogoutButton"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Topbar>
        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
