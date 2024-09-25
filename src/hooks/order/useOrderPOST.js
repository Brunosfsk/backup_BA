import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../services/api';

const addProduct = async (productData) => {
  try {
    const response = await api.post('/orders', productData);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return error.response.data
  }
};

export function useOrderPOST() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['ordersGET']);
    },
  });

  return mutate;
}