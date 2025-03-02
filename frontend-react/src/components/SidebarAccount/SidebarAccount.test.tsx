import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import SidebarAccount from "./SidebarAccount";

describe("SidebarAccount", () => {
  it("should render elements", () => {
    render(
      <SidebarAccount
        avatarUrl="vite.svg"
        email="gabriel@todolab.com"
        name="Gabriel"
      />
    );

    const avatar = screen.getByAltText("Gabriel");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "vite.svg");
    expect(screen.getByText("Gabriel")).toBeInTheDocument();
    expect(screen.getByText("gabriel@todolab.com")).toBeInTheDocument();
  });

  it("should render default avatar when not provided", () => {
    render(
      <SidebarAccount
        email="gabriel@todolab.com"
        name="Gabriel"
      />
    );

    const avatar = screen.getByAltText("Gabriel");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "https://api.dicebear.com/7.x/initials/svg?seed=Gabriel");
    expect(screen.getByText("Gabriel")).toBeInTheDocument();
    expect(screen.getByText("gabriel@todolab.com")).toBeInTheDocument();
  });

  it("should trigger on logout when logout button click", async () => {
    const mockOnLogout = vi.fn();

    render(
      <SidebarAccount
        avatarUrl="vite.svg"
        email="gabriel@todolab.com"
        name="Gabriel"
        onLogout={mockOnLogout}
      />
    );

    await userEvent.click(screen.getByText("Gabriel"));
    await userEvent.click(screen.getByText("Logout"));

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <SidebarAccount
        avatarUrl="vite.svg"
        className="custom-class"
        email="gabriel@todolab.com"
        name="Gabriel"
      />
    );

    expect(container.firstChild).toHaveClass("sidebar-account");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
