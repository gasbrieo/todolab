import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Popover from "./Popover";

describe("Popover", () => {
  it("should render children when is open", () => {
    render(<Popover isOpen>Children</Popover>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should render empty when is not open", () => {
    const { container } = render(<Popover>Children</Popover>);

    expect(container).toBeEmptyDOMElement();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <Popover
        className="custom-class"
        isOpen
      >
        Children
      </Popover>
    );

    expect(container.firstChild).toHaveClass("popover");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
