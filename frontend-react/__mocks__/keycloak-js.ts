import { vi } from "vitest";

class KeycloakMock {
  init = vi.fn().mockResolvedValue(true);
  login = vi.fn().mockResolvedValue(undefined);
  logout = vi.fn().mockResolvedValue(undefined);
  token?: string;
  tokenParsed?: { preferred_username: string };
}

export default KeycloakMock;
