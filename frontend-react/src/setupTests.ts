import { afterEach, vi } from "vitest";

import "@testing-library/jest-dom";

vi.mock("zustand");

afterEach(() => {
  vi.clearAllMocks();
});
