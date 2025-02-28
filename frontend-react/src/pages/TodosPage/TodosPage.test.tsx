import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import TodosPage from "./TodosPage";

describe("TodosPage", () => {
  it("should render page title", () => {
    render(<TodosPage />);

    expect(screen.getByText("TodosPage")).toBeInTheDocument();
  });
});
