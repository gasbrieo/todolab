import type { FC } from "react";

import { useAuthStore } from "@/stores/authStore";

const DashboardPage: FC = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
