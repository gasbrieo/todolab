import type { FC } from "react";
import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

const DashboardPage: FC = () => {
  const navigate = useNavigate({ from: "/dashboard" });
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
