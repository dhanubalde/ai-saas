import { create } from "zustand"


interface useProModalStore { 
  isOpen: boolean;
  onOpen: () => void;
  onClosed: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClosed: () => set({ isOpen: false })
}))