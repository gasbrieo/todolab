import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { keycloak } from "@/libs/keycloak";

import WelcomePage from "./WelcomePage";

describe("WelcomePage", () => {
  it("should render page title", () => {
    render(<WelcomePage />);

    expect(screen.getByText("WelcomePage")).toBeInTheDocument();
  });

  it("should trigger login when login button click", async () => {
    render(<WelcomePage />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    await userEvent.click(loginButton);

    expect(keycloak.login).toHaveBeenCalledTimes(1);
  });
});
