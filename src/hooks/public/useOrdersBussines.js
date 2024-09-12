import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import localStorageManager from "../../services/localStorageManager";

const ordersBussines = async () => {
  const nameBussiness = localStorageManager.getItem('@Business:name')

  try {
    const response = await api.get('/orders', { params: { nameBussiness } })
    return response.data
  } catch (error) {
    return error.response.data
  }
}


export function useOrdersBussines() {
  const query = useQuery({
    queryFn: ordersBussines,
    queryKey: ['ordersBussines'],
    refetchInterval: 1000 * 60 * 4,
    cacheTime: 1000 * 60 * 15,
    staleTime: 1000 * 60 * 8
  })

  return query
}