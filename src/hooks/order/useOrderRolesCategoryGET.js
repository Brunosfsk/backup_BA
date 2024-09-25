import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

const roles = async () => {
  try {
    const response = await api.get('/orders/roles.category')
    return response.data
  } catch (error) {
    return error.response.data
  }
}


export function useOrderRolesCategoryGET() {
  const query = useQuery({
    queryFn: roles,
    queryKey: ['urderRolesCategoryGET'],
  })

  return query
}