import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Question } from "../types";


export const useQuestions = (category: string | undefined) =>
  useQuery<Question[]>({
    queryKey: ["questions", category],
    queryFn: () => getQuestions(category),
  });

const getQuestions = async (category: string | undefined) => {
  const response = await fetch(
    `http://localhost:3000/questions?category=${category}`,
  );
  const json: ApiResponse<Question[]> = await response.json();
  if ("error" in json) {
    throw new Error(json.error);
  }
  return json.data;
};
