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
    <Card className="flex flex-col ">
      <CardHeader>
        <CardTitle className="flex ">
          <span>{question}</span>
        </CardTitle>
        <Button
          onClick={() => answerRef.current?.classList.toggle("hidden")}
          className="w-20 bg-blue-400 "
        >
          Antwort
        </Button>
      </CardHeader>
      <CardContent ref={answerRef} className="hidden">
        <div className="flex flex-col gap-3">
          <pre>{answer}</pre>
          {code && (
            <div>
              <h2 className="text-lg font-semibold">Code:</h2>
              <code  className="">{code}</code>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
