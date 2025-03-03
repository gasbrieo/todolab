import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";

import App from "./App";
import { keycloak } from "./libs/keycloak";
import router from "./router";
import { useAuthStore } from "./stores/authStore";

describe("App", () => {
  it("should not render routes when keycloak init throws error", async () => {
    vi.mocked(keycloak.init).mockRejectedValue(new Error("Keycloak init failed."));

    render(<App />);

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("should render the welcome page when user not logged in", async () => {
    vi.mocked(keycloak.init).mockResolvedValue(false);

    render(<App />);

    expect(await screen.findByText("Welcome!")).toBeInTheDocument();
  });

  it("should render the dashboard page when user logged in", async () => {
    vi.mocked(keycloak.init).mockResolvedValue(true);
    keycloak.tokenParsed = {};

    render(<App />);

    expect(await screen.findByText("Dashboard Page")).toBeInTheDocument();
  });
});

describe("Router", () => {
  describe("Dashboard", () => {
    it("should allow access to dashboard page when authenticated", async () => {
      useAuthStore.setState({ user: { email: "", name: "", token: "" } });

      const history = createMemoryHistory({ initialEntries: ["/dashboard"] });

      render(
        <RouterProvider
          history={history}
          router={router}
        />
      );

      expect(await screen.findByText("Dashboard Page")).toBeInTheDocument();
    });

    it("should redirect to welcome page when not authenticated", async () => {
      useAuthStore.setState({ user: null });

      const history = createMemoryHistory({ initialEntries: ["/dashboard"] });

      render(
        <RouterProvider
          history={history}
          router={router}
        />
      );

      expect(await screen.findByText("Welcome!")).toBeInTheDocument();
    });
  });

  describe("Todos", () => {
    it("should allow access to todos page when authenticated", async () => {
      useAuthStore.setState({ user: { email: "", name: "", token: "" } });

      const history = createMemoryHistory({ initialEntries: ["/todos"] });

      render(
        <RouterProvider
          history={history}
          router={router}
        />
      );

      expect(await screen.findByText("Todos Page")).toBeInTheDocument();
    });

    it("should redirect to welcome page when not authenticated", async () => {
      useAuthStore.setState({ user: null });

      const history = createMemoryHistory({ initialEntries: ["/todos"] });

      render(
        <RouterProvider
          history={history}
          router={router}
        />
      );

      expect(await screen.findByText("Welcome!")).toBeInTheDocument();
    });
  });

  describe("Welcome", () => {
    it("should allow access to welcome page when not authenticated", async () => {
      useAuthStore.setState({ user: null });

      const history = createMemoryHistory({ initialEntries: ["/"] });

      render(
        <RouterProvider
          history={history}
          router={router}
        />
      );

      expect(await screen.findByText("Welcome!")).toBeInTheDocument();
    });

    it("should redirect to dashboard page when authenticated", async () => {
      useAuthStore.setState({ user: { email: "", name: "", token: "" } });

      const history = createMemoryHistory({ initialEntries: ["/"] });

      render(
        <RouterProvider
          history={history}
          router={router}
        />
      );

      expect(await screen.findByText("Dashboard Page")).toBeInTheDocument();
    });
  });
});
