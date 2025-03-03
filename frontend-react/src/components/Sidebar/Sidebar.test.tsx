import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("should render children", () => {
    render(<Sidebar>Children</Sidebar>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain collapsed class when is collapsed", () => {
    const { container } = render(<Sidebar isCollapsed>Children</Sidebar>);

    expect(container.firstChild).toHaveClass("sidebar--collapsed");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Sidebar className="custom-class">Children</Sidebar>);

    expect(container.firstChild).toHaveClass("sidebar");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
