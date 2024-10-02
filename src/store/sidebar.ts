import { create } from "zustand";

type SidebarStore = {
  is_open: boolean;
  toggle: () => void;
  close: () => void;
};

export const use_sidebar_store = create<SidebarStore>((set) => ({
  is_open: false,
  toggle: () => set((state) => ({ is_open: !state.is_open })),
  close: () => set({ is_open: false }),
}));
