import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import SecureLayout from "./SecureLayout";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, className, activeProps, ...props }: { children: ReactNode; className?: string; activeProps?: { className?: string } }) => (
    <a
      className={`${className ?? ""} ${activeProps?.className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  ),
  Outlet: () => <div>Outlet</div>,
}));

describe("SecureLayout", () => {
  it("should render sidebar", () => {
    render(<SecureLayout />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Todos")).toBeInTheDocument();
  });

  it("should render outlet", () => {
    render(<SecureLayout />);

    expect(screen.getByText("Outlet")).toBeInTheDocument();
  });
});
