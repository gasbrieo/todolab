import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import CardContent from "./CardContent";

describe("CardContent", () => {
  it("should render content", () => {
    render(<CardContent>Content</CardContent>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<CardContent className="custom-class">Content</CardContent>);

    expect(container.firstChild).toHaveClass("card-content");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
