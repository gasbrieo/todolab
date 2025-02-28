import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  it("should render content", () => {
    render(<Card>Content</Card>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Card className="custom-class">Content</Card>);

    expect(container.firstChild).toHaveClass("card");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
