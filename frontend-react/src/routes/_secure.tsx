import { createFileRoute, redirect } from "@tanstack/react-router";

import SecureLayout from "@/components/SecureLayout";
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
  component: SecureLayout,
});
