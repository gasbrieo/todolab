import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { keycloak } from "./libs/keycloak";

describe("App", () => {
  it("should not display routes when keycloak init throws error", async () => {
    vi.mocked(keycloak.init).mockRejectedValue(new Error("Keycloak init failed."));

    render(<App />);

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("should render the welcome page when user not logged in", async () => {
    vi.mocked(keycloak.init).mockResolvedValue(false);

    render(<App />);

    expect(await screen.findByText("Welcome")).toBeInTheDocument();
  });

  it("should render the dashboard page when user logged in", async () => {
    vi.mocked(keycloak.init).mockResolvedValue(true);
    keycloak.tokenParsed = { preferred_username: "John Doe" };

    render(<App />);

    expect(await screen.findByText("Dashboard")).toBeInTheDocument();
  });
});
