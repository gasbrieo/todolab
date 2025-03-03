import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("should render children", () => {
    render(<Card>Children</Card>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Card className="custom-class">Children</Card>);

    expect(container.firstChild).toHaveClass("card");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
