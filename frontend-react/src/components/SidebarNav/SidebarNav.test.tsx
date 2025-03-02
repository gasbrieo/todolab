import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import SidebarNav from "./SidebarNav";

describe("SidebarNav", () => {
  it("should render content", () => {
    render(<SidebarNav>Content</SidebarNav>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<SidebarNav className="custom-class">Content</SidebarNav>);

    expect(container.firstChild).toHaveClass("sidebar-nav");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
