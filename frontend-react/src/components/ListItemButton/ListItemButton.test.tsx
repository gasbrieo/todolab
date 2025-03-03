import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItemButton from "./ListItemButton";

describe("ListItemButton", () => {
  it("should render children", () => {
    render(<ListItemButton>Children</ListItemButton>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListItemButton className="custom-class">Children</ListItemButton>);

    expect(container.firstChild).toHaveClass("list-item-button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
