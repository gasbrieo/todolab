import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { keycloak } from "@/libs/keycloak";

import WelcomePage from "./WelcomePage";

describe("WelcomePage", () => {
  it("should display the page title", () => {
    render(<WelcomePage />);

    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("should trigger the login event on button click", async () => {
    render(<WelcomePage />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    await userEvent.click(loginButton);

    expect(keycloak.login).toHaveBeenCalledTimes(1);
  });
});
