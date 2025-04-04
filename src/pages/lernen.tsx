import { useEffect, useState } from "react";
import { Body } from "../components/body";
import { useQuestionState } from "../store/questionStore";
import { useCategoryState } from "../store/categoryStore";
import { useQuestions } from "@/services/useQuestions";

export function Lernen() {
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("API");
  const { data, error } = useQuestions(selectedCategoryName);
  const setQuestions = useQuestionState((state) => state.setQuestions);
  const categories = useCategoryState((state) => state.categories);

  if (error) {
    return <p>Error while loading Questions..</p>;
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setQuestions(data); 
    }
  }, [data, setQuestions]);

  const filteredQuestions = data || [];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-4 mt-4 text-center">
        <h1 className="text-3xl font-bold">Lernen</h1>
        <p>Hier kannst du Kategorien auswählen und lernen📚</p>
      </div>
      <div className="display flex justify-center">
      <select
        value={selectedCategoryName}
        onChange={(e) => setSelectedCategoryName(e.target.value)}
        className="mb-4 rounded-lg border p-2 "
      >
        {categories?.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      </div>
      <Body
        questionArr={filteredQuestions}
        selectedCategoryName={selectedCategoryName}
      />
    </div>
  );
}
