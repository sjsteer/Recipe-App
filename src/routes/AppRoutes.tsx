import { Routes, Route } from "react-router-dom";
import RecipeView from "../pages/RecipeView"
import RecipeList from "../pages/RecipeList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes/:id" element={<RecipeView />} />
    </Routes>
  );
}