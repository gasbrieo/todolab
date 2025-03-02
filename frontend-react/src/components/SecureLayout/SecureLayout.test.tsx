import { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { keycloak } from "@/libs/keycloak";
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
    useAuthStore.setState({ user: { avatarUrl: "vite.svg", email: "gabriel@todolab.com", name: "Gabriel", token: "" } });
  });

  it("should render sidebar account", () => {
    render(<SecureLayout />);

    const avatar = screen.getByAltText("Gabriel");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "vite.svg");
    expect(screen.getByText("Gabriel")).toBeInTheDocument();
    expect(screen.getByText("gabriel@todolab.com")).toBeInTheDocument();
  });

  it("should trigger logout when sidebar account button click", async () => {
    render(<SecureLayout />);

    await userEvent.click(screen.getByText("Gabriel"));
    await userEvent.click(screen.getByText("Logout"));

    expect(keycloak.logout).toHaveBeenCalledTimes(1);
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
