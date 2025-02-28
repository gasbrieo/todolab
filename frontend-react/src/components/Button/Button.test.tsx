import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render content", () => {
    render(<Button>Content</Button>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should render start icon", () => {
    render(<Button startIcon={<span data-testid="start-icon" />} />);

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
  });

  it("should render end icon", () => {
    render(<Button endIcon={<span data-testid="end-icon" />} />);

    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("should contain variant classename", () => {
    const { container } = render(<Button variant="outlined">Content</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("button--variant-outlined");
  });

  it("should contain size classename", () => {
    const { container } = render(<Button size="large">Content</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("button--size-large");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Button className="custom-class">Content</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
