import { useQuery } from "@tanstack/react-query";
import { Question } from "../types";

export const useQuestions = () =>
  useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: async (): Promise<Question[]> => {
      const response = await fetch("http://localhost:3000/questions");
      const data = await response.json();
      return data;
    },
  });
