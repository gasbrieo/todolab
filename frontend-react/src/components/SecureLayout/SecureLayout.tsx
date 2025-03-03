import { LayoutDashboardIcon, ListTodoIcon } from "lucide-react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Outlet } from "@tanstack/react-router";

import Sidebar from "@/components/Sidebar";
import SidebarAccount from "@/components/SidebarAccount";
import SidebarMenu from "@/components/SidebarMenu";
import SidebarLink from "@/components/SidebarLink";
import { useAuthStore } from "@/stores/authStore";
import { useSidebarStore } from "@/stores/sidebarStore";

import "./SecureLayout.scss";

const SecureLayout = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  if (!user) {
    return null;
  }

  return (
    <div className="secure-layout">
      <Sidebar isCollapsed={isCollapsed}>
        <SidebarAccount
          email={user.email}
          name={user.name}
          onLogout={logout}
        />
        <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: "leave" }, overflow: { x: "hidden" } }}>
          <SidebarMenu subheader="General">
            <SidebarLink
              to="/dashboard"
              text="Dashboard"
              icon={
                <LayoutDashboardIcon
                  width="1em"
                  height="1em"
                />
              }
            />
            <SidebarLink
              to="/todos"
              text="Todos"
              icon={
                <ListTodoIcon
                  width="1em"
                  height="1em"
                />
              }
            />
          </SidebarMenu>
        </OverlayScrollbarsComponent>
      </Sidebar>
      <main className="secure-layout__content">
        <Outlet />
      </main>
    </div>
  );
};

export default SecureLayout;
