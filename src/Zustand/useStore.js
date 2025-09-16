import { create } from "zustand";
import axios from "axios";
import data from "../../data.json";

const useStore = create((set) => ({
  countries: [],
  country: null,
  fetchCountries: async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      set({ countries: res.data });
    } catch (error) {
      console.error("API failed, using local data.json:", error);
      set({ countries: data });
    }
  },
  fetchCountryByCode: async (code) => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      set({ country: res.data[0] });
    } catch (error) {
      console.error("API failed, using local data.json:", error);
      const fallback = data.find(
        (c) => c.alpha3Code === code || c.cca3 === code
      );
      set({ country: fallback || null });
    }
  },
  setCountry: (country) => set({ country }),
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));

export default useStore;
