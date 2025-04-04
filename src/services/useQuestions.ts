import { useQuery } from "@tanstack/react-query";
import { Question } from "../types";

export const useQuestions = (category: string) =>
  useQuery<Question[]>({
    queryKey: ["questions", category],
    queryFn: async (): Promise<Question[]> => {
      const response = await fetch(
        `http://localhost:3000/questions?category=${category}`,
      );
      const data = await response.json();
      return data;
    },
  });
