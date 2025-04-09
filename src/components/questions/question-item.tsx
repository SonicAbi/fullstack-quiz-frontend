import { useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type QuestionItemProps = {
  question: string;
  answer: string;
  code?: string;
};

export function QuestionItem({ question, answer, code }: QuestionItemProps) {
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="flex max-w-full flex-col overflow-hidden">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="break-words text-xl">{question}</CardTitle>
        <div className="flex justify-end">
          <Button
            onClick={() => answerRef.current?.classList.toggle("hidden")}
            className="bg-blue-400"
          >
            Antwort
          </Button>
        </div>
      </CardHeader>
      <CardContent ref={answerRef} className="hidden">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-green-100 p-4">
            <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              Lösung:
            </h2>
            <p className="whitespace-pre-wrap break-words text-base">
              {answer}
            </p>
          </div>

          {code && (
            <div className="overflow-x-auto rounded-md bg-gray-800 p-4 text-sm text-white">
              <h2 className="mb-2 font-semibold text-green-300">
                💻 Code-Beispiel:
              </h2>
              <code className="block whitespace-pre break-words">{code}</code>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
