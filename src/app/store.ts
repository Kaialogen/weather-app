import { create } from "zustand";

interface CityState {
  place: string;
  loadingCity: boolean;
  setPlace: (newPlace: string) => void;
  setLoadingCity: (isLoading: boolean) => void;
}

export const useCityStore = create<CityState>((set) => ({
  place: "London",
  loadingCity: false,

  setPlace: (newPlace) => set({ place: newPlace }),
  setLoadingCity: (isLoading) => set({ loadingCity: isLoading }),
}));
