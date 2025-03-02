import { createFileRoute, redirect } from "@tanstack/react-router";

import Layout from "@/layout/Layout";
import { useAuthStore } from "@/stores/authStore";

export const Route = createFileRoute("/_secure")({
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (!user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: Layout,
});
