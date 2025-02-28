import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import MenuLink from "./MenuLink";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, className, activeProps, ...props }: { children: ReactNode; className?: string; activeProps?: { className?: string } }) => (
    <a
      className={`${className ?? ""} ${activeProps?.className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  ),
}));

describe("MenuLink", () => {
  it("should render text", () => {
    render(<MenuLink to="/">Text</MenuLink>);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should render text and icon", () => {
    render(
      <MenuLink
        to="/"
        icon={<span data-testid="icon" />}
      >
        Text
      </MenuLink>
    );

    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <MenuLink
        to="/"
        className="custom-class"
      >
        Text
      </MenuLink>
    );

    expect(container.firstChild).toHaveClass("menu-link");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
