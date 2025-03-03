import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Avatar from "./Avatar";

describe("Avatar", () => {
  it("should render content", () => {
    render(<Avatar>Content</Avatar>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Avatar className="custom-class">Content</Avatar>);

    expect(container.firstChild).toHaveClass("avatar");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
