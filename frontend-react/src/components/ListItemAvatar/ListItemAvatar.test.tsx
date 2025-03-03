import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListItemAvatar from "./ListItemAvatar";

describe("ListItemAvatar", () => {
  it("should render content", () => {
    render(<ListItemAvatar>Content</ListItemAvatar>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListItemAvatar className="custom-class">Content</ListItemAvatar>);

    expect(container.firstChild).toHaveClass("list-item-avatar");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
