import { Outlet } from "@tanstack/react-router";

import Icon from "@/components/Icon";
import Sidebar from "@/components/Sidebar";
import SidebarAccount from "@/components/SidebarAccount";
import SidebarLink from "@/components/SidebarLink";
import SidebarMenu from "@/components/SidebarMenu";
import SidebarNav from "@/components/SidebarNav";
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
          avatarUrl={user.avatarUrl}
          email={user.email}
          name={user.name}
          onLogout={logout}
        />
        <SidebarNav>
          <SidebarMenu subHeading="General">
            <SidebarLink
              to="/dashboard"
              icon={<Icon name="LayoutDashboard" />}
            >
              Dashboard
            </SidebarLink>
            <SidebarLink
              to="/todos"
              icon={<Icon name="ListTodo" />}
            >
              Todos
            </SidebarLink>
          </SidebarMenu>
        </SidebarNav>
      </Sidebar>
      <div className="secure-layout__wrapper">
        <main className="secure-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SecureLayout;
