import { afterEach, vi } from "vitest";
import { act } from "@testing-library/react";

import { useAuthStore } from "./stores/authStore";
import { useSidebarStore } from "./stores/sidebarStore";

import "@testing-library/jest-dom";

vi.mock("keycloak-js");

const initialStates = {
  auth: useAuthStore.getState(),
  sidebar: useSidebarStore.getState(),
};

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();

  act(() => {
    useAuthStore.setState(initialStates.auth, true);
    useSidebarStore.setState(initialStates.sidebar, true);
  });
});
