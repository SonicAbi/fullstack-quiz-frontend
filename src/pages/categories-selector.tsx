import { useCategories } from "@/services/useCategories";
import { useCategoryStore } from "@/store/categoryStore";
import { useNavigate } from "react-router-dom";

export function CategoriesSelector() {
  const { data: categories, error, isLoading } = useCategories();
  const setCategory = useCategoryStore((state) => state.setCategory);
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-4 mt-4 text-center">
        <h1 className="text-5xl font-bold">Lernen</h1>
        <p className="text-2xl">
          Hier kannst du Kategorien auswählen und lernen📚
        </p>
      </div>
      <div className="display mx-5 flex justify-center space-x-5">
        {categories &&
          categories.map((category, index) => (
            <div
              key={index}
              className="flex h-24 w-56 items-center justify-center rounded-xl bg-gray-300 hover:cursor-pointer"
              onClick={() => {
                setCategory(category.name);
                navigate("/questions");
              }}
            >
              <h1 className="text-3xl">{category.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
