import { api } from '..'
import type User from '../../types/User';

export const userServices = {
  list: async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data.recipes
  },

  getUserById: async (id: string): Promise<User> => {
    const response = await api.get(`/users/${id}`)
    return response.data;
  },
}