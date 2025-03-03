import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Avatar from "./Avatar";

describe("Avatar", () => {
  it("should render children", () => {
    render(<Avatar>Children</Avatar>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Avatar className="custom-class">Children</Avatar>);

    expect(container.firstChild).toHaveClass("avatar");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
