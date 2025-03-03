import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ListSubheader from "./ListSubheader";

describe("ListSubheader", () => {
  it("should render children", () => {
    render(<ListSubheader>Children</ListSubheader>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<ListSubheader className="custom-class">Children</ListSubheader>);

    expect(container.firstChild).toHaveClass("list-subheader");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
