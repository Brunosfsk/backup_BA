import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../services/api';

const order = async ({ id, ...data }) => {
  try {
    const response = await api.patch('/orders/' + id, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export function useOrderPATCH() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: order,
    onSuccess: () => {
      queryClient.invalidateQueries(['ordersGET']);
    },
  });

  return mutate;
}
