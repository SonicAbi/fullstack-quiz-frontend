import { Category } from "@/types";
import { create } from "zustand";

type CategoryState = {
  categories: Category[] | undefined;
};

type CategoryAction = {
  setCategories(newCategories: Category[] | undefined): void;
};

export const useCategoryState = create<CategoryState & CategoryAction>()(
  (set) => ({
    categories: [],
    setCategories(newCategories) {
      set({ categories: newCategories });
    },
  }),
);
