import { Category } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () =>
    useQuery<Category[]>({
      queryKey: ["categories"],
      queryFn: async (): Promise<Category[]> => {
        const response = await fetch("http://localhost:3000/categories");
        const data  = await response.json();
        return data
      },
    });