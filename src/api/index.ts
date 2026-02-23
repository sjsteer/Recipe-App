import axios, { AxiosError, type AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => { return Promise.reject(error) }
)