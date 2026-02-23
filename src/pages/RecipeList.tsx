import { useEffect, useState } from "react";
import { recipeServices } from "../api/recipes";
import type Recipe from "../types/Recipe"
import RecipeCard from "../components/RecipeCard";

export default function RecipeList() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    recipeServices
      .list()
      .then(setRecipes)
  }, [])

  return (
    <div className="min-h-screen from-orange-50 to-amber-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Recipes</h1>
        <p className="text-gray-600 mb-8">Explore our collection of delicious recipes</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          })}
        </div>
      </div>
    </div>
  );
}