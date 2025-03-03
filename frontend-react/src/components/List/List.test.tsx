import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("should render children", () => {
    render(<List>Children</List>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<List className="custom-class">Children</List>);

    expect(container.firstChild).toHaveClass("list");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
