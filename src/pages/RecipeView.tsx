import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recipeServices } from "../api/recipes";
import type Recipe from "../types/Recipe";
import { userServices } from "../api/users";
import type User from "../types/User";

export default function RecipeView() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState<Recipe>();
  useEffect(() => {
    recipeServices
      .getRecipeById(id || '1')
      .then(setRecipe)
  }, [id])

  const [author, setAuthor] = useState<User>();
  useEffect(() => {
    if (recipe?.userId) {
      userServices
        .getUserById(recipe.userId)
        .then(setAuthor)
    }
  }, [recipe?.userId])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {recipe ? (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{recipe.cuisine} • {recipe.difficulty}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Prep Time</p>
                    <p className="text-2xl font-semibold">{recipe.prepTimeMinutes}m</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cook Time</p>
                    <p className="text-2xl font-semibold">{recipe.cookTimeMinutes}m</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Servings</p>
                    <p className="text-2xl font-semibold">{recipe.servings}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Calories</p>
                    <p className="text-2xl font-semibold">{recipe.caloriesPerServing}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-semibold text-blue-500 min-w-6">{i + 1}.</span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Author</p>
                  <p className="text-2xl font-bold">{author?.firstName} {author?.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="text-2xl font-bold">{recipe.rating} ★ ({recipe.reviewCount} reviews)</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-96">
            <p className="text-gray-500">Loading recipe...</p>
          </div>
        )}
      </div>
    </div>
  );
}