import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import SidebarLink from "./SidebarLink";

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

describe("SidebarLink", () => {
  it("should render content", () => {
    render(<SidebarLink to="/">Content</SidebarLink>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should render content and icon", () => {
    render(
      <SidebarLink
        to="/"
        icon={<span data-testid="icon" />}
      >
        Content
      </SidebarLink>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <SidebarLink
        to="/"
        className="custom-class"
      >
        Content
      </SidebarLink>
    );

    expect(container.firstChild).toHaveClass("sidebar-link");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
