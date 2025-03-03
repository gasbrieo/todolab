import { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { useAuthStore } from "@/stores/authStore";

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
  beforeEach(() => {
    useAuthStore.setState({ user: { email: "gabriel@todolab.com", name: "Gabriel", token: "" } });
  });

  it("should render sidebar account", () => {
    render(<SecureLayout />);

    const avatar = screen.getByAltText("Gabriel");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "https://api.dicebear.com/7.x/initials/svg?seed=Gabriel");
    expect(screen.getByText("Gabriel")).toBeInTheDocument();
    expect(screen.getByText("gabriel@todolab.com")).toBeInTheDocument();
  });

  it("should render sidebar nav", () => {
    render(<SecureLayout />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Todos")).toBeInTheDocument();
  });

  it("should render outlet", () => {
    render(<SecureLayout />);

    expect(screen.getByText("Outlet")).toBeInTheDocument();
  });
});
