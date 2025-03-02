import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import SidebarMenu from "./SidebarMenu";
import { SidebarContext } from "../Sidebar/SidebarContext";

describe("SidebarMenu", () => {
  it("should render content", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <SidebarMenu>Content</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should render subHeading when provided", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <SidebarMenu subHeading="SubHeading">Content</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("SubHeading")).toBeInTheDocument();
  });

  it("should render subHeading as ellipsis", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: true }}>
        <SidebarMenu subHeading="SubHeading">Content</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <SidebarMenu className="custom-class">Content</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(container.firstChild).toHaveClass("sidebar-menu");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
