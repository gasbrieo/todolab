import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useSidebarStore } from "@/stores/sidebarStore";

import TodosPage from "./TodosPage";

describe("TodosPage", () => {
  it("should render page elements", () => {
    render(<TodosPage />);

    expect(screen.getByText("Todos Page")).toBeInTheDocument();
    expect(screen.getByTestId("todos-page_toggle-sidebar")).toBeInTheDocument();
  });

  it("should toggle sidebar when menu button is clicked", async () => {
    render(<TodosPage />);

    const toggleButton = screen.getByTestId("todos-page_toggle-sidebar");
    await userEvent.click(toggleButton);

    expect(useSidebarStore.getState().isCollapsed).toBeFalsy();
  });
});
