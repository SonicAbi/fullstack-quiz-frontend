import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Question } from "../types";

export const useRandomQuestions = () =>
  useQuery<Question[]>({
    queryKey: ["randomQuestions"],
    queryFn: () => getQuestions(),
});

const getQuestions = async () => {
  const response = await fetch(
    `http://localhost:3000/questions/random`,
  );
  const json: ApiResponse<Question[]> = await response.json();
  if ("error" in json) {
    throw new Error(json.error);
  }
  return json.data;
};
