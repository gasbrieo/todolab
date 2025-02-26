import type { FC } from "react";
import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

const WelcomePage: FC = () => {
  const navigate = useNavigate({ from: "/" });
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login("John Doe");
    navigate({ to: "/dashboard" });
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default WelcomePage;
