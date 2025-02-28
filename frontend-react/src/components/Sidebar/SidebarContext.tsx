import { createContext, useContext } from "react";

interface SidebarContextProps {
  isCollapsed?: boolean;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar");
  }
  return context;
};
