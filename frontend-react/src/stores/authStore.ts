import { create } from "zustand";

type User = { name: string } | null;

type AuthState = {
  user: User;
  login: (username: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: (username) => {
    set({ user: { name: username } });
  },

  logout: () => {
    set({ user: null });
  },
}));
