import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  it("should render page title", () => {
    render(<DashboardPage />);

    expect(screen.getByText("DashboardPage")).toBeInTheDocument();
  });
});
