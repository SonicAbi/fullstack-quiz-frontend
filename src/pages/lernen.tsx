import { useEffect, useState } from "react";
import { Body } from "../components/body";
import { useQuestionSate } from "../services/questionStore";
import { useCategorySate } from "../services/categoryStore";

export function Lernen() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const questions = useQuestionSate((state) => state.questions);
  const categories = useCategorySate((state) => state.categories);

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-100">
        <div className="mb-4 mt-4 text-center">
        <h1 className=" text-3xl font-bold">Lernen</h1>
        <p>Hier kannst du Kategorien auswählen und lernen📚</p>
        </div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-4 rounded-lg border p-2"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <Body questionArr={questions} selectedCategory={selectedCategory} />
    </div>
  );
}
