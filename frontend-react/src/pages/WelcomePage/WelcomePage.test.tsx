import { beforeEach, describe, expect, it, vi } from "vitest";
import { useNavigate } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useAuthStore } from "@/stores/authStore";

import WelcomePage from "./WelcomePage";

vi.mock("@tanstack/react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("WelcomePage", () => {
  const navigateMock = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(navigateMock);
  });

  it("should display the page title", () => {
    render(<WelcomePage />);

    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("should trigger the login event on button click", async () => {
    render(<WelcomePage />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    await userEvent.click(loginButton);

    expect(useAuthStore.getState().user).not.toBeNull();
    expect(useAuthStore.getState().user?.name).toBe("John Doe");
    expect(navigateMock).toHaveBeenCalledWith({ to: "/dashboard" });
  });
});
