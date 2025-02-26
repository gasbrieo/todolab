import type { FC } from "react";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { useAuthStore } from "@/stores/authStore";

const RouteComponent: FC = () => {
  return <Outlet />;
};

export const Route = createFileRoute("/_guest")({
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (user) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: RouteComponent,
});
