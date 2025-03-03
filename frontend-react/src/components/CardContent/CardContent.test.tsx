import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import CardContent from "./CardContent";

describe("CardContent", () => {
  it("should render children", () => {
    render(<CardContent>Children</CardContent>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<CardContent className="custom-class">Children</CardContent>);

    expect(container.firstChild).toHaveClass("card-content");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
