import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import IconButton from "./IconButton";

describe("IconButton", () => {
  it("should render children", () => {
    render(<IconButton>Children</IconButton>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain size classname", () => {
    const { container } = render(<IconButton size="large">Children</IconButton>);

    expect(container.firstChild).toHaveClass("icon-button");
    expect(container.firstChild).toHaveClass("icon-button--size-large");
  });

  it("should contain shape classname", () => {
    const { container } = render(<IconButton shape="rounded">Children</IconButton>);

    expect(container.firstChild).toHaveClass("icon-button");
    expect(container.firstChild).toHaveClass("icon-button--shape-rounded");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<IconButton className="custom-class">Children</IconButton>);

    expect(container.firstChild).toHaveClass("icon-button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
