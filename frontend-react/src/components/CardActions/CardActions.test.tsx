import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import CardActions from "./CardActions";

describe("CardActions", () => {
  it("should render content", () => {
    render(<CardActions>Content</CardActions>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(<CardActions className="custom-class">Content</CardActions>);

    expect(container.firstChild).toHaveClass("card-actions");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
