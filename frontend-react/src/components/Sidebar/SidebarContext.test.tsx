import { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";

import { SidebarContext, useSidebar } from "./SidebarContext";

describe("useSidebar", () => {
  it("should throw an error when used outside of SidebarContext", () => {
    expect(() => renderHook(() => useSidebar()).result.current).toThrow("useSidebar must be used within a Sidebar");
  });

  it("should return context value when used inside SidebarContext", () => {
    const wrapper = ({ children }: { children: ReactNode }) => <SidebarContext.Provider value={{ isCollapsed: true }}>{children}</SidebarContext.Provider>;

    const { result } = renderHook(() => useSidebar(), { wrapper });

    expect(result.current.isCollapsed).toBe(true);
  });
});
