import { type FC, useEffect, useState } from "react";
import { RouterProvider } from "@tanstack/react-router";

import router from "./router";
import { useAuthStore } from "./stores/authStore";

const App: FC = () => {
  const [loading, setLoading] = useState(true);
  const init = useAuthStore((state) => state.init);

  useEffect(() => {
    init()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
