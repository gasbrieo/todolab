import { beforeEach, describe, expect, it, vi } from "vitest";
import { useNavigate } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useAuthStore } from "@/stores/authStore";

import DashboardPage from "./DashboardPage";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("DashboardPage", () => {
  const navigateMock = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(navigateMock);
  });

  it("should display the page title", () => {
    render(<DashboardPage />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("should trigger the logout event on button click", async () => {
    useAuthStore.getState().login("John Doe");

    render(<DashboardPage />);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    await userEvent.click(logoutButton);

    expect(useAuthStore.getState().user).toBeNull();
    expect(navigateMock).toHaveBeenCalledWith({ to: "/" });
  });
});
