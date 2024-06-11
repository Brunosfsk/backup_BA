import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

const ordersBussines = async () => {
  const nameBussiness = "ativo"
  const r = await api.get('/get-orders', { params: { nameBussiness } })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response.data
    })
  console.log(r)
  return r
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