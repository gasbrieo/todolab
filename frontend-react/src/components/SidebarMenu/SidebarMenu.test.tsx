import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { SidebarContext } from "@/components/Sidebar/SidebarContext";

import SidebarMenu from "./SidebarMenu";

describe("SidebarMenu", () => {
  it("should render children", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <SidebarMenu>Children</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should render subheader when provided", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <SidebarMenu subheader="Subheader">Children</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("Subheader")).toBeInTheDocument();
  });

  it("should render subheader as ellipsis", () => {
    render(
      <SidebarContext.Provider value={{ isCollapsed: true }}>
        <SidebarMenu subheader="Subheader">Children</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should contain additional classnames", () => {
    const { container } = render(
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <SidebarMenu className="custom-class">Children</SidebarMenu>
      </SidebarContext.Provider>
    );

    expect(container.firstChild).toHaveClass("sidebar-menu");
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
