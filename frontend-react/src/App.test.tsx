import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { useAuthStore } from "./stores/authStore";
import App from "./App";

describe("App", () => {
  it("should render the welcome page when user not logged in", async () => {
    render(<App />);

    expect(await screen.findByText("Welcome")).toBeInTheDocument();
  });

  it("should render the dashboard page when user logged in", async () => {
    useAuthStore.getState().login("John Doe");

    render(<App />);

    expect(await screen.findByText("Dashboard")).toBeInTheDocument();
  });
});
