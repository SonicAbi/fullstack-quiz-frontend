import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Question } from "../types";
import { API_URL } from "@/constants";

export const useRandomQuestions = () =>
  useQuery<Question[]>({
    queryKey: ["randomQuestions"],
    queryFn: () => getQuestions(),
});

const getQuestions = async () => {
  const response = await fetch(
    `${API_URL}/questions/random`,
  );
  const json: ApiResponse<Question[]> = await response.json();
  if ("error" in json) {
    throw new Error(json.error);
  }
  return json.data;
};
