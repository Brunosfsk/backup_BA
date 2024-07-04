import { useQuery } from "@tanstack/react-query";
import localStorageManager from "../../services/localStorageManager";
import { api } from "../../services/api";

const Prospects = async () => {
  const name_bussiness = localStorageManager.businessName();
  const r = await api.get('/get-prospects', { params: { data } })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response.data
    })
  return r
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