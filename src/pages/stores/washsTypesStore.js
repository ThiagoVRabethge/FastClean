import { create } from 'zustand';

const test = () => {};
export default test;

export const useWashsTypesStore = create((set) => ({
  washsTypesList: [],
  setWashsTypesList: (newWashsTypesList) => set((state) => ({ washsTypesList: newWashsTypesList })),
}));