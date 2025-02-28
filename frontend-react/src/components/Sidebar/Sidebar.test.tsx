import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("should render content", () => {
    render(<Sidebar>Content</Sidebar>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain collapsed class when isCollapsed is true", () => {
    const { container } = render(<Sidebar isCollapsed>Content</Sidebar>);
    expect(container.firstChild).toHaveClass("sidebar--collapsed");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Sidebar className="custom-class">Content</Sidebar>);

    expect(container.firstChild).toHaveClass("sidebar");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
