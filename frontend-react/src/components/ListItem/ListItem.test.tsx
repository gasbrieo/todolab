import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("should render content", () => {
    render(<ListItem>Content</ListItem>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListItem className="custom-class">Content</ListItem>);

    expect(container.firstChild).toHaveClass("list-item");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
