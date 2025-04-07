import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import { CategoriesSelector } from "./pages/categories-selector";
import { Pruefung } from "./pages/pruefen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Body } from "./components/body";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <CategoriesSelector />,
      },
      {
        path: "/questions",
        element: <Body />,
      },
      {
        path: "/pruefen",
        element: <Pruefung />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
