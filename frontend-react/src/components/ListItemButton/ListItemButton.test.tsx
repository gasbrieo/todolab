import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItemButton from "./ListItemButton";

describe("ListItemButton", () => {
  it("should render content", () => {
    render(<ListItemButton>Content</ListItemButton>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListItemButton className="custom-class">Content</ListItemButton>);

    expect(container.firstChild).toHaveClass("list-item-button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
