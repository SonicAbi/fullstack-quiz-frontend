import { create } from "zustand";
import { Question } from "../types";

type QuestionState = {
  questions: Question[];
};

type QuestionFunction = {
  setQuestions(newQuestions: Question[]): void;
};

export const useQuestionSate = create<QuestionState & QuestionFunction>()(
  (set) => ({
    questions: [],
    setQuestions(newQuestions) {
      set({ questions: newQuestions });
    },
  }),
);
