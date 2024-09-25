import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

const Prospects = async (data) => {
  try {
    const response = await api.get('/get-prospects', { params: { data } })
    return response.data
  } catch (error) {
    return error
  }
}


export function useProspects() {
  const query = useQuery({
    queryFn: Prospects,
    queryKey: ['Prospects'],
    refetchInterval: 1000 * 60 * 4,
    cacheTime: 1000 * 60 * 15,
    staleTime: 1000 * 60 * 8
  })

  return query
}