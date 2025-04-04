import { Navbar } from "./components/navbar";
import { Outlet } from "react-router-dom";
import { useCategories } from "./services/useCategories";
import { useCategoryState } from "./store/categoryStore";

import { useEffect } from "react";

export default function App() {
  const { data: categories } = useCategories();


  const setCategories = useCategoryState((state) => state.setCategories);


  useEffect(() => {
    if (categories) {
      setCategories(categories);
    }
  
  }, [categories, setCategories]);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet />
    </div>
  );
}
