import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Topbar from "./Topbar";

describe("Topbar", () => {
  it("should render content", () => {
    render(<Topbar>Content</Topbar>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional class names", () => {
    const { container } = render(<Topbar className="custom-class">Content</Topbar>);

    expect(container.firstChild).toHaveClass("topbar");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
