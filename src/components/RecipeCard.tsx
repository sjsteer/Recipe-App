import { Link } from "react-router-dom";
import type Recipe from "src/types/Recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link to={{ pathname: `/recipes/${recipe.id}` }}>
        <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" draggable="false" />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{recipe.name}</h2>
        <div className="flex justify-start gap-2 *:bg-gray-200 *:p-1 *:rounded-sm">
          <p>{recipe.cuisine}</p>
          <p>{recipe.caloriesPerServing} cals</p>
          <p>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</p>
          <p>{recipe.difficulty}</p>
        </div>
      </div>
    </div>
  );
}