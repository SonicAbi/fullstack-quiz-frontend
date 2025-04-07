import { ApiResponse, Category } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

const getCategories = async () => {
  const response = await fetch("http://localhost:3000/categories");
  const json: ApiResponse<Category[]> = await response.json();
  if ("error" in json) {
    throw new Error(json.error);
  }
  return json.data;
};
