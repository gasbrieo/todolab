import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Divider from "./Divider";

describe("Divider", () => {
  it("should contain additional classnames", () => {
    const { container } = render(<Divider className="custom-class" />);

    expect(container.firstChild).toHaveClass("divider");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
