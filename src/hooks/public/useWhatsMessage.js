
import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/api";

const whatsMessage = async ({ pedido }) => {
  const r = await api.post('/pedido', { pedido })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response.data
    })
  console.log(r);
  return r
};

export function useWhatsMessage() {
  const mutate = useMutation({
    mutationFn: whatsMessage,
  })
  return mutate
}
