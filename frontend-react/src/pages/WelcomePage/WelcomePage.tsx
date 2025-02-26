import type { FC } from "react";

import { useAuthStore } from "@/stores/authStore";

const WelcomePage: FC = () => {
  const login = useAuthStore((state) => state.login);

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default WelcomePage;
