import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import TodosPage from "./TodosPage";

describe("TodosPage", () => {
  it("should display the page title", () => {
    render(<TodosPage />);

    expect(screen.getByText("Todos")).toBeInTheDocument();
  });
});
