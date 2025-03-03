import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Typography from "./Typography";

describe("Typography", () => {
  it("should render children", () => {
    render(<Typography>Children</Typography>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain variant classname", () => {
    const { container } = render(<Typography variant="body2">Children</Typography>);

    expect(container.firstChild).toHaveClass("typography");
    expect(container.firstChild).toHaveClass("typography--variant-body2");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Typography className="custom-class">Children</Typography>);

    expect(container.firstChild).toHaveClass("typography");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
