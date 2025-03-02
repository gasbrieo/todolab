import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import IconButton from "./IconButton";

describe("IconButton", () => {
  it("should render content", () => {
    render(<IconButton>Content</IconButton>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain size classename", () => {
    const { container } = render(<IconButton size="large">Content</IconButton>);

    expect(container.firstChild).toHaveClass("icon-button");
    expect(container.firstChild).toHaveClass("icon-button--size-large");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<IconButton className="custom-class">Content</IconButton>);

    expect(container.firstChild).toHaveClass("icon-button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
