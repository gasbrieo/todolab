import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render text", () => {
    render(<Button>Text</Button>);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should render start icon", () => {
    render(<Button startIcon={<span data-testid="start-icon" />} />);

    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
  });

  it("should render end icon", () => {
    render(<Button endIcon={<span data-testid="end-icon" />} />);

    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });

  it("should contain variant and size classes", () => {
    const { container } = render(
      <Button
        variant="outlined"
        size="large"
      >
        Text
      </Button>
    );

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("button--outlined");
    expect(container.firstChild).toHaveClass("button--large");
  });

  it("should contain additional class names", () => {
    const { container } = render(<Button className="custom-class">Text</Button>);

    expect(container.firstChild).toHaveClass("button");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
