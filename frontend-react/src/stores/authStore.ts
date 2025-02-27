import { create } from "zustand";

import { keycloak, keycloakInitOptions } from "@/libs/keycloak";

type User = { name: string; token: string } | null;

type AuthState = {
  user: User;
  init: () => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  init: async () => {
    const authenticated = await keycloak.init(keycloakInitOptions);

    if (authenticated) {
      set({
        user: {
          name: keycloak.tokenParsed?.preferred_username,
          token: keycloak.token ?? "",
        },
      });
    }
  },

  login: async () => {
    await keycloak.login({ redirectUri: window.location.origin });
  },

  logout: async () => {
    await keycloak.logout();
  },
}));
