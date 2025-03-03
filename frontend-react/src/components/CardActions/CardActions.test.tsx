import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import CardActions from "./CardActions";

describe("CardActions", () => {
  it("should render children", () => {
    render(<CardActions>Children</CardActions>);

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<CardActions className="custom-class">Children</CardActions>);

    expect(container.firstChild).toHaveClass("card-actions");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
