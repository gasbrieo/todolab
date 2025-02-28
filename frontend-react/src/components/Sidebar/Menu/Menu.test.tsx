import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { SidebarContext } from "../SidebarContext";
import Menu from "./Menu";

describe("Menu", () => {
  it("should render content", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <Menu>Content</Menu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should render subHeading when provided", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <Menu subHeading="SubHeading">Content</Menu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("SubHeading")).toBeInTheDocument();
  });

  it("should render subHeading as ellipsis", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: true }}>
        <Menu subHeading="SubHeading">Content</Menu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <Menu className="custom-class">Content</Menu>
      </SidebarContext.Provider>
    );

    expect(container.firstChild).toHaveClass("menu");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
