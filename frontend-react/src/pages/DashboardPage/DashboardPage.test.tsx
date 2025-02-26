import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { keycloak } from "@/libs/keycloak";

import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  it("should display the page title", () => {
    render(<DashboardPage />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("should trigger the logout event on button click", async () => {
    render(<DashboardPage />);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    await userEvent.click(logoutButton);

    expect(keycloak.logout).toHaveBeenCalledTimes(1);
  });
});
