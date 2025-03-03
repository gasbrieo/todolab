import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("should render children", () => {
    render(<ListItem>Children</ListItem>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListItem className="custom-class">Children</ListItem>);

    expect(container.firstChild).toHaveClass("list-item");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
