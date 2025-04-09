import { useCategories } from "@/services/useCategories";
import { useCategoryStore } from "@/store/categoryStore";
import { useNavigate } from "react-router-dom";

function CategorySkeleton() {
  return (
    <div className="flex h-20 w-full max-w-xs animate-pulse items-center justify-center rounded-xl bg-gray-200 sm:h-24 sm:w-56" />
  );
}

function ErrorMessage() {
  return (
    <div className="mt-10 text-center font-medium text-red-600">
      ❌ Beim Laden der Kategorien ist ein Fehler aufgetreten. Bitte versuche es
      später erneut.
    </div>
  );
}

export function CategoriesSelector() {
  const { data: categories, error, isLoading } = useCategories();
  const setCategory = useCategoryStore((state) => state.setCategory);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-4 mt-4 px-4 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Lernen</h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          Hier kannst du Kategorien auswählen und lernen📚
        </p>
      </div>

      <div className="mx-4 flex flex-col items-center space-y-4 pb-10 sm:flex-row sm:flex-wrap sm:justify-center sm:space-x-4 sm:space-y-2">
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}

        {error && <ErrorMessage />}

        {categories &&
          categories.map((category, index) => (
            <div
              key={index}
              className="flex h-20 w-full max-w-xs items-center justify-center rounded-xl bg-white/60 px-4 shadow-md backdrop-blur-md transition hover:scale-105 hover:bg-white/80 hover:shadow-lg sm:h-24 sm:w-56"
              onClick={() => {
                setCategory(category.name);
                navigate("/questions");
              }}
            >
              <h1 className="text-xl font-medium text-gray-800 sm:text-2xl">
                {category.name}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}
