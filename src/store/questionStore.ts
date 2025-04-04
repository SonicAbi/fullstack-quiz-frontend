import { create } from "zustand";
import { Question } from "../types";

type QuestionState = {
  questions: Question[] | undefined;
};

type QuestionFunction = {
  setQuestions(newQuestions: Question[] | undefined): void;
};

export const useQuestionState = create<QuestionState & QuestionFunction>()(
  (set) => ({
    questions: [],
    setQuestions(newQuestions) {
      set({ questions: newQuestions });
    },
  }),
);
