import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render children", () => {
    render(<Button>Children</Button>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should render start icon", () => {
    render(<Button startIcon={<span data-testid="start-icon" />} />);

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
  });

  it("should render end icon", () => {
    render(<Button endIcon={<span data-testid="end-icon" />} />);

    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("should contain variant classname", () => {
    const { container } = render(<Button variant="outlined">Children</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("button--variant-outlined");
  });

  it("should contain size classname", () => {
    const { container } = render(<Button size="large">Children</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("button--size-large");
  });

  it("should contain additional classnames", () => {
    const { container } = render(<Button className="custom-class">Children</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
