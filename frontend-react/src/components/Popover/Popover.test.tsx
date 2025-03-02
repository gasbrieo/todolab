import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Popover from "./Popover";

describe("Popover", () => {
  it("should render content when is open", () => {
    render(<Popover isOpen>Content</Popover>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should render empty when is not open", () => {
    const { container } = render(<Popover>Content</Popover>);

    expect(container).toBeEmptyDOMElement();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <Popover
        className="custom-class"
        isOpen
      >
        Content
      </Popover>
    );

    expect(container.firstChild).toHaveClass("popover");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
