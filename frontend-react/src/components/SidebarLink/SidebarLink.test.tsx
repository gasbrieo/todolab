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
  it("should render text", () => {
    render(
      <SidebarLink
        to="/"
        text="Text"
      />
    );

    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("should render text and icon", () => {
    render(
      <SidebarLink
        to="/"
        text="Text"
        icon={<span data-testid="icon" />}
      />
    );

    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
