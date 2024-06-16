import axios from "axios";

export const api = new axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
})