import React, { useEffect, useState } from "react";
import { Question } from "../types";
import { useQuestionSate } from "../services/questionStore";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function Pruefung() {
  const questions = useQuestionSate((state) => state.questions);
  const [randomQuestions, setRandomQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const getRandomQuestions = (questions: Question[], count: number) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    if (questions.length > 0) {
      const randomQuestions = getRandomQuestions(questions, 20);
      setRandomQuestions(randomQuestions);
    }
  }, [questions]);

  const handleAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    setAnswers({
      ...answers,
      [index]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Prüfung</h1>
        <p>
          Hier sind 20 Fragen aus verschiedenen Kategorien, um das Erlernte zu
          prüfen.📝
        </p>
      </div>
      {randomQuestions.length > 0 ? (
        <form onSubmit={(e) => e.preventDefault()}>
          {randomQuestions.map((question, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <CardTitle>Frage {index + 1}:</CardTitle>
                <CardDescription>{question.question}</CardDescription>
              </CardHeader>
              <CardContent>
                <input
                  placeholder="Antwort eingeben..."
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(e, index)}
                  className="w-full rounded-lg border p-2"
                />
              </CardContent>
              {submitted && (
                <CardFooter className="flex flex-col items-start space-y-2">
                  <span className="font-semibold">Deine Antwort:</span>{" "}
                  <pre className="whitespace-pre-wrap break-words w-full">
                    {answers[index] || "Keine Antwort"}{" "}
                  </pre>
                  <span className="font-semibold">Richtige Antwort:</span>{" "}
                  <pre className="whitespace-pre-wrap break-words text-green-600">
                    {question.answer}
                  </pre>
                </CardFooter>
              )}
            </Card>
          ))}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-lg bg-blue-500 px-6 py-2 text-white"
            >
              Absenden
            </button>
          </div>
        </form>
      ) : (
        <p className="text-gray-500">Keine Fragen verfügbar.</p>
      )}
    </div>
  );
}
