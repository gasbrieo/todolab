import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Icon from "./Icon";

describe("Icon", () => {
  it("should render specified icon", () => {
    render(
      <Icon
        name="LayoutDashboard"
        data-testid="icon"
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <Icon
        name="LayoutDashboard"
        data-testid="icon"
        className="custom-class"
      />
    );

    expect(container.firstChild).toHaveClass("icon");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
