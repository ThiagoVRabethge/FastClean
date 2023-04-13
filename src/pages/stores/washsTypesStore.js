import { create } from 'zustand';

const useWashsTypesStore = create((set) => ({
  washsTypesList: [],
  setWashsTypesList: (newWashsTypesList) => set((state) => ({ washsTypesList: newWashsTypesList })),
}));

export default useWashsTypesStore;