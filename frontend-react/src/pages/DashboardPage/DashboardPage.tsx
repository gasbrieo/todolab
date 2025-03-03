import { MenuIcon } from "lucide-react";

import IconButton from "@/components/IconButton";
import Typography from "@/components/Typography";
import { useSidebarStore } from "@/stores/sidebarStore";

import "./DashboardPage.scss";

const DashboardPage = () => {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <div className="dashboard-page">
      <IconButton
        className="dashboard-page__toggle-sidebar"
        data-testid="dashboard-page_toggle-sidebar"
        onClick={toggle}
      >
        <MenuIcon
          width="1em"
          height="1em"
        />
      </IconButton>
      <Typography variant="h6">Dashboard Page</Typography>
    </div>
  );
};

export default DashboardPage;
