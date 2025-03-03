import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItemIcon from "./ListItemIcon";

describe("ListItemIcon", () => {
  it("should render children", () => {
    render(<ListItemIcon>Children</ListItemIcon>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListItemIcon className="custom-class">Children</ListItemIcon>);

    expect(container.firstChild).toHaveClass("list-item-icon");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
