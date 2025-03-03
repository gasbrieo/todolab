import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItemText from "./ListItemText";

describe("ListItemText", () => {
  it("should render primary", () => {
    render(<ListItemText primary="Primary" />);

    expect(screen.getByText("Primary")).toBeInTheDocument();
  });

  it("should render primary and secondary", () => {
    render(
      <ListItemText
        primary="Primary"
        secondary="Secondary"
      />
    );

    expect(screen.getByText("Primary")).toBeInTheDocument();
    expect(screen.getByText("Secondary")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <ListItemText
        className="custom-class"
        primary="Primary"
      />
    );

    expect(container.firstChild).toHaveClass("list-item-text");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
