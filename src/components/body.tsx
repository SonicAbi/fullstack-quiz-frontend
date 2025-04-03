import { Question } from "../types";
import { QuestionItem } from "./questions/question-item";

type BodyProps = {
  questionArr: Question[];
  selectedCategory: string;
};

export function Body({ questionArr, selectedCategory }: BodyProps) {
  return (
    <div className="flex min-h-screen flex-col gap-6 p-4">
      {questionArr.map((question, index) => {
        if (question.category === selectedCategory) {
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
