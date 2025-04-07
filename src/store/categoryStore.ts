import { create } from "zustand";

type CategoryStore = {
  selectedCategory: string | undefined;
  setCategory: (category: string) => void;
};

export const useCategoryStore = create<CategoryStore>()((set) => ({
  selectedCategory: "API",
  setCategory: (category: string) => {
    set(() => ({
      selectedCategory: category,
    }));
  },
}));
