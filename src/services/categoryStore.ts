import { create } from "zustand";

type CategoryState = {
  categories: string[];
};

type CategoryFunction = {
  addCategory(category: string): void;
};

export const useCategorySate = create<CategoryState & CategoryFunction>()(
  (set, get) => ({
    categories: [],
    addCategory(newCategory) {
      const categories = get().categories;
      const doesntExist = !categories.includes(newCategory);
      if (doesntExist) {
        set({ categories: [...categories, newCategory] });
      }
    },
  }),
);
