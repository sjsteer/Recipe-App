import z from "zod";
import { api } from ".."
import type { Recipe } from "../../types/Recipe"
import { RecipeSchema } from "../../types/Recipe";

export const recipeServices = {
  list: async (): Promise<Recipe[]> => {
    const response = await api.get('/recipes');
    const recipes = z.array(RecipeSchema).parse(response.data.recipes)
    return recipes
  },

  getRecipeById: async (id: string): Promise<Recipe> => {
    const response = await api.get(`/recipes/${id}`)
    const recipe = RecipeSchema.parse(response.data);
    return recipe
  },

  searchRecipe: async (query: string): Promise<Recipe[]> => {
    const response = await api.get(`/recipes/search?q=${query}`)
    const recipes = z.array(RecipeSchema).parse(response.data.recipes)
    return recipes
  },

  listTags: async (): Promise<string[]> => {
    const response = await api.get('/recipes/tags')
    // TODO: setup proper tag schema
    const tags = z.array(z.string()).parse(response.data)
    return tags;
  },

  getRecipesByTag: async (tag: string): Promise<Recipe[]> => {
    const response = await api.get(`/recipes/tag/${tag}`)
    const recipes = z.array(RecipeSchema).parse(response.data.recipes)
    return recipes
  }

  // TODO: Setup add / delete methods
}