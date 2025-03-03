import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { keycloak } from "@/libs/keycloak";

import WelcomePage from "./WelcomePage";

describe("WelcomePage", () => {
  it("should render elements", () => {
    render(<WelcomePage />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("TodoLab")).toBeInTheDocument();
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getByText("A fullstack To-Do application built with different technologies.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("should trigger login when login button click", async () => {
    render(<WelcomePage />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    await userEvent.click(loginButton);

    expect(keycloak.login).toHaveBeenCalledTimes(1);
  });
});
