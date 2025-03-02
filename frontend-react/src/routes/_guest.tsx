import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

export const Route = createFileRoute("/_guest")({
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (user) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: Outlet,
});
