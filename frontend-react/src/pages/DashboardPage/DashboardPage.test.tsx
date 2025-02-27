import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  it("should display the page title", () => {
    render(<DashboardPage />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
