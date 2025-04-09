import { QuestionItem } from "@/components/questions/question-item";
import { useRandomQuestions } from "@/services/useRandomQuestions";

export function QuizPage() {
  const { data: randomQuestions, error, isLoading } = useRandomQuestions();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Prüfung</h1>
          <p className="mt-2 text-lg text-gray-600">
            Hier sind 30 Fragen aus verschiedenen Kategorien, um das Erlernte zu
            prüfen. 📝
          </p>
        </div>

        {isLoading && (
          <p className="text-center text-gray-500">Fragen werden geladen...</p>
        )}
        {error && (
          <p className="text-center text-red-500">
            Es ist ein Fehler beim Laden aufgetreten.
          </p>
        )}
        <div className="space-y-6">
          {randomQuestions &&
            randomQuestions.map((question, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  {question.categoryName}
                </p>
                <QuestionItem
                  question={question.question}
                  answer={question.answer}
                  code={question.code}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
