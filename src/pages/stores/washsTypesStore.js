import { create } from 'zustand';

export const useWashsTypesStore = create((set) => ({
  washsTypesList: [],
  setWashsTypesList: (newWashsTypesList) => set((state) => ({ washsTypesList: newWashsTypesList })),
}));