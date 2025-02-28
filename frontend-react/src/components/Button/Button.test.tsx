import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render text", () => {
    render(<Button>Text</Button>);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should render icon", () => {
    render(<Button icon={<span data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render text and icon", () => {
    render(<Button icon={<span data-testid="icon" />}>Text</Button>);

    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should contain additional class names", () => {
    const { container } = render(<Button className="custom-class">Text</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
