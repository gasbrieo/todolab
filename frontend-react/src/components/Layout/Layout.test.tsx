import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { keycloak } from "@/libs/keycloak";

import Layout from "./Layout";

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    children,
    className,
    activeProps,
    ...props
  }: {
    children: ReactNode;
    className?: string;
    activeProps?: { className?: string };
  }) => (
    <a
      className={`${className ?? ""} ${activeProps?.className ?? ""}`}
      {...props}
    >
      {children}
    </a>
  ),
  Outlet: () => <div data-testid="outlet" />,
}));

describe("Layout", () => {
  it("should render sidebar, topbar, and outlet", () => {
    render(<Layout />);

    expect(screen.getByText("TodoLab")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();

    expect(screen.getByTestId("Topbar_ToggleSidebarButton")).toBeInTheDocument();
    expect(screen.getByTestId("Topbar_LogoutButton")).toBeInTheDocument();

    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });

  it("should toggle sidebar when menu button is clicked", async () => {
    render(<Layout />);

    const toggleButton = screen.getByTestId("Topbar_ToggleSidebarButton");
    await userEvent.click(toggleButton);

    expect(screen.getByRole("complementary")).toHaveClass("sidebar--collapsed");
  });

  it("should trigger logout when logout button is clicked", async () => {
    render(<Layout />);

    const logoutButton = screen.getByTestId("Topbar_LogoutButton");
    await userEvent.click(logoutButton);

    expect(keycloak.logout).toHaveBeenCalledTimes(1);
  });
});
