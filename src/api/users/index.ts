import z from 'zod';
import { api } from '..'
import type { User } from '../../types/User';
import { UserSchema } from '../../types/User';

export const userServices = {
  list: async (): Promise<User[]> => {
    const response = await api.get('/users');
    const users = z.array(UserSchema).parse(response.data.users)
    return users
  },

  getUserById: async (id: string): Promise<User> => {
    const response = await api.get(`/users/${id}`)
    const user = UserSchema.parse(response.data);
    return user;
  },
}