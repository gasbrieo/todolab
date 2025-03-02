import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useSidebarStore } from "@/stores/sidebarStore";

import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  it("should render page elements", () => {
    render(<DashboardPage />);

    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
    expect(screen.getByTestId("dashboard-page_toggle-sidebar")).toBeInTheDocument();
  });

  it("should toggle sidebar when menu button is clicked", async () => {
    render(<DashboardPage />);

    const toggleButton = screen.getByTestId("dashboard-page_toggle-sidebar");
    await userEvent.click(toggleButton);

    expect(useSidebarStore.getState().isCollapsed).toBeFalsy();
  });
});
