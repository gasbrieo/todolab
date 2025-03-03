import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("should render content", () => {
    render(<List>Content</List>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<List className="custom-class">Content</List>);

    expect(container.firstChild).toHaveClass("list");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
