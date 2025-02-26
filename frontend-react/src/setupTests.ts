import { afterEach, vi } from "vitest";

import "@testing-library/jest-dom";

vi.mock("keycloak-js");
vi.mock("zustand");

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});
