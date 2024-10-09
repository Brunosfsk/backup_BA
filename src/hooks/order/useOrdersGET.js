import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

const orders = async (data) => {
  try {
    const response = await api.get('/orders', { params: { active: true, ...data } })
    return response.data
  } catch (error) {
    return error.response.data
  }
}


export function useOrdersGET(data) {
  const queryKey = ['ordersGET', data ? JSON.stringify(data) : 'all'];
  const query = useQuery({
    queryFn: () => orders(data),
    queryKey,
    ...(data && { enabled: Boolean(Object.keys(data).length) }),
    refetchInterval: 1000 * 60 * 4,
    cacheTime: 1000 * 60 * 15,
    staleTime: 1000 * 60 * 8
  })

  return query
}