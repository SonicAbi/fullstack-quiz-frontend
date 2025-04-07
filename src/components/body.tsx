import { useCategoryStore } from "@/store/categoryStore";
import { Question } from "../types";
import { QuestionItem } from "./questions/question-item";
import { useQuestions } from "@/services/useQuestions";

type BodyProps = {
  questionArr: Question[] | undefined;
  selectedCategoryName: string;
};

export function Body() {
  const selectedCategoryName = useCategoryStore(
    (state) => state.selectedCategory,
  );
  const { data, error, isLoading } = useQuestions(selectedCategoryName);
  return (
    <div className="flex min-h-screen flex-col gap-6 p-4">
      {data &&
        data.map((question, index) => {
          if (question.categoryName === selectedCategoryName) {
            return (
              <QuestionItem
                answer={question.answer}
                question={question.question}
                code={question.code}
                key={index}
              />
            );
          }
        })}
    </div>
  );
}
