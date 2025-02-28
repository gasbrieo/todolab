import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Logo from "./Logo";

describe("Logo", () => {
  it("should render name and icon", () => {
    render(<Logo name="Name" />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <Logo
        name="Name"
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass("logo");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
