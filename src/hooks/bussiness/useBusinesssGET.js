import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

const businesss = async () => {
  try {
    const response = await api.get("/business")
    return response.data
  } catch (error) {
    throw error.response.data
  }
}


export function useBusinesssGET() {
  const query = useQuery({
    queryFn: businesss,
    queryKey: ['businesssGET'],
  })

  return query
}