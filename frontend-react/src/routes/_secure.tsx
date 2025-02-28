import type { FC } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";

import Layout from "@/components/Layout";
import { useAuthStore } from "@/stores/authStore";

const RouteComponent: FC = () => {
  return <Layout />;
};

export const Route = createFileRoute("/_secure")({
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (!user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});
