import { api } from ".."
import type Recipe from "../../types/Recipe"

export const recipeServices = {
  list: async (): Promise<Recipe[]> => {
    const response = await api.get('/recipes');
    return response.data.recipes
  },

  getRecipeById: async (id: string): Promise<Recipe> => {
    const response = await api.get(`/recipes/${id}`)
    return response.data;
  },

  searchRecipe: async (query: string): Promise<Recipe[]> => {
    const response = await api.get(`/recipes/search?q=${query}`)
    return response.data.recipes;
  },

  listTags: async (): Promise<string[]> => {
    const response = await api.get('/recipes/tags')
    return response.data;
  },

  getRecipesByTag: async (tag: string): Promise<Recipe[]> => {
    const response = await api.get(`/recipes/tag/${tag}`)
    return response.data;
  }

  // TODO: Setup add / delete methods
}