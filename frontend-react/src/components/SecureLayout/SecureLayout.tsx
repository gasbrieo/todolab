import { Outlet } from "@tanstack/react-router";

import Icon from "@/components/Icon";
import Sidebar from "@/components/Sidebar";
import SidebarLink from "@/components/SidebarLink";
import SidebarMenu from "@/components/SidebarMenu";
import SidebarNav from "@/components/SidebarNav";
import { useSidebarStore } from "@/stores/sidebarStore";

import "./SecureLayout.scss";

const SecureLayout = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);

  return (
    <div className="secure-layout">
      <Sidebar isCollapsed={isCollapsed}>
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
