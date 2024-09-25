import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

const business = async (nameBussiness) => {
  try {
    const response = await api.get(`/business/${nameBussiness}`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}


export function useBusinessGET(nameBussiness) {
  const query = useQuery({
    queryFn: () => business(nameBussiness),
    enabled: !!nameBussiness,
    queryKey: ['businessGET'],
  })

  return query
}