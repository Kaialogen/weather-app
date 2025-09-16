import { create } from "zustand";

export const useCityStore = create((set) => ({
  place: "London",
  loadingCity: false,

  setPlace: (newPlace) => set({ place: newPlace }),
  setLoadingCity: (isLoading) => set({ loadingCity: isLoading }),
}));
