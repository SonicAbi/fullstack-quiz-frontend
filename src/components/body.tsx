import { useCategoryStore } from "@/store/categoryStore";
import { QuestionItem } from "./questions/question-item";
import { useQuestions } from "@/services/useQuestions";

function QuestionSkeleton() {
  return <div className="h-40 w-full animate-pulse rounded-xl bg-gray-200" />;
}

function ErrorMessage() {
  return (
    <div className="mt-10 text-center font-medium text-red-600">
      ❌ Beim Laden der Fragen ist ein Fehler aufgetreten.
    </div>
  );
}

export function Body() {
  const selectedCategoryName = useCategoryStore(
    (state) => state.selectedCategory,
  );
  const { data, error, isLoading } = useQuestions(selectedCategoryName);

  return (
    <div className="flex min-h-screen flex-col gap-6 p-4">
      {isLoading &&
        Array.from({ length: 4 }).map((_, index) => (
          <QuestionSkeleton key={index} />
        ))}

      {error && <ErrorMessage />}

      {data &&
        data.map((question, index) => (
          <QuestionItem
            key={index}
            answer={question.answer}
            question={question.question}
            code={question.code}
          />
        ))}
    </div>
  );
}
